import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './ContactSection.module.css';

const SOCIALS = [
  {
    Icon: FaGithub,
    label: 'GitHub',
    sub: 'maaz-khan8',
    href: 'https://github.com/maaz-khan8',
    color: 'var(--text-primary)',
    glow: 'rgba(241, 245, 249, 0.15)',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    sub: 'maaz-khan-5b9b12240',
    href: 'https://www.linkedin.com/in/maaz-khan-5b9b12240/',
    color: '#0a66c2',
    glow: 'rgba(10, 102, 194, 0.3)',
  },
  {
    Icon: FaEnvelope,
    label: 'Email',
    sub: 'maaz.khan20307@gmail.com',
    href: 'mailto:maaz.khan20307@gmail.com',
    color: '#f87171',
    glow: 'rgba(248, 113, 113, 0.25)',
  },
];

const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.5, delay },
});

const ContactSection = () => {
  const [form, setForm]           = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/xwpbyplw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setError('Failed to send. Please email me directly at maaz.khan90810@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section-padding`}>
      <div className="container">
        <motion.h2 className="section-title" {...inView(0)}>
          <span className="label">06. contact</span>
          Contact
        </motion.h2>

        <div className={styles.inner}>
          {/* ── Left: heading + socials ─────────────────── */}
          <motion.div className={styles.leftCol} {...inView(0.1)}>
            <h3 className={styles.cta}>
              Let's build something
              <span className="gradient-text"> together.</span>
            </h3>
            <p className={styles.ctaSub}>
              Open to full-time roles, internships, and interesting collaborations.
              Reach out via any channel below.
            </p>

            <div className={styles.socials}>
              {SOCIALS.map(({ Icon, label, sub, href, color, glow }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  style={{ '--glow': glow }}
                >
                  <span className={styles.socialIcon}>
                    <Icon style={{ color, fontSize: '1.3rem' }} />
                  </span>
                  <div className={styles.socialText}>
                    <span className={styles.socialLabel}>{label}</span>
                    <span className={styles.socialSub}>{sub}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ─────────────────────────────── */}
          <motion.div className={styles.formCard} {...inView(0.2)}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h4 className={styles.successTitle}>Message sent!</h4>
                <p className={styles.successText}>
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  className={`btn-outline ${styles.resetBtn}`}
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <h4 className={styles.formTitle}>Send a message</h4>

                {error && (
                  <div className={styles.errorBanner}>{error}</div>
                )}

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? (
                    <span className={styles.spinner} aria-hidden />
                  ) : null}
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer note */}
      <motion.p
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Built with React · Designed with care · Maaz Khan © 2026
      </motion.p>
    </section>
  );
};

export default ContactSection;
