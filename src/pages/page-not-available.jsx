const getYesterdayDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function PageNotAvailable() {
  return (
    <div className="dev-container">
      <div className="dev-content">
        <h1 className="dev-title">
          Portfolio Under Development{" "}
          <span role="img" aria-label="wrench">
            🛠️
          </span>{" "}
        </h1>
        <div className="dev-illustration">
          <img
            src="/dev-illustrator.png"
            alt="Developer Illustration"
            className="dev-img"
          />
        </div>
        <p className="dev-message">
          My portfolio is being crafted for{" "}
          <span className="dev-highlight">1-2 days</span> from <br />
          <span className="dev-date">{getYesterdayDate()}</span>.
        </p>
        <div className="dev-info-card">
          <span className="dev-info-icon" role="img" aria-label="info">
            ℹ️
          </span>
          <span>
            If you need to reach me, please contact via{" "}
            <a
              href="mailto:smitkp03@gmail.com"
              className="dev-link"
              title="Send Email"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="tel:+919428192357"
              className="dev-link"
              title="Call Mobile"
            >
              mobile
            </a>
            .
          </span>
        </div>
        <div className="dev-contact-row">
          <a
            href="mailto:smitkp03@gmail.com"
            className="dev-contact-btn"
            title="Send Email"
          >
            📧 smitkp03@gmail.com
          </a>
          <a
            href="tel:+919428192357"
            className="dev-contact-btn"
            title="Call Mobile"
          >
            📱 +91 94281 92357
          </a>
        </div>
        <p className="dev-subtext">
          Thank you for your patience!{" "}
          <span role="img" aria-label="laptop">
            💻
          </span>
        </p>
      </div>
      <style>{`
        body {
          margin: 0 !important;
          padding: 0;
        }
        .dev-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at 60% 40%, #38bdf8 0%, #18181b 100%);
          font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
        }
        .dev-content {
          background: rgba(24,24,27,0.98);
          padding: 2.5rem 2rem 2rem 2rem;
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(56,189,248,0.18);
          text-align: center;
          max-width: 420px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dev-title {
          font-size: 2.1rem;
          font-weight: 800;
          color: #38bdf8;
          margin-bottom: 1.1rem;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 8px #18181b33;
        }
        .dev-illustration {
          margin-bottom: 0.8rem;
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dev-img {
          width: 220px;
          height: 220px;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          animation: float 4.5s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          30% { transform: translateY(-16px); }
          100% { transform: translateY(0); }
        }
        .dev-message {
          font-size: 1.13rem;
          color: #e0e7ef;
          margin-bottom: 1.1rem;
        }
        .dev-highlight {
          color: #fbbf24;
          font-weight: 700;
        }
        .dev-date {
          color: #a5b4fc;
          font-weight: 700;
        }
        .dev-info-card {
          background: rgba(56,189,248,0.10);
          border-radius: 0.9rem;
          padding: 0.7rem 1rem;
          margin-bottom: 1.1rem;
          color: #a1a1aa;
          font-size: 1.04rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 8px 0 rgba(56,189,248,0.07);
        }
        .dev-info-icon {
          font-size: 1.3rem;
        }
        .dev-link {
          color: #38bdf8;
          font-weight: 600;
          text-decoration: underline;
          transition: color 0.2s;
        }
        .dev-link:hover {
          color: #fbbf24;
        }
        .dev-contact-row {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 1.1rem;
          width: 100%;
        }
        .dev-contact-btn {
          background: linear-gradient(90deg, #38bdf8 0%, #6366f1 100%);
          color: #fff;
          font-weight: 700;
          border: none;
          border-radius: 0.7rem;
          padding: 0.7rem 1rem;
          font-size: 1.05rem;
          text-decoration: none;
          box-shadow: 0 2px 8px 0 rgba(56,189,248,0.13);
          transition: background 0.2s, color 0.2s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dev-contact-btn:hover {
          background: linear-gradient(90deg, #fbbf24 0%, #38bdf8 100%);
          color: #18181b;
          transform: translateY(-2px) scale(1.03);
        }
        .dev-subtext {
          font-size: 1.01rem;
          color: #a1a1aa;
          margin-top: 0.5rem;
          margin-bottom: 0.2rem;
        }
        @media (max-width: 600px) {
          .dev-content {
            padding: 1.5rem 0.5rem;
            max-width: 98vw;
          }
          .dev-title {
            font-size: 1.3rem;
          }
          .dev-illustration {
            width: 90px;
            height: 90px;
          }
          .dev-img {
            width: 55px;
            height: 55px;
            max-width: 55px;
            max-height: 55px;
          }
          .dev-info-card {
            font-size: 0.97rem;
            padding: 0.5rem 0.5rem;
          }
          .dev-contact-btn {
            font-size: 0.97rem;
            padding: 0.5rem 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}
