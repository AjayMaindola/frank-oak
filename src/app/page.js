import Image from "next/image";
import BannerComponent from "./Componant/PageComponent/BannerComponent";
import MadeforGoodLiving from "./Componant/PageComponent/MadeforGoodLiving";
import FeaturedCategorries from "./Componant/PageComponent/FeaturedCategorries";

export default function Home() {
  return (
    <>
      <div>
          <BannerComponent/>
          <FeaturedCategorries/>
          <MadeforGoodLiving/>
      </div>

    </>
  );
}
