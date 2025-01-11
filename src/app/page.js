import Image from "next/image";

import SliderHome from "./Componant/PageComponent/HomePageComponent/SliderHome";
import BannerComponent from "./Componant/PageComponent/HomePageComponent/BannerComponent";
import FeaturedCategorries from "./Componant/PageComponent/HomePageComponent/FeaturedCategorries";
import MadeforGoodLiving from "./Componant/PageComponent/HomePageComponent/MadeforGoodLiving";

export default function Home() {
  return (
    <>
      <div>
          <BannerComponent/>
          <FeaturedCategorries/>
          <SliderHome/>
          <MadeforGoodLiving/>
      </div>

    </>
  );
}
