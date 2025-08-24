"use client";

import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export const GitHubCorner: React.FC = () => {
  const items = [
    {
      id: 1,
      name: "Github",
      designation: "",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      url: "https://github.com/extermachraf",
    },
    {
      id: 2,
      name: " linkedin",
      designation: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fcdsIUPUgmbvGaP-RC4RbHYdVtoN_fM8aya_8gOXI2BRtClESO-0_jgWTtKtIVmOQKs",
      url: "https://www.linkedin.com/in/achraf-el-kouch-a43256258/",
    },
  ];

  return (
    <div className="fixed bottom-6 right-10 z-50 flex flex-row">
      <AnimatedTooltip items={items} />
    </div>
  );
};
