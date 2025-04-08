import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function SingleReview() {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow p-4 mb-4 flex items-start gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold">
          <Image src="/Man.png" alt="man image" width={24} height={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Sarah Johnson</p>
            <span className="text-sm text-gray-500">Senior Software Engineer</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="mt-2 text-sm">
            Working at TechCorp has been an incredible journey. The innovative projects and
            supportive team culture make every day exciting.
          </p>
        </div>

        <div className="flex">
          <div>
            <Image src="/Right_Arrow.png" alt="arrow image" height={20} width={20} />
          </div>
          <button className="ml-auto text-blue-500 px-1 rounded-md">Send Response</button>
        </div>
      </div>
    </main>
  );
}
