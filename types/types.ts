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

export type TUserSession = {
  email?: string;
  user_id?: string;
  isAdmin?: boolean;
  isAuthor?: boolean;
  isPlayer?: boolean;
};

export type TSession = {
  user: TUserSession;
  expires: string;
};
