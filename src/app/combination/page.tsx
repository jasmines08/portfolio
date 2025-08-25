import Footer from "../components/footer";
import Line from "../components/line";
import Clubs from "./clubs";
import Coding from "./coding";

export default function Combination() {
  return (
    <div className="flex flex-col pt-14 gap-y-6 px-6">
      <div>
        <h1 className="text-center mt-8 md:mt-4 md:text-[4vw] text-[9vw] font-rubik font-extrabold leading-tight">
          This is where the MAGIC happens.
        </h1>
        <p className="text-center text-[4vw] md:text-[1.5vw] italic font-sans font-thin leading-tight">
          Left Brain Meets Right Brain.
        </p>
      </div>
      <Line />
      <Coding />
      <Clubs />
      <Footer />
    </div>
  );
}
