import React from "react";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <div className="flex flex-column md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          aliquid vitae reprehenderit deserunt libero labore incidunt quos autem
          dignissimos quia nulla distinctio voluptates ipsa aliquam, nemo cumque
          laboriosam saepe sapiente!
        </p>
        <a
          href="railto:tinnofabregas01@gmail.com"
          className="block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          tinnofabregas01@gmail.com
        </a>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/113224141?s=96&v=4"
        alt="Tinno"
        className="w-full md:w-6/12 rounded-full object-cover"
      />
    </div>
  );
}
