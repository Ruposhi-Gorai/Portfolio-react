import React from "react";
import { motion } from "framer-motion";
import { CiLocationOn, CiMail } from "react-icons/ci";

export default function Contact() {
  return (
    <>
      <div id="contact" className=" w-full md:flex items-center  justify-center gap-10 py-10 my-10 text-gray-100">
        <div className="lg:w-[580px] flex flex-wrap w-[30%] flex-col gap-8 text-gray-300 py-10 px-10 mt-1">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl lg:text-8xl font-semibold"
          >
            Let's Connect!
          </motion.h1>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-3xl mt-1 ps-2"
          >
            Say hello.
          </motion.p>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true }}
            className=" md:text-[18px]  items-center text-gray-400  mt-1 ps-2 bg-[#43485734] rounded-lg shadow-lg p-6 mb-2"
          >
            <div  className="flex gap-2 items-center p-3">
              <CiMail className="text-cyan-400 "/>{" "}
              <span className="text-extralight">ruposhigorai09@gmail.com</span>
            </div>
            <div className="flex gap-2 items-center p-3">
              <CiLocationOn  className="text-cyan-400 "/>
              <span className="text-extralight">Jamshedpur, JH INDIA</span>{" "}
            </div>
          </motion.div>
         
        </div>

        <div className="px-10 py-15 ">
          <h2 className="text-3xl  text-[#ffffff] font-light  p-5 tracking-[8px] text-center sm:text-4xl">
            Contact Me
          </h2>

          <form className="mx-auto max-w-[400px] md:max-w-[490px] sm:mt-20 lg:mt-8 ">
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-500"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 md:py-2  py-1 shadow-sm ring-1 ring-inset ring-cyan-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-500"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 md:py-2  py-1 shadow-sm ring-1 ring-inset ring-cyan-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="location"
                  className="block text-sm font-semibold leading-6 text-gray-500"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    autocomplete="location"
                    className="block w-full rounded-md border-0 px-3.5 md:py-2  py-1 shadow-sm ring-1 ring-inset ring-cyan-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="email"
                  className="block text-sm font-semibold leading-6 text-gray-500"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    className="block w-full rounded-md border-0 px-3.5 md:py-2  py-1  shadow-sm ring-1 ring-inset ring-cyan-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* <div className="sm:col-span-2">
                <label
                  for="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-500"
                >
                  Phone number
                </label>
                <div className="relative mt-2">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autocomplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 md:py-2  py-1 pl-20  shadow-sm ring-1 ring-inset ring-cyan-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block text-sm font-semibold leading-6 text-gray-500"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 md:py-2  py-1  shadow-sm ring-1 ring-inset ring-cyan-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-700 px-3.5 py-2 cursor-pointer text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
