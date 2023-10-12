import { v4 } from "uuid";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { fileListState } from "@/recoil/atoms/CreateUsedBookAtoms";
import * as style from "@/components/pages/selling/edit/edit-photo-upload/EditPhotoUpload.style";
import "swiper/css";
import { UsedBookImageDelete } from "@/apis/main/bookview/BookView";

interface BookEditProps {
  bookImageList: string[];
}

const EditPhotoUpload = ({ bookImageList }: BookEditProps) => {
  const router = useRouter();
  const { usedBookId } = router.query;
  const swiperParams = {
    loop: false,
    slidesPerView: 1.1,
    spaceBetween: 1,
  };
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [, setFileList] = useRecoilState<File[]>(fileListState);

  const [fileNameList, setFileNameList] = useState<string[]>(bookImageList);
  const maxUploads = 10;

  const [recentFileCount, setRecentFileCount] = useState(bookImageList.length);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles: File[] = [];

    if (e.target.files && e.target.files.length <= 10 - recentFileCount) {
      const count = recentFileCount + e.target.files.length;
      console.log("count >>>>>>>>", count);

      for (let i = 0; i < e.target.files.length; i += 1) {
        const file = e.target.files[i];
        const formData = new FormData();
        formData.append("fileList", file);
        setFileList(prevFileList => [...prevFileList, file]);
        newFiles.push(file);
      }
      setRecentFileCount(count);
      setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
    } else if (e.target.files && e.target.files.length > 10 - recentFileCount) {
      console.error("저장 안됨");
    }
  };

  const handleRemoveFile = (file: File) => {
    const afterFileCount = recentFileCount - 1;
    if (afterFileCount > 0) {
      setSelectedFiles(prevFiles =>
        prevFiles.filter(prevFile => prevFile !== file),
      );
      setRecentFileCount(afterFileCount);
    } else {
      console.error("한개 이상 삭제할 수 없습니다.");
    }
  };

  const handleRemoveBookImageEdit = (image: string) => {
    const afterFileCount = recentFileCount - 1;

    if (afterFileCount > 0) {
      let newFileNameList = [...fileNameList];
      const parts = image.split(
        "https://4983-s3.s3.ap-northeast-2.amazonaws.com/",
      );
      if (parts.length === 2) {
        const imageName = parts[1];
        UsedBookImageDelete({ usedBookId: Number(usedBookId), imageName })
          .then(response => {
            console.log("이미지 삭제 성공", response);
          })
          .catch(error => {
            console.log("이미지 삭제 실패: ", error);
          });
      }
      newFileNameList = newFileNameList.filter(fileName => fileName !== image);
      setFileNameList(newFileNameList);
      setRecentFileCount(afterFileCount);
    } else {
      console.error("한개 이상 삭제할 수 없습니다.");
    }
  };

  return (
    <style.PhotoDiv>
      <style.StyledSwiper {...swiperParams}>
        {fileNameList.length > 0 &&
          fileNameList.map(image => (
            <SwiperSlide key={`bookImage-${image}`}>
              <style.SelectedPhotoBox>
                <style.SelectedPhoto src={image} />
                <style.RemoveButton
                  onClick={() => handleRemoveBookImageEdit(image)}
                >
                  <style.RemoveButtonSvg />
                </style.RemoveButton>
              </style.SelectedPhotoBox>
            </SwiperSlide>
          ))}

        {selectedFiles.map(file => (
          <SwiperSlide key={v4()}>
            <style.SelectedPhotoBox>
              <style.SelectedPhoto src={URL.createObjectURL(file)} />
              <style.RemoveButton onClick={() => handleRemoveFile(file)}>
                <style.RemoveButtonSvg />
              </style.RemoveButton>
            </style.SelectedPhotoBox>
          </SwiperSlide>
        ))}

        {selectedFiles.length + fileNameList.length < 10 && (
          <SwiperSlide>
            <style.CustomFileUpload htmlFor="fileInput">
              <style.PlusText>+</style.PlusText>
              <style.InstructionText>
                전공서적의 사진을 업로드해주세요
              </style.InstructionText>
              <style.CountText>
                {selectedFiles.length + fileNameList.length} / {maxUploads}
              </style.CountText>
            </style.CustomFileUpload>
            <style.Input
              type="file"
              id="fileInput"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
            />
          </SwiperSlide>
        )}
      </style.StyledSwiper>
    </style.PhotoDiv>
  );
};

export default EditPhotoUpload;
