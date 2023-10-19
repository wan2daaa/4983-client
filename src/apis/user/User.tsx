import axios from "axios";

/* 마이페이지 판매내역 List */
export const getSalesHistoryList = (canBuy: boolean) =>
  axios
    .get(`/api/v1/my-pages/book-sales-detail-list?canBuy=${canBuy}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });

/* 마이페이지 구매내역 List */
export const PurchaseHistoryList = (canBuy: boolean) =>
  axios
    .get(`/api/v1/my-pages/book-sales-detail-list?canBuy=${canBuy}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessToken"),
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log("실패:", error.response.data);
      throw error;
    });

/* 로그아웃 */
export const UserLogout = () => {
  axios
    .get(`/api/v1/logout`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
    .then(response => {
      console.log("로그아웃 성공: ", response.data);
      sessionStorage.removeItem("accessToken");
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
  axios
    .patch(
      "/api/v1/withdraw",
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      },
    )
    .then(response => {
      console.log("탈퇴 성공: ", response.data);
      sessionStorage.removeItem("accessToken");
      window.location.href = `/signin`;
      return response.data;
    })
    .catch(error => {
      console.log("탈퇴 실패: ", error.response.data);
      throw error;
    });
};
