import React from 'react';

const steps = [
    {
        title: "Strategy & Revenue Audit",
        description: "We analyze your current lead flow, response times, ad performance, and missed revenue opportunities."
    },
    {
        title: "Custom AI System Blueprint",
        description: "We design and build: Smart high-converting website, AI chatbot trained on your services, AI voice caller for missed calls, Paid ad funnel, Automated follow-up sequences."
    },
    {
        title: "Deployment & Optimization",
        description: "We launch, integrate, test, and optimize everything so your system runs on autopilot."
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" style={{ backgroundColor: "var(--bg-primary)", width: "100%", borderTop: "1px solid rgba(253, 185, 49, 0.1)" }}>
            <div className="section-container">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", textAlign: "center", color: "var(--text-primary)" }}>
                    Your ArcFlow AI System. Installed In 7 Days.
                </h2>

                <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", paddingLeft: "30px" }}>
                    {/* Vertical Line - Pure Gold Fade */}
                    <div style={{
                        position: "absolute",
                        left: "0",
                        top: "10px",
                        bottom: "10px",
                        width: "2px",
                        background: "linear-gradient(to bottom, transparent, var(--accent), transparent)",
                        opacity: 0.6
                    }} />

                    {steps.map((step, index) => (
                        <div key={index} className="step-card-wrapper" style={{
                            position: "relative",
                            marginBottom: "3rem",
                            paddingLeft: "40px",
                        }}>
                            {/* Dot - Glowing Gold */}
                            <div style={{
                                position: "absolute",
                                left: "-11px",
                                top: "0",
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                backgroundColor: "var(--bg-primary)",
                                border: "2px solid var(--accent)",
                                zIndex: 1,
                                boxShadow: "0 0 15px var(--accent)"
                            }} />

                            <div style={{
                                backgroundColor: "rgba(253, 185, 49, 0.03)",
                                padding: "2.5rem",
                                borderRadius: "20px",
                                border: "1px solid rgba(253, 185, 49, 0.2)",
                                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                cursor: "default"
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(253, 185, 49, 0.08)";
                                    e.currentTarget.style.transform = "translateX(10px)";
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = "rgba(253, 185, 49, 0.03)";
                                    e.currentTarget.style.transform = "translateX(0px)";
                                    e.currentTarget.style.borderColor = "rgba(253, 185, 49, 0.2)";
                                }}>
                                <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem", color: "var(--accent)" }}>
                                    Step {index + 1}: {step.title}
                                </h3>
                                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
