import React from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { categoryColors } from "@/lib/utils";
import { WeeklyNewsProps } from "@/types/types";

const SingleCrossSalesNews = ({ item }: { item: WeeklyNewsProps }) => {
  const categoryColor = categoryColors[item.category] || "#000";

  return (
    <div
      className="flex flex-col sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-3 rounded-lg overflow-hidden w-full cursor-pointer hover:scale-[1.03] transition-transform duration-300 shadow-sm border border-borderColor bg-cardBackground bg-gradient-radial from-0% via-50% to-100% bg-no-repeat from-indigo-500/20 to-transparent"
      style={{
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="min-w-[251px] min-h-[144px] relative">
        <Image
          src={item.image}
          alt={item.title}
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 pt-3 pb-3 pr-3 lg:pl-3 p-4">
        <div>
          <Badge
            className="w-fit mb-2"
            style={{ backgroundColor: categoryColor }}
          >
            {item.category}
          </Badge>
          <h1 className="font-bold text-md mb-1">{item.title}</h1>
          <p className="text-textGray text-sm">{item.content}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-600 text-[12px]">March 7, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCrossSalesNews;
