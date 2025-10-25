import React from "react";
import BackButton from "../../../components/BackButton";
import "../../../styles/ManhajDetails.css"; 

export default function ManhajDetails() {
  return (
    <>    
    <div className="details-container">
      <div className="top-frame"></div>
      <div className="title-desigen">
          <div className="profile-image-container">
          <img
            src="/images/ManahjPic.jpg"
            alt="منهج اللغة العربية"
            className="profile-image"
          />
        </div>
        <div>
          <h2 className="student-name">منهج اللغة العربية</h2>
        </div>
      </div>

      <div className="Section">
        <div className="section-1">
          <div className="student-info-group">
            <strong className="info-label">اسم المنهج:</strong>
            <span className="info-value">منهج اللغة العربية</span>
          </div>

          <div className="student-info-group">
            <strong className="info-label">اسم المؤلف:</strong>
            <span className="info-value">د. خالد عبد الرحمن</span>
          </div>

          <div className="student-info-group">
            <strong className="info-label">عدد الدروس:</strong>
            <span className="info-value">15 درسًا</span>
          </div>

          <div className="student-info-group">
            <strong className="info-label">الفئة المستهدفة:</strong>
            <span className="info-value">طلاب المرحلة الثانوية</span>
          </div>

          <div className="student-info-group">
            <strong className="info-label">أهداف المنهج:</strong>
            <ul className="info-value">
              <li>تنمية مهارات القراءة والفهم لدى الطلاب.</li>
              <li>تعزيز القواعد اللغوية والتعبير الكتابي.</li>
              <li>الارتقاء بالذوق الأدبي والنقدي.</li>
            </ul>
          </div>

          <div className="student-info-group">
            <strong className="info-label">ملف PDF:</strong>
            <a
              href="#"
              className="pdf-link"
              target="_blank"
              rel="noreferrer"
            >
              📥 تحميل الملف
            </a>
          </div>
        </div>
      </div>
        <BackButton label="رجوع" />
    </div>
    </>   
  );
}
