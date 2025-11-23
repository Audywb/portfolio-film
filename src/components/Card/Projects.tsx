import Image from "next/image";
export default function Projects() {
  return (
    <section id="our-works" className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Projects
        </h2>

        <section className="py-2">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    H-Member{" "}
                    <span className="text-sm font-medium text-nowrap">
                      (Web Application)
                    </span>
                  </h2>

                  <p className="mt-4 text-gray-700">
                    H-Member is a customer membership system featuring points
                    accumulation and a referral program that rewards members
                    with cashback credits.
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src="/images/projects/project-01.jpg"
                  className="shadow-md"
                  alt="Membership system"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <Image
                  src="/images/projects/project-02.jpg"
                  className="shadow-md"
                  alt="LaNgan"
                  width={1920}
                  height={1080}
                />
              </div>
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    LaNgan{" "}
                    <span className="text-sm font-medium text-nowrap">
                      (Web Application)
                    </span>
                  </h2>

                  <p className="mt-4 text-gray-700">
                    LaNgan is an internal system designed for organizations,
                    enabling employees to submit leave and overtime (OT)
                    requests. A key feature is its integration with the LINE
                    application; leave requests automatically trigger
                    notifications sent directly to the relevant supervisor&apos;s
                    LINE account. Supervisors can then conveniently review and
                    approve these requests directly within the LINE application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Order Management System{" "}
                    <span className="text-sm font-medium text-nowrap">
                      (Web Application)
                    </span>
                  </h2>

                  <p className="mt-4 text-gray-700">
                    An Order Management System designed to handle order
                    processing workflows and generate comprehensive sales
                    reports.
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src="/images/projects/project-03.jpg"
                  className="shadow-md"
                  alt="OMS"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <Image
                  src="/images/projects/project-04.jpg"
                  className="shadow-md"
                  alt="Warehouse"
                  width={1920}
                  height={1080}
                />
              </div>
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    Warehouse System{" "}
                    <span className="text-sm font-medium text-nowrap">
                      (Web Application)
                    </span>
                  </h2>

                  <p className="mt-4 text-gray-700">
                    Inventory management system and delivery to parcel delivery
                    service providers via API.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-2">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    IoT Smart Door Lock System{" "}
                  </h2>

                  <p className="mt-4 text-gray-700">
                    This project involved the development of an
                    internet-controlled door locking system. The system features
                    door-mounted devices that enable remote unlocking via the
                    internet. Users can unlock doors by scanning a QR code at
                    the entrance and authorizing access through a web browser
                    interface. Furthermore, the system allows for the
                    simultaneous control of multiple doors. Administrators can
                    monitor door unlock history, and a permission management
                    system ensures that only authorized users can gain access.
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src="/images/projects/project-05.jpg"
                  className="shadow-md"
                  alt="Smart Door Lock"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
