import { Button, Select } from "antd";
import CustomTable from "./components/CustomTable";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
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
            defaultValue="50개씩 보기"
            options={[
              { value: "승인완료", label: "승인완료" },
              { value: "승인거부", label: "승인거부" },
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
          <p>선택한 0건</p>
          <Select
            defaultValue="승인거부"
            options={[
              { value: "승인거부", label: "승인거부" },
              { value: "jack", label: "승인상태 변경" },
              { value: "lucy", label: "승인여부 전체" },
              { value: "Yiminghe", label: "승인대기" },
            ]}
          />
          <Button
            style={{
              backgroundColor: "#2A3958",
              color: "white",
              padding: "5px 20px",
            }}
          >
            저장
          </Button>
        </div>
      </div>
      <div>
        <CustomTable />
      </div>
    </>
  );
}

export default App;
