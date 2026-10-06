import Container from "../ui/Container";
import styles from "./AIAdvisorSection.module.css";

const capabilities = [
  "Germany pathways",
  "Medical professional guidance",
  "Training & qualification",
  "Business expansion support",
];

export default function AIAdvisorSection() {
  return (
    <section className={styles.section}>
      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>

      <Container>
        <div className={styles.wrapper}>
          {/* Content */}

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine}></span>
              Western Bridge AI
            </div>

            <h2 className={styles.title}>
              Your Personal{" "}
              <span className={styles.goldText}>
                AI Pathway Advisor
              </span>
            </h2>

            <p className={styles.description}>
              Get guided answers based on Western Bridge services,
              Germany-focused pathways, medical preparation,
              qualification options, training, and international
              business support.
            </p>

            <div className={styles.capabilities}>
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className={styles.capability}
                >
                  <span className={styles.capabilityIcon}>
                    ✓
                  </span>

                  <span className={styles.capabilityText}>
                    {capability}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={styles.button}
            >
              Start AI Advisor
              <span aria-hidden="true">✦</span>
            </button>
          </div>

          {/* Chat Preview */}

          <div className={styles.chatPreview}>
            <div className={styles.chatHeader}>
              <div className={styles.chatIdentity}>
                <div className={styles.aiAvatar}>
                  WB
                </div>

                <div>
                  <span className={styles.chatName}>
                    Western Bridge AI
                  </span>

                  <span className={styles.chatStatus}>
                    <span className={styles.statusDot}></span>
                    Online
                  </span>
                </div>
              </div>

              <span
                className={styles.sparkle}
                aria-hidden="true"
              >
                ✦
              </span>
            </div>

            <div className={styles.chatBody}>
              <div className={styles.aiMessage}>
                Welcome to Western Bridge. How can I help you explore
                your international pathway today?
              </div>

              <div className={styles.quickChoices}>
                <span className={styles.quickChoice}>
                  Germany
                </span>

                <span className={styles.quickChoice}>
                  Medical Pathway
                </span>

                <span className={styles.quickChoice}>
                  Business Growth
                </span>
              </div>

              <div className={styles.userMessage}>
                I&apos;m a nurse and I&apos;m interested in Germany.
              </div>

              <div className={styles.aiMessage}>
                Western Bridge can help you understand a pathway that
                may include German language preparation, Medical
                German, qualification recognition, licensing
                preparation, and professional readiness.
              </div>
            </div>

            <div className={styles.chatInput}>
              <span className={styles.inputPlaceholder}>
                Type your message...
              </span>

              <button
                type="button"
                className={styles.sendButton}
                aria-label="Send message"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}