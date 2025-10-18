
import React from "react";
import "../../styles/HomeIndex.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function HomeIndex() {
  return (
    <div className="home-page">

      {/* ====== Carousel داخل نفس الحاوية المركزية ====== */}
      <div className="centered-container">
        <div
          id="mainCarousel"
          className="carousel slide mb-4 w-100"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="صورة 1"
            ></button>
            <button
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to="1"
              aria-label="صورة 2"
            ></button>
            <button
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to="2"
              aria-label="صورة 3"
            ></button>
          </div>

          <div className="carousel-inner rounded-3 shadow w-100">
            <div className="carousel-item active">
              <img
                src="/images/p11.jpg"
                className="d-block w-100 carousel-img"
                alt="الصورة الأولى"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/p22 (2).jpg"
                className="d-block w-100 carousel-img"
                alt="الصورة الثانية"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/p33.jpg"
                className="d-block w-100 carousel-img"
                alt="الصورة الثالثة"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">السابق</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">التالي</span>
          </button>
        </div>
      </div>
      <section className="container about-section" id="about">
        <h3 className="text-end mb-4">
          <span className="bg-dark text-white px-2 py-1">عن المركز:</span>
        </h3>
        <h4 className="text-end about-text">
          مركز القدس لتحفيظ القرآن الكريم هو منارة علمية تربوية تسعى إلى تعليم
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
        </h4>
      </section>
    </div>
  );
}
