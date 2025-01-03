import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

// Footer Component
const FooterC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.infoSection}>
          <h3>Liên Hệ</h3>
          <p>Trường Đại học Ngoại Ngữ - Đại học Quốc gia Hà Nội</p>
          <p>Gmail: haan75d.dtd@gmail.com</p>
          <p>SĐT: 0325 709 576</p>

          <h4 style={{ fontSize: "20px" }}>
            EcoTrade đồ cũ giá trị mới - kết nối sinh viên
          </h4>
        </div>

        {/* Hình ảnh */}
        <div style={styles.mediaSection}>
          <h4>Gửi phản hồi đến chúng tôi </h4>
          <Input placeholder="Họ  tên" />
          <Input placeholder="Email" />
          <TextArea rows={4} placeholder="Bình luận" />
          <Button>Gửi</Button>
        </div>
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px 0px",
    background: "transparent",
    color: "#000",
    borderTop: "2px solid #ddd",
  },
  container: {
    margin: "10px 10%",

    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  infoSection: {
    flex: "1 1 300px",
    textAlign: "left",
  },
  mediaSection: {
    flex: "1 1 300px",
    textAlign: "center",
  },
  videoSection: {
    flex: "1 1 300px",
    textAlign: "center",
  },
  imageGallery: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "2px solid #fff",
  },
};

export default FooterC;
