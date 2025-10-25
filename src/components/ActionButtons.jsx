import React from "react";
import "../styles/ActionButtons.css";

export default function ActionButtons({ mainLabel, onMainClick, onCancel }) {
  return (
    <div className="action-buttons">
      <button className="btn btn-main" onClick={onMainClick}>
        {mainLabel}
      </button>
      <button className="btn btn-cancel" onClick={onCancel}>
        إلغاء
      </button>
    </div>
  );
}
