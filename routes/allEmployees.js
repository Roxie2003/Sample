const express = require("express");

const router = express.Router();
const Employee = require("../models/Employee");

/*const allEmployees = {
  count: 12,
  previous: null,
  results: [
    {
      id: 1,
      url: "https://employee-data-api.vercel.app/api/employee/1/",
    },
    {
      id: 2,
      url: "https://employee-data-api.vercel.app/api/employee/2/",
    },
    {
      id: 3,
      url: "https://employee-data-api.vercel.app/api/employee/3/",
    },
    {
      id: 4,
      url: "https://employee-data-api.vercel.app/api/employee/4/",
    },
    {
      id: 5,
      url: "https://employee-data-api.vercel.app/api/employee/5/",
    },
    {
      id: 6,
      url: "https://employee-data-api.vercel.app/api/employee/6/",
    },
    {
      id: 7,
      url: "https://employee-data-api.vercel.app/api/employee/7/",
    },
    {
      id: 8,
      url: "https://employee-data-api.vercel.app/api/employee/8/",
    },
    {
      id: 9,
      url: "https://employee-data-api.vercel.app/api/employee/9/",
    },
    {
      id: 10,
      url: "https://employee-data-api.vercel.app/api/employee/10/",
    },
  ],
};
*/

const allEmployees = {
  count: 10,
  previous: null,
  results: [
    {
      id: 1,
      name: "Tiger Nixon",
      image: "/images/1.jpg",
      base_salary: 320800,
      designation: "Software developer",
      location: "Nashik",
      date_of_joining: "2022-08-16",
      bank_details: {
        acc_no: "099999999923",
        name: "ICICI Bank",
        IFSC_code: "ICIC0000999",
      },
      attendance: [
        {
          month_year: "Aug-2022",
          present_days: 21,
          overtime_hrs: 3,
        },
        {
          month_year: "Sep-2022",
          present_days: 22,
          overtime_hrs: 2,
        },
        {
          month_year: "Oct-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Nov-2022",
          present_days: 22,
          overtime_hrs: 3,
        },
        {
          month_year: "Dec-2022",
          present_days: 18,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 21,
          overtime_hrs: 2,
        },
        {
          month_year: "Feb-2023",
          present_days: 20,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 2,
      name: "Garrett Winters",
      image: "/images/2.jpg",
      base_salary: 170750,
      designation: "Web developer",
      location: "Mumbai",
      date_of_joining: "2022-12-10",
      bank_details: {
        acc_no: "099999999998",
        name: "HDFC Bank",
        IFSC_code: "HDFC0000999",
      },
      attendance: [
        {
          month_year: "Dec-2022",
          present_days: 24,
          overtime_hrs: 9,
        },
        {
          month_year: "Jan-2023",
          present_days: 20,
          overtime_hrs: 3,
        },
        {
          month_year: "Feb-2023",
          present_days: 21,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 3,
      name: "Ashton Cox",
      image: "/images/3.jpg",
      base_salary: 86000,
      designation: "Software developer",
      location: "Nashik",
      date_of_joining: "2022-10-25",
      bank_details: {
        acc_no: "099999999905",
        name: "SBI Bank",
        IFSC_code: "SBI0000999",
      },
      attendance: [
        {
          month_year: "Oct-2022",
          present_days: 23,
          overtime_hrs: 10,
        },
        {
          month_year: "Nov-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 22,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 4,
      name: "Cedric Kelly",
      image: "/images/4.jpg",
      base_salary: 433060,
      designation: "Full Stack developer",
      location: "Pune",
      date_of_joining: "2022-11-16",
      bank_details: {
        acc_no: "099999999934",
        name: "ICICI Bank",
        IFSC_code: "ICIC0000999",
      },
      attendance: [
        {
          month_year: "Nov-2022",
          present_days: 22,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 24,
          overtime_hrs: 10,
        },
        {
          month_year: "Feb-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 5,
      name: "Airi Satou",
      image: "/images/5.jpg",
      base_salary: 162700,
      designation: "Data scientist",
      location: "Nashik",
      date_of_joining: "2022-10-20",
      bank_details: {
        acc_no: "099999999945",
        name: "HDFC Bank",
        IFSC_code: "HDFC0000999",
      },
      attendance: [
        {
          month_year: "Oct-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Nov-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 22,
          overtime_hrs: 5,
        },
        {
          month_year: "Feb-2023",
          present_days: 21,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 6,
      name: "Brielle Williamson",
      image: "/images/6.jpg",
      base_salary: 372000,
      designation: "Web developer",
      location: "Banglore",
      date_of_joining: "2023-01-16",
      bank_details: {
        acc_no: "099999999999",
        name: "CBI Bank",
        IFSC_code: "CBI0000999",
      },
      attendance: [
        {
          month_year: "Jan-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 22,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 7,
      name: "Herrod Chandler",
      image: "/images/7.jpg",
      base_salary: 137500,
      designation: "Mobile App developer",
      location: "Mumbai",
      date_of_joining: "2022-11-16",
      bank_details: {
        acc_no: "099999999945",
        name: "ICICI Bank",
        IFSC_code: "ICIC0000999",
      },
      attendance: [
        {
          month_year: "Nov-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 20,
          overtime_hrs: 3,
        },
        {
          month_year: "Jan-2023",
          present_days: 22,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 24,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 8,
      name: "Rhona Davidson",
      image: "/images/8.jpg",
      base_salary: 327900,
      designation: "Full Stack developer",
      location: "Nashik",
      date_of_joining: "2023-02-27",
      bank_details: {
        acc_no: "099999999976",
        name: "SBI Bank",
        IFSC_code: "SBI0000999",
      },
      attendance: [
        {
          month_year: "Feb-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 9,
      name: "Colleen Hurst",
      image: "/images/9.jpg",
      base_salary: 205500,
      designation: "Data Scientist",
      location: "Nashik",
      date_of_joining: "2023-01-06",
      bank_details: {
        acc_no: "099999999989",
        name: "CBI Bank",
        IFSC_code: "CBI0000999",
      },
      attendance: [
        {
          month_year: "Jan-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 21,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 10,
      name: "Sonya Frost",
      image: "/images/10.jpg",
      base_salary: 103600,
      designation: "Data analyst",
      location: "Pune ",
      date_of_joining: "2022-09-16",
      bank_details: {
        acc_no: "0999999999983",
        name: "CBI Bank",
        IFSC_code: "CBI0000999",
      },
      attendance: [
        {
          month_year: "Sep-2022",
          present_days: 23,
          overtime_hrs: 0,
        },
        {
          month_year: "Oct-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Nov-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 25,
          overtime_hrs: 10,
        },
        {
          month_year: "Jan-2023",
          present_days: 22,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 24,
          overtime_hrs: 0,
        },
      ],
    },
  ],
};

const allEmployee = async (req, res) => {
  res.status(200).json(allEmployees);
  return;
};

const getAllEmployees = async (req, res) => {
  try {
    //let allEmployees = await Employee.find();
    await Employee.create({
      id: 5,
      name: "Airi Satou",
      base_salary: 162700,
      designation: "Data scientist",
      location: "Nashik",
      date_of_joining: "2022-10-20",
      bank_details: {
        acc_no: "099999999945",
        name: "HDFC Bank",
        IFSC_code: "HDFC0000999",
      },
      attendance: [
        {
          month_year: "Oct-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Nov-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 22,
          overtime_hrs: 5,
        },
        {
          month_year: "Feb-2023",
          present_days: 21,
          overtime_hrs: 0,
        },
      ],
      image:
        "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",
    });
    res.send("HIi");
    //res.status(200).json({ data: allEmployees });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

router.get("/", getAllEmployees);

module.exports = router;
