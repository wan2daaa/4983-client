import React, { useState } from "react";
import * as style from "@/components/pages/mypage/mypage/mypage-login-activity/MypageLoginActivity.style";
import { UserLogout, UserSecede } from "@/apis/user/User";

const MypageLoginActivity = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSecedeModalOpen, setIsSecedeModalOpen] = useState(false);

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const handleLogout = () => {
    UserLogout();
    setIsLogoutModalOpen(false);
  };

  const openSecedeModal = () => {
    setIsSecedeModalOpen(true);
  };

  const closeSecedeModal = () => {
    setIsSecedeModalOpen(false);
  };

  const handleSecede = () => {
    UserSecede();
    setIsSecedeModalOpen(false);
  };

  return (
    <style.Div>
      <style.ModalOverlay isOpen={isLogoutModalOpen || isSecedeModalOpen} />
      <style.Title>로그인 활동</style.Title>
      <style.LoginActivityArea>
        <style.LogoutArea>
          <style.LogoutButtonDiv onClick={openLogoutModal}>
            <style.LogoutButton
              src="/assets/image/mypage/Logout.svg"
              width={3.1}
              height={3}
              alt="Finish-Page"
            />
            <style.LogoutTag>로그아웃</style.LogoutTag>
          </style.LogoutButtonDiv>
        </style.LogoutArea>
        <style.secedeArea onClick={openSecedeModal}>
          <style.secedeButtonDiv>
            <style.secedeButton
              src="/assets/image/mypage/Secede.svg"
              width={3.1}
              height={2.9}
              alt="Finish-Page"
            />
            <style.secedeTag>탈퇴하기</style.secedeTag>
          </style.secedeButtonDiv>
        </style.secedeArea>
      </style.LoginActivityArea>
      {isLogoutModalOpen && (
        <style.Modal>
          <style.ModalContent>로그아웃 하시겠어요?</style.ModalContent>
          <style.ButtonContainer>
            <style.ModalButton onClick={handleLogout}>
              로그아웃
            </style.ModalButton>
            <style.CloseButton onClick={closeLogoutModal}>
              취소
            </style.CloseButton>
          </style.ButtonContainer>
        </style.Modal>
      )}

      {isSecedeModalOpen && (
        <style.Modal>
          <style.ModalContent>4983 서비스를 탈퇴하시겠어요?</style.ModalContent>
          <style.ButtonContainer>
            <style.ModalButton onClick={handleSecede}>
              탈퇴할래요
            </style.ModalButton>
            <style.CloseButton onClick={closeSecedeModal}>
              탈퇴 안 할래요
            </style.CloseButton>
          </style.ButtonContainer>
        </style.Modal>
      )}
    </style.Div>
  );
};
export default MypageLoginActivity;
