"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MyProfileIMG from "@public/images/profile/preview.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFish,
  faGamepad,
  faPlaneDeparture,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

export default function HelloSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-2xl tracking-tight font-extrabold text-gray-800 sm:text-2xl md:text-3xl">
              <span className="xl:inline">Know Who</span>
              <span className="text-[#0077C0] xl:inline"> I&apos;m</span>
            </h1>
            <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              Hi Everyone, I am Woranat Boonanak from Ubon Ratchathani,
              Thailand. I am currently employed as a full-stack developer at PKL
              Multimedia. I have completed Computer Science (B.Sc.) at Ubon
              Ratchathani University.
            </p>
            <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              Apart from coding, some other activities that I love to do!
            </p>
            {isVisible && (
              <p className="mt-3 mx-5 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-10">
                <FontAwesomeIcon icon={faGamepad} /> Playing Games <br />
                <FontAwesomeIcon icon={faTv} /> Watching movies <br />
                <FontAwesomeIcon icon={faPlaneDeparture} /> Travelling <br />
                <FontAwesomeIcon icon={faFish} /> Fishing
              </p>
            )}
          </div>
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <Image
              className="h-60 lg:h-80 xl:h-96 w-full object-cover object-top"
              src={MyProfileIMG}
              alt="Audy photo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
