import Image from "next/image";
import maillogo from "@public/images/logo/email-svgrepo-com.svg";
// import phone from "@public/images/logo/phone-svgrepo-com.svg";
import profilelogo from "@public/images/logo/profile-user.svg";

export default function ContactComponent() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="mb-2 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
          <div className="flex items-start">
            <div className="shrink-0">
              <div className="inline-block rounded-md bg-teal-400-100 text-teal-700">
                <Image src={maillogo} alt="Audy email" width={55} height={55} />
              </div>
            </div>
            <div className="ml-2 grow text-sm lg:text-base">
              <p className="mb-2 font-bold">Email</p>
              <p className="text-neutral-500 ">audy.work1208@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                      <Image
                        src={phone}
                        alt="Audy tel"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div className="ml-2 grow">
                    <p className="mb-2 font-bold ">Phone</p>
                    <p className="text-neutral-500 ">+66 987-2364-71</p>
                  </div>
                </div>
              </div> */}
        <div className="mb-2 w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-6">
          <div className="align-start flex">
            <div className="shrink-0">
              <div className="inline-block rounded-md bg-teal-400-100 text-teal-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="55"
                  height="55"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="ml-2 grow text-sm lg:text-base">
              <p className="mb-2 font-bold ">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/woranat-boonanake-b396a730a/"
                target="_blank"
                className="text-neutral-500 no-underline hover:text-sky-500"
              >
                Woranat Boonanak
              </a>
            </div>
          </div>
        </div>
        <div className="mb-2 w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-6">
          <div className="align-start flex">
            <div className="shrink-0">
              <div className="inline-block rounded-md bg-teal-400-100 text-teal-700">
                <Image
                  src={profilelogo}
                  alt="Audy Socail"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="ml-2 grow text-sm lg:text-base">
              <p className="mb-2 font-bold">Social Media</p>
              <a
                href="https://line.me/ti/p/kTwr_DhEot"
                target="_blank"
                className="text-neutral-500 flex justify-start items-center mb-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#00c300"
                    d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"
                  ></path>
                </svg>
                Audyx
              </a>
              <a
                href="https://www.facebook.com/AudyWB/"
                target="_blank"
                className="text-neutral-500 flex justify-start items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
                Woranat Boonanak
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
