import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { User, Star } from "lucide-react";

const testimonials = [
  { name: "أم سارة", text: "تغير كبير في مستوى ابنتي حفظاً وسلوكاً." },
  { name: "أم مريم", text: "المتابعة المستمرة أعطتنا ثقة كبيرة." },
  { name: "أم ليان", text: "بيئة تربوية رائعة ومعلمات متميزات." },
  { name: "أم نور", text: "تنظيم رائع واهتمام بالتفاصيل." },
  { name: "أم هاجر", text: "أفضل قرار هو تسجيل ابنتي هنا." },
];

export function TestimonialsSection() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const looped = [...testimonials, ...testimonials];

  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(
        ".card",
      ) as HTMLElement;

      if (firstCard) {
        const gap = 32;
        setCardWidth(firstCard.offsetWidth + gap);
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const nextIndex = index + 1;

      await controls.start({
        x: nextIndex * cardWidth,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
      });

      setIndex(nextIndex);

      if (nextIndex >= testimonials.length) {
        controls.set({ x: 0 });
        setIndex(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [index, cardWidth, controls]);

  return (
    <section
      className="min-h-screen flex items-center px-10 bg-white overflow-hidden"
      dir="rtl"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-(--primary) mb-8 leading-snug relative inline-block">
            آراء أولياء الأمور
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
          </h2>
        </div>
        <div className="overflow-hidden mt-10">
          <motion.div
            ref={containerRef}
            animate={controls}
            className="flex gap-8"
          >
            {looped.map((item, i) => (
              <div
                key={i}
                className="card min-w-[31%] bg-(--background-page) p-8 rounded-3xl shadow-lg
                           border border-(--light-green)
                           transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-(--primary)/10 flex items-center justify-center">
                    <User size={28} className="text-(--primary)" />
                  </div>
                </div>

                <p className="text-(--font-title-label-color) text-base leading-relaxed mb-6">
                  "{item.text}"
                </p>

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      className="text-secondary fill-secondary"
                    />
                  ))}
                </div>

                <h4 className="text-(--primary) font-bold text-lg">
                  {item.name}
                </h4>
              </div>
            ))}
          </motion.div>
        </div>

        {/* <div className="mt-16">
          <button
            className="bg-secondary text-white px-10 py-3 rounded-xl text-lg
                             transition-all duration-300 hover:bg-(--primary) hover:scale-105 hover:shadow-xl"
          >
            مشاهدة باقي الآراء
          </button>
        </div> */}
      </div>
    </section>
  );
}
