import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Social from "./social/Social";

export default function Contact() {
  // EmailJS IDs
  const SERVICE_ID = "service_bnqa2rn";
  const TEMPLATE_ID = "template_g70xcab";
  const PUBLIC_KEY = "yI00N7spk2xZuMx0_";

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );

      toast.success("Thanks for contacting me!");

      setInputData({
        name: "",
        email: "",
        location: "",
        message: "",
      });

      e.target.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <div
        id="contact"
        className="w-full md:flex items-center justify-center gap-10 py-10 my-10 text-gray-100"
      >
        <div className="lg:w-[580px] flex flex-wrap w-[30%] flex-col gap-8 text-gray-200 py-10 px-10 mt-1">
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
            className="md:text-[18px] items-center text-gray-600 mt-1 ps-2 bg-[#4348573] rounded-lg border-l border-indigo-500 shadow-sm p-6 mb-2"
          >
            <div className="flex gap-2 items-center p-3">
              <CiMail className="text-indigo-400" />
              <span className="text-extralight">
                ruposhigorai27@gmail.com
              </span>
            </div>

            <div className="flex gap-2 items-center p-3">
              <CiLocationOn className="text-indigo-400" />
              <span className="text-extralight">
                Bengaluru, Karnataka, IN
              </span>
            </div>
            <div className="flex gap-0 items-center">
              <Social/>
            </div>
          </motion.div>
        </div>

        <div className="px-10 md:w-[480px] py-15">
          <h2 className="text-3xl text-gray-300 font-bold p-5 tracking-[4px] text-center sm:text-4xl">
            Contact Me
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-[400px] md:max-w-[480px] sm:mt-20 lg:mt-8"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 w-full sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-500" >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    value={inputData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    placeholder="Enter your name"
                    className="block w-full rounded-md border-0 px-3.5 md:py-2 focus:outline-none focus:ring-0 py-1 shadow-sm ring-1 ring-inset ring-indigo-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-500">
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    value={inputData.location}
                    onChange={handleChange}
                    placeholder="Enter your location"
                    autoComplete="address-level2"
                    required
                    className="block w-full rounded-md border-0 px-3.5 md:py-2 focus:outline-none focus:ring-0 py-1 shadow-sm ring-1 ring-inset ring-indigo-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-500">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={inputData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 md:py-2 py-1 focus:outline-none focus:ring-0 shadow-sm ring-1 ring-inset ring-indigo-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-500">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={inputData.message}
                    placeholder="Enter your message"
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-3.5 md:py-2 focus:outline-none focus:ring-0 py-1 shadow-sm ring-1 ring-inset ring-indigo-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="flex items-center justify-center group gap-2 w-full rounded-md bg-indigo-700 px-3.5 py-2 cursor-pointer text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                <span>Let's talk</span>
                <FaLocationArrow className="text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}