// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';

// export default function ReviewForm() {
//   const [overallRating] = useState(3);
//   const [ratings] = useState({
//     workLifeBalance: 3,
//     salaryBenefits: 3,
//     promotionsAppraisal: 3,
//     jobSecurity: 3,
//     skillDevelopmentLearning: 3,
//     workSatisfaction: 3,
//     companyCulture: 3,
//   });
//   const [companyName, setCompanyName] = useState('');
//   const [review, setReview] = useState('');
//   const [pros, setPros] = useState('');
//   const [cons, setCons] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [category, setCategory] = useState('');
//   const [anonymous, setAnonymous] = useState(false);

//   // const handleRatingChange = (category, value) => {
//   //   setRatings({ ...ratings, [category]: value });
//   // };

//   const handleSubmit = () => { //Ismein e pass kiya hai parameter mein jo a
//     // e.preventDefault();
//     const formData = {
//       overallRating,
//       ratings,
//       companyName,
//       review,
//       pros,
//       cons,
//       designation,
//       category,
//       anonymous,
//     };
//     console.log('Submitted Review:', formData);
//     // You can replace this with an API call
//   };

//   return (
//     <div>
//       <div className="bg-white h-20">
//         <Image src="/emp-logo.png" alt="Logo" className="ml-5 pt-4" width={100} height={40} />
//       </div>

//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#007DFC] via-[#015FC0] to-[#015FC0]">
//         <div className="p-6 rounded-lg max-w-md w-full">
//           <h2 className="text-xl font-bold text-center">Reviews Management System</h2>
//           <p className="text-center text-white">Rate your company, anonymously!</p>

//           <div className="text-center my-3">
//             <p className="font-medium">Overall Rating*</p>
//             {/* <div className="flex justify-center">
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <><FaStar key={num} className={`cursor-pointer text-2xl ${overallRating >= num ? 'text-yellow-500' : 'text-gray-300'}`} onClick={() => setOverallRating(num)} /><span key={num}></span></>
//               ))}
//             </div> */}
//           </div>

//           <div className="bg-white max-w-6xl rounded-lg p-2">
//             <p className='text-black'> Company Name </p>
//             <input
//               type="text"
//               placeholder="Enter Company Name"
//               className="w-full border p-2 rounded mt-2 border-gray-400 text-gray-700"
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//             />

//             <div className="mt-4">
//               <p className="font-medium text-black ms-2 mb-2">Rate your company on the following criteria</p>
//               <div className="flex flex-wrap">
//                 {Object.keys(ratings).map((key) => (
//                   <div key={key} className="w-1/2 mb-3 p-2">
//                     <div className='w-full'>
//                       <p className="capitalize text-black">{key.replace(/([A-Z])/g, ' $1')}</p>
//                       <div className="flex">
//                         {/* {[1, 2, 3, 4, 5].map((num) => (
//                           <FaStar key={num} className={`cursor-pointer text-xl ${ratings[key] >= num ? 'text-yellow-500' : 'text-gray-300'}`} onClick={() => handleRatingChange(key, num)} />
//                         ))} */}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <p className='text-black font-bold mt-5'>Write Your Review</p>
//             <textarea
//               placeholder="Share your experience..."
//               className="w-full border-gray-400 text-gray-700 border p-2 rounded mt-2 h-40"
//               value={review}
//               onChange={(e) => setReview(e.target.value)}
//             ></textarea>

//             <p className='text-black font-bold mt-5'>Pros</p>
//             <input
//               type="text"
//               placeholder="Pros"
//               className="w-full border border-gray-400 text-gray-700 p-2 rounded mt-2"
//               value={pros}
//               onChange={(e) => setPros(e.target.value)}
//             />
//             <p className='text-black font-bold mt-5'>Cons</p>
//             <input
//               type="text"
//               placeholder="Cons"
//               className="w-full border p-2 border-gray-400 text-gray-700 rounded mt-2"
//               value={cons}
//               onChange={(e) => setCons(e.target.value)}
//             />

//             <div className="flex gap-2 mt-2">
//               <div className="w-1/2">
//                 <p className='text-black font-bold mt-5'>Designation</p>
//                 <select
//                   className="border p-2 rounded text-gray-700 border-gray-400"
//                   value={designation}
//                   onChange={(e) => setDesignation(e.target.value)}
//                 >
//                   <option>Select</option>
//                   <option>Software Engineer</option>
//                   <option>Manager</option>
//                   <option>Intern</option>
//                 </select>
//               </div>
//               <div className="w-1/2">
//                 <p className='text-black font-bold mt-5'>Company Category</p>
//                 <select
//                   className="w-full border p-2 rounded text-gray-700 border-gray-400"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                 >
//                   <option>Select</option>
//                   <option>IT</option>
//                   <option>Finance</option>
//                   <option>Healthcare</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex items-center mt-2">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={anonymous}
//                 onChange={() => setAnonymous(!anonymous)}
//               />
//               <p className='text-black'>Submit Anonymously</p>
//             </div>

//             <button
//               className="w-full bg-blue-600 text-white p-2 rounded mt-4"
//               onClick={handleSubmit}
//             >
//               Submit Review
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
