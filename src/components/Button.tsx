interface ButtonProps {
  label: string;
  className?: string;
  textColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  label,
  className,
  textColor,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full flex justify-center items-center w-[8rem] h-8`}
    >
      {icon}
      <span className={`${textColor} text-sm font-semibold ${icon && "ml-2"}`}>
        {label}
      </span>
    </button>
  );
}
