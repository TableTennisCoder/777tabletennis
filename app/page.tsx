import React from "react";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/ui/Container";

import HeroSection from "@/components/hero-section/HeroSection";
import News from "../components/news/News";
import WeeklyNews from "../components/news/WeeklyNews";
import Categories from "@/components/categories/Categories";
import NewsletterRegistration from "@/components/newsletter-registration/NewsletterRegistration";

import Sidebar from "@/components/sidebar/Sidebar";
import RelatedArticles from "@/components/related-articles/RelatedArticles";
import { relatedNews } from "@/lib/dummy-data/relatedNews";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-row gap-6 mt-8 mx-5">
        <div className="w-full lg:w-5/6 flex flex-col gap-12">
          <HeroSection />
          <News />
          <NewsletterRegistration />
          <WeeklyNews />
          <div className="h-10"></div>
        </div>
        <div className="w-3/12 hidden lg:flex">
          <Sidebar>
            <p className="text-xl font-light mb-3 text-white">NEWSTICKER</p>
            {relatedNews.map((item) => (
              <div key={item.title}>
                <Separator className="mb-3 bg-borderColor" />
                <RelatedArticles item={item} />
              </div>
            ))}

            <div className="h-10"></div>
            <p className="text-xl font-light mb-3 text-white">
              RELATED ARTICLES
            </p>
            {relatedNews.map((item) => (
              <div key={item.title}>
                <Separator className="mb-3 bg-borderColor" />
                <RelatedArticles item={item} />
              </div>
            ))}

            <div className="h-10"></div>
            <p className="text-xl font-light mb-3 text-white">CATEGORIES</p>
            <Separator className="mb-3 bg-borderColor" />
            <Categories />
          </Sidebar>
        </div>
      </div>
    </Container>
  );
};

export default Home;
