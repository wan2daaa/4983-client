import axios from "axios";

const uploadUsedBook = async (
  accessToken: string,
  fileList: File[],
  usedBook: any,
) => {
  const formData = new FormData();

  fileList.forEach(file => {
    formData.append("fileList", file);
  });

  formData.append("usedBook", JSON.stringify(usedBook));

  try {
    const response = await axios.post("/api/v1/used-book", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to upload used book.");
  }
};

export default uploadUsedBook;
