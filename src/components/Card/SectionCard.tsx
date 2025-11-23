import Image from "next/image";
import jslogo from "@public/images/logo/tools/js02-svgrepo-com.svg";
import tslogo from "@public/images/logo/tools/icons8-typescript.svg";
import pylogo from "@public/images/logo/tools/python-127-svgrepo-com.svg";
import clogo from "@public/images/logo/tools/icons8-c++.svg";
import nodelogo from "@public/images/logo/tools/icons8-nodejs.svg";
import djlogo from "@public/images/logo/tools/icons8-django.svg";
import fast from "@public/images/logo/tools/fastapi-svgrepo-com.svg";
import nextlogo from "@public/images/logo/tools/icons8-nextjs.svg";
import nestogo from "@public/images/logo/tools/icons8-nestjs.svg";
import reactlogo from "@public/images/logo/tools/react-svgrepo-com.svg";
import ioniclogo from "@public/images/logo/tools/ionic-svgrepo-com.svg";
import tsflogo from "@public/images/logo/tools/tensorflow-svgrepo-com.svg";
import sqllogo from "@public/images/logo/tools/mysql-svgrepo-com.svg";
import mongologo from "@public/images/logo/tools/mongodb-svgrepo-com.svg";
import postlogo from "@public/images/logo/tools/postgresql-svgrepo-com.svg";
import redislogo from "@public/images/logo/tools/redis-svgrepo-com.svg";
import githublogo from "@public/images/logo/tools/github-142-svgrepo-com.svg";
import gitlablogo from "@public/images/logo/tools/gitlab-svgrepo-com.svg";
import dockerlogo from "@public/images/logo/tools/docker-svgrepo-com.svg";
// import figmalogo from "@public/images/logo/tools/figma-svgrepo-com.svg";
import "@/css/index.css";

export default function CardSection() {
  return (
    <section id="our-team" className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Skillset
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-8">
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={jslogo} alt="Javascript" />
            </div>
            <h3 className="text-sm lg:text-xl text-center font-semibold mb-2">
              Javascript
            </h3>
          </div>

          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={tslogo} alt="TypeScript" />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">
              TypeScript
            </h3>
          </div>

          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={pylogo} alt="Python" />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Python</h3>
          </div>

          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={clogo} alt="C++" />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">C++</h3>
          </div>

          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={nodelogo}
                alt="Node.js"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Node.js</h3>
          </div>

          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={djlogo} alt="Django" />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Django</h3>
          </div>

          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={fast} alt="FastAPI" />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">FastAPI</h3>
          </div>

          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={nextlogo}
                alt="NextJS"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">NextJS</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={nestogo} alt="NestJS" />
            </div>
            <h3 className="text-sm font-semibold mb-2">NestJS</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={reactlogo}
                alt="ReactJS"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">ReactJS</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={ioniclogo}
                alt="Ionic"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Ionic</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={tsflogo} alt="TensorFlow" />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">
              TensorFlow
            </h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image className="w-14 md:w-18 lg:w-20 mb-4" src={sqllogo} alt="MySQL" />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">MySQL</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={mongologo}
                alt="MongoDB"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">MongoDB</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={postlogo}
                alt="PostgreSQL"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">
              PostgreSQL
            </h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={redislogo}
                alt="Redis"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Redis</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={githublogo}
                alt="GitHub"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">GitHub</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md lg:p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={gitlablogo}
                alt="GitLab"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">GitLab</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 my-6 py-2 h-28 lg:h-40 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <div className="flex justify-center">
              <Image
                className="w-14 md:w-18 lg:w-20 mb-4"
                src={dockerlogo}
                alt="Docker"
              />
            </div>
            <h3 className="text-sm lg:text-xl font-semibold mb-2">Docker</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
