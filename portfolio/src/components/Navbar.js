import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Taylor Mathis
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            My Skills
          </a>
          <a href="https://drive.google.com/file/d/1JZ-3Uk-UXa1Mi6zQMfsJT3oGxIm2d-5r/view?usp=share_link" className="mr-5 hover:text-white">
            My Resume
          </a>
          <a href="https://github.com/Tayjanee" className="mr-5 hover:text-white">
            My GitHub
          </a>
          <a href="https://www.linkedin.com/in/taylor-mathis-mph/" className="mr-5 hover:text-white">
            My LinkedIn
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
