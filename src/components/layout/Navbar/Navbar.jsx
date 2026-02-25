import styles from "./Navbar.module.css";
import navItems from "@data/nav.json";
import { Button } from "@components/common/Button/Button";

export function Navbar({ currentPage, navigate }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <button className={styles.brand} type="button" onClick={() => navigate("home")}>
          UrbanPulse
        </button>

        <nav className={styles.nav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.link} ${currentPage === item.page ? styles.active : ""}`}
              onClick={() => navigate(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button size="sm" onClick={() => navigate("contact")}>
          Free Trial
        </Button>
      </div>
    </header>
  );
}
