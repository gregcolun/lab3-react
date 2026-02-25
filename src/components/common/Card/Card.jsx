import styles from "./Card.module.css";
import { Button } from "@components/common/Button/Button";

export function Card({
  eyebrow,
  title,
  description,
  meta,
  tags = [],
  actionLabel,
  onAction,
  tone = "aurora"
}) {
  const toneClass = styles[tone] || styles.aurora;

  return (
    <article className={`${styles.card} ${toneClass}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {meta && <p className={styles.meta}>{meta}</p>}

      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {actionLabel && (
        <div className={styles.action}>
          <Button variant="secondary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </article>
  );
}
