import { Button } from "antd";

export const columns = [
  {
    title: "No",
    dataIndex: "one",
  },
  {
    title: "기존유형",
    dataIndex: "two",
  },
  {
    title: "신청유형",
    dataIndex: "three",
  },
  {
    title: "제출서류",
    dataIndex: "four",
    render: (text, record) => (
      <Button
        style={{
          backgroundColor: "#EBEEF3",
          color: "#222222",
          borderRadius: "8px",
          padding: "3px 18px",
        }}
      >
        {text}
      </Button>
    ),
  },
  {
    title: "신청일시",
    dataIndex: "five",
  },
  {
    title: "승인여부",
    dataIndex: "six",
    render: (text, record) =>
      text === 0 ? (
        <Button
          style={{
            backgroundColor: "#FFEDD5",
            color: "#9A3412",
            borderRadius: "15px",
            padding: "5px 10px",
          }}
        >
          승인대기
        </Button>
      ) : text === 1 ? (
        <Button
          style={{
            backgroundColor: "#FEE2E2",
            color: "#991B1B",
            borderRadius: "15px",
            padding: "5px 10px",
          }}
        >
          승인대기
        </Button>
      ) : text === 2 ? (
        <Button
          style={{
            backgroundColor: "#DCFCE7",
            color: "#166534",
            borderRadius: "15px",
            padding: "5px 10px",
          }}
        >
          승인대기
        </Button>
      ) : (
        ""
      ),
  },
  {
    title: "승인거부 사유",
    dataIndex: "seven",
  },
  {
    title: "승인일시",
    dataIndex: "eight",
  },
  {
    title: "관리자",
    dataIndex: "nine",
  },
];

export const data = [];
for (let i = 0; i < 70; i++) {
  const randomNumber = Math.floor(Math.random() * 3);
  const value =
    i % 2 === 0
      ? "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가"
      : "";

  data.push({
    key: i,
    one: i + 1,
    two: "소득적격",
    three: "개인전문",
    four: "보기",
    five: "2023-01-10 09:00:00",
    six: randomNumber,
    seven: value,
    eight: "2023-01-10 09:00:00",
    nine: "김관리자",
  });
}
