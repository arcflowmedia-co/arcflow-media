import React from 'react';

export default function BookingSection() {
    return (
        <section id="contact" style={{ backgroundColor: "var(--bg-primary)", width: "100%", padding: "5rem 0", borderTop: "1px solid rgba(253, 185, 49, 0.1)" }}>
            <div className="section-container" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                    Ready To Install Your AI Booking System?
                </h2>
                <p style={{ maxWidth: "600px", margin: "0 auto 4rem", fontSize: "clamp(1.1rem, 3vw, 1.25rem)", color: "var(--text-secondary)", opacity: 0.9, lineHeight: "1.6" }}>
                    If you're serious about scaling your home service business with automation, book a strategy call and we'll map out your custom AI system.
                </p>

                <div style={{
                    backgroundColor: "rgba(74, 42, 22, 0.2)",
                    padding: "clamp(2rem, 5vw, 4rem)",
                    borderRadius: "30px",
                    maxWidth: "700px",
                    margin: "0 auto",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
                    border: "1px solid rgba(231, 207, 163, 0.1)",
                    backdropFilter: "blur(10px)"
                }}>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
                    >
                        <input type="hidden" name="access_key" value="7ea7ecb1-f056-4023-9cf7-a4771eec6c40" />

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "2rem"
                        }}>
                            <input type="text" name="first_name" placeholder="First Name" style={inputStyle} required />
                            <input type="text" name="last_name" placeholder="Last Name" style={inputStyle} required />
                        </div>
                        <input type="text" name="business_name" placeholder="Business Name" style={inputStyle} required />
                        <input type="tel" name="phone" placeholder="Phone Number" style={inputStyle} required />
                        <input type="email" name="email" placeholder="Email Address" style={inputStyle} required />

                        <button type="submit" className="shiny-cta" style={{
                            marginTop: "1rem",
                            border: "none",
                            width: "100%",
                            outline: "none"
                        }}>
                            BOOK MY STRATEGY CALL
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

const inputStyle = {
    padding: "1.2rem",
    borderRadius: "12px",
    border: "1px solid rgba(253, 185, 49, 0.2)",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "rgba(26, 15, 0, 0.5)",
    color: "#FFFFFF",
    outline: "none",
    transition: "border-color 0.3s ease"
};
