import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface ISideBarItem {
  text: string;
  icon: string;
  path: string;
  onClick?: () => void;
}
export type TSettingItem = {
  text: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  path: string;
};
