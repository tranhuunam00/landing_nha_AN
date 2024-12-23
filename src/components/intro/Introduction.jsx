import React from "react";
import "./Introduction.css"; // Import CSS for styling

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="video-section">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/_26r-nDC3iw"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-section">
        <p style={{ fontWeight: "500", color: "black" }}>
          ULISERS ơi, bạn đang băn khoăn vì tìm kiếm những giải pháp giúp tiết
          kiệm tối ưu chi phí mua sắm? Hay đang loay hoay tìm kiếm một nền tảng
          uy tín để gửi gắm những món đồ không còn sử dụng nhưng vẫn có giá trị?
          Nếu câu trả lời là có thì{" "}
          <strong style={{ color: "green" }}>
            “EcoTrade đồ cũ giá trị mới - kết nối sinh viên”
          </strong>{" "}
          chính là giải pháp cho bạn.{" "}
          <strong style={{ color: "green" }}>“EcoTrade”</strong> là một dự án vì
          cộng đồng, được thiết kế để giúp ULISERS dễ dàng trao đổi và mua bán
          đồ cũ. Với đội ngũ nhiệt tình, trách nhiệm, chúng tôi tự tin có thể
          mang lại cho các bạn sự tin tưởng khi sử dụng dịch vụ mua sắm, trao
          đổi những món đồ với giá cả hợp lý, tiết kiệm. Còn chần chờ gì nữa mà
          không cùng chúng tôi tạo nên một thói quen tiêu dùng bền vững, tiết
          kiệm ngay từ hôm nay!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
