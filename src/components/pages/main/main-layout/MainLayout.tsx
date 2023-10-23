import Link from "next/link";
import { useEffect, useState } from "react";
import * as style from "@/components/pages/main/main-layout/MainLayout.style";
import BottomBar from "@/components/common/bottom-bar/BottomBar";
import MainCheckBox from "@/components/pages/main/main-check-box/MainCheckBox";
import MainContents from "@/components/pages/main/main-contents/MainContents";
import MainSellButton from "@/components/pages/main/main-sell-button/MainSellButton";
import {
  fetchUsedBookCollegeOrDepartment,
  fetchUsedBookList,
} from "@/apis/main/booklist/Booklist";
import MainFilterButton from "@/components/pages/main/main-filter-button/MainFilterButton";
import { Categories } from "@/data/Categories";

type FilterButtonType = {
  key: number;
  filter: string;
  param: string;
};

interface Book {
  imageUrl: string;
  bookStatus: string;
  name: string;
  tradeAvailableDatetime: string;
  createdAt: string;
  price: number;
  usedBookId: number;
}

const MainLayout = () => {
  const [usedBooks, setUsedBooks] = useState<Book[]>([]);

  const [isChecked, setIsChecked] = useState(false);

  const [filterOptions, setFilterOptions] = useState<FilterButtonType[]>([]);

  const [paramCollege, setParamCollege] = useState("");
  const [paramDepartment, setParamDepartment] = useState("");

  useEffect(() => {
    let collegeIdList: number[] = [];
    let departmentIdList: number[] = [];

    const localStorageCollegeIdList = localStorage.getItem("category-college");
    if (localStorageCollegeIdList) {
      collegeIdList = JSON.parse(localStorageCollegeIdList);
    }

    const localStorageDepartmentIdList = localStorage.getItem(
      "category-department",
    );
    if (localStorageDepartmentIdList) {
      departmentIdList = JSON.parse(localStorageDepartmentIdList);
    }

    const newFilterOptions = [...filterOptions];

    Categories.forEach(({ id, name, value }) => {
      if (
        collegeIdList.includes(id) &&
        !newFilterOptions.some(option => option.key === id)
      ) {
        newFilterOptions.push({
          key: id,
          filter: name,
          param: value,
        });
      }
    });

    Categories.forEach(category => {
      category.children.forEach(({ id, name, value }) => {
        if (
          departmentIdList.includes(id) &&
          !newFilterOptions.some(option => option.key === id)
        ) {
          newFilterOptions.push({
            key: id,
            filter: name,
            param: value,
          });
        }
      });
    });

    setFilterOptions(newFilterOptions);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (paramCollege === "" && paramDepartment === "") {
        data = await fetchUsedBookList(isChecked);
      } else {
        data = await fetchUsedBookCollegeOrDepartment(
          isChecked,
          paramCollege,
          paramDepartment,
        );
      }
      setUsedBooks(data);
    };

    fetchData();
  }, [isChecked, paramCollege, paramDepartment]);
  return (
    <style.Div>
      <style.TopDiv>
        <style.TitleDiv>
          <style.TitleA>중고 서적 거래</style.TitleA>
          <Link href="/search">
            <style.MainTopSearchButton />
          </Link>
        </style.TitleDiv>
        <MainFilterButton
          filterOptions={filterOptions}
          setParamCollege={setParamCollege}
          setParamDepartment={setParamDepartment}
        />
        <style.MiddleDiv>
          <MainCheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
          <style.MiddleA
            onClick={() => {
              setIsChecked(prevChecked => !prevChecked);
            }}
          >
            빠른 거래 날짜순으로 보기
          </style.MiddleA>
        </style.MiddleDiv>
      </style.TopDiv>
      <style.ContentDiv>
        {usedBooks.map((book, index) => (
          <MainContents key={index.toString()} book={book} />
        ))}
      </style.ContentDiv>
      <MainSellButton />
      <BottomBar />
    </style.Div>
  );
};
export default MainLayout;
