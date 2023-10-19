import axios from "axios";

export const getPurchaseUsedBookList = async () =>
  axios
    .get(`/api/v1/my-pages/book-purchase-detail-list?bookStatus=SOLD`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });
export const getSalesUsedBookList = async (canBuy: boolean) =>
  axios
    .get("/api/v1/my-pages/book-sales-detail-list", {
      params: { canBuy },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });
