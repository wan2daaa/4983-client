import axios from "axios";

export const fetchUsedBookList = (isOrderByTradeAvailableDatetime: boolean) =>
  axios
    .get(
      `/api/v1/used-book-list?isOrderByTradeAvailableDatetime=${isOrderByTradeAvailableDatetime}`,
      {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
      },
    )
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });

export const fetchUsedBookCollegeOrDepartment = (
  isOrderByTradeAvailableDatetime: boolean,
  college: string,
  department: string,
) =>
  axios
    .get(
      `/api/v1/used-book-list/college-and-department?isOrderByTradeAvailableDatetime=${isOrderByTradeAvailableDatetime}&department=${department}&college=${college}`,
      {
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
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
    const response = await axios.get("/api/v1/used-book-list/search", {
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
