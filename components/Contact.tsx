"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
import Particles from "./Particles";

const Contact = () => {
  const { toast } = useToast();
  const [state, Submit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID!);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "I'll get back to you as soon as possible!",
      });
    }
  }, [state.succeeded, toast]);

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-[#1a1a2e] relative overflow-hidden"
    >
      {/* Particles background */}
      <Particles className="opacity-20" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#ffd700] opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#ff6b6b] opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="text-[#ffd700]">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#1a1a2e]/80 p-8 rounded-xl shadow-lg border border-[#ffd700]/20 backdrop-blur-sm"
          >
            <form onSubmit={Submit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#ffd700]/20 text-white focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#ffd700]/20 text-white focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#ffd700]/20 text-white focus:ring-2 focus:ring-[#ffd700] focus:border-transparent transition-all duration-300"
                  placeholder="Your message here..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-3 bg-[#ffd700] text-[#1a1a2e] rounded-lg hover:bg-[#ffd700]/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {state.submitting ? (
                  "Sending..."
                ) : state.succeeded ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-[#1a1a2e]/80 p-6 rounded-xl shadow-lg border border-[#ffd700]/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-[#ffd700]">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a
                      href="mailto:achrafelkouchpro@outlook.com"
                      className="text-white hover:text-[#ffd700] transition-colors duration-300"
                    >
                      achrafelkouchpro@outlook.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-[#ffd700]">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Casablanca, Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a2e]/80 p-6 rounded-xl shadow-lg border border-[#ffd700]/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/extermachraf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ffd700] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/achraf-el-kouch-a43256258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ffd700] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="/achrafelkouchcv.pdf"
                  download
                  className="text-gray-300 hover:text-[#ffd700] transition-colors duration-300 inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
