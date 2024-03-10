import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { categoryColors } from "@/lib/utils";
import { WeeklyNewsProps } from "@/types/types";

const SingleWeeklyNews = ({ item }: { item: WeeklyNewsProps }) => {
  const categoryColor = categoryColors[item.category] || "#000";

  return (
    <Link href="/news/12">
      <div
        className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-3 rounded-lg overflow-hidden w-full cursor-pointer hover:scale-[1.03] transition-transform duration-300 shadow-sm border border-borderColor bg-cardBackground bg-gradient-radial from-0% via-50% to-100% bg-no-repeat from-indigo-500/20 to-transparent"
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
        <div className="flex flex-col justify-between gap-2 p-4 lg:pl-3">
          <div>
            <Badge
              className="w-fit mb-2"
              style={{ backgroundColor: categoryColor }}
            >
              {item.category}
            </Badge>
            <h1 className="font-bold text-md">{item.title}</h1>
          </div>
          <div className="flex justify-end">
            <p className="text-gray-600 text-[12px]">March 7, 2024</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleWeeklyNews;
