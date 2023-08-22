import Image from "next/image";

export default function LandingPage() {
  return (
    <Image
      src="/assets/image/LandingPage.png"
      loader={() => "/assets/image/LandingPage.png"}
      width={375}
      height={768}
      alt="landing-page"
    />
  );
}
