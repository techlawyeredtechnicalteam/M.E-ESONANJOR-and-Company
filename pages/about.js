import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

// Animations
const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

export default function AboutUs() {
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

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 px-6">
        <Head>
          <title>Honoredge Legal Practice | About Us</title>
        </Head>

        <div className="max-w-7xl mx-auto space-y-24">
          {/* Hero Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-garamond">
              About M.E ESONANJOR and Company
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              WHERE LEGAL STRATEGY IS PRECISION-BUILT.
            </p>
          </motion.section>

          {/* Mission, Vision, Values */}
          <section className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Our Mission",
                text: "To serve as the trusted provider of legal services for businesses, individuals and beyond, upholding a long-standing tradition of excellence, integrity, and client-focused advocacy. We are dedicated to providing clear, practical, and highly effective legal solutions across corporate, civil/criminal litigation, and property law, ensuring that our clients' interests are protected and their goals achieved with the highest professional standards.",
                image: "/mission.png"
              },
              {
                title: "Our Vision",
                text: "The enduring success of M.E. Esonanjor and Company over nearly three decades is fundamentally rooted in a commitment to core values that dictate our professional conduct and client strategy. We radiate excellence through rigorous analysis and meticulous preparation in every matter. Our practice is non-negotiably founded on Integrity, ensuring ethical standards, transparency, and honesty in all our dealings. We embody diligence, approaching every file with the necessary thoroughness and tireless effort to meet client objectives efficiently. Our core value of Client Focus drives us to build trust-based relationships, providing practical, accessible advice, and offering tenacious Advocacy to secure our clients' rights and interests.",
                image: "/vision.png"
              },
              {
                title: "Our Values",
                text: "Integrity, diligence, excellence, empathy, and innovation are the core principles that guide every aspect of our practice.",
                image: "/values.png"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-52 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Focus Areas Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-garamond mb-8">
              Our Focus Areas
            </h2>

            <div className="h-72 w-full relative rounded-2xl overflow-hidden shadow-md mb-14">
              <Image
                src="/focus.png"
                alt="Our Practice Areas"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-bold text-primary-300">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-700">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
