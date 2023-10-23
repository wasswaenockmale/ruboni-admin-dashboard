export interface NavLinkProps {
  href: string,
  icon: any, 
  name: string
  isActive: boolean;
  collapsed: boolean
}

export interface NavLinkMenuProps{
  name: string,
  href: string,
  isActive: boolean,
  handleClick: () => void;
}