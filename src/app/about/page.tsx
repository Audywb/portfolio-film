import HelloSection from "@/components/Hero/HeroSection";
import CardSection from "@/components/Card/SectionCard";
import { Fragment } from "react";
import Tools from "@/components/Card/toolsCard";
import Timeline from "@/components/Timeline/Timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <Fragment>
      <HelloSection />
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Experience
      </h2>
      <div className="flex justify-center">
        <Timeline />
      </div>
      <CardSection />
      <div className="pb-32">
        <Tools />
      </div>
      <div>
        <div className="flex justify-center mb-10 visible">
          <a
            href="/contact"
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
              Contact
            </span>
          </a>
        </div>
      </div>
    </Fragment>
  );
}
