import Image from "next/image";
import Line from "../components/line";

export default function Clubs() {
  return (
    <div className="flex flex-col gap-y-6 sm:gap-y-10">
      <h1 className="md:text-[6vw] text-[8vw] font-rubik font-extrabold text-ngreen leading-tight">
        GRAPHIC CAMPAIGNS
      </h1>
      <div>
        <h1 className="md:-mt-4 font-rubik text-2xl sm:text-3xl font-bold text-npurple">
          McMaster Women in Science & Engineering Initiative (WISE)
        </h1>
        <p className="font-sans font-thin italic mb-6">
          Graphic Design Director (September 2023 - December 2024)
        </p>
        <Image
          src="/wise.png"
          alt="8lettering art"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vw", height: "auto" }}
          priority
        />
      </div>
      <Line />
      <div>
        <h1 className="font-rubik text-2xl sm:text-3xl font-bold text-npurple">
          McMaster Start Coding, McMaster University
        </h1>
        <p className="font-sans font-thin italic mb-6">
          VP, Media and Design (September 2022 - April 2023)
        </p>
        <Image
          src="/msc.png"
          alt="8lettering art"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vw", height: "auto" }}
          priority
        />
      </div>
      <Line />
      <div>
        <h1 className="font-rubik text-2xl sm:text-3xl font-bold text-npurple">
          NASA Space Apps Challenge - Hamilton 2021 with SEDS Canada
        </h1>
        <p className="font-sans font-thin italic mb-4">
          Graphic Designer, Executive team (July 2021 - October 2021)
        </p>
        <Image
          src="/nasa.png"
          alt="8lettering art"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vw", height: "auto" }}
          priority
        />
      </div>
      <Line />
      <div>
        <h1 className="font-rubik text-2xl sm:text-3xl font-bold text-npurple">
          McMaster Design League
        </h1>
        <p className="font-sans font-thin italic mb-4">
          Junior Executive, Marketing and Graphics (September 2020 - May 2022)
        </p>
        <Image
          src="/mdl.png"
          alt="8lettering art"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vw", height: "auto" }}
          priority
        />
      </div>
      <Line />
    </div>
  );
}
