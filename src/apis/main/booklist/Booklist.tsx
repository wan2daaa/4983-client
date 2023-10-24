import { API } from "@/apis/common/CommonApi";

export const fetchUsedBookList = (isOrderByTradeAvailableDatetime: boolean) =>
  API.get(
    `/api/v1/used-book-list?isOrderByTradeAvailableDatetime=${isOrderByTradeAvailableDatetime}`,
    {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    },
  )
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
    });

export const fetchUsedBookCollegeOrDepartment = (
  isOrderByTradeAvailableDatetime: boolean,
  college: string,
  department: string,
) =>
  API.get(
    `/api/v1/used-book-list/college-and-department?isOrderByTradeAvailableDatetime=${isOrderByTradeAvailableDatetime}&department=${department}&college=${college}`,
    {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    },
  )
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });

export const searchUsedBookList = async (
  isOrderByTradeAvailableDatetime: boolean,
  searchKeyword: string,
) => {
  try {
    const response = await API.get("/api/v1/used-book-list/search", {
      params: {
        isOrderByTradeAvailableDatetime,
        searchKeyword,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
