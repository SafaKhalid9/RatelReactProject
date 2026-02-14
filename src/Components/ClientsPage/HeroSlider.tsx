import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#ddbea933] py-16 px-6 rtl font-['Cairo']">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-evenly">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-(--primary) mb-4 leading-snug">
            مرحباً بك في مركز رتل
          </h1>

          <h2 className="text-4xl md:text-3xl font-semibold text-secondary mb-4 leading-snug">
            حيث يلتقي جمال الحفظ بعمق الفهم
          </h2>

          <p className="text-(--font-title-label-color) text-lg mb-6 leading-relaxed">
            منصة متخصصة لحفظ و تلاوة القرآن الكريم وتعليم أحكامه، لنمنحك تجربة
            روحانية وتعليمية متكاملة.
          </p>

          <a
            href="/login"
            className="inline-block px-6 py-3 rounded font-semibold 
              bg-(--primary) text-(--white-color)
              transition-all duration-300 ease-in-out
              hover:bg-secondary hover:scale-105 hover:shadow-lg"
          >
            تسجيل الدخول
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/heroImage.png"
            alt="Quran on Rehal"
            className="w-full max-w-md rounded-xl"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
}
