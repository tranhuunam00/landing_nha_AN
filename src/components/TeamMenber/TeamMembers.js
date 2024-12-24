import React, { useState } from "react";
import "./TeamMembers.css";
import { ImgApps } from "../../constant/images";

const members = [
  {
    id: 1,
    name: "Bùi Thị Mai Anh - Khoa SPTA",
    image: ImgApps.buimaianh,
  },
  {
    id: 2,
    name: "Cao Vân Anh - Khoa NN&VH Hàn Quốc",
    image: ImgApps.caovananh,
  },
  {
    id: 3,
    name: "Hoàng Khánh An - Khoa NN&VH Pháp",
    image: ImgApps.hoangankhanh,
  },
  {
    id: 4,
    name: "Lê Hoài An - SPTA",
    image: ImgApps.lehoaian,
  },
  {
    id: 5,
    name: "Nguyễn Diệu An - SPTA",
    image: ImgApps.nguyendieuan,
  },
  {
    id: 6,
    name: "Nguyễn Thanh Hà An - NN&VH Nhật Bản",
    image: ImgApps.thanhan,
  },
];

function TeamMembers() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="TeamMembers">
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Đội ngũ thực hiện
      </h1>
      <div className="team-container">
        {members.map((member) => (
          <div
            key={member.id}
            className="team-card"
            onClick={() => handleCardClick(member)}
          >
            <img src={member.image} alt={member.name} />
            <div className="team-name">{member.name}</div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedMember.image} alt={selectedMember.name} />
            <h2>{selectedMember.name}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamMembers;
