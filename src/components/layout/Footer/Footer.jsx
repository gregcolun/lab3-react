import styles from "./Footer.module.css";
import navItems from "@data/nav.json";

export function Footer({ navigate }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>UrbanPulse Studio</p>
          <p className={styles.copy}>Kinetic training with practical coaching.</p>
        </div>

        <nav className={styles.links} aria-label="Footer links">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => navigate(item.page)}>
              {item.label}
            </button>
          ))}
        </nav>

        <p className={styles.year}>© {new Date().getFullYear()} UrbanPulse</p>
      </div>
    </footer>
  );
}
