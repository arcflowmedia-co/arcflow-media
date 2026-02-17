import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false); // Close menu after clicking
        }
    };

    return (
        <>
            <nav style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                padding: "1rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 1000,
                transition: "all 0.3s ease",
                backgroundColor: "var(--bg-primary)",
                borderBottom: "1px solid rgba(231, 198, 162, 0.1)",
                boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
                boxSizing: "border-box"
            }}>
                {/* Logo */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer"
                }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src="/logo.svg"
                        alt="ArcFlow Logo"
                        style={{ height: "60px", width: "auto" }}
                    />
                    <span style={{
                        fontSize: "1.8rem",
                        fontWeight: "800",
                        color: "var(--text-primary)",
                        letterSpacing: "-0.02em",
                        marginLeft: "10px",
                        background: "linear-gradient(to right, #E7CFA3, #C5A059)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        ArcFlow Media
                    </span>
                </div>

                {/* Desktop Navigation Links */}
                <div className="desktop-nav" style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "center"
                }}>
                    <a
                        href="#how-it-works"
                        onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                        style={linkStyle}
                    >
                        How It Works
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                        style={linkStyle}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                        style={linkStyle}
                    >
                        Contact
                    </a>

                    <button style={{
                        backgroundColor: "var(--btn-primary)",
                        color: "#4A2A16",
                        border: "none",
                        padding: "0.8rem 1.5rem",
                        borderRadius: "4px",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontSize: "0.9rem",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        whiteSpace: "nowrap"
                    }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = "var(--btn-hover)";
                            e.target.style.transform = "translateY(-1px)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = "var(--btn-primary)";
                            e.target.style.transform = "translateY(0)";
                        }}
                        onClick={() => scrollToSection('contact')}
                    >
                        Book Call
                    </button>
                </div>

                {/* Mobile Hamburger Icon */}
                <button
                    className="mobile-hamburger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0.5rem",
                        zIndex: 1001
                    }}
                    aria-label="Toggle menu"
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <span style={{
                            width: "28px",
                            height: "3px",
                            backgroundColor: "var(--text-primary)",
                            borderRadius: "2px",
                            transition: "all 0.3s ease",
                            transform: mobileMenuOpen ? "rotate(45deg) translateY(8px)" : "none"
                        }}></span>
                        <span style={{
                            width: "28px",
                            height: "3px",
                            backgroundColor: "var(--text-primary)",
                            borderRadius: "2px",
                            transition: "all 0.3s ease",
                            opacity: mobileMenuOpen ? 0 : 1
                        }}></span>
                        <span style={{
                            width: "28px",
                            height: "3px",
                            backgroundColor: "var(--text-primary)",
                            borderRadius: "2px",
                            transition: "all 0.3s ease",
                            transform: mobileMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none"
                        }}></span>
                    </div>
                </button>
            </nav>

            {/* Mobile Side Menu */}
            <div style={{
                position: "fixed",
                top: 0,
                right: mobileMenuOpen ? 0 : "-100%",
                width: "280px",
                height: "100vh",
                backgroundColor: "#1a0f00",
                zIndex: 999,
                transition: "right 0.3s ease",
                paddingTop: "80px",
                boxShadow: mobileMenuOpen ? "-4px 0 20px rgba(0,0,0,0.5)" : "none"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    padding: "2rem 0"
                }}>
                    <a
                        href="#how-it-works"
                        onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
                        style={mobileMenuLinkStyle}
                    >
                        How It Works
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                        style={mobileMenuLinkStyle}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                        style={mobileMenuLinkStyle}
                    >
                        Contact
                    </a>

                    <div style={{ padding: "1.5rem 2rem" }}>
                        <button
                            onClick={() => scrollToSection('contact')}
                            style={{
                                width: "100%",
                                backgroundColor: "var(--btn-primary)",
                                color: "#4A2A16",
                                border: "none",
                                padding: "1rem 1.5rem",
                                borderRadius: "4px",
                                fontWeight: "700",
                                cursor: "pointer",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                                fontSize: "0.9rem",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
                            }}
                        >
                            Book Call
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 998
                    }}
                />
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-hamburger {
                        display: flex !important;
                    }
                }
                
                @media (min-width: 769px) {
                    .desktop-nav {
                        display: flex !important;
                    }
                    .mobile-hamburger {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
}

const linkStyle = {
    color: "var(--text-primary)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    opacity: 0.9,
    transition: "opacity 0.2s",
    whiteSpace: "nowrap"
};

const mobileMenuLinkStyle = {
    color: "var(--text-primary)",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    padding: "1rem 2rem",
    borderBottom: "1px solid rgba(231, 198, 162, 0.1)",
    transition: "background-color 0.2s",
    display: "block"
};
