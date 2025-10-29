import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Contact = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-20 px-4 min-h-screen">
        <Head>
          <title>M.E ESONANJOR and Company | Contact Us</title>
        </Head>
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-garamond text-gray-900">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              We’d love to hear from you. Whether you have a question, want to
              schedule a consultation, or simply say hello — feel free to reach
              out.
            </p>
          </motion.div>

          {/* Contact Details & Map */}
          <div className="grid md:grid-cols-2 lg:px-20 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-primary-300 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    Our Office
                  </h3>
                  <p className="text-gray-600 text-sm">
                    34 Oduduwa Way,
                    <br />
                    GRA, Ikeja,
                    <br />
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary-300 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
                  <p className="text-gray-600 text-sm">+234 704 882 8395</p>
                  <p className="text-gray-600 text-sm">+234 803 381 8650</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary-300 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
                  <p className="text-gray-600 text-sm">
                    attorney@mesonajor.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={2}
              className="w-full h-96 rounded-xl overflow-hidden shadow-md"
            >
              <iframe
                src="https://maps.app.goo.gl/YKuzAcRuj6XBPvmw9?g_st=aw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
