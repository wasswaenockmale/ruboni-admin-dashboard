import { IconProps } from "@/types/icons";

const Rooms: React.FC<IconProps> = ({width, height}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${width} ${height}`}
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M440 424V88h-88V13.005L88 58.522V424H16v32h86.9L352 490.358V120h56v336h88v-32Zm-120 29.642l-200-27.586V85.478L320 51Z"
      />
      <path
        fill="currentColor"
        d="M256 232h32v64h-32z"
      />
    </svg>
  );
}

export default Rooms;