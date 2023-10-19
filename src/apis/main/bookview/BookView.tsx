import axios from "axios";

/* 게시글 상세보기 */
export const UsedBookView = ({ usedBookId }: { usedBookId: number }) =>
  axios
    .get(`/api/v1/used-book/${usedBookId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
    .then(response => response.data)

    .catch(error => {
      console.log("상세페이지 조회 실패:", error.response.data);
      throw error;
    });

/* 게시글 삭제 */
export const UsedBookDelete = ({ usedBookId }: { usedBookId: number }) =>
  axios
    .delete(`/api/v1/used-book/${usedBookId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log("삭제 실패: ", error.response.data);
      throw error;
    });

/* 게시글 수정 */

/* 게시글 수정 -> 이미지 삭제 */
export const UsedBookImageDelete = ({
  usedBookId,
  imageName,
}: {
  usedBookId: number;
  imageName: string;
}) =>
  axios
    .delete(`/api/v1/used-book/${usedBookId}/image/${imageName}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log("삭제 실패: ", error.response.data);
      throw error;
    });
