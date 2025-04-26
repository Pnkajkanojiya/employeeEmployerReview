import { ChevronDown, Search } from 'lucide-react';

export default function CompanySearchBar() {
  return (
    <div className="w-full flex flex-col items-center bg-[#F5F5F5] py-16 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#007DFC]">
        Compare and Find Company Or Designations
      </h2>
      <p className="text-center text-gray-600 mt-2">
        India’s largest platform for company reviews, salaries, interview questions and more!
      </p>

      {/* Search Bar */}
      <div className="mt-10 bg-white rounded-full shadow-md w-full max-w-4xl px-4 py-3 flex items-center">
        {/* Left Dropdown & Label */}
        {/* Left Dropdown & Label - Stacked Vertically */}
        {/* Left Dropdown with stacked text */}
        <div className="flex flex-col items-start border-r border-gray-900 pr-4 px-3">
          <div className="flex items-center space-x-1">
            <span className="text-[#007DFC] font-semibold">Reviews</span>
            <ChevronDown size={16} className="text-[#007DFC]" />
          </div>
          <div className="text-sm text-black mt-1">About Company</div>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by company name"
          className="flex-1 px-4 text-sm text-gray-700 placeholder-gray-400 outline-none"
        />

        {/* Search Button */}
        <button className="flex items-center justify-center gap-2 bg-[#007DFC] text-white px-6 py-3 rounded-r-full hover:bg-[#0063c9] transition duration-200">
          <Search size={18} strokeWidth={2} className="text-white" />
          <span className="font-medium text-sm">Search</span>
        </button>
      </div>
    </div>
  );
}
