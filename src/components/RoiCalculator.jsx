import React, { useState } from 'react';

function InputSlider({ label, value, setValue, min, max, step, unit }) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontWeight: "600", color: "#4A2A16" }}>
                <span>{label}</span>
                <span style={{ color: "var(--btn-primary)" }}>
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
                style={{ width: "100%", accentColor: "var(--btn-primary)", cursor: "pointer" }}
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
        <section style={{ backgroundColor: "var(--bg-primary)", width: "100%" }}>
            <div className="section-container" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", marginBottom: "2rem", color: "var(--text-primary)" }}>
                    See How Much Revenue You're Leaving On The Table
                </h2>

                <div style={{
                    backgroundColor: "var(--card-light)",
                    color: "var(--text-on-light)",
                    padding: "clamp(1.5rem, 5vw, 3rem)",
                    borderRadius: "20px",
                    maxWidth: "900px",
                    margin: "0 auto",
                    boxShadow: "var(--shadow-soft)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "clamp(1.5rem, 4vw, 3rem)",
                        textAlign: "left"
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            <InputSlider label="Monthly Leads" value={leads} setValue={setLeads} min={10} max={500} unit="" />
                            <InputSlider label="Current Close Rate" value={closeRate} setValue={setCloseRate} min={5} max={80} unit="%" />
                            <InputSlider label="Average Job Value" value={jobValue} setValue={setJobValue} min={100} max={5000} step={100} unit="$" />
                            <InputSlider label="Missed Call Rate" value={missedRate} setValue={setMissedRate} min={10} max={90} unit="%" />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: "2rem", borderLeft: "1px solid rgba(74, 42, 22, 0.1)" }}>
                            <h3 style={{ fontSize: "1.5rem", color: "#4A2A16", marginBottom: "1rem" }}>Potential Monthly Revenue Increase</h3>
                            <div style={{ fontSize: "3.5rem", fontWeight: "800", color: "#4A2A16", lineHeight: "1" }}>
                                ${Math.round(recoveredRevenue).toLocaleString()}
                            </div>
                            <p style={{ marginTop: "1rem", color: "#4A2A16", opacity: 0.8, fontSize: "0.9rem" }}>
                                By automating follow-ups and answering instantly.
                            </p>
                            <button style={{
                                marginTop: "2rem",
                                backgroundColor: "#4A2A16", // Dark button for contrast on light card
                                color: "var(--text-secondary)", // Light text
                                padding: "1rem 2rem",
                                fontSize: "1rem",
                                border: "none",
                                borderRadius: "4px",
                                fontWeight: "bold",
                                width: "100%",
                                cursor: "pointer",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em"
                            }}
                                onMouseOver={(e) => e.target.style.backgroundColor = "#5A3420"}
                                onMouseOut={(e) => e.target.style.backgroundColor = "#4A2A16"}
                            >
                                Calculate My Revenue Potential
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
