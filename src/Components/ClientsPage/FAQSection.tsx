import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, User, Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "ما هي الفئة العمرية المستهدفة؟",
    a: "نستقبل الطالبات من عمر 5 سنوات وحتى المرحلة الثانوية.",
  },
  {
    q: "هل توجد متابعة لأولياء الأمور؟",
    a: "نعم، يتم إرسال تقارير دورية عن مستوى الحفظ والسلوك.",
  },
  {
    q: "هل يوجد اختبار تحديد مستوى؟",
    a: "يتم إجراء تقييم مبدئي لتحديد مستوى الطالبة قبل الالتحاق.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="min-h-screen py-24 px-6 bg-(--background-page)"
      dir="rtl"
      id="faq"
    >
      <div className="max-w-4xl mx-auto">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-(--primary) mb-8 leading-snug relative inline-block">
            الأسئلة الشائعة
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
          </h2>
        </div>

        <div className="space-y-6 mt-10">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-(--light-green)
                           shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-(--primary)/10 flex items-center justify-center">
                      <HelpCircle className="text-(--primary)" size={22} />
                    </div>

                    <span className="font-semibold text-lg text-(--primary)">
                      {item.q}
                    </span>
                  </div>

                  <div className="text-(--primary)">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 flex items-start gap-4 text-(--font-title-label-color)">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mt-1">
                          <User size={18} className="text-secondary" />
                        </div>

                        <p className="leading-relaxed">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
