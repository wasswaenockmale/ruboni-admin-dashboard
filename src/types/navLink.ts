export interface NavLinkProps {
  href: string,
  icon: any, 
  name: string
  isActive: boolean;
}

export interface NavLinkMenuProps{
  name: string,
  href: string,
  isActive: boolean,
  handleClick: () => void;
}