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
