import { useState } from "react";
import styles from "./ContactPage.module.css";
import contact from "@data/contact.json";
import faq from "@data/faq.json";
import { Header } from "@components/common/Header/Header";
import { Button } from "@components/common/Button/Button";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className={styles.page}>
      <section className={styles.top}>
        <Header
          badge="Contact and support"
          title="Talk to our team"
          subtitle="Ask for schedules, membership details, or the right program combination for your goals."
        />

        <div className={styles.contactGrid}>
          <article className={styles.contactCard}>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>{contact.email}</p>
          </article>
          <article className={styles.contactCard}>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>{contact.phone}</p>
          </article>
          <article className={styles.contactCard}>
            <p className={styles.label}>Location</p>
            <p className={styles.value}>{contact.location}</p>
          </article>
        </div>
      </section>

      <section className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Request a callback</h2>
          <label>
            Full name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <Button type="submit" block>
            Send request
          </Button>
          {sent && <p className={styles.success}>Message sent. We will contact you shortly.</p>}
        </form>

        <aside className={styles.infoSide}>
          <div className={styles.scheduleBox}>
            <h3>Studio schedule</h3>
            <ul>
              {contact.schedule.map((entry) => (
                <li key={entry.day}>
                  <span>{entry.day}</span>
                  <strong>{entry.hours}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.scheduleBox}>
            <h3>Follow us</h3>
            <ul>
              {contact.social.map((entry) => (
                <li key={entry.label}>
                  <a href={entry.url} target="_blank" rel="noreferrer">
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className={styles.faq}>
        <Header
          badge="FAQ"
          title="Frequent questions"
          subtitle="Quick answers for first-time visitors and members."
        />

        <div className={styles.faqList}>
          {faq.map((entry) => (
            <details key={entry.id} className={styles.faqItem}>
              <summary>{entry.question}</summary>
              <p>{entry.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
