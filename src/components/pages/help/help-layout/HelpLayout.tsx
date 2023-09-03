import * as style from "@/components/pages/help/help-layout/HelpLayout.style";
import HelpSaleSwiper from "@/components/pages/help/help-swiper/HelpSaleSwiper";
import HelpButton from "@/components/pages/help/help-button/HelpButton";
import HelpPurchaseSwiper from "@/components/pages/help/help-swiper/HelpPurchaseSwiper";
import HelpGuideSwiper from "@/components/pages/help/help-swiper/HelpGuideSwiper";

export default function HelpLayout() {
  return (
    <style.HelpBox>
      <style.HelpImage
        src="/assets/image/help/Help.png"
        loader={() => "/assets/image/help/Help.png"}
        width={375}
        height={1399}
        alt="helpImage"
      />
      <style.HelpContainer>
        <style.SaleTitle>판매방법</style.SaleTitle>
        <style.SaleFrame>
          <HelpSaleSwiper />
        </style.SaleFrame>
        <style.PurchaseTitle>구매방법</style.PurchaseTitle>
        <style.PurchaseFrame>
          <HelpPurchaseSwiper />
        </style.PurchaseFrame>
        <style.GuideTitle>꼭 지켜주세요!</style.GuideTitle>
        <style.GuideFrame>
          <HelpGuideSwiper />
        </style.GuideFrame>
      </style.HelpContainer>
      <HelpButton />
    </style.HelpBox>
  );
}
