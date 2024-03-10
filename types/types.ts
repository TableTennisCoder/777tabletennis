export type NewsItem = {
  id: number;
  image_path: string;
  title: string;
  content: string;
  time: string;
  category: string;
};

export type WeeklyNewsProps = {
  title: string;
  image: string;
  category: string;
  content?: string;
};
