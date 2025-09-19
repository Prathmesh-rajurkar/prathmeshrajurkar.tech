import { MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-20 px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-black">
            Let&apos;s Connect!
          </h1>
          <div className="absolute -top-2 -right-12 sm:-right-16 text-orange-500 dark:text-purple-500">
            <MessageCircle size={40} strokeWidth={1.5} />
          </div>
        </div>
        <div className="w-32 h-px bg-orange-600 dark:bg-purple-600 mt-6"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col-reverse sm:flex-row gap-8 items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="space-y-6 text-center md:text-left w-90">
          <p className="text-neutral-700 dark:text-neutral-300">
            I&apos;m always looking to make new connections, so drop me an email or
            shoot me a DM on Twitter. Who knows where the conversation could
            lead?
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            Let&apos;s explore the possibilities and see where it takes us!
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="mailto:prathmeshrajurkar199@gmail.com"
              className="inline-block mt-4 py-2 px-5 rounded text-white dark:text-black bg-orange-600 dark:bg-purple-600 hover:bg-orange-700 dark:hover:bg-purple-700 transition-colors"
            >
              Contact Me <span className="move-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {/* Placeholder SVG Illustration */}
            <Image
            src={'/connect.svg'}
            alt='connect_svg'
            width={350}
            height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;