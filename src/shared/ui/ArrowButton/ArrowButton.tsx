"use client";

import styles from "./ArrowButton.module.scss";

interface ArrowButtonProps {
  direction: "decrement" | "increment";
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled = false,
  ariaLabel,
  className,
}) => {
  const isLeft = direction === "decrement";
  const label = ariaLabel ?? (isLeft ? "Уменьшить" : "Увеличить");

  return (
    <button
      className={`${styles.arrowBtn} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      type="button"
    >
      {isLeft ? "−" : "+"}
    </button>
  );
};

export default ArrowButton;
