import { API } from "@/apis/common/CommonApi";

/* 마이페이지 판매내역 List */
export const getSalesHistoryList = (canBuy: boolean) =>
  API.get(`/api/v1/my-pages/book-sales-detail-list?canBuy=${canBuy}`, {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  })
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });

/* 마이페이지 구매내역 List */
export const PurchaseHistoryList = (canBuy: boolean) =>
  API.get(`/api/v1/my-pages/book-sales-detail-list?canBuy=${canBuy}`, {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  })
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });

/* 로그아웃 */
export const UserLogout = () => {
  API.get(`/api/v1/logout`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then(response => {
      console.log("로그아웃 성공: ", response.data);
      localStorage.removeItem("accessToken");
      window.location.href = `/signin`;
      return response.data;
    })
    .catch(error => {
      console.log("로그아웃 실패: ", error.response.data);
      throw error;
    });
};

/* 화원 탈퇴 */
export const UserSecede = () => {
  API.patch(
    "/api/v1/withdraw",
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    },
  )
    .then(response => {
      console.log("탈퇴 성공: ", response.data);
      localStorage.removeItem("accessToken");
      window.location.href = `/signin`;
      return response.data;
    })
    .catch(error => {
      console.log("탈퇴 실패: ", error.response.data);
      throw error;
    });
};
