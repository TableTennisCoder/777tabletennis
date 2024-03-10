import React from "react";
import SingleNews from "../single-news/SingleNews";
import Caption from "../ui/Caption";
import { news } from "@/lib/dummy-data/newsData";

const News = () => {
  return (
    <div>
      <Caption caption="TRENDING NOW" />
      <div className="w-full h-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {news.map((item) => (
          <SingleNews newsItem={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default News;
