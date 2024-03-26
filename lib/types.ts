export interface UserType {
  avatar: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birthdate: string;
  nationality: number;
  registration_date: string;
  user_id: string;
}

export interface ILoginResponse {
  error?: string;
  success?: boolean;
}

export interface IFormData {
  email: string;
  password: string;
}
