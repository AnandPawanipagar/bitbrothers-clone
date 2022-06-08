import FeatherIcons from "feather-icons-react";

import React from "react";

export const FeatherIcon = ({
  icon = "box",
  size = 20,
  className = "",
  style = {},
  onClick = () => {},
}) => {
  return (
    <FeatherIcons
      icon={icon}
      size={size}
      className={`${className} cursor-pointer`}
      style={style}
      onClick={onClick}
    />
  );
};
