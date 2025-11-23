export default function Timeline() {
  return (
    <ol className="items-center sm:flex px-4">
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 ml-2 lg:ml-0 text-[#0077C0]">
            2021
          </div>
          <div className="opacity-0 lg:opacity-100 sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 mx-4" />
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Freelance front end developer
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Web Developer
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-6 h-6 ml-2 lg:ml-0 text-[#0077C0]">
            2022
          </div>
          <div className="opacity-0 lg:opacity-100 sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 mx-4" />
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Internship at Entronica
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Software Developer
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-10 flex items-center justify-center w-56 h-6 text-[#0077C0] text-nowrap -ml-1">
            2023 - Present
          </div>
          <div className="opacity-0 lg:opacity-100 sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            PKL Multimedia.
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </p>
        </div>
      </li>
    </ol>
  );
}
