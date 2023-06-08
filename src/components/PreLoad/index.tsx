import { BLUR_BASE64, NO_IMAGE } from "@/utils";
import Image from "next/image";

export default function Preload() {
  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner-logo">
            <Image
              src={"/assets/images/logo2.png" || NO_IMAGE}
              alt={"preload"}
              objectFit="cover"
              placeholder="blur"
              blurDataURL={BLUR_BASE64}
              layout="fill"
            />
            <div className="spinner-dot" />
            <div className="spinner spinner-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
