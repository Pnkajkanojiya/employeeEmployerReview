import Image from 'next/image';
const FeaturedCompanies = () => {
  const companies = [
    {
      name: 'Tidel Park',
      type: 'Software Company',
      image: '/assets/png/image.png',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      active: true,
    },
    {
      name: 'Infosys Limited',
      type: 'IT Company',
      image: '/assets/png/Infosysbuilding.png',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    },
    {
      name: 'Hotelier’s International',
      type: 'Recruitment Agency',
      image: '/assets/png/image(1).png',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    },
  ];
  return (
    <div className="w-full bg-white py-16 px-4 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug mb-6 text-center md:text-left">
            Explore Featured Companies <br className="hidden md:block" />
            with Just One Click.
          </h2>
          <div className="rounded-tr-[40px] rounded-bl-[40px] overflow-hidden w-full h-auto">
            <Image
              src="/assets/png/Bannerslider.png"
              alt="People meeting"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-center md:text-left text-[18px] md:text-[22px] text-[#555] font-medium mb-6">
            Compare Companies To Find The{' '}
            <span className="text-blue-600 font-semibold">Best Workplace</span>
          </h3>

          <div className="flex flex-col md:flex-row gap-6">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className={`flex-1 rounded-2xl border ${
                  company.active ? 'border-blue-400' : 'border-gray-200'
                } p-4 text-center transition-all hover:shadow-lg`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-lg text-black mb-1">{company.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{company.type}</p>
                <p className="text-sm text-gray-600 mb-4 px-2">{company.description}</p>
                <button
                  className={`text-sm underline ${
                    company.active ? 'text-blue-600' : 'text-black hover:text-blue-600'
                  }`}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Pagination + View All */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            </div>
            <button className="px-6 py-2 border border-blue-600 rounded-xl text-blue-600 font-semibold hover:bg-blue-50">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompanies;
