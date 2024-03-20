"use client";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Appointments = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Assuming you handle these state for actual form values
  const [appointmentDetails, setAppointmentDetails] = useState({
    department: "",
    doctor: "",
    fullName: "",
    phoneNumber: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(appointmentDetails);
  };

  return (
    <motion.section
      className="appointment section"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left">
          Reserva una cita o llama al:{" "}
          <span className="text-accent-tertiary">(412)-299-4614</span>
        </h2>

        <form
          className="appointment__form flex flex-col gap-y-5"
          id="appointment-formid"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col xl:flex-row gap-5">
            <div className="select relative flex items-center">
              <select
                className="appearance-none outline-none h-full w-full bg-transparent px-4"
                name="department"
                value={appointmentDetails.department}
                onChange={handleChange}
              >
                <option value="">Select department</option>
                <option value="1">Department 1</option>
                <option value="2">Department 2</option>
                <option value="3">Department 3</option>
              </select>
              <MdKeyboardArrowDown className="text-[26px] text-primary absolute right-4 pointer-events-none" />
            </div>

            <div className="select relative flex items-center">
              <select
                className="appearance-none outline-none h-full w-full bg-transparent px-4"
                name="doctor"
                value={appointmentDetails.doctor}
                onChange={handleChange}
              >
                <option value="">Select doctor</option>
                <option value="1">Dr. Jane Doe</option>
                <option value="2">Dr. John Doe</option>
                <option value="3">Dr. Bob Smith</option>
              </select>
              <MdKeyboardArrowDown className="text-[26px] text-primary absolute right-4 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-5">
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              name="fullName"
              value={appointmentDetails.fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              className="input"
              placeholder="Phone Number"
              name="phoneNumber"
              value={appointmentDetails.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col xl:flex-row gap-5">
            <input
              className="input"
              type="date"
              name="date"
              value={appointmentDetails.date}
              onChange={handleChange}
            />
            <input
              className="input"
              type="time"
              name="time"
              value={appointmentDetails.time}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-lg btn-accent self-start" type="submit">
            Book an appointment
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Appointments;
