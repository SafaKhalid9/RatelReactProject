//import React, { useState } from "react";
 
import React from "react";
import ActionButtons from "../../../components/ActionButtons";
import "../../../styles/MemorizationPathCreate.css";

export default function MemorizationPathEdit() {
//   // نحتفظ بالحالة محليًا عشان المستخدم يشوف القيم ويجرب الحفظ
//   const [formData, setFormData] = useState({
//     name: "",
//     memorizeFrom: "",
//     memorizeTo: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // تصميم فقط: نظهر رسالة ونطبع القيم في الكونسول
//     alert("تم الحفظ (تصميم فقط، بدون API)");
//     console.log("Form values:", formData);
//     // يمكنك هنا مسح الحقول لو رغبتِ:
//     // setFormData({ name: "", memorizeFrom: "", memorizeTo: "" });
//   };



const handleUpdate = () => {
  alert("تم التعديل (تصميم فقط)");
};

const handleCancel = () => {
  alert("تم الإلغاء");
};


  return (
    <>

    <div className="S-container path">
        <div className="top-frame"></div>
        <div>
        <h2 className="title">تعديل مسار</h2>
        <form>
          <div className="form-columns">
            <div>
              <label htmlFor="name">🛤️ اسم المسار</label>
              <input
                type="text"
                name="name"
                placeholder="اسم المسار"
                // value={formData.name}
                // onChange={handleChange}
                required
              />

              <label htmlFor="memorizeFrom">📖 بداية الحفظ</label>
              <input
                type="text"
                name="memorizeFrom"
                placeholder="اسم السورة"
                // value={formData.memorizeFrom}
                // onChange={handleChange}
                required
              />

              <label htmlFor="memorizeTo">📚 نهاية الحفظ</label>
              <input
                type="text"
                name="memorizeTo"
                placeholder="اسم السورة"
                // value={formData.memorizeTo}
                // onChange={handleChange}
                required
              />
            </div>
          </div>
          <ActionButtons
            mainLabel="تعديل"
         onMainClick={handleUpdate}
         onCancel={handleCancel}
          />
        </form>
        </div>
    </div>
        
    </>
  );
}
