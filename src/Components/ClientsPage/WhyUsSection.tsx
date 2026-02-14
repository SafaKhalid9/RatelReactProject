import { motion, type Variants } from "framer-motion";

import {
  ShieldCheck,
  BookOpenCheck,
  HeartHandshake,
  Users,
} from "lucide-react";

const features = [
  {
    title: "معلمات معتمدات",
    desc: "فريق تعليمي مؤهل بخبرة واسعة في تحفيظ القرآن وأحكام التجويد.",
    icon: ShieldCheck,
  },
  {
    title: "بيئة آمنة ومحفزة",
    desc: "نحرص على توفير بيئة تعليمية تربوية تعزز القيم والالتزام.",
    icon: HeartHandshake,
  },
  {
    title: "منهجية متكاملة",
    desc: "خطة تعليمية تجمع بين الحفظ والفهم والتطبيق العملي.",
    icon: BookOpenCheck,
  },
  {
    title: "متابعة مستمرة",
    desc: "تقارير دورية لأولياء الأمور لمتابعة تقدم الطالبات.",
    icon: Users,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function WhyUsSection() {
  return (
    <section
      className="min-h-screen flex items-center relative py-24 px-6 bg-(--background-page) overflow-hidden"
      dir="rtl"
      id="why-us"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-(--primary) opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-(--primary) mb-6">
          لماذا نحن؟
        </h2>

        <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-16"></div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white p-8 rounded-3xl shadow-md border border-(--light-green)
                           transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 flex items-center justify-center
                               rounded-full bg-(--primary)/10
                               group-hover:bg-secondary transition-all duration-500"
                  >
                    <Icon
                      size={28}
                      className="text-(--primary) group-hover:text-white transition-all duration-500"
                    />
                  </div>
                </div>

                <h3 className="text-(--primary) font-bold text-xl mb-4">
                  {item.title}
                </h3>

                <p className="text-(--font-title-label-color) text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div
                  className="absolute bottom-0 right-0 h-1 w-0 bg-secondary
                             group-hover:w-full transition-all duration-500 rounded-b-3xl"
                ></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
