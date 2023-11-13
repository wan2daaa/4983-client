import { API } from "@/apis/common/CommonApi";

/* 게시글 상세보기 */
export const UsedBookView = ({ usedBookId }: { usedBookId: number }) =>
  API.get(`/api/v1/used-book/${usedBookId}`)
    .then(response => response.data)

    .catch(error => {
      console.log("상세페이지 조회 실패:", error.response.data);
      throw error;
    });

/* 게시글 삭제 */
export const UsedBookDelete = ({ usedBookId }: { usedBookId: number }) =>
  API.delete(`/api/v1/used-book/${usedBookId}`)
    .then(response => response.data)
    .catch(error => {
      console.log("삭제 실패: ", error.response.data);
      throw error;
    });

/* 게시글 수정 -> 이미지 삭제 */
export const UsedBookImageDelete = ({
  usedBookId,
  imageName,
}: {
  usedBookId: number;
  imageName: string;
}) =>
  API.delete(`/api/v1/used-book/${usedBookId}/image/${imageName}`)
    .then(response => response.data)
    .catch(error => {
      console.log("삭제 실패: ", error.response.data);
      throw error;
    });
