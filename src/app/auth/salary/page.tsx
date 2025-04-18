'use client';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
// import { useRef } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { log } from "console";

export default function SalaryComparison() {
  const salaries = [
    {
      company: 'TCS',
      role: 'Software Engineer',
      exp: ' 0 - 7 years exp. (26.4k salaries)',
      salary: '₹2 L/yr - ₹9.3 L/yr',
    },
    {
      company: 'Infosys',
      role: 'Software Developer ',
      exp: '0 - 7 years exp. (26.4k salaries)',
      salary: '₹2 L/yr - ₹9.3 L/yr',
    },
    {
      company: 'Wipro',
      role: 'Frontend Developer',
      exp: ' 0 - 7 years exp. (26.4k salaries)',
      salary: '₹2 L/yr - ₹9.3 L/yr',
    },
    {
      company: 'Capgemini',
      role: 'Backend Engineer',
      exp: ' 0 - 7 years exp. (26.4k salaries)',
      salary: '₹2 L/yr - ₹9.3 L/yr',
    },
    {
      company: 'Accenture',
      role: 'Full Stack Developer ',
      exp: '0 - 7 years exp. (26.4k salaries)',
      salary: '₹2 L/yr - ₹9.3 L/yr',
    },
  ];

  const companies = [
    {
      id: 1,
      name: 'TCS',
      logo: '/tcs.png',
      roles: [
        { title: 'UI Architect (12 yrs exp)', salary: '₹6L - ₹15L' },
        { title: 'System Engineer (3 yrs exp)', salary: '10L - 9.0L' },
      ],
      totalSalaries: '8.0L salaries',
    },
    {
      id: 2,
      name: 'Accenture',
      logo: '/accenture.png',
      roles: [
        { title: 'Test Analyst (12 yrs exp)', salary: '₹6L - ₹15L' },
        { title: 'System Engineer (3 yrs exp)', salary: '10L - 9.0L' },
      ],
      totalSalaries: '8.0L salaries',
    },
    {
      id: 3,
      name: 'Cognizant',
      logo: '/Cognizant.png',
      roles: [
        { title: 'Test Analyst (12 yrs exp)', salary: '₹6L - ₹15L' },
        { title: 'System Engineer (3 yrs exp)', salary: '10L - 9.0L' },
      ],
      totalSalaries: '8.0L salaries',
    },
    {
      id: 4,
      name: 'Wipro',
      logo: '/wipro.png',
      roles: [
        { title: 'Test Analyst (12 yrs exp)', salary: '₹6L - ₹15L' },
        { title: 'System Engineer (3 yrs exp)', salary: '10L - 9.0L' },
      ],
      totalSalaries: '8.0L salaries',
    },
  ];

  console.log(companies[0].name);

  //   const scrollRef = useRef();

  const handleNext = () => {
    //    scrollRef.current?.scrollBy({
    //      left: 300,
    //        behavior: 'smooth',
    //     });
  };

  const handlePrev = () => {
    // // scrollRef.current?.scrollBy({
    // //   left: -300,
    // //   behavior: 'smooth',
    // });
  };
  //   useEffect(() => {
  //      companies.forEach((company) => {
  //        console.log(company.name); // ✅ Console output now works
  //      });
  //    }, []);

  return (
    <>
      <div className="bg-white">
        <div>
          <div className="bg-white h-20 flex justify-between  items-center shadow-md">
            <div>
              <Image src="/emp-logo.png" alt="logo" width={100} height={40} className=" ms-5" />
            </div>
            <div>
              <ul className="flex lg:space-x-12  lg:me-15">
                <li className="text-black px-2  "> Dashboard</li>
                <li className="text-black px-2 "> Settings</li>
                <li className="text-black px-2 "> Logout </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-full  rounded-t-lg text-white">
          <Image
            src="/Salary.png"
            alt="salary"
            width={1000}
            height={200}
            style={{ width: '100%' }}
            className="z-[-30] sm:h-[300px]"
          />
          <div className="my-10 text-center absolute top-[88px] left-[101px] z-[33]">
            <h1 className="lg:text-2xl font-bold sm:text-2xs sm:hidden md:block text-black">
              Know Your Worth – Explore Salaries Across Industries
            </h1>
            <p className="font-bold sm:hidden md:block text-black">
              Compare salaries, analyze trends, and make informed career decisions.
            </p>
            <div className="p-1 bg-white rounded-full lg:top-10 shadow-xl lg:left-0 mt-5 me-5 absolute z-10 sm:hidden md:block">
              <div className="bg-blue-600 rounded-full ">
                <Image
                  src="/GPT-logo.png"
                  alt="logo"
                  width={80}
                  height={40}
                  className="sm:hidden md:block  "
                />
              </div>
            </div>
          </div>

          <div className="  bg-white lg:mt-[-60px] z-20 relative rounded-t-[5rem] lg:p-6">
            <div className="lg:mx-20  md:mx-10 sm:mx-5 mx-0">
              <div className="relative px-10 mb-4">
                <FaSearch className="absolute left-14 top-16 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter job title or Company Name"
                  className="w-full mt-[44px] p-3 text-sm   lg:pl-10 shadow-md text-gray-500 shadow-gray-400 mb-4 rounded-full"
                />
              </div>
              <div className="flex  items-center overflow-hidden">
                <FiFilter className="text-xl ml-5 mr-2 text-gray-600" />
                <p className="text-black mr-2">Filter</p>
                <select className="text-black rounded-full outline-none mx-2.5   shadow-[3px_-3px_5px_rgb(205,213,255),1px_0px_2px_rgb(205,213,255)] px-5 py-3">
                  <option value="">Department</option>
                </select>
                <select className="text-black rounded-full outline-none mx-2.5 shadow-[3px_-3px_5px_rgb(205,213,255),1px_0px_2px_rgb(205,213,255)]  px-5 py-3">
                  <option value="">Experience</option>
                </select>
              </div>

              <div className=" min-h-screen overflow-hidden">
                <div className="w-full  ">
                  <br></br>

                  <h2 className="text-xl font-semibold text-gray-900 mb-4 ml-[25px]">
                    Salary Comparison
                  </h2>

                  <div className="relative px-6">
                    <p className="text-gray-600">
                      Compare salaries between highest paying companies
                    </p>
                    <br></br>
                    <FaSearch className="absolute left-9 top-18 transform -translate-y-1/2 text-blue-500" />
                    <input
                      type="text"
                      placeholder="Search Job Profiles...."
                      className=" w-[370px] p-3 pl-10 shadow outline-none border border-black text-blue-600 mb-10"
                    />
                  </div>

                  {/*table part hai yeh   */}

                  <div
                    className="w-full flex justify-start md:mx-2 sm:mx-2 lg:ml-[24px]
                "
                  >
                    <table className="w-[1000px] border-collapse border border-gray-300 shadow-md shadow-gray-500">
                      <thead className="w-full">
                        <tr className="bg-blue-600  w-full text-white shadow-md shadow-gray-500">
                          <th className="p-3 text-left " style={{ paddingLeft: '41px' }}>
                            Company Name
                          </th>
                          <th className="p-3 text-right" style={{ paddingRight: '38px' }}>
                            Avg Annual Salary
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {salaries.map((item, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-300 shadow-md shadow-gray-500"
                          >
                            <td className="p-3 flex  space-x-3">
                              <Image
                                src="/TechMahindra.png"
                                alt="Company Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                              <div>
                                <p className="font-medium text-gray-800">{item.company}</p>
                                <p className="text-sm text-gray-600">{item.role}</p>
                                <p className="text-sm text-gray-600">{item.exp}</p>
                              </div>
                            </td>
                            <td
                              className="p-3 text-gray-800 text-right "
                              style={{ paddingRight: '38px' }}
                            >
                              {item.salary}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* {Yeh hai multiple company ka option hai } */}

                <div className="mt-6 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Salaries for Popular Roles
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <button className="p-3 bg-gray-200 rounded text-gray-800 hover:bg-gray-300">
                      Software Engineer
                    </button>
                    <button className="p-3 bg-gray-200 rounded text-gray-800 hover:bg-gray-300">
                      Data Analyst
                    </button>
                    <button className="p-3 bg-gray-200 rounded text-gray-800 hover:bg-gray-300">
                      Product Manager
                    </button>
                    <button className="p-3 bg-gray-200 rounded text-gray-800 hover:bg-gray-300">
                      UI/UX Designer
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white rounded-lg shadow relative">
                  {/* Slider Buttons */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
                  >
                    ⬅️
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
                  >
                    ➡️
                  </button>

                  {/* Company Cards */}
                  <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
                    {companies.map((company) => (
                      <div
                        key={company.id}
                        className="min-w-[260px] sm:min-w-[300px] bg-white shadow-md rounded-xl p-4 flex-shrink-0"
                      >
                        <div className="flex flex-row justify-between items-center mb-2">
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="w-10 h-10 object-contain"
                          />
                          <div>
                            <h3 className="text-lg font-bold">TCS</h3>
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold text-yellow-500">2.7 ★</span> salary
                              Rating
                            </p>
                          </div>
                        </div>
                        <div className="text-sm text-gray-700 space-y-1 mb-3">
                          {company.roles.map((role, index) => (
                            <div key={index}>
                              <p className="text-end">{role.title}</p>
                              <p className="text-gray-500 text-end">{role.salary}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Contribute & Help Others
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    <button className="p-3 flex flex-col items-center bg-blue-600 text-white rounded hover:bg-blue-700">
                      <Image
                        src="/Contribute-1.png"
                        width={50}
                        height={50}
                        alt="contribute"
                        className="text-white  "
                      />
                      Submit Salary
                    </button>
                    <button className="p-3 flex flex-col items-center bg-blue-600 text-white rounded hover:bg-blue-700">
                      <Image
                        src="/Contribute-2.png"
                        width={50}
                        height={50}
                        alt="contribute"
                        className="text-white  "
                      />
                      Compare Salaries
                    </button>
                    <button className="p-3 flex flex-col items-center  bg-blue-600 text-white rounded hover:bg-blue-700">
                      <Image
                        src="/Contribute-3.png"
                        width={50}
                        height={50}
                        alt="contribute"
                        className="text-white  "
                      />
                      Upload Payslip
                    </button>
                    <button className="p-3 flex flex-col items-center bg-blue-600 text-white rounded hover:bg-blue-700">
                      <Image
                        src="/Contribute-4.png"
                        width={50}
                        height={50}
                        alt="contribute"
                        className="text-white  "
                      />
                      Calculate In-hand Salary
                    </button>
                  </div>
                </div>

                <form
                  action="
        "
                >
                  <div className="mt-6 p-6 flex  flex-wrap justify-between items-end bg-white rounded-lg shadow">
                    <div className="flex-col  ">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                          Calculate your in-hand Salary
                        </h2>
                      </div>
                      <div className=" flex flex-wrap justify-between gap-20">
                        <input
                          type="text"
                          className="p-1  focus:outline-none text-center bg-white text-gray-600 rounded-4xl shadow-md shadow-gray-500"
                          placeholder="Enter Company"
                        />
                        <input
                          type="text"
                          className="p-1  focus:outline-none text-center bg-white text-gray-600 rounded-4xl shadow-md shadow-gray-500"
                          placeholder="Enter Designation"
                        />
                        <input
                          type="number"
                          className=" p-1 focus:outline-none text-center bg-white text-gray-600 rounded-4xl shadow-md shadow-gray-500"
                          placeholder="Enter Annual Salary"
                        />
                      </div>
                    </div>
                    <div>
                      <button className=" px-7 py-5 shadow-md text-blue-500 text-2xl shadow-gray-500 rounded-full">
                        Calculate
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
