import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-(--light-brown) via-(--background-page) to-secondary px-6 py-16"
    >
      <span className="absolute top-10 left-10 w-24 h-24 bg-(--dark-green) rounded-full opacity-20"></span>
      <span className="absolute bottom-20 right-20 w-32 h-32 bg-(--primary) rounded-full opacity-10"></span>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-(--primary) mb-8 leading-snug relative inline-block">
          عن المركز
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed text-(--font-title-label-color) bg-(--white-color) bg-opacity-80 rounded-2xl shadow-xl p-8"
        >
          مركز رتل لتحفيظ القرآن الكريم هو منارة علمية تربوية تسعى إلى تعليم
          كتاب الله تعالى وتربية النفوس على هديه، بأسلوب منهجي تربوي يجمع بين
          الأصالة والمعاصرة. يهدف المركز إلى إعداد جيل من الفتيات المتمسكات
          بالقرآن علمًا وخلقًا وسلوكًا، ويُعنَى بغرس القيم الإسلامية وترسيخ
          العقيدة الصحيحة في نفوس الطالبات، وذلك من خلال برامج تعليمية متكاملة،
          وحلقات تحفيظ منظمة، وبيئة تربوية آمنة ومحفزة. يحتضن المركز نخبة من
          المعلمات المؤهلات اللواتي يتمتعن بالكفاءة والخبرة في تعليم القرآن
          وعلومه، ويقدم مستويات مختلفة تناسب كافة الأعمار والمستويات من
          المبتدئات إلى الخاتمات. كما يوفر المركز اختبارات تقييم دورية، وخطط
          متابعة فردية، إضافة إلى إقامة فعاليات قرآنية وتربوية تُسهم في تنمية
          روح التنافس والارتباط بالقرآن الكريم. ولأننا نؤمن بأن القرآن منهج
          حياة، فإن المركز لا يقتصر فقط على التحفيظ، بل يشمل كذلك تعليم التجويد،
          والسلوكيات الإسلامية، وغرس روح الالتزام والتفوق في نفوس الطالبات.
          رؤيتنا هي أن يكون كل بيت فيه حافظة لكتاب الله، ورسالتنا أن نُعلّم
          القرآن كما أنزل، بالحكمة والرحمة، ونربي جيلًا قرآنيًا يعتز بدينه ويفخر
          بقيمه.
        </motion.p>
      </div>
    </section>
  );
}
