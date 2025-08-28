import Footer from "../components/footer";
import Line from "../components/line";
import Admass from "./admass";
import ElectricMind from "./electric-mind";
import McMasterUni from "./mcmaster-uni";
import TrainingGrounds from "./training-grounds";

export default function LeftBrain() {
  return (
    <div className="flex flex-col pt-9 sm:pt-14 px-3 sm:px-6 gap-y-8">
      <div>
        <h1 className="mt-8 md:mt-4 md:text-[6vw] text-[9vw] font-rubik font-extrabold text-nblue leading-tight">
          Training Grounds
        </h1>
        <p className="text-[4vw] md:-mt-4 md:text-[1.5vw] italic font-sans font-thin leading-tight">
          Roots of Logic and Learning
        </p>
      </div>
      <TrainingGrounds />
      <Line />
      <div>
        <h1 className="md:-mt-4 md:text-[6vw] text-[9vw] font-rubik font-extrabold text-nyellow leading-tight">
          Developer’s Quest Log
        </h1>
        <p className="text-[4vw] md:-mt-2 md:text-[1.5vw] italic font-sans font-thin leading-tight">
          Applications of the Logic and Learning
        </p>
      </div>
      <ElectricMind />
      <Line />
      <McMasterUni />
      <Line />
      <Admass />
      <Line />
      <Footer />
    </div>
  );
}
