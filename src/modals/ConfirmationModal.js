import React from "react";
import { Button, Modal } from "antd";
import InfoIcon from "../assets/icons/InfoIcon";
import SuccessIcon from "../assets/icons/SuccessIcon";

const ConfirmationModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  modalType,
  text,
}) => {
  return (
    <>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        // title="Confirm"
        title={modalType === "success" ? <SuccessIcon /> : <InfoIcon />}
        okText={false}
        cancelText="Cancel"
        footer={false}
        width={450}
      >
        <p style={{ color: "#0B101A", fontWeight: "600", fontSize: "18px" }}>
          {text}
        </p>
        {modalType === "confirmation" ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              style={{
                width: "170px",
                backgroundColor: "#2A3958",
                color: "white",
              }}
              onClick={handleOk}
              key="ok"
            >
              확인
            </Button>
            <Button
              style={{
                width: "170px",
                backgroundColor: "white",
                color: "#2A3958",
                borderColor: "#2A3958",
              }}
              key="cancel"
              type="primary"
              onClick={handleCancel}
            >
              취소
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                width: "170px",
                backgroundColor: "#2A3958",
                color: "white",
              }}
              key="cancel"
              onClick={handleCancel}
            >
              확인
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ConfirmationModal;
