"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bookingDate: "",
    email: "",
    mobile: "",
    eventType: "",
    howDidYouKnow: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitted(false);
    setErrorMessage(null);

    setLoader(true);
    try {
      const response = await fetch(
        `https://pw3tie9glj.execute-api.ap-south-1.amazonaws.com/production/create-record`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "B5511B23DD5B6EBFC645484A64458",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Form Data Submitted:", result);
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          bookingDate: "",
          email: "",
          mobile: "",
          eventType: "",
          howDidYouKnow: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="pb-12 sm:pb-0 bg-[#FFFFFF] px-4 sm:p-0 w-full min-h-screen h-full bg-cover bg-center"
      >
        <div className="relative z-10 h-full pt-12 pb-12">
          <Navbar contact={false} logo="/WhiteBlackLogo.svg" />
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <div className=" flex justify-center sm:justify-between gap-10 xl:gap-0 pt-[2rem] w-full flex-wrap md:pr-12">
            <div className=" text-black max-w-[400px]">
              <h1 className="contact_logo text-4xl mb-4">Save the Date</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>

            {/* Success or error message */}
            {isSubmitted && (
              <div className="absolute top-8 mb-6 text-blue-500 text-center font-semibold">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {errorMessage && (
              <div className="absolute top-8 mb-6 text-red-500 text-center font-semibold">
                Error: {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="max-w-[600px] w-full">
              {/* Form content */}
              <div className="grid grid-cols-2 gap-4 mb-2 w-full">
                <input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-5 bg-[#F5F5F5] outline-none text-xs"
                  required
                />
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-5 bg-[#F5F5F5] outline-none text-xs"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  placeholder="Booking Date"
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="w-full   px-3 py-5 bg-[#F5F5F5] outline-none text-xs"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full  px-3 py-5 bg-[#F5F5F5] outline-none text-xs"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Mobile"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full   px-3 py-5 bg-[#F5F5F5] outline-none text-xs"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className=" select_event w-full rounded-none px-3 py-5 bg-[#F5F5F5] outline-none text-xs"
                  required
                >
                  <option className="default_text" value="" disabled>
                    Select event type
                  </option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="conference">Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <select
                  name="howDidYouKnow"
                  value={formData.howDidYouKnow}
                  onChange={handleChange}
                  className="select_event w-full px-3 py-5 bg-[#F5F5F5] outline-none text-xs rounded-none"
                  required
                >
                  <option className="default_text" value="" disabled>
                    How did you hear about us?
                  </option>
                  <option value="socialMedia">Social Media</option>
                  <option value="friend">Friend/Referral</option>
                  <option value="website">Our Website</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full   py-5 text-black px-3 bg-[#F5F5F5] outline-none text-xs"
                  required
                  placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
                />

                <div className="py-2 text-[10px] text-[#212020]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores
                </div>
              </div>

              <div className="md:mb-8">
                <button
                  type="submit"
                  className="text-white text-[14px] bg-black outline-none py-4 px-8 hover:bg-black-200 hover:text-white transition duration-300"
                >
                  Send Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
