"use client";

import { motion, Variants } from "framer-motion";

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeDelay = (d: number): Variants => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: d },
    },
  });

  return (
    <section className="w-full min-h-screen px-8 md:px-16 lg:px-24 py-32 bg-white">

      {/* HEADER */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          About <span className="text-gray-500">Us</span>
        </h1>

        <motion.p
          className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
          variants={fadeDelay(0.2)}
        >
          We craft premium essentials designed for comfort, durability, and timeless style.
        </motion.p>
      </motion.div>

      {/* SECTION 1 */}
      <div className="max-w-5xl mx-auto mt-24 flex flex-col md:flex-row items-center gap-14">
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded with a passion for refined simplicity, we believe clothing should feel as good as it looks.
            Our mission is to create pieces that blend premium materials, thoughtful craftsmanship,
            and clean design—so you can look effortlessly good, every day.
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/aboutUs/factory.jpg"
            className="rounded-3xl shadow-lg w-full object-cover"
            alt="story"
          />
        </motion.div>
      </div>

      {/* SECTION 2 */}
      <div className="max-w-5xl mx-auto mt-32 flex flex-col md:flex-row-reverse items-center gap-14">
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Every piece is designed with intention: ethically sourced materials, long-lasting fabrics,
            and silhouettes that never go out of style.  
            We take pride in products that feel elevated, comfortable, and made to last.
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/aboutUs/fabric.jpg"
            className="rounded-3xl shadow-lg w-full object-cover"
            alt="quality"
          />
        </motion.div>
      </div>

      {/* VALUES GRID */}
      <div className="max-w-6xl mx-auto mt-32">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14">
          {[ "Quality First", "Timeless Design", "Comfort Always" ].map((title, i) => (
            <motion.div
              key={i}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">
                {
                  [
                    "We use materials that last longer, feel softer, and stay premium after every wash.",
                    "Clean essentials built to be worn anytime, anywhere—no trends needed.",
                    "Thoughtful fits and soft fabrics built for everyday movement."
                  ][i]
                }
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="mt-32 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-3xl font-semibold text-gray-900">
          Ready to elevate your wardrobe?
        </h3>

        <p className="text-gray-600 mt-3">
          Explore our latest collection crafted for your everyday lifestyle.
        </p>

        <a
          href="/shop"
          className="inline-block mt-8 px-10 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition"
        >
          SHOP NOW
        </a>
      </motion.div>

    </section>
  );
}