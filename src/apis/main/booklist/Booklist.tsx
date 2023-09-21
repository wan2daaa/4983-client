import axios from "axios";

export const fetchUsedBookList = (canBuyElseAll: boolean) =>
  axios
    .get(`/api/used-book-list?canBuyElseAll=${canBuyElseAll}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });
