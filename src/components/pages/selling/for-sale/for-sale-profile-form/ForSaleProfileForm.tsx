import Image from "next/image";
import * as style from "@/components/pages/selling/for-sale/for-sale-profile-form/ForSaleProfileForm.style";

export default function ForSaleProfileForm() {
  return (
    <style.Div>
      <style.ProfileDiv>
        <Image
          src="/assets/image/SellProfile.png"
          loader={() => "/assets/image/SellProfile.png"}
          width={44}
          height={44}
          alt="profile"
        />
      </style.ProfileDiv>
      <style.UserNameA>루삥뽕</style.UserNameA>
      <style.PostedtimeA>3일 전</style.PostedtimeA>
    </style.Div>
  );
}
