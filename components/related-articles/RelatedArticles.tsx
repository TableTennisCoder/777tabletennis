import React from "react";
import { archivo } from "@/app/layout";

type itemProps = {
  title: string;
  text: string;
};

type RelatedArticleProp = {
  item: itemProps;
};

const RelatedArticles = (props: RelatedArticleProp) => {
  return (
    <div className="flex flex-col gap-2 hover:scale-105 hover:text-gray-300 cursor-pointer transition-transform duration-500">
      <h1 className={`${archivo.className} text-md font-bold`}>
        {props.item.title}
      </h1>
      <p className="text-xs font-light mb-3">{props.item.text}</p>
    </div>
  );
};

export default RelatedArticles;
