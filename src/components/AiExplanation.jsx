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
        <section id="services" style={{ backgroundColor: "var(--bg-primary)", width: "100%", borderTop: "1px solid rgba(253, 185, 49, 0.1)" }}>
            <div className="section-container" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                    AI That Books Jobs While You Sleep
                </h2>
                <p style={{ maxWidth: "800px", margin: "0 auto 4rem", fontSize: "clamp(1.1rem, 3vw, 1.2rem)", color: "var(--text-secondary)", lineHeight: "1.8" }}>
                    Most home service businesses lose thousands every month from missed calls, slow responses, and weak follow-up.
                    ArcFlow installs a fully automated AI system that answers instantly, qualifies prospects, follows up relentlessly,
                    and fills your calendar - automatically.
                </p>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "stretch",
                    gap: "clamp(0.5rem, 1.5vw, 1.5rem)",
                    marginTop: "2rem",
                    padding: "1rem"
                }}
                    className="flow-chart-container">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="flow-card" style={{
                                background: "rgba(74, 42, 22, 0.4)",
                                padding: "clamp(1rem, 2vw, 2rem)",
                                borderRadius: "20px",
                                flex: "1",
                                minWidth: "0",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                border: "1px solid rgba(231, 207, 163, 0.1)",
                                transition: "all 0.3s ease",
                                transform: "translateY(0)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-10px)";
                                    e.currentTarget.style.borderColor = "var(--text-secondary)";
                                    e.currentTarget.style.backgroundColor = "rgba(74, 42, 22, 0.6)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.borderColor = "rgba(231, 207, 163, 0.1)";
                                    e.currentTarget.style.backgroundColor = "rgba(74, 42, 22, 0.4)";
                                }}>
                                <div className="flow-icon" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: "0.5rem" }}>{step.icon}</div>
                                <div className="flow-label" style={{ fontWeight: "700", color: "#FFFFFF", fontSize: "clamp(0.7rem, 1.2vw, 0.95rem)", textAlign: "center" }}>{step.label}</div>
                            </div>
                            {index < steps.length - 1 && (
                                <div style={{ fontSize: "1.5rem", color: "var(--text-secondary)", fontWeight: "bold", flex: "0 0 auto", opacity: 0.4, alignSelf: "center" }} className="flow-arrow">→</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .flow-chart-container {
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 1.5rem !important;
                    }
                    .flow-card {
                        width: 90% !important;
                        max-width: 320px !important;
                        height: 180px !important; /* Fixed height for better visual consistency on mobile */
                        padding: 2rem !important;
                        flex: none !important;
                    }
                    .flow-icon {
                        font-size: 3.5rem !important;
                        margin-bottom: 0.8rem !important;
                    }
                    .flow-label {
                        font-size: 1.25rem !important;
                    }
                    .flow-arrow {
                        transform: rotate(90deg);
                        margin: 0.5rem 0 !important;
                        font-size: 2rem !important;
                    }
                }
            `}} />
        </section>
    );
}
