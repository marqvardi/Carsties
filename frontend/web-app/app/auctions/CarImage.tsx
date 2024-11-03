"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {
  imageUrl: string;
};

const CarImage = ({ imageUrl }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={imageUrl}
      alt="Image of car"
      fill
      className={`object-cover group-hover:opacity-75 duration-400 ease-in-out ${
        isLoading ? "grayscale blur-2xl scale" : "grayscale-0 scale-100"
      } `}
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      onLoad={() => setIsLoading(false)}
    />
  );
};

export default CarImage;
