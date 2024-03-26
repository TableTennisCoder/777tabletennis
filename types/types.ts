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
  name?: string;
  email?: string;
  image?: string;
  user_id?: string;
  isAdmin?: boolean;
  isAuthor?: boolean;
  isPlayer?: boolean;
};

export type TSession = {
  user: TUserSession;
  expires: string;
};

export interface ILoginResponse {
  error?: string;
  success?: boolean;
}

export interface IFormData {
  email: string;
  password: string;
}
