import Image from "next/image";

export default function TrainingGrounds() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full items-stretch">
      <div className="md:col-span-3 h-full">
        <p className="text-center text-nred font-rubik font-extrabold mb-1 text-2xl">
          Advanced Training
        </p>
        <div className="border border-gray-400 rounded-2xl p-3 flex flex-col h-56 2xl:h-48 justify-between">
          <div className="flex flex-row flex-wrap justify-between mb-3">
            <div>
              <h1 className="text-3xl font-rubik font-extrabold text-npurple">
                McMaster University
              </h1>
              <p className="font-sans italic font-light">
                Bachelor of Applied Science
              </p>
              <p className="font-sans italic font-light ml-4">
                (Honours Co-op) Computer Science
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-sans font-bold">Sept 2020 - April 2025</p>
              <p className="font-sans font-light italic">GPA 3.7</p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-x-20 items-end">
            <div>
              <p className="font-rubik font-bold text-ngreen text-lg">
                Skills gained:
              </p>
              <p className="font-sans font-extralight text-sm">
                Human Computer Interaction, Applications of Machine Learning,
                Natural Language Processing, Operating Systems, Computer
                Networks & Security, Data-Driven Algorithms, Software
                Requirements & Testing, Algorithms and Complexity
              </p>
            </div>
            <Image src="/Student.png" alt="Student" width={120} height={120} />
          </div>
        </div>
      </div>
      <div className="md:col-span-2 h-full">
        <p className="text-center text-nred font-rubik font-extrabold mb-1 text-2xl">
          Basic Training
        </p>
        <div className="border border-gray-400 rounded-2xl p-3 h-56 2xl:h-48 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-rubik font-extrabold text-npurple">
              Indian School Muscat
            </h1>
            <p className="font-sans italic font-extralight">
              High School (CBSE Curriculum)
            </p>
            <p className="font-sans italic font-bold">2016-2020</p>
          </div>
          <div className="flex flex-row justify-between gap-x-20 items-end">
            <div>
              <p className="font-rubik font-bold text-ngreen text-lg">
                Acheivements:
              </p>
              <p className="font-sans font-extralight text-sm">
                12th Grade Board Result: 96.4%
              </p>
              <p className="font-sans font-extralight text-sm">
                Computer Science Topper
              </p>
            </div>
            <Image src="/Bagpack.png" alt="Student" width={60} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
