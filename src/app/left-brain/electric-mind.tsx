export default function ElectricMind() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/3">
        <div className="flex">
          <div className="basis-1/2 flex flex-col gap-y-8 mt-6 2xl:gap-y-4">
            <div>
              <h2 className="font-rubik text-2xl font-extrabold">
                Main Quest #1
              </h2>
              <h1 className="font-rubik text-4xl font-extrabold text-ngreen">
                Electric Mind
              </h1>
            </div>
            <div>
              <p className="font-sans font-thin italic text-xl">Role:</p>
              <p className="font-sans font-bold italic text-xl">
                Software Developer Intern
              </p>
            </div>
            <div>
              <p className="font-sans font-thin italic text-xl">Levels:</p>
              <p className="font-sans font-bold italic text-xl">
                16 (May 2023 - Aug 2024)
              </p>
            </div>
            <div className="flex">
              <p className="font-sans font-thin italic text-xl">Missions:</p>
              <p className="font-sans font-bold italic text-xl ml-2">2</p>
            </div>
            <div className="flex">
              <p className="font-sans font-thin italic text-xl">Locations:</p>
              <p className="font-sans font-bold italic text-xl ml-2">
                Toronto, ON
              </p>
            </div>
            <div>
              <p className="font-sans font-extralight italic text-xl">
                Inventory Unlocked:
              </p>
              <p className="font-sans font-bold italic text-xl">
                React Native, Accessibility, Java Spring Boot, SQL, RESTful
                APIs, JHipster
              </p>
            </div>
          </div>
          <div className="basis-1/2 px-6">
            <p className="text-center text-nred font-rubik font-extrabold mb-1 text-2xl">
              MISSION #1
            </p>
            <div className="border border-gray-400 rounded-2xl p-3">
              <div className="flex flex-col justify-between gap-y-6">
                <h1 className="text-3xl font-rubik font-extrabold text-npurple">
                  Prowire
                </h1>
                <div>
                  <p className="font-sans font-bold italic text-lg">
                    Chapter 1: Web App
                  </p>
                  <p className="font-sans font-thin">
                    • Integrated real-time sports commentary into Prowire’s Web
                    App using React Native.
                  </p>
                  <p>
                    • Enhanced accessibility for vision-impaired users,
                    validated through focus group testing.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-bold italic text-lg">
                    Chapter 2: Admin App
                  </p>
                  <p className="font-sans font-thin">
                    • Expanded admin app capabilities by enhancing game/audio
                    setup using React, Java Spring Boot, SQL, and RESTful APIs.
                  </p>
                  <p>
                    • Automated key processes with JHipster, reducing manual
                    setup time, and ensured seamless data flow via REST APIs,
                    boosting system efficiency, contributing to robust
                    full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-sans font-bold italic text-xl mt-6">
          HTML, CSS, TypeScript, Material-UI, React.js, Next.js, Spring Boot
          (Java), Jest, CIAM, Auth0, Git, Jira, Confluence, Docker, and
          OpenShift.
        </p>
      </div>
      <div className="basis-1/3">
        <p className="text-center text-nred font-rubik font-extrabold mb-1 text-2xl">
          MISSION #2
        </p>
        <div className="border border-gray-400 rounded-2xl p-3">
          <div className="flex flex-col justify-between gap-y-6">
            <h1 className="text-3xl font-rubik font-extrabold text-npurple">
              407 ETR
            </h1>
            <div>
              <p className="font-sans font-bold italic text-lg">
                Chapter 1: Front End Development
              </p>
              <p className="font-sans font-thin">
                Engineered a high-performance, responsive web app using HTML,
                CSS, TypeScript, Material-UI, React.js, and Next.js to optimize
                user experience and system performance.
              </p>
            </div>
            <div>
              <p className="font-sans font-bold italic text-lg">
                Chapter 2: Back End Development
              </p>
              <p className="font-sans font-thin">
                Developed scalable back-end services with Spring Boot (Java),
                integrated Contentful CMS, and implemented Jest unit tests,
                supporting 100,000+ users.
              </p>
            </div>
            <div>
              <p className="font-sans font-bold italic text-lg">
                Chapter 3: CIAM and DevOps
              </p>
              <p className="font-sans font-thin">
                • Implemented secure CIAM and authentication systems by
                integrating Auth0, deploying adaptive MFA, and improving login
                security through Auth0’s Management API.
              </p>
              <p className="font-sans font-thin">
                • Streamlined development workflows by using Git, Jira,
                Confluence, Docker, and OpenShift to enhance collaboration,
                documentation, containerization, and deployment efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
