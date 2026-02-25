import styles from "./HomePage.module.css";
import metrics from "@data/metrics.json";
import highlights from "@data/highlights.json";
import testimonials from "@data/testimonials.json";
import { Button } from "@components/common/Button/Button";
import { Card } from "@components/common/Card/Card";
import { Header } from "@components/common/Header/Header";

export function HomePage({ navigate }) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Header
          badge="City wellness concept"
          title="Move with rhythm. Train with intent."
          subtitle="UrbanPulse is a studio concept built around focused coaching, compact class formats, and repeatable routines for busy schedules."
        />

        <div className={styles.actions}>
          <Button size="lg" onClick={() => navigate("program")}>
            Explore programs
          </Button>
          <Button variant="ghost" size="lg" onClick={() => navigate("contact")}>
            Book your intro session
          </Button>
        </div>

        <div className={styles.metrics}>
          {metrics.map((item) => (
            <div key={item.id} className={styles.metricItem}>
              <p className={styles.metricValue}>{item.value}</p>
              <p className={styles.metricLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Header
          badge="What makes it different"
          title="A system built to keep momentum high"
          subtitle="Every part of the experience is designed to reduce friction and improve consistency."
        />
        <div className={styles.cardsGrid}>
          {highlights.map((item) => (
            <Card
              key={item.id}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              meta={item.meta}
              tags={item.tags}
              tone={item.tone}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Header
          badge="Community feedback"
          title="Members who built long-term habits"
          subtitle="Real routines from people balancing work, study, and city life."
        />
        <div className={styles.cardsGrid}>
          {testimonials.map((entry) => (
            <Card
              key={entry.id}
              eyebrow={entry.role}
              title={entry.name}
              description={`"${entry.quote}"`}
              tone="ocean"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
