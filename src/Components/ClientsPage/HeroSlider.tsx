export default function HeroSection() {
  return (
    <section className="bg-[#ddbea933] py-16 px-6 rtl font-['Cairo']">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-evenly">
        <div className=" text-right ">
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
        </div>
        <div className=" flex justify-center">
          <img
            src="/heroImage.png"
            alt="Quran on Rehal"
            className="w-full max-w-md rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
