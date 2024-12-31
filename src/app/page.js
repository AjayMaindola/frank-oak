import Image from "next/image";
import BannerComponent from "./Componant/PageComponent/BannerComponent";
import MadeforGoodLiving from "./Componant/PageComponent/MadeforGoodLiving";

export default function Home() {
  return (
    <>
      <div>
          <BannerComponent/>
          <MadeforGoodLiving/>
      </div>

    </>
  );
}
