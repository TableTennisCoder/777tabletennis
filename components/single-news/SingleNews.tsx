import Image from "next/image";
import { NewsItem } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import { categoryColors } from "@/lib/utils";

const SingleNews = ({ newsItem }: { newsItem: NewsItem }) => {
  const categoryColor = categoryColors[newsItem.category] || "#000";
  return (
    <Link href="/news/12">
      <div
        className="rounded-lg overflow-hidden w-full cursor-pointer shadow-sm border border-borderColor bg-cardBackground bg-gradient-radial from-0% via-50% to-100% bg-no-repeat from-indigo-500/20 to-transparent transform hover:scale-[1.03] transition-transform duration-300"
        style={{
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="h-[210px] max-h-[210px] relative overflow-hidden">
          <div className="w-full h-full transform hover:scale-[1.1] transition-transform duration-500">
            <Image
              src={newsItem.image_path}
              alt={newsItem.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2">
          <p className="font-bold text-sm">{newsItem.title}</p>
          <p className="text-textGray text-sm">{newsItem.content}</p>
          <div className="flex justify-between mt-3">
            <p className="text-gray-600 text-[12px]">{newsItem.time}</p>
            <Badge
              className="w-auto"
              style={{ backgroundColor: categoryColor }}
            >
              {newsItem.category}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleNews;
