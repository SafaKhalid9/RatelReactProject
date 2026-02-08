export interface ISideBarItem {
  text: string;
  icon: string;
  path: string;
  onClick?: () => void;
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}
