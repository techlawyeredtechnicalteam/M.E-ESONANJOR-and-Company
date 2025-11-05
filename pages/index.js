"use client";

import Head from "next/head";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";
import Layout from "../components/Layout";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const focusAreas = [
  {
    title: "Corporate Law",
    description:
      "We provide legal support for businesses, covering everything from entity formation, corporate governance, regulatory compliance, commercial contracts, and transactional advisory to ensure sustained growth and operational legality."
  },
  {
    title: "Civil Litigation",
    description:
      "We offer rigorous and experienced representation in the courtroom, handling complex commercial disputes, contract breaches, debt recovery, and other civil claims across all levels of the Nigerian judicial system."
  },
  {
    title: "Criminal Law",
    description:
      "We provide robust defense and representation for individuals and corporate clients facing regulatory offenses, and other serious criminal charges, ensuring the protection of constitutional rights and due process throughout the judicial process."
  },
  {
    title: "Family Law",
    description:
      "We provide sensitive and expert counsel on domestic legal matters, including divorce proceedings, custody disputes, adoption, and the preparation of prenuptial and postnuptial agreements."
  },
  {
    title: "Real Estate",
    description:
      "Our services encompass all aspects of property transactions, including land acquisition, perfection of titles, property due diligence, leasing, and the resolution of intricate land and boundary disputes."
  },
  {
    title: "Tax and Finance",
    description:
      "We advise clients on optimizing their tax obligations, structuring financial transactions, ensuring regulatory compliance with fiscal authorities, and providing legal support for project finance and capital market activities."
  },
  {
    title: "Alternative Dispute Resolution (ADR)",
    description:
      "We guide clients through non-litigious methods of conflict resolution, specializing in negotiation, mediation, and arbitration to achieve timely, confidential, and cost-effective settlements."
  }
];

// Reusable AnimatedCard component
function AnimatedCard({ title, description, delay }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-primary-200 hover:shadow-lg transition duration-300 ease-in-out"
    >
      <h4 className="text-xl font-garamond font-semibold text-white mb-2">
        {title}
      </h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <Layout>
      <div className="font-sans text-gray-800">
        <main className="">
          {/* Hero Section */}
          <section className="relative h-screen w-full">
            <Image
              src="/hero.png"
              alt="Honoredge Legal Practice Hero Image"
              fill
              priority
              className="object-cover object-center z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-garamond font-bold mb-6 leading-tight uppercase">
                M.E ESONANJOR and Company
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                WHERE LEGAL STRATEGY IS PRECISION-BUILT.
              </p>
              <a
                href="#contact"
                className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-gray-900 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="">
                <Image
                  src="/logo.png"
                  alt="M.E ESONANJOR and Company logo"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h2 className="text-4xl font-garamond font-bold mb-4 text-white">
                  About Us
                </h2>
                <p className="text-lg leading-relaxed text-white text-justify">
                  At M.E ESONANJOR and Company, We are dedicated to providing
                  clear, practical, and highly effective legal solutions across
                  corporate, civil/criminal litigation, and property law,
                  ensuring that our clients' interests are protected and their
                  goals achieved with the highest professional standards.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 bg-primary-100 text-black px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-garamond font-bold mb-12">
                Why Partner With Us?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/buildings.png"
                    alt="Dispute Resolution"
                    width={600}
                    height={256}
                    className="w-full h-[22rem] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4">
                    <h3 className="text-2xl font-semibold font-garamond mb-4">
                      Our Mission
                    </h3>
                    <p className="text-sm text-gray-700 text-center mt-2">
                      To serve as the trusted provider of legal services for
                      businesses, individuals and beyond, upholding a
                      long-standing tradition of excellence, integrity, and
                      client-focused advocacy. We are dedicated to providing
                      clear, practical, and highly effective legal solutions
                      across corporate, civil/criminal litigation, and property
                      law, ensuring that our clients' interests are protected
                      and their goals achieved with the highest professional
                      standards.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/tingey.png"
                    alt="Corporate & Commercial Law"
                    width={600}
                    height={256}
                    className="w-full h-[22rem] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4">
                    <h3 className="text-2xl font-semibold font-garamond mb-4">
                      Our Values
                    </h3>
                    <p className="text-sm text-gray-700 text-center mt-2">
                      The enduring success of M.E. Esonanjor and Company over
                      nearly three decades is fundamentally rooted in a
                      commitment to core values that dictate our professional
                      conduct and client strategy. We radiate excellence through
                      rigorous analysis and meticulous preparation in every
                      matter. Our practice is non-negotiably founded on
                      Integrity, ensuring ethical standards, transparency, and
                      honesty in all our dealings. We embody diligence,
                      approaching every file with the necessary thoroughness and
                      tireless effort to meet client objectives efficiently. Our
                      core value of Client Focus drives us to build trust-based
                      relationships, providing practical, accessible advice, and
                      offering tenacious Advocacy to secure our clients' rights
                      and interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Areas */}
          <section
            id="practice-areas"
            className="bg-gray-900 text-white py-24 px-6 md:px-20"
          >
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="text-primary-200 italic">Areas of Focus</span>
              </h2>
              <p className="text-gray-400 text-lg mb-16">
                Expertise across key fields to meet your unique legal needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition duration-300 shadow-lg"
                  >
                    <h4 className="text-xl font-bold mb-4">{area.title}</h4>
                    <p className="text-gray-300">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-[#e7e3db] py-24 px-6 md:px-16 text-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-6 text-gray-900">
                Client Testimonials
              </h2>
              <p className="text-lg text-gray-700 mb-16">
                Hear directly from those we've helped achieve success.
              </p>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Bukki Aderogba",
                    quote:
                      "Working with M.E ESONANJOR and Company was seamless. Their dedication and attention to detail were unmatched."
                  },
                  {
                    name: "Chinedu Godswill",
                    quote:
                      "They listened, strategized, and delivered outstanding results. We couldn’t have asked for better support."
                  },
                  {
                    name: "Emmanuel Folorunsho",
                    quote:
                      "Professional, responsive, and trustworthy. My case was always handled with utmost care."
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between h-full"
                  >
                    <div className="text-4xl text-primary-200 mb-4">“</div>
                    <p className="text-gray-800 text-sm leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>

                    {/* ⭐ Star Rating */}
                    <div
                      className="flex items-center justify-center space-x-1 mb-4"
                      aria-label="5 star rating"
                    >
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>

                    <hr className="border-t border-gray-300 my-4" />
                    <p className="italic text-gray-700">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section
            id="contact"
            className="bg-primary-200 text-white py-24 px-4 text-center"
          >
            <h2 className="text-4xl font-garamond font-bold mb-6">
              Let's Get Started
            </h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto">
              Ready to take the next step? Contact us today to discuss how we
              can support your legal journey.
            </p>
            <a
              href="mailto:attorney@mesonanjor.com"
              className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
            >
              Contact Us
            </a>
          </section>
        </main>
      </div>
    </Layout>
  );
}
