import { Metadata } from "next";
import ContactComponent from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="container my-12 mx-auto px-2 md:px-4 h-full min-h-screen xl:h-screen">
      <section className="mb-32">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">Contact me</h2>
          </div>
        </div>
        <ContactComponent />
      </section>
    </div>
  );
}
