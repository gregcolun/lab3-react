import styles from "./Header.module.css";

export function Header({ badge, title, subtitle, align = "left" }) {
  const alignmentClass = align === "center" ? styles.center : styles.left;

  return (
    <div className={`${styles.header} ${alignmentClass}`}>
      {badge && <p className={styles.badge}>{badge}</p>}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
