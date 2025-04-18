import React, { useEffect } from "react";

const Notification = ({ message, type = "success", show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`notification notification-${type}`}>
      <span className="notification-message">{message}</span>
      <button className="notification-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Notification;
