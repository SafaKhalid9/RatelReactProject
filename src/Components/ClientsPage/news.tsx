import type { NewsItem } from "@/Types/ISideBarItem";

const newsData: NewsItem[] = [
  {
    id: 1,
    tag: "تدشين افتتاح روضة مركز القدس",
    title: "تدشين افتتاح روضة مركز القدس",
    description:
      "في ظل سعي مركز القدس لتحفيظ القرآن الكريم لتوسيع خدماته التعليمية وتلبية احتياجات المجتمع المحلي، تم بحمد الله وتوفيقه تدشين 'روضة مركز القدس'.",
    image: "/news1.jpg",
  },
  {
    id: 2,
    tag: "يوم السرد الشهري لتثبيت المحفوظ",
    title: "يوم السرد الشهري لتثبيت المحفوظ",
    description:
      "ضمن الخطة التربوية التي ينتهجها مركز القدس لتحفيظ القرآن الكريم، وحرصاً على ترسيخ المحفوظ في صدور الطالبات، نظم المركز 'يوم السرد الشهري'.",
    image: "/news2.jpg",
  },
  {
    id: 3,
    tag: "المشاركة في دورة القيادة التربوية",
    title: "المشاركة في القيادة التربوية",
    description:
      "في إطار تعزيز الكفاءة المهنية وبناء بيئة تعليمية مؤثرة وفاعلة، شاركت معلمات وإداريات مركز القدس لتحفيظ القرآن الكريم في أنشطة القيادة التربوية.",
    image: "/news3.jpg",
  },
];
export default function NewsSection() {
  return (
    <section id="news" className="mt-12 py-12 px-4" dir="rtl">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-(--primary) mb-8 leading-snug relative inline-block">
          الأنشطة والفعاليات
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-(--light-green) flex flex-col h-full shadow-sm rounded overflow-hidden "
          >
            <div className="relative h-54 border-b-8 border-secondary">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-(--primary) text-white px-3 py-1 text-xs rounded-sm">
                {item.tag}
              </div>
            </div>
            <div className="p-4 flex flex-col items-center text-center grow">
              <h3 className="text-(--primary) text-xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-(--font-title-label-color) text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <button
                className="mt-auto bg-secondary text-(--white-color) px-8 py-2 rounded 
                           transition-all duration-300 cursor-pointer
                           hover:bg-(--primary) hover:text-(--white-color) hover:shadow-lg hover:scale-105"
              >
                اقرأ المزيد
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="bg-secondary text-(--white-color) px-12 py-3 rounded text-lg font-medium 
                     transition-all duration-300 cursor-pointer
                     hover:bg-(--primary) hover:text-(--white-color) hover:shadow-xl hover:scale-105"
        >
          المزيد من الأخبار
        </button>
      </div>
    </section>
  );
}
