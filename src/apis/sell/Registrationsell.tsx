import { API } from "@/apis/common/CommonApi";

/* 판매글 등록 */
export const CreateUsedBook = async ({
  fileList,
  usedBook,
}: {
  usedBook: {
    college: string;
    isDiscolorationAndDamage: Boolean;
    price: number;
    name: string;
    publisher: string;
    department: string;
    isUnderlinedOrWrite: Boolean;
    isCoverDamaged: Boolean;
    tradeAvailableDatetime: string;
  };
  fileList: File[];
}) => {
  const accessToken = localStorage.getItem("accessToken");

  const formData = new FormData();

  formData.append(
    "usedBook",
    new Blob([JSON.stringify(usedBook)], {
      type: "application/json",
    }),
  );

  fileList.forEach(file => {
    formData.append("fileList", file);
  });

  try {
    const response = await API.post("/api/v1/used-book", formData);

    const { usedBookId } = response.data;

    if (usedBookId) {
      window.location.href = `/forsale/${usedBookId}`;
      // window.location.href = `/`;
    }
  } catch (error) {
    console.error(error);
  }
};

/* 판매글 수정 */
export const UpdateUsedBook = async ({
  fileList,
  usedBook,
  id,
}: {
  usedBook: {
    college: string;
    isDiscolorationAndDamage: Boolean;
    price: number;
    name: string;
    publisher: string;
    department: string;
    isUnderlinedOrWrite: Boolean;
    isCoverDamaged: Boolean;
    tradeAvailableDatetime: string;
  };
  fileList: File[];
  id: string | string[] | undefined;
}) => {
  const accessToken = localStorage.getItem("accessToken");

  const formData = new FormData();

  formData.append(
    "usedBook",
    new Blob([JSON.stringify(usedBook)], {
      type: "application/json",
    }),
  );

  fileList.forEach(file => {
    formData.append("fileList", file);
  });

  try {
    const response = await API.post(`/api/v1/used-book/${id}`, formData);

    const { usedBookId } = response.data;

    if (usedBookId) {
      // window.location.href = `/forsale/${usedBookId}`;
      window.location.href = `/`;
    }
  } catch (error) {
    console.error(error);
  }
};
