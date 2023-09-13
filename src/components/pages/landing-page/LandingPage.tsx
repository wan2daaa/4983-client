import Image from "next/image";
import * as style from "@/components/pages/landing-page/LandingPage.style";

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
