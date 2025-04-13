import React from "react";
import profileImg from "./../../assets/imges/profile-img.jpg";
import { Avatar, Flex } from "antd";

const AvatarComponent: React.FC = () => (
  <Flex align="center" gap={8} className="avatar-wrappeer">
    <Avatar
      size={{ xs: 24, sm: 46, md: 40, lg: 64 }}
      icon={<img src={profileImg} alt="profile-img" />}
      className="custom-avatar"
    />
    <div>
      <h5 className="name">Karma</h5>
      <h6 className="role">Admin</h6>
    </div>
  </Flex>
);

export default AvatarComponent;
