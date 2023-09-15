import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import * as style from "@/components/pages/selling/sell/sell-photo-upload/SellPhotoUpload.style";
import "swiper/css";

// 클라이언트에서 이미지를 업로드하려면 fetch 또는 axios와 같은 HTTP 클라이언트를 사용하여 서버로 이미지를 전송합니다.
// 서버에서 이미지를 저장하고 이미지의 경로를 데이터베이스에 저장합니다.

export default function SellPhotoUpload() {
  const swiperParams = {
    loop: false,
    slidesPerView: 1.1,
    spaceBetween: 1,
  };
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles: File[] = [];

    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i += 1) {
        if (selectedFiles.length < 10) {
          newFiles.push(e.target.files[i]);
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
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
          </SwiperSlide>
        )}

        {selectedFiles.length < 10 && (
          <SwiperSlide>
            <style.CustomFileUpload htmlFor="fileInput">
              <style.PlusText>+</style.PlusText>
            </style.CustomFileUpload>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
          </SwiperSlide>
        )}
      </style.StyledSwiper>
    </style.PhotoDiv>
  );
}
