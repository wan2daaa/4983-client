import { useRouter } from "next/router";
import { useState } from "react";
import CreateAccountProfileLayout from "@/components/pages/signup/create-account-profile/create-account-profile-layout/CreateAccountProfileLayout";
import CreateAccountDetailProfileLayout from "@/components/pages/signup/create-account-detail-profile/create-account-detail-profile-layout/CreateAccountDetailProfileLayout";
import CreateAccountBankAccountLayout from "@/components/pages/signup/create-account-bank-account/create-account-bank-account-layout/CreateAccountBankAccountLayout";
import CreateAccountFinishLayout from "@/components/pages/signup/create-account-finish/CreateAccountFinishLayout";
import CreateAccountCollegeLayout from "@/components/pages/signup/create-account-college/create-account-college-layout/CreateAccountCollegeLayout";
import CreateAccountCollegeLayoutNext from "@/components/pages/signup/create-account-college/create-account-college-layout/CreateAccountCollegeLayoutNext";

export default function Signup() {
  const router = useRouter();
  const id = String(router.query.id);

  if (id === "1") {
    return <CreateAccountProfileLayout />;
  }
  if (id === "2") {
    return <CreateAccountDetailProfileLayout />;
  }
  if (id === "3") {
    return <CreateAccountBankAccountLayout />;
  }
  if (id === "4") {
    return <CreateAccountCollegeLayout />;
  }
  if (id === "5") {
    return <CreateAccountCollegeLayoutNext />;
  }
  if (id === "6") {
    return <CreateAccountFinishLayout />;
  }
}
