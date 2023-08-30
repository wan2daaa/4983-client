import * as style from "@/components/pages/landing-page/LandingPage.style";
import Image from "next/image";

export default function LandingPage() {
  return (
    <style.Div>
      <Image
        src="/assets/image/LandingPage.png"
        loader={() => "/assets/image/LandingPage.png"}
        layout="fill"
        alt="landing-page"
      />
    </style.Div>
  );
}
