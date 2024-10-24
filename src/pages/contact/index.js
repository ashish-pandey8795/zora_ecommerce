"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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

  const [errorMessage, setErrorMessage] = useState(null); // Error handling

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setIsSubmitted(false);
    setErrorMessage(null);

    setLoader(true);
    try {
      // Make the API call to submit the form
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
    <>
      <div className="h-screen bg-gray-200 px-4 sm:p-0 w-full bg-cover bg-center">
        <div className="container mx-auto flex justify-between items-center pt-12 pr-12">
          <div
            className=""
            // style={{ paddingLeft: "calc((100vw - 100%) / 2)" }}
          >
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/Logo.svg"
                width={200}
                height={150}
                alt="Innovatiview India Pvt. Ltd.Logo"
              />
            </Link>
          </div>
          <div className="flex space-x-4">
            <button className="border border-black text-blue-500  py-2 px-4 sm:px-8 rounded-full hover:bg-opacity-80 hover:text-white transition duration-300">
              <Link href="/" className="text-black ">
                back to home
              </Link>
            </button>
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <div
            className=" flex justify-start sm:justify-between gap-10 xl:gap-0 pt-[4rem] w-full flex-wrap pr-12"
            // style={{ paddingLeft: "calc((100vw - 100%) / 2)" }}
          >
            <div className=" text-black max-w-[400px]">
              <h1 className="contact_logo text-4xl mb-8">Save the Date</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>

            {/* Show success message or error message */}
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
              <div className="grid grid-cols-2 gap-4 mb-2 w-full">
                <div>
                  <input
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  placeholder="Booking Date"
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
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
                    className="w-full rounded px-3 py-3 bg-gray-100 outline-none"
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
                    className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                  required
                >
                  <option value="" disabled>
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
                  className="w-full border rounded px-3 py-3 bg-gray-100 outline-none"
                  required
                >
                  <option value="" disabled>
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
                  className="w-full border rounded py-3 text-black px-3 bg-gray-100 outline-none"
                  required
                  placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className="border text-white bg-black outline-none rounded-full py-3 px-8 hover:bg-black-200 hover:text-white transition duration-300"
                >
                  Send Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
