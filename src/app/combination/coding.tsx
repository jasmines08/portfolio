import Image from "next/image";
import Line from "../components/line";

export default function Coding() {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <h1 className="md:-mt-4 md:text-[6vw] text-[9vw] font-rubik font-extrabold text-nblue leading-tight">
          CODING CAMPAIGNS
        </h1>
        <p className="text-[4vw] md:-mt-4 md:text-[1.5vw] italic font-sans font-thin leading-tight">
          Technical Projects
        </p>
      </div>
      <div className="flex flex-col gap-y-6 mt-4">
        <div className="flex">
          <div className="basis-1/2 2xl:basis-1/3 pr-6">
            <Image
              src="/macconnect_poster.png"
              alt="8lettering art"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100vw", height: "auto" }}
              priority
              className="rounded-2xl "
            />
          </div>
          <div className="basis-1/2 2xl:basis-2/3">
            <div className="border border-gray-400 rounded-2xl p-3 h-full ">
              <div className="flex flex-col gap-y-6 2xl:gap-y-8">
                <div>
                  <h1 className="text-3xl font-rubik font-extrabold text-npurple">
                    MACCONNECT
                  </h1>
                  <p className="italic font-sans font-thin">
                    Capstone Project - April 2025
                  </p>
                </div>
                <p className="font-sans font-thin">
                  ∗ Engineered and developed MacConnect, a{" "}
                  <span className="font-bold text-nblue">
                    full-stack React Native App{" "}
                  </span>
                  with Figma-designed UI/UX, enabling McMaster students to
                  connect through shared interests, activities, and goals
                  through a centralised platform.
                </p>
                <p className="font-sans font-thin">
                  ∗ Integrated Auth0 for secure user authentication and account
                  verification using McMaster email, and implemented core
                  features such as personalized feeds, an interactive matching
                  interface, and a dynamic event calendar using{" "}
                  <span className="font-bold text-nblue">
                    Java Spring Boot, GraphQL and MongoDB.
                  </span>
                </p>
                <p className="font-sans font-thin">
                  ∗ Collaborated within an agile team, utilizing{" "}
                  <span className="font-bold text-nblue">Jira</span> for sprint
                  planning, Git for version control, and{" "}
                  <span className="font-bold text-nblue">
                    test-driven development (TDD)
                  </span>{" "}
                  to ensure robust, scalable, and maintainable code.
                </p>
                <div className="flex flex-col justify-between">
                  <a
                    className="font-sans font-thin italic underline"
                    href="https://github.com/orgs/Mac-Connect/repositories"
                    target="_blank"
                  >
                    Check out the code!
                  </a>
                  <a
                    className="font-sans font-thin italic underline text-right"
                    href="https://www.figma.com/design/1AAHgfgjegRHDMBXFvqjBH/macconnect-draft?node-id=0-1&p=f&t=BS3rzCRzvSmIbyPA-0"
                    target="_blank"
                  >
                    Check out the figma designs!
                  </a>
                  <a
                    className="font-sans font-thin italic underline"
                    href="https://www.youtube.com/watch?v=EDEM1h9fItk"
                    target="_blank"
                  >
                    Check out the video!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row-reverse">
          <div className="basis-1/2 2xl:basis-1/3 pl-6">
            <Image
              src="/asl.png"
              alt="8lettering art"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100vw", height: "auto" }}
              priority
              className="rounded-2xl "
            />
          </div>
          <div className="basis-1/2 2xl:basis-2/3">
            <div className="border border-gray-400 rounded-2xl p-3 h-full ">
              <div className="flex flex-col gap-y-4 2xl:gap-y-8">
                <div>
                  <h1 className="text-3xl font-rubik font-extrabold text-npurple">
                    ASL Recognition with Convolutional Neural Networks
                  </h1>
                  <p className="italic font-sans font-thin">December 2024</p>
                </div>
                <p className="font-sans font-thin">
                  ∗ Developed an American Sign Language (ASL) recognition model
                  using a{" "}
                  <span className="font-bold text-nblue">
                    Convolutional Neural Network (CNN) in PyTorch,
                  </span>{" "}
                  achieving{" "}
                  <span className="font-bold text-nblue">
                    96.86% test accuracy
                  </span>{" "}
                  on a custom dataset of 24,000+ images for 24 static ASL
                  letters.
                </p>
                <p className="font-sans font-thin">
                  ∗ Built a custom dataset leveraging{" "}
                  <span className="font-bold text-nblue">
                    OpenCV and cvzone Hand Tracking
                  </span>{" "}
                  to capture diverse hand gestures, implementing preprocessing
                  steps like grayscale conversion, resizing (64x64), and
                  normalization to ensure model consistency and accuracy.
                </p>
                <p className="font-sans font-thin">
                  ∗ Designed and deployed a real-time ASL hand gesture
                  recognition system with live video input and GPU-accelerated
                  gesture prediction, featuring bounding boxes for intuitive
                  feedback.
                </p>
                <a
                  className="font-sans font-thin italic underline text-right"
                  href="https://github.com/jasmines08/AL3_Final-Proj/tree/master"
                  target="_blank"
                >
                  Check out the code!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
      <div className="flex flex-col gap-y-6">
        <div className="flex">
          <div className="basis-1/2 2xl:basis-1/3 pr-6">
            <Image
              src="/brewcast.png"
              alt="8lettering art"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100vw", height: "auto" }}
              priority
              className="rounded-2xl "
            />
          </div>
          <div className="basis-1/2 2xl:basis-2/3">
            <div className="border border-gray-400 rounded-2xl p-3 h-full ">
              <div className="flex flex-col gap-y-4 2xl:gap-y-5">
                <div>
                  <h1 className="text-3xl font-rubik font-extrabold text-npurple">
                    BrewCast
                  </h1>
                  <p className="italic font-sans font-thin">November 2024</p>
                </div>
                <p className="font-sans font-thin">
                  ∗ Designed and developed a mobile-friendly coffee ordering web
                  app for a Human-Computer Interaction course using{" "}
                  <span className="font-bold text-nblue">
                    React.js and Material-UI
                  </span>
                  , providing personalized drink recommendations based on
                  weather, mood, and plans.
                </p>
                <p className="font-sans font-thin">
                  ∗ Enhanced user experience through a streamlined UI for quick
                  ordering, reducing decision-making time and improving
                  convenience for users.
                </p>
                <a
                  className="font-sans font-thin italic underline text-right"
                  href="https://github.com/COMPSCI-4HC3/milestone-3-group-14"
                  target="_blank"
                >
                  Check out the code!
                </a>
                <a
                  className="font-sans font-thin italic underline "
                  href="https://milestone-3-group-14.vercel.app/"
                  target="_blank"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row-reverse">
          <div className="basis-1/2 2xl:basis-1/3 pl-6">
            <Image
              src="/cookbook.png"
              alt="8lettering art"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100vw", height: "auto" }}
              priority
              className="rounded-2xl "
            />
          </div>
          <div className="basis-1/2 2xl:basis-2/3">
            <div className="border border-gray-400 rounded-2xl p-3 h-full ">
              <div className="flex flex-col gap-y-4 2xl:gap-y-5">
                <div>
                  <h1 className="text-3xl font-rubik font-extrabold text-npurple">
                    CookBook
                  </h1>
                  <p className="italic font-sans font-thin">May 2023</p>
                </div>
                <p className="font-sans font-thin">
                  ∗ Developed a web application using{" "}
                  <span className="font-bold text-nblue">
                    Angular, TypeScript, and Bootstrap
                  </span>{" "}
                  to store recipes and shopping lists, addressing the need for
                  an efficient meal planning tool for students.
                </p>
                <p className="font-sans font-thin">
                  ∗ Implemented{" "}
                  <span className="font-bold text-nblue">Firebase</span> for
                  authentication and database management, and integrated lazy
                  loading to optimize load times, resulting in enhanced app
                  performance and faster user access.
                </p>
                <a
                  className="font-sans font-thin italic underline text-right"
                  href="https://milestone-3-group-14.vercel.app/"
                  target="_blank"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
}
