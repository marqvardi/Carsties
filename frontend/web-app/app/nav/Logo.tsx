"use client";

import { useParamsStore } from "@/hooks/useParamsStore";
import React from "react";
import { FaCarAlt } from "react-icons/fa";

const Logo = () => {
  const reset = useParamsStore((state) => state.reset);

  return (
    <div
      onClick={reset}
      className="flex items-center gap-2 text-3xl font-semibold text-red-500 cursor-pointer"
    >
      <FaCarAlt size={34} />
      <div>Carsties auction</div>
    </div>
  );
};

export default Logo;
