import styles from "./ProgramPage.module.css";
import programs from "@data/programs.json";
import { Card } from "@components/common/Card/Card";
import { Header } from "@components/common/Header/Header";
import { Button } from "@components/common/Button/Button";

export function ProgramPage({ navigate }) {
  return (
    <div className={styles.page}>
      <section className={styles.topSection}>
        <Header
          badge="Weekly classes"
          title="Choose your training lane"
          subtitle="Programs are structured for progression and can be mixed based on your goal: strength, conditioning, mobility, or all three."
        />
        <Button variant="secondary" onClick={() => navigate("contact")}>
          Speak with reception
        </Button>
      </section>

      <section className={styles.grid}>
        {programs.map((program, index) => (
          <Card
            key={program.id}
            eyebrow={program.level}
            title={program.name}
            description={program.description}
            meta={`${program.duration} | ${program.schedule} | ${program.coach}`}
            actionLabel="Reserve spot"
            tone={index % 2 === 0 ? "ember" : "aurora"}
          />
        ))}
      </section>

      <section className={styles.bottomPanel}>
        <p className={styles.bottomTitle}>Need a custom onboarding plan?</p>
        <p className={styles.bottomText}>
          We can map the first 4 weeks around your schedule and current fitness level.
        </p>
        <Button size="lg" onClick={() => navigate("contact")}>
          Start onboarding
        </Button>
      </section>
    </div>
  );
}
