import styles from "./Button.module.css";

export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  className = "",
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    block ? styles.block : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
