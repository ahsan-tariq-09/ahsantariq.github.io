import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("atariq@knox.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-page">
      <h1 className="contact-title">Contact</h1>

      <p className="contact-description">
        Feel free to reach out for collaborations, research opportunities, or
        just to say hello.
      </p>

      <div className="contact-list">

        <div className="contact-item">
          <strong>Email</strong>
          <div className="contact-actions">
            <span>atariq@knox.edu</span>

            <button onClick={copyEmail} className="contact-button-small">
              {copied ? "Copied!" : "Copy"}
            </button>

            <a href="mailto:atariq@knox.edu" className="contact-link">
              Send Email
            </a>
          </div>
        </div>

        <div className="contact-item">
          <strong>GitHub</strong>
          <a
            href="https://github.com/ahsan-tariq-09"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/ahsan-tariq-09
          </a>
        </div>

        <div className="contact-item">
          <strong>LinkedIn</strong>
          <a
            href="https://linkedin.com/in/ahsan-09-tariq"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/ahsan-09-tariq
          </a>
        </div>

      </div>
    </section>
  );
}