import React from "react";
import "../styles/DeleteAndCancelButtons.css";

export default function DeleteAndCancelButtons({ onDelete, onCancel }) {
  return (
    <div className="confirm-actions">
      <button className="btn btn-delete" onClick={onDelete}>
        حذف
      </button>
      <button className="btn btn-cancel" onClick={onCancel}>
        إلغاء
      </button>
    </div>
  );
}
