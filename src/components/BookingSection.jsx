import React from 'react';

export default function BookingSection() {
    return (
        <section id="contact" style={{ backgroundColor: "var(--bg-secondary)", width: "100%" }}>
            <div className="section-container" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", marginBottom: "1rem", color: "var(--text-primary)" }}>
                    Ready To Install Your AI Booking System?
                </h2>
                <p style={{ maxWidth: "600px", margin: "0 auto 3rem", fontSize: "clamp(1rem, 3vw, 1.125rem)", color: "var(--text-primary)", opacity: 0.9 }}>
                    If you're serious about scaling your home service business with automation, book a strategy call and we'll map out your custom AI system.
                </p>

                <div style={{
                    backgroundColor: "var(--card-light)",
                    color: "var(--text-on-light)",
                    padding: "clamp(1.5rem, 5vw, 3rem)",
                    borderRadius: "20px",
                    maxWidth: "600px",
                    margin: "0 auto",
                    boxShadow: "var(--shadow-soft)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                    >
                        {/* Web3Forms Access Key */}
                        <input type="hidden" name="access_key" value="7ea7ecb1-f056-4023-9cf7-a4771eec6c40" />

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "1.5rem"
                        }}>
                            <input type="text" name="first_name" placeholder="First Name" style={inputStyle} required />
                            <input type="text" name="last_name" placeholder="Last Name" style={inputStyle} required />
                        </div>
                        <input type="text" name="business_name" placeholder="Business Name" style={inputStyle} required />
                        <input type="tel" name="phone" placeholder="Phone Number" style={inputStyle} required />
                        <input type="email" name="email" placeholder="Email Address" style={inputStyle} required />

                        <button type="submit" style={{
                            backgroundColor: "#4A2A16", // Dark button
                            color: "var(--text-secondary)", // Light text
                            padding: "1.2rem",
                            fontSize: "1.125rem",
                            border: "none",
                            borderRadius: "4px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginTop: "1rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                        }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#5A3420"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "#4A2A16"}
                        >
                            Book My Strategy Call
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

const inputStyle = {
    padding: "1rem",
    borderRadius: "6px",
    border: "1px solid rgba(74, 42, 22, 0.2)",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
    color: "#4A2A16",
    outline: "none"
};
