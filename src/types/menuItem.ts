import { IconType } from "react-icons";

export interface MenuItem {
  name: string;
  href: string;
  icon?: IconType | React.ReactNode | any;
}