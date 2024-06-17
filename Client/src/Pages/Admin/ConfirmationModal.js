import React from "react";
import "./ConfirmationModal.css";

const ConfirmationModal = ({ show, title, message, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="confirmation-modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
