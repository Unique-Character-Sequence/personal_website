"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Toolkit",
    content: (
      <div className="bg-neutral-900 text-white p-6 rounded-lg shadow-md">
        <ul className="list-none">
          <li className="mb-4">
            <span className="text-xl font-bold">Languages:</span>
            <ul className="list-disc ml-4">
              <li>Typescript</li>
              <li>Javascript</li>
            </ul>
          </li>
          <li className="mb-4">
            <span className="text-xl font-bold">Frameworks:</span>
            <ul className="list-disc ml-4">
              <li>React & Redux / Redux Toolkit</li>
              <li>Next.JS</li>
            </ul>
          </li>
          <li className="mb-4">
            <span className="text-xl font-bold">Styling:</span>
            <ul className="list-disc ml-4">
              <li>Sass, SCSS</li>
              <li>Material UI</li>
              <li>TailwindCSS</li>
            </ul>
          </li>
          <li className="mb-4">
            <span className="text-xl font-bold">API:</span>
            <ul className="list-disc ml-4">
              <li>API Requests with axios</li>
              <li>JWT (JSON Web Tokens)</li>
            </ul>
          </li>
          <li className="mb-4">
            <span className="text-xl font-bold">Other:</span>
            <ul className="list-disc ml-4">
              <li>Git</li>
              <li>Form Validation (Formik & Yup)</li>
              <li>Local Storage</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <div className="bg-neutral-900 text-white p-6 rounded-lg shadow-md">
        <ul className="list-disc ml-4">
          <li className="mb-2">
            <span className="text-lg font-bold">
              Programming and Software Analysis – CEITI, Chisinau, Moldova:
            </span>
            <ul className="list-disc ml-4">
              <li>4-year course in programming and software analysis</li>
              <li>
                Center of Excellence in Informatics and Informational
                Technologies
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="text-lg font-bold">React JS course:</span>
            <ul className="list-disc ml-4">
              <li>100+ comprehensive lessons</li>
              <li>
                Focused on developing a big feature-rich social media
                application
              </li>
            </ul>
          </li>
          {/* Add more subcategories as needed */}
        </ul>
      </div>
    ),
  },
  {
    title: "Soft skills",
    content: (
      <div className="bg-neutral-900 text-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Здесь надо сделать всплывашки с отсылками на другую информацию
        </p>
        <div className="mb-4">
          <span className="text-xl font-bold">Core Skills:</span>
          <ul className="list-disc ml-4">
            <li>Problem Solving</li>
            <li>Self-reliance</li>
            <li>Continuous Learning</li>
            <li>Adaptability</li>
          </ul>
        </div>
        <div className="mb-4">
          <span className="text-xl font-bold">Team Work:</span>
          <ul className="list-disc ml-4">
            <li>
              Effective verbal and written communication in English, Russian and
              Romanian
            </li>
            <li>Team Player</li>
          </ul>
        </div>
        <div>
          <span className="text-xl font-bold">Personal Traits:</span>
          <ul className="list-disc ml-4">
            <li>Dedication</li>
            <li>Attention to Detail</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="bg-neutral-900 text-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          1.5+ year of experience with React & Redux tech stack including:
        </p>
        <ul className="list-disc ml-4">
          <li className="mb-2">
            <span className="text-lg font-bold">Learning and Practice:</span>
            <ul className="list-disc ml-4">
              <li>
                Over 8 months learning and practicing front-end with React &
                Redux
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="text-lg font-bold">Commercial Project:</span>
            <ul className="list-disc ml-4">
              <li>
                Over 2 months single-handedly developing a commercial project
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="text-lg font-bold">Internship:</span>
            <ul className="list-disc ml-4">
              <li>53 days internship at Friendly School S.R.L.</li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="text-lg font-bold">Non-Commercial Projects:</span>
            <ul className="list-disc ml-4">
              <li>
                Over 6 months developing non-commercial projects to master
                modern React tech stack
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("toolkit");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: string) => {
    console.log(id);
    startTransition(() => {
      setActiveTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="px-2 sm:px-8 md:px-10 lg:px-16 xl:px-[8vw] text-md md:text-lg">
        <div className="flex justify-center items-center">
          <div className="w-11/12 bg-neutral-400 h-[2px]" />
          <h1 className="w-full mx-8 text-center py-10 font-bold text-2xl">
            About&nbsp;Me
          </h1>
          <div className="w-11/12 bg-neutral-400 h-[2px]" />
        </div>

        <div className="md:min-h-[380px] md:max-h-[410px] mb-3 md:mb-6 lg:mb-5">
          <Image
            className="rounded-xl shadow-lg mr-4 w-[28vw] sm:w-44 md:w-60 float-left"
            src="/images/me.webp"
            alt="my photo"
            height={280}
            width={280}
            blurDataURL="/images/me.webp"
            placeholder="blur"
          />
          <p className="text-neutral-400">
            <s>Hello, I&apos;m a React Developer specializing in...</s>
          </p>
          <br />
          <p>
            Tired of the same old intros? Well, here&apos;s something different
            – I&apos;m not your typical
            <code> React Developer</code>. Yes, I bring hands-on experience with
            a diverse toolkit,
            <>
              {" "}
              including React, Redux, TypeScript, TailwindCSS, and{" "}
              <Link
                className="text-blue-500 hover:underline cursor-pointer"
                href={"#about"}
              >
                more
              </Link>
            </>
            .
          </p>
          <br />
          <p>
            <b>What truly sets me apart?</b>
            <br />
            Rapid growth.
            <br />
            <br />
            As you read this, I&apos;m actively enhancing my skills and
            expanding my toolkit to meet market demands. As a{" "}
            <strong>strong junior</strong>, my skills grow daily, ensuring
            adaptability.
          </p>
        </div>

        <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-md mb-8">
          <Image
            className="relative -mb-20 h-auto min-w-[65px] w-[12vw] md:w-[90px] lg:w-[95px] -translate-x-1/2 -translate-y-[52%] left-1/2"
            src="/images/push-pin-icon.webp"
            alt="push pin"
            height={90}
            width={90}
            blurDataURL="/images/push-pin-icon.webp"
            placeholder="blur"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-6 mt-4 text-yellow-300">
            🚀 Recent Achievements
          </h1>

          <div className="text-white">
            <b>Productivity</b>
            <ul className="list-disc pl-6 mt-2">
              <li className="mb-2">
                Achieved an impressive{" "}
                <strong className="text-green-500">~50%</strong> boost in
                average productivity, utilizing advanced time management
                techniques.
              </li>
              <li className="mb-2">
                Realized a significant{" "}
                <strong className="text-green-500">~20%</strong> acceleration in
                Redux development speed through a seamless transition to Redux
                Toolkit.
              </li>
              <li className="mb-2">
                Successfully achieved at least a{" "}
                <strong className="text-green-500">twofold</strong> improvement
                in reducing debugging time by leveraging ChatGPT for thorough
                code reviews.
              </li>
              <li className="mb-2">
                Optimized the construction of website layouts with and without
                pre-made designs by mastering Firefox Developer Edition tools.
              </li>
              <li className="mb-2">
                Methodically documented bugs, implemented solutions and valuable
                feature insights thus reducing future debugging time.
              </li>
            </ul>
          </div>

          <div className="text-white mt-4">
            <b>Tech Stack</b>
            <ul className="list-disc pl-6 mt-2">
              <li className="mb-1.5">
                Mastered <strong className="text-green-500">Sass</strong> for
                creative styling, successfully applied in a project.
              </li>
              <li className="mb-1.5">
                Seamlessly integrated{" "}
                <strong className="text-green-500">TailwindCSS</strong> for
                streamlined and responsive designs.
              </li>
              <li className="mb-1.5">
                Initiated <strong className="text-green-500">Next.JS</strong>{" "}
                development for this website, embracing advanced technology.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex space-x-4 mb-4 space-y-4 sm:space-y-0 flex-col sm:flex-row">
            <TabButton activeTab={activeTab} selectTab={handleTabChange}>
              Toolkit
            </TabButton>
            <TabButton activeTab={activeTab} selectTab={handleTabChange}>
              Soft Skills
            </TabButton>
            <TabButton activeTab={activeTab} selectTab={handleTabChange}>
              Education
            </TabButton>
            <TabButton activeTab={activeTab} selectTab={handleTabChange}>
              Experience
            </TabButton>
          </div>

          {TAB_DATA.map((tabItem) => (
            <div
              key={tabItem.title}
              className={
                activeTab.toLowerCase() === tabItem.title.toLowerCase()
                  ? "block"
                  : "hidden"
              }
            >
              {tabItem.content}
            </div>
          ))}
        </div>

        <div className="text-left mt-6">
          <p className="text-2xl font-semibold mb-4">🌟 Hiring me means:</p>

          <div className="space-x-4 mb-6">
            <div className="w-6 h-6 absolute stroke-black bg-green-600 rounded-full flex items-center justify-center text-white">
              <span className="font-bold">1</span>
            </div>
            <p className="text-lg pl-5">
              Immediate boost for your front-end team performance.
            </p>
          </div>

          <div className="space-x-4 mb-6">
            <div className="w-6 h-6 absolute bg-green-600 rounded-full flex items-center justify-center text-white">
              <span className="font-bold">2</span>
            </div>
            <p className="text-lg pl-5">
              The assurance of a future <strong>loyal middle developer</strong>.
            </p>
          </div>

          <div className="space-x-4 mb-6">
            <div className="w-6 h-6 absolute bg-green-600 rounded-full flex items-center justify-center text-white">
              <span className="font-bold">3</span>
            </div>
            <p className="text-lg pl-5">
              Securing potential <strong>dedicated senior leader</strong>.
            </p>
          </div>

          <p className="text-lg">
            Hire me today and secure a powerful asset for lasting success in a
            competitive market.
          </p>

          <p className="text-lg mt-4">
            And about salary expectations? Well, let&apos;s just say, my skills
            aren&apos;t the only thing growing every day! 💸
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
