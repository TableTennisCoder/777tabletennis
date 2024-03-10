import React from "react";
import Caption from "../ui/Caption";
import SingleWeeklyNews from "../single-news/SingleWeeklyNews";

import { weeklyNews } from "@/lib/dummy-data/weeklyNewsData";

const WeeklyNews = () => {
  return (
    <div>
      <Caption caption="WEEKLY HIGHLIGHTS" />
      <div className="w-full h-auto grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {weeklyNews.map((item) => (
          <SingleWeeklyNews item={item} key={item.image} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyNews;
