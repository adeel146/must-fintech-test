import { Button, Select } from "antd";
import CustomTable from "./components/CustomTable";
import Header from "./components/Header/Header";
import ConfirmationModal from "./modals/ConfirmationModal";
import { useState } from "react";

function App() {
  const [isOpenConfirmModal, setisOpenConfirmModal] = useState(false);
  const [modalType, setmodalType] = useState("info");
  const [modalText, setmodalText] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [defaultviewSize, setdefaultviewSize] = useState(50);
  console.log(selectedRows, "selectedRows");
  const handleokConfirmtionModal = () => {
    if (selectedRows.length === 1) {
    }
    setmodalType("success");
    setmodalText("저장되었습니다.");
  };

  const handleModalOpen = () => {
    if (selectedRows.length === 0) {
      setmodalText("선택된 신청건이 없습니다.");
      setisOpenConfirmModal(true);
      return;
    }
    if (selectedRows.length > 0) {
      setmodalText("선택된 2건의 승인상태를 변경하시겠습니까?");
      setmodalType("confirmation");
      setisOpenConfirmModal(true);
      return;
    }
  };

  const handleClose = () => {
    setisOpenConfirmModal(false);
    setmodalType("info");
    setmodalText("");
    // setSelectedRows("");
  };
  return (
    <>
      <div>
        <div>
          회원상세&nbsp;<span style={{ color: "#FF4D4F" }}>필수항목</span>
        </div>
        <div
          style={{
            marginTop: "15px",
            paddingTop: "5px",
            borderTop: "2px solid #D7D8DA",
          }}
        >
          <Header />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #D7D8DA",
          }}
        >
          <p style={{ fontWeight: "800" }}>
            신청 목록&nbsp;
            <span style={{ fontWeight: "600", color: "gray" }}>
              (총 100명 | 승인대기 1건)
            </span>
          </p>
          <div style={{ display: "flex", gap: "3px" }}>
            <Select
              defaultValue="승인여부 전체"
              options={[
                { value: "승인여부 전체", label: "승인여부 전체" },
                { value: "승인대기", label: "승인대기" },
                { value: "승인완료", label: "승인완료" },
                { value: "승인거부", label: "승인거부" },
              ]}
            />
            <Select
              defaultValue="신청일시순"
              options={[
                { value: "신청일시순", label: "신청일시순" },
                { value: "승인일시순", label: "승인일시순" },
              ]}
            />
            <Select
              value={defaultviewSize}
              onChange={(a) => setdefaultviewSize(a)}
              options={[
                { value: 50, label: "50개씩 보기" },
                { value: 40, label: "40개씩 보기" },
                { value: 30, label: "30개씩 보기" },
                { value: 20, label: "20개씩 보기" },
                { value: 10, label: "10개씩 보기" },
              ]}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#2A3958",
              color: "white",
              padding: "5px 20px",
            }}
          >
            등록
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <p>선택한 {selectedRows.length}건</p>
            <Select
              placeholder="승인상태 변경"
              options={[
                { value: "승인완료", label: "승인완료" },
                { value: "승인거부", label: "승인거부" },
              ]}
            />
            <Button
              style={{
                backgroundColor: "#2A3958",
                color: "white",
                padding: "5px 20px",
              }}
              onClick={handleModalOpen}
            >
              저장
            </Button>
          </div>
        </div>
      </div>
      <div>
        <CustomTable
          setSelectedRows={setSelectedRows}
          defaultviewSize={defaultviewSize}
        />
      </div>
      <ConfirmationModal
        isModalVisible={isOpenConfirmModal}
        handleCancel={handleClose}
        handleOk={handleokConfirmtionModal}
        modalType={modalType}
        text={modalText}
        data={selectedRows}
      />
    </>
  );
}

export default App;
