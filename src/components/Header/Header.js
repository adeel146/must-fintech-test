import { Menu } from "antd";
import { useState } from "react";
import "./header.css";

const items = [
  {
    label: "기본정보 관리",
    key: "mail",
  },
  {
    label: "투자유형 관리",
    key: "app",
  },
  {
    label: "입출금내역 조회",
    key: "app1",
  },
  {
    label: "영업내역 조회",
    key: "app2",
  },
  {
    label: "투자내역 조회",
    key: "app4",
  },
  {
    label: "채권내역 조회",
    key: "app5",
  },
  {
    label: "SMS 관리",
    key: "app6",
  },
  {
    label: "상담내역 관리",
    key: "app7",
  },
  {
    label: "1:1문의내역 조회",
    key: "app8",
  },
];
const Header = () => {
  const [current, setCurrent] = useState("1");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      theme="dark" // Add this line to set the theme to dark
      style={{
        backgroundColor: "#EBEEF3",
        borderRadius: "8px",
        margin: "5px",
        color: "grey",
        justifyContent: "",
      }} // Add this line to set the background color
    >
      {items.map((item, index) => (
        <Menu.Item selected key={index}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default Header;
