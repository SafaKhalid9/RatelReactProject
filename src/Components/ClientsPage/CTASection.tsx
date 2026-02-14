import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden py-28 px-6 
                 bg-gradient-to-l from-(--primary) to-secondary 
                 text-white"
      dir="rtl"
    >
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-right"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6">
            انضم اليوم إلى رحلة نورانية لحفظ كتاب الله
          </h2>

          <p className="text-lg opacity-90 mb-10 leading-relaxed">
            سجل الآن وابدأ مسيرتك في بيئة تربوية تعليمية متميزة تهدف لغرس القيم
            وتنمية المهارات.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <button
              className="bg-white text-(--primary) px-8 py-4 rounded-xl font-semibold
                         transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              تسجيل طالب
            </button>

            <button
              className="border border-white px-8 py-4 rounded-xl font-semibold
                         transition-all duration-300 hover:bg-white hover:text-(--primary)"
            >
              تواصل معنا
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20
                       p-10 rounded-3xl shadow-2xl w-[320px] text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <BookOpen size={40} />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">بيئة تعليمية ملهمة</h3>

            <p className="opacity-90 text-sm leading-relaxed">
              إشراف تربوي متميز، متابعة مستمرة، وبرامج تطويرية تعزز ثقة الطالب
              بنفسه.
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -left-6 text-white/70"
          >
            <Sparkles size={40} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
