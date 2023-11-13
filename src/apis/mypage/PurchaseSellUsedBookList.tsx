import { API } from "@/apis/common/CommonApi";

export const getPurchaseUsedBookList = async () =>
  API.get(`/api/v1/my-pages/book-purchase-detail-list?bookStatus=SOLD`)
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });
export const getSalesUsedBookList = async (canBuy: boolean) =>
  API.get("/api/v1/my-pages/book-sales-detail-list", {
    params: { canBuy },
  })
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });
