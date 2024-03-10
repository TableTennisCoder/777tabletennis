import React from "react";
import Caption from "../ui/Caption";
import SingleCrossSalesNews from "../single-news/SingleCrossSalesNews";

import { crossSalesNews } from "@/lib/dummy-data/crossSalesNewsData";

const CrossSalesNews = () => {
  return (
    <div>
      <Caption caption="RELATED NEWS" />
      <div className="w-full h-auto grid grid-cols-1 gap-6">
        {crossSalesNews.map((item, index) => (
          <SingleCrossSalesNews item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CrossSalesNews;
