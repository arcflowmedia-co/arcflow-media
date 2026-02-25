import React, { useState } from 'react';

function InputSlider({ label, value, setValue, min, max, step, unit }) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontWeight: "600", color: "var(--text-secondary)" }}>
                <span>{label}</span>
                <span style={{ color: "var(--accent)" }}>
                    {unit === "$" ? "$" : ""}{value}{unit !== "$" ? unit : ""}
                </span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step || 1}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#C06722", cursor: "pointer" }}
            />
        </div>
    )
}

export default function RoiCalculator() {
    const [leads, setLeads] = useState(50);
    const [closeRate, setCloseRate] = useState(20);
    const [jobValue, setJobValue] = useState(1500);
    const [missedRate, setMissedRate] = useState(30);

    const recoveredRevenue = (leads * (missedRate / 100)) * (closeRate / 100) * jobValue;

    return (
        <section style={{ backgroundColor: "var(--bg-primary)", width: "100%", padding: "5rem 0", borderTop: "1px solid rgba(253, 185, 49, 0.1)" }}>
            <div className="section-container" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "3rem", color: "var(--text-primary)" }}>
                    See How Much Revenue You're Leaving On The Table
                </h2>

                <div style={{
                    backgroundColor: "rgba(74, 42, 22, 0.2)",
                    color: "white",
                    padding: "clamp(2rem, 5vw, 4rem)",
                    borderRadius: "30px",
                    maxWidth: "1000px",
                    margin: "0 auto",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(231, 207, 163, 0.1)",
                    backdropFilter: "blur(10px)"
                }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "clamp(2rem, 5vw, 4rem)",
                        textAlign: "left"
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                            <InputSlider label="Monthly Leads" value={leads} setValue={setLeads} min={10} max={500} unit="" />
                            <InputSlider label="Current Close Rate" value={closeRate} setValue={setCloseRate} min={5} max={80} unit="%" />
                            <InputSlider label="Average Job Value" value={jobValue} setValue={setJobValue} min={500} max={50000} step={100} unit="$" />
                            <InputSlider label="Missed Call Rate" value={missedRate} setValue={setMissedRate} min={10} max={90} unit="%" />
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2rem",
                            backgroundColor: "rgba(74, 42, 22, 0.3)",
                            borderRadius: "20px",
                            border: "1px solid rgba(231, 207, 163, 0.1)"
                        }}>
                            <h3 style={{ fontSize: "1.4rem", color: "var(--text-secondary)", marginBottom: "1.5rem", textAlign: "center" }}>Potential Monthly Revenue Increase</h3>
                            <div style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", fontWeight: "800", color: "#FFFFFF", lineHeight: "1" }}>
                                ${Math.round(recoveredRevenue).toLocaleString()}
                            </div>
                            <p style={{ marginTop: "1.5rem", color: "white", opacity: 0.8, fontSize: "1rem", textAlign: "center" }}>
                                By automating follow-ups and answering instantly.
                            </p>
                            <button className="shiny-cta" style={{
                                marginTop: "2.5rem",
                                width: "100%",
                                border: "none"
                            }}
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                CALCULATE POTENTIAL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
