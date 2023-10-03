import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { useRecoilState } from "recoil";
import { fileListState } from "@/recoil/atoms/CreateUsedBookAtoms";
import * as style from "@/components/pages/selling/sell/sell-photo-upload/SellPhotoUpload.style";
import "swiper/css";

export default function SellPhotoUpload() {
  const swiperParams = {
    loop: false,
    slidesPerView: 1.1,
    spaceBetween: 1,
  };
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [_, setFileList] = useRecoilState<File[]>(fileListState);

  useEffect(() => {
    if (selectedFiles.length > 10) {
      setSelectedFiles(prevFiles => prevFiles.slice(0, 10));
    }
  }, [selectedFiles]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles: File[] = [];

    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i += 1) {
        if (selectedFiles.length < 10) {
          const file = e.target.files[i];
          const formData = new FormData();
          formData.append("fileList", file);
          setFileList(prevFileList => [...prevFileList, file]);
          newFiles.push(file);
        }
      }
    }

    setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (file: File) => {
    setSelectedFiles(prevFiles =>
      prevFiles.filter(prevFile => prevFile !== file),
    );
  };

  return (
    <style.PhotoDiv>
      <style.StyledSwiper {...swiperParams}>
        {selectedFiles.map(file => (
          <SwiperSlide key={file.name}>
            <style.SelectedPhotoBox>
              <style.SelectedPhoto src={URL.createObjectURL(file)} />
              <style.RemoveButton onClick={() => handleRemoveFile(file)}>
                <style.RemoveButtonSvg />
              </style.RemoveButton>
            </style.SelectedPhotoBox>
          </SwiperSlide>
        ))}
        {selectedFiles.length < 1 && (
          <SwiperSlide>
            <style.CustomFileUpload htmlFor="fileInput">
              <style.InstructionText>
                전공서적의 사진을 업로드해주세요
              </style.InstructionText>
              <style.CameraA />
              <style.CountText>{selectedFiles.length} / 10</style.CountText>
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

        {selectedFiles.length < 10 && (
          <SwiperSlide>
            <style.CustomFileUpload htmlFor="fileInput">
              <style.PlusText>+</style.PlusText>
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
}
