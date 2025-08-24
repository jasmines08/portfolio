import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full font-rubik overflow-hidden text-nblack">
      <div className="absolute inset-0 grid grid-cols-2">
        {/* LEFT HALF */}
        <Link href="/left-brain" className="block">
          <div className="relative bg-nblack overflow-hidden group h-full cursor-pointer">
            {/* Hover overlay */}
            <div className="absolute inset-0 z-0 group-hover:bg-neutral-950 transition-colors duration-300" />

            {/* Background filler text */}
            <div className="absolute inset-0 z-0 flex items-start justify-start opacity-5 pointer-events-none select-none">
              <p className="text-[40px] font-black text-neutral-500 leading-tight break-words max-w-[100%]">
                10101010101010100101010101010101101010101010101001010101010101011010101010101010010101010101010110101010101010100101010101010101101010101010101001010101010101011010101010101010010101010101010110101010101010100101010101010101101010101010101001010101010101011010101010101010010101010101010110101010101010100101010101010101101010101010101001010101010101011010101010101010010101010101010101010101010101010101010101101010101010101010101010101010101010101010101010101001010101010101011010101010101010010101010101010110101010101010100101010101010101101010101010101001010101010101011010101010101010010101010101010110101010101010100101010101010101101010101010101001010101010101011010101010101010010101010101010110101010101010100101010101010101101010101010101001010101010101011010101010101010010101010101010110101010101010100101010101010101010101010101010101010101011010101010101010101010101010101010101010
              </p>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-end justify-center pt-[17vh] px-4">
              <div className="text-2xl md:text-4xl font-rubik font-extrabold leading-snug">
                <p className="text-nblue text-right">thinker.</p>
                <p className="text-npurple text-right">full-stack</p>
                <h1 className="text-8xl text-white font-rubik font-black">
                  SWALEHA
                </h1>
              </div>
            </div>

            {/* Bottom Left Text Box */}
            <div className="absolute left-0 bottom-4 pl-6 max-w-[340px] text-[25px] font-sans z-10">
              <p className="text-white font-thin uppercase">Left Brain</p>
              <p className="italic font-thin text-gray-300">(for recruiters)</p>
              <p className="text-white font-thin">
                Responsible for logic, language, analytical reasoning, and
                structured problem-solving.
              </p>
            </div>
          </div>
        </Link>

        {/* RIGHT HALF */}
        <Link href="/right-brain" className="block">
          <div className="relative overflow-hidden group h-full cursor-pointer">
            {/* Hover overlay */}
            <div className="absolute inset-0 z-0 group-hover:bg-neutral-950 transition-colors duration-300" />

            {/* Background filler text */}
            <div className="absolute inset-0 z-0 flex items-start justify-start opacity-5 pointer-events-none select-none">
              <p className="text-[40px] font-black text-neutral-500 leading-tight break-words max-w-[100%]">
                SFHKAFNCVFAUOFGWUFNSCNAPDJQWIRHYIOQANCXALNDQOWIHRAIXOQWIEHQJBCVISEFHZKLCNSDFIOSGLDIDUFHJBEAWFJLBALJFGHEQRUYOFBALJKFBOAUAERUGFQLKCBAOIUFGAILUCBAOIURGI7JHSBFAKLDFIAFGUIACNIJSNEWUIOFAPLUEHFUEIFNKANCUEFBDUBLDCJOFBLJKDVAIUFGELUABFLASEAFUBAOIUFBKJDFNJUFGURGNLZUEOPIIUFESOINVOOZIFJREALPFJBUFGFJNAIEUFHROIFVBALJKFHBRYUBFVAABOUARUFBOABVOAESJHFFDJMBLAKJVBAPUERGUCNOIUCNAEIUBFJAHESBDJHCBSJDHBFAOIFUEOUYFGVUTYEFVIWAEYfLISKDHBUYGOEIUWSFHKAFNCVFAUOFGWUFNSCNAPDJQWIRHYIOQANCXALNDQOWIHRAIXOQWIEHQJBCVISEFHZKLCNSDFIOSGLDIDUFHJBEAWFJLBALJFGHEQRUYOFBALJKFBOAUAERUGFQLKCBAOIUFGAILUCBAOIURGI7JHSBFAKLDFIAFGUIACNIJSNEWUIOFAPLUEHFUEIFNKANCUEFBDUBLDCJOFBLJKDVAIUFGELUABFLASEAFUBAOIUFBKJDFNJUFGURGNLZUEOPIIUFESOINVOOZIFJREALPFJBUFGFJNAIEUFHROIFVBALJKFHBRYUBFVAABOUARUFBOABVOAESJHFFDJMBLAKJVBAPUERGUCNOIUCNAEIUBFJAHESBDJHCBSJDHBFAOIFUEOUYFGVUTYEFVIWAEYfLISKDHBUYGOEIUW
              </p>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-start justify-center pt-[17vh] px-4">
              <div className="text-2xl md:text-4xl font-rubik font-extrabold leading-snug">
                <p className="text-ngreen">creative.</p>
                <p className="text-npurple">developer.</p>
                <h1 className="text-8xl text-white">JASMINE</h1>
              </div>
            </div>

            {/* ✅ Bottom Right Text Box FIXED */}
            <div className="absolute right-0 bottom-4 pr-6 max-w-[340px] text-[25px] text-right font-sans font-thin z-10">
              <p className="text-white uppercase">Right Brain</p>
              <p className="italic text-gray-300">(for whoever)</p>
              <p className="text-white">
                Responsible for creativity, imagination, emotional expression,
                and spatial awareness.
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Center Image (non-blocking) */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center z-10">
        <Link href="/combination">
          <img
            src="me.png"
            alt="Swaleha Jasmine"
            className="h-[65vh] object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
}
