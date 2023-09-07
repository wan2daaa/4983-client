import CreateAccountProfileLayout from "@/components/pages/create-account-profile/create-account-profile-layout/CreateAccountProfileLayout";
import CreateAccountDetailProfileLayout from "@/components/pages/create-account-detail-profile/create-account-detail-profile-layout/CreateAccountDetailProfileLayout";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const id = String(router.query.id);

  if (id === "1") {
    return <CreateAccountProfileLayout />;
  }
  if (id === "2") {
    return <CreateAccountDetailProfileLayout />;
  }
}
