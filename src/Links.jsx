import React from "react";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip } from "antd";
const Links = () => (
  <>
    <Avatar.Group>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Avatar
        style={{
          backgroundColor: "#f56a00",
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: "#87d068",
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: "#1890ff",
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
  </>
);

export default Links;
