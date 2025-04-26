// components/Footer.tsx
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#007DFC] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <Image
            src="/assets/png/emp_logo.png"
            alt="Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          <p className="text-sm">
            Empowering business through <br />
            effective review management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Services</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Connect with Us</h3>
          <div className="flex space-x-3">
            <a href="#">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="#">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Bottom Text */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
        © 2025 RMS. All rights reserved.
      </div>
    </footer>
  );
}
