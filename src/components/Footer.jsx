import React from 'react';

export default function Footer() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{ backgroundColor: "var(--bg-primary)", padding: "4rem 2rem", borderTop: "1px solid rgba(231, 207, 163, 0.1)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src="/logo.svg"
                            alt="ArcFlow Logo"
                            style={{ height: "60px", width: "auto" }}
                        />
                        <span style={{
                            fontSize: "1.8rem",
                            fontWeight: "800",
                            marginLeft: "10px",
                            background: "linear-gradient(to right, #E7CFA3, #C5A059)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            ArcFlow Media
                        </span>
                    </div>
                    <div>
                        <p style={{ color: "var(--text-secondary)", opacity: 0.6, fontSize: "0.9rem" }}>Premium AI Automation Systems</p>
                    </div>
                </div>

                <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
                    <a
                        href="#how-it-works"
                        onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                        style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.3s" }}
                        onMouseOver={e => e.target.style.color = "var(--accent)"}
                        onMouseOut={e => e.target.style.color = "var(--text-secondary)"}
                    >
                        How It Works
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                        style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.3s" }}
                        onMouseOver={e => e.target.style.color = "var(--accent)"}
                        onMouseOut={e => e.target.style.color = "var(--text-secondary)"}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                        style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.3s" }}
                        onMouseOver={e => e.target.style.color = "var(--accent)"}
                        onMouseOut={e => e.target.style.color = "var(--text-secondary)"}
                    >
                        Contact
                    </a>
                </nav>

            </div>
            <div style={{ textAlign: "center", marginTop: "3rem", color: "var(--text-secondary)", opacity: 0.3, fontSize: "0.8rem" }}>
                © {new Date().getFullYear()} ArcFlow Media. All rights reserved.
            </div>
        </footer>
    );
}
