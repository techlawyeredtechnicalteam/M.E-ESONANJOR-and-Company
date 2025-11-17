import Image from "next/image";
import logo from "../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Firm Name */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={logo}
            alt=" M.E ESONANJOR and Company Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <h3 className="mt-4 text-2xl font-bold font-garamond tracking-wider leading-tight text-center md:text-left uppercase">
            M.E ESONANJOR and Company
          </h3>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-garamond mb-4">Contact Details</h4>
          <address className="not-italic text-lg">
            34 Oduduwa Way,
            <br />
            GRA, Ikeja,
            <br />
            Lagos, Nigeria.
          </address>
          <p className="mt-4 text-lg">
            Phone:{" "}
            <a href="tel:+2347048828395" className="hover:underline">
              +234 704 882 8395
            </a>
            <br />
            <a href="tel:+2348033818650" className="hover:underline">
              +234 803 381 8650
            </a>
          </p>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:attorney@mesonanjor.com"
              className="hover:underline"
            >
              attorney@mesonanjor.com
            </a>
          </p>
        </div>

        {/* Office Hours */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-2xl font-garamond mb-4">Office Hours</h4>
          <div className="text-lg">
            <p>Monday to Friday: 8:00 AM – 5:30 PM</p>
            <p>Saturday: Closed</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Socials and Accessibility */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-500 pt-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Social Links */}
          <div>
            <h4 className="text-xl font-garamond mb-4 md:mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a
                href="https://www.facebook.com/share/16LqV19wid/?mibextid=wwXIfr"
                aria-label="Facebook"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/m-e-esonanjor-and-company-1b4035390"
                aria-label="LinkedIn"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/m.e_esonanjor.co?igsh=cnExdW1waTJlYmxk&utm_source=qr"
                aria-label="Instagram"
                className="hover:text-gray-300 focus:text-gray-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* copyright reserved */}
          <div className="mt-6 md:mt-0 text-sm ">
            &copy; {new Date().getFullYear()} M.E ESONANJOR AND COMPANY. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
