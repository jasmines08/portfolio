import Image from "next/image";
import Line from "../components/line";
import Footer from "../components/footer";
export default function RightBrain() {
  return (
    <div className="flex flex-col pt-14 gap-y-8 px-6">
      <div>
        <h1 className="text-center mt-8 md:mt-4 md:text-[6vw] text-[9vw] font-rubik font-extrabold text-nblue leading-tight">
          Creative Expeditions
        </h1>
        <p className="text-center text-[4vw] md:-mt-2 md:text-[1.5vw] italic font-sans font-thin leading-tight">
          This is where there are no rules or logic!
        </p>
      </div>
      <div>
        <h1 className="font-rubik text-4xl font-extrabold text-ngreen">
          Digital ART Gallery
        </h1>
        <p className="font-sans font-thin italic text-lg">
          Instagram:{" "}
          <a href="https://www.instagram.com/8lettering/?hl=en">8lettering</a>
        </p>
        <Image
          src="/art2.png"
          alt="8lettering art"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100vw", height: "auto" }}
          priority
        />
        <p className="font-sans font-thin italic text-lg mt-4">
          You can even buy this on redbubble!!
        </p>
      </div>
      <Line />
      <div>
        <h1 className="font-rubik text-4xl font-extrabold text-ngreen">
          FILM Photography Gallery
        </h1>
        <p className="font-sans font-thin italic text-lg">
          Stories written in light, framed in film.
        </p>
        <Image
          src="/film.png"
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
        <h1 className="font-rubik text-4xl font-extrabold text-ngreen">
          Guitar COVERS
        </h1>
        <p className="font-sans font-thin italic text-lg">Notes in harmony</p>
        <div className="flex gap-x-6">
          <h1 className="basis-1/4">
            <video
              src="/getting_older.mp4"
              controls
              className="w-full rounded-lg my-4"
              poster="/getting_older_thumbnail.png"
            >
              Your browser does not support the video tag.
            </video>
          </h1>
          <h1 className="basis-1/4">
            <video
              src="/as_it_was.mp4"
              controls
              className="w-full rounded-lg my-4"
              poster="/as_it_was_thumbnail.JPG"
            >
              Your browser does not support the video tag.
            </video>
          </h1>
          <h1 className="basis-1/4">
            <video
              src="/youngblood.mp4"
              controls
              className="w-full rounded-lg my-4"
              poster="/IMG_0437.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </h1>
          <h1 className="basis-1/4">
            <video
              src="/call_me_maybe.mp4"
              controls
              className="w-full rounded-lg my-4"
              poster="/IMG_0439.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </h1>
        </div>
      </div>
      <Line />
      <Footer />
    </div>
  );
}
