"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
import MyProfileIMG from "@public/images/profile/20250407_133221.jpg";
import { ReactTyped } from "react-typed";
import "@/css/index.css";

export default function Hello() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 h-full">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <Image
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={MyProfileIMG}
            alt="Audy Profile Image"
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-[#0077C0] ">“</p>
            {/* <h1 className="text-2xl font-semibold text-[#1D242B] dark:text-white lg:text-2xl lg:w-96">
              Hello, I&apos;m
            </h1> */}
            {/* <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              Woranat Boonanak
            </h1> */}
            <ReactTyped
              className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96"
              strings={["Woranat Boonanake (Audy)"]}
              typeSpeed={40}
              showCursor={false}
            />{" "}
            <br />
            <ReactTyped
              className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96"
              strings={["Full Stack Developer"]}
              typeSpeed={40}
              startDelay={1200}
              showCursor={false}
            />
            <p
              className={`max-w-lg mt-6 text-gray-500 dark:text-gray-400 ${
                isVisible ? "visible" : "hidden"
              }`}
            >
              Hello! I&apos;m Audy, a passionate Full Stack Developer with over two years of experience in building and optimizing web applications. I have worked on both solo and team projects, ensuring high-quality, scalable, and efficient solutions. My expertise spans front-end and back-end development, allowing me to create seamless and user-friendly applications.
              <br /> I&apos;m always open to new opportunities and collaborations. Feel free to reach out anytime!
            </p>
            {isVisible && (
              <p className="text-gray-400 dark:text-gray-500 text-sm italic mt-4 visible">
                Updated: 2025
              </p>
            )}
          </div>
        </div>
      </div>
      {/* {isVisible && (
        <div className="flex justify-center mb-10 visible">
          <a
            href="/about"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#1D242B] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1D242B] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-[#1D242B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#FAFAFA]">
              About Me
            </span>
          </a>
        </div>
      )} */}
    </section>
  );
}
