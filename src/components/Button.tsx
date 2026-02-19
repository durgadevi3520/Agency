type Props = {
  text: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  text,
  variant = "primary",
  onClick,
  type = "button"
}: Props) {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
