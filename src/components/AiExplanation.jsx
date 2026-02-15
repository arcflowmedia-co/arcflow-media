import React from 'react';

const steps = [
    { label: "Paid Ads", icon: "📢" },
    { label: "Smart Website", icon: "💻" },
    { label: "AI Chatbot", icon: "🤖" },
    { label: "AI Voice Agent", icon: "📞" },
    { label: "Booked Appointment", icon: "📅" }
];

export default function AiExplanation() {
    return (
        <section id="services" style={{ backgroundColor: "var(--bg-secondary)", width: "100%" }}>
            <div className="section-container" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", marginBottom: "1.5rem", color: "#FFFFFF", textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                    AI That Books Jobs While You Sleep
                </h2>
                <p style={{ maxWidth: "800px", margin: "0 auto 3rem", fontSize: "clamp(1rem, 3vw, 1.25rem)", color: "#FFFFFF", opacity: 1 }}>
                    Most home service businesses lose thousands every month from missed calls, slow responses, and weak follow-up.
                    ArcFlow installs a fully automated AI system that answers instantly, qualifies prospects, follows up relentlessly,
                    and fills your calendar - automatically.
                </p>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    marginTop: "2rem",
                    overflowX: "auto",
                    paddingBottom: "1rem"
                }}
                    className="flow-chart-container">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div style={{
                                background: "var(--card-bg)",
                                padding: "1.5rem",
                                borderRadius: "12px",
                                minWidth: "140px",
                                flex: "0 0 auto",
                                boxShadow: "var(--shadow-card)",
                                border: "1px solid rgba(231, 207, 163, 0.1)"
                            }}>
                                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{step.icon}</div>
                                <div style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "0.9rem" }}>{step.label}</div>
                            </div>
                            {index < steps.length - 1 && (
                                <div style={{ fontSize: "1.5rem", color: "var(--accent)", fontWeight: "bold", flex: "0 0 auto" }} className="flow-arrow">→</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .flow-chart-container {
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    .flow-arrow {
                        transform: rotate(90deg);
                    }
                }
            `}</style>
        </section>
    );
}
