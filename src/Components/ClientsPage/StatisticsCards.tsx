import { Card, CardTitle, CardContent } from "@/Components/ShadCn/card";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsCards() {
  const stats = {
    events: 3,
    halaqat: 20,
    teachers: 15,
    khatemat: 5,
    students: 60,
  };
  const items = [
    {
      title: "عدد الطلاب",
      value: stats.students,
      icon: "/studentsNumbers.png",
    },
    {
      title: "عدد الخاتمين",
      value: stats.khatemat,
      icon: "/completedstudents.png",
    },
    {
      title: "عدد المعلمات",
      value: stats.teachers,
      icon: "/teachersNumbers.png",
    },
    {
      title: "عدد الحلقات",
      value: stats.halaqat,
      icon: "/halaqatNumbers.svg",
    },
    {
      title: "عدد الفعاليات",
      value: stats.events,
      icon: "/activitiesNumbers.png",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <section
      id="stats"
      ref={ref}
      className="min-h-screen flex flex-col justify-center py-12 px-4"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-(--primary) mb-8 leading-snug relative inline-block">
          الإحصائيات
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 my-8 mx-auto mt-10">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <Card
              key={idx}
              className="relative w-[220px] border-none rounded-2xl text-(--primary) font-bold bg-white shadow-md h-[300px] overflow-hidden"
            >
              <span className="absolute top-2 left-2 w-6 h-6 bg-secondary rounded-full opacity-50"></span>
              <span className="absolute bottom-4 right-4 w-10 h-10 bg-(--light-brown) rounded-full opacity-50"></span>
              <span className="absolute top-1/2 -left-4 w-12 h-12 bg-(--primary) rounded-full opacity-70"></span>

              <div className="h-full px-6 relative z-10">
                <img
                  src={item.icon}
                  alt="Icon"
                  className="w-15 h-15 mx-auto my-6 object-contain"
                />
                <div className="flex-1 flex flex-col items-center justify-center">
                  <CardContent className="my-6 text-center text-2xl sm:text-2xl font-extrabold">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={item.value}
                        duration={5}
                        delay={0.3}
                      />
                    ) : (
                      0
                    )}
                  </CardContent>
                  <CardTitle className="my-6 text-center text-base text-(--primary) sm:text-lg opacity-90 mt-2">
                    {item.title}
                  </CardTitle>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
