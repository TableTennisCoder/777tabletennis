import Image from "next/image";
import Container from "@/components/ui/Container";
import Sidebar from "@/components/sidebar/Sidebar";
import RelatedArticles from "@/components/related-articles/RelatedArticles";
import CrossSalesNews from "@/components/news/CrossSaleNews";

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { archivo } from "@/app/layout";

import { relatedNews } from "@/lib/dummy-data/relatedNews";

const SignleNewsPage = () => {
  return (
    <Container>
      <div className="w-full mt-8 mx-5 mr-10 flex flex-col gap-2">
        <div className="mr-10 flex flex-col gap-2">
          <p className="text-sm text-textGray">TOP STORIES</p>
          <h1 className={`${archivo.className} text-3xl font-bold mr-4`}>
            Eyes On The Future; Matsushima And Harimoto Primed For WTT Grand
          </h1>
          <h5 className="text-sm font-light mb-4 mr-4">
            Singapore Smash 2024 is nearly upon us with the 11-day spectacle
            taking over Singapore Sports Hub from 7-17 March, and amongst the
            list of exciting talent heading to the Lion City for the first time
            are two young stars from Japanese shores, with Sora Matsushima and
            Miwa Harimoto poised to mak...
          </h5>
          <Separator className="mb-3 bg-borderColor" />
          <div className="flex justify-between">
            <div className="flex flex-row gap-4 mb-6">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-light">John Doe</p>
                <p className="text-sm font-light text-blue-600">Archive</p>
              </div>
            </div>
            <p className="text-sm text-textGray">
              Updated on February 29, 2024 3:17 PM
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-4 mx-5">
        <div className="w-full lg:w-9/12 flex flex-col gap-2">
          <div className="mb-8">
            <div className="h-[500px] max-h-[500px] relative overflow-hidden rounded-lg">
              <Image
                src="/news4.png"
                alt="Eyes On The Future;"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-xs mt-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium ducimus
            </p>
          </div>
          <p>
            Singapore Smash 2024 is nearly upon us with the 11-day spectacle
            taking over Singapore Sports Hub from 7-17 March, and amongst the
            list of exciting talent heading to the Lion City for the first time
            are two young stars from Japanese shores, with Sora Matsushima and
            Miwa Harimoto poised to make their WTT Grand Smash debuts.
            <br />
            <br />
            Aged 16 and 15 respectively, Matsushima and Harimoto are in the
            early stages of their young careers, but both have already captured
            the attention of the worldwide table tennis fanbase with dazzling
            displays on the big stage. Tearing up the WTT Youth Series in 2022
            and 2023 with eight singles titles across all age disciplines,
            Matsushima has already established a winning mentality from a young
            age, and while potential doesn’t always translate to success,
            Matsushima’s rapid progression has got everyone talking. TICKETS:
            SECURE YOUR SEAT AT SINGAPORE SMASH NOW Breaking through at senior
            level with a notable run to the Men’s Singles main draw at last
            year’s WTT Contender Lima, it didn’t take long for Matsushima to
            take things to the next level, slaying table tennis giants Lee Sang
            Su and Dimitrij Ovtcharov on his way to an astonishing runner-up
            finish at WTT Contender Rio de Janeiro 2023.
            <br />
            <br />
            Following on from that stunning effort in Rio, Matsushima went on to
            reach back-to-back quarterfinals at WTT Contender events in Muscat
            and Antalya, and has started this season with a Top 16 finish at WTT
            Star Contender Doha 2024. As a result, Matsushima has climbed 184
            world ranking positions year on year (March 2023 – March 2024),
            rising from World No.216 to No.32. If you think those numbers are
            impressive, that’s because they are, but Miwa Harimoto’s rise to
            prominence is even more remarkable. Ranked outside the World Top 500
            as recently as March 2022, Harimoto now finds herself a regular
            member of the World Top 20, reaching as high as World No.13 last
            November. How did a player so young enjoy such a meteoric rise? Hard
            work in the practice hall and bags full of talent have naturally
            helped, but there’s something incredibly special about Harimoto that
            has Japanese fans excited. Following in the footsteps of her older
            brother Tomokazu Harimoto, Miwa quickly burst onto the scene,
            reaching her first senior final in 2022 before going on to clinch
            her first Women’s Singles accolades one year later at WTT Feeder
            Antalya and WTT Contender Tunis.
            <br />
            <br />
            Making her WTT Champions and WTT Finals debuts towards the backend
            of last season, Harimoto most recently showcased her stunning
            credentials at ITTF World Team Championships 2024, playing a key
            role in Japan’s silver medal finish. Promoting Sora Matsushima and
            Miwa Harimoto on the senior circuit underlines Japan’s
            forward-thinking approach, giving young talent the opportunity and
            platform for growth, bolstering its long-term vision of developing
            multiple next-gen stars ready to take the challenge to the sport’s
            best. PLAYER LIST: CHECK OUT WHO IS HEADED TO THE LION CITY On the
            Women’s Singles side of the draw, Miu Hirano, Hina Hayata and Mima
            Ito (all aged 23) are the most senior members of the Japanese
            contingent heading to Singapore Smash 2024, while five of the six
            members of the Men’s Singles contingent are aged 23 or below. A bold
            approach, but will it pay off? How will Sora Matsushima and Miwa
            Harimoto fare on their WTT Grand Smash debut at Singapore Smash
            2024? Tickets are selling fast, so be sure to get in on the action
            and reserve your seat for Singapore Smash now!
          </p>
          <div className="h-10"></div>
          <CrossSalesNews />
        </div>
        <div className="w-3/12 hidden lg:flex">
          <Sidebar>
            <p className={`${archivo.className} text-sm font-light mb-3`}>
              RELATED ARTICLES
            </p>
            {relatedNews.map((item) => (
              <div key={item.title}>
                <Separator className="mb-3 bg-borderColor" />
                <RelatedArticles item={item} />
              </div>
            ))}
          </Sidebar>
        </div>
      </div>
      <div className="h-16"></div>
    </Container>
  );
};

export default SignleNewsPage;
