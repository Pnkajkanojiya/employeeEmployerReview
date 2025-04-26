// components/TestimonialsSection.tsx
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emma Fox',
    title: 'Software Developer',
    date: '06/11/2023',
    review:
      'An incredible company to do business with. They have helped me with many endgame activities in Destiny 2. All runs have been completed quickly, professionall...',
    rating: 4,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    avatar: '/assets/png/Ellipse 20.png', // Add images in public/avatars
  },
  {
    name: 'Brandon',
    title: 'Digital Marketer',
    date: '12/11/2023',
    review:
      'An incredible company to do business with. They have helped me with many endgame activities in Destiny 2. All runs have been completed quickly, professionall...',
    rating: 3,
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-300',
    avatar: '/assets/png/Ellipse 20.png',
  },
  {
    name: 'Matthew',
    title: 'UX Designer',
    date: '16/11/2023',
    review:
      'An incredible company to do business with. They have helped me with many endgame activities in Destiny 2. All runs have been completed quickly, professionall...',
    rating: 4,
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-300',
    avatar: '/assets/png/Ellipse 20.png',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          What Users are <span className="text-blue-600">Saying</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl ${item.bgColor} border ${item.borderColor} p-6 shadow-sm`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image src={item.avatar} alt={item.name} width={56} height={56} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">{item.review}</p>

            <div className="text-sm text-gray-500 mb-2">{item.date}</div>

            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.177 3.624a1 1 0 00.95.69h3.805c.969 0 1.371 1.24.588 1.81l-3.077 2.237a1 1 0 00-.364 1.118l1.178 3.623c.3.922-.755 1.688-1.538 1.118l-3.077-2.236a1 1 0 00-1.175 0l-3.078 2.236c-.782.57-1.837-.196-1.538-1.118l1.178-3.623a1 1 0 00-.364-1.118L2.43 9.051c-.783-.57-.38-1.81.588-1.81h3.805a1 1 0 00.95-.69l1.177-3.624z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {[0, 1, 2, 3].map((dot, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-gray-300'} transition`}
          />
        ))}
      </div>
    </section>
  );
}
