import axios from "axios";

/* 판매글 등록 */
export const CreateUsedBook = async ({
  fileList,
  usedBook,
}: {
  usedBook: {
    college: string;
    isDiscolorationAndDamage: Boolean;
    price: number;
    name: string;
    publisher: string;
    department: string;
    isUnderlinedOrWrite: Boolean;
    isCoverDamaged: Boolean;
    tradeAvailableDatetime: string;
  };
  fileList: File[];
}) => {
  const accessToken = sessionStorage.getItem("accessToken");

  const formData = new FormData();

  formData.append(
    "usedBook",
    new Blob([JSON.stringify(usedBook)], {
      type: "application/json",
    }),
  );

  fileList.forEach(file => {
    formData.append("fileList", file);
  });

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.post("/api/v1/used-book", formData, {
      headers,
    });

    const { usedBookId } = response.data;

    if (usedBookId) {
      // window.location.href = `/forsale/${usedBookId}`;
      window.location.href = `/`;
    }
  } catch (error) {
    console.error(error);
  }
};
