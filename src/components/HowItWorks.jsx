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
        <section id="how-it-works" style={{ backgroundColor: "var(--bg-secondary)", width: "100%" }}>
            <div className="section-container">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", textAlign: "center", color: "var(--text-primary)" }}>
                    Your ArcFlow AI System. Installed In 7 Days.
                </h2>

                <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", paddingLeft: "30px" }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: "absolute",
                        left: "0",
                        top: "10px",
                        bottom: "10px",
                        width: "2px",
                        backgroundColor: "var(--accent)",
                        opacity: 0.3
                    }} />

                    {steps.map((step, index) => (
                        <div key={index} style={{
                            position: "relative",
                            marginBottom: "3rem",
                            paddingLeft: "40px"
                        }}>
                            {/* Dot */}
                            <div style={{
                                position: "absolute",
                                left: "-9px",
                                top: "0",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                backgroundColor: "var(--bg-secondary)",
                                border: "2px solid var(--accent)",
                                zIndex: 1,
                                boxShadow: "0 0 10px rgba(231, 207, 163, 0.4)"
                            }} />

                            <div style={{
                                backgroundColor: "var(--card-bg)",
                                padding: "2rem",
                                borderRadius: "16px",
                                boxShadow: "var(--shadow-card)",
                                border: "1px solid rgba(231, 207, 163, 0.05)"
                            }}>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>
                                    Step {index + 1}: {step.title}
                                </h3>
                                <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
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
