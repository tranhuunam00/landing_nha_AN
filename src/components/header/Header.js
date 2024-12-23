import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "./header.css";
import { ImgApps } from "../../constant/images";

const items1 = [
  {
    key: "Trang chủ",
    label: "Trang chủ",
    onClick: () =>
      document
        .getElementById("slideshow")
        .scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Giới thiệu",
    label: "Giới thiệu",
    onClick: () =>
      document.getElementById("intro").scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Trao đổi",
    label: "Trao đổi",
    onClick: () =>
      document.getElementById("product").scrollIntoView({ behavior: "smooth" }),
  },

  {
    key: "Đội ngũ thực hiện",
    label: "Đội ngũ thực hiện",
    onClick: () =>
      document.getElementById("members").scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Phản hồi",
    label: "Phản hồi",
    onClick: () =>
      document.getElementById("comment").scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Đăng kí",
    label: "Đăng kí",
    onClick: () =>
      document
        .getElementById("register")
        .scrollIntoView({ behavior: "smooth" }),
  },
  {
    key: "Liên hệ",
    label: "Liên hệ",
    onClick: () =>
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" }),
  },
];

const HeaderC = () => {
  return (
    <Header
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {/* Logo */}
      <div className="logo" style={{ marginRight: "20px" }}>
        <img
          src={ImgApps.logo0}
          alt="Logo"
          style={{ height: "70px", objectFit: "contain" }}
        />
      </div>

      {/* Menu */}
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1 }}
      />
    </Header>
  );
};

export default HeaderC;
