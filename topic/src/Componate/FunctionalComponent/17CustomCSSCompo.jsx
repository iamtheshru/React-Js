import React from 'react';
import "./custom.css";

const styles = {
    section: {
        fontFamily: "-apple-system",
        fontSize: "1rem",
        fontWeight: 1.5,
        lineHeight: 1.5,
        color: "#292b2c",
        backgroundColor: "#fff",
        padding: "0 2em"
    },
    wrapper: {
        textAlign: "center",
        maxWidth: "950px",
        margin: "0 auto",
        border: "1px solid #e6e6e6",
        padding: "40px 25px",
        marginTop: "50px"
    },
    avatar: {
        margin: "-90px auto 30px",
        width: "100px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "0"
    },
    quote: {
        lineHeight: 1.5,
        fontWeight: 300,
        marginBottom: "25px",
        fontSize: "1.375rem"
    },
    name: {
        marginBottom: "0",
        fontWeight: 600,
        fontSize: "1rem"
    },
    position: { fontWeight: 400 }
};
const CustomCSSCompo = () => {
    return (
        <>
            <div style={{ fontSize: "32px" }}>testing</div>
            <section style={styles.section}>
                <div style={styles.wrapper}>
                    <img src="https://randomuser.me/api/portraits/women/48.jpg" alt="Tammy Stevens" style={styles.avatar} />
                    <div>
                        <p style={styles.quote}>This is one of the best developer blogs on the planet! I read it daily to improve my skills.</p>
                    </div>
                    <p style={styles.name}>Tammy Stevents <span style={styles.position}>Front and delevar</span></p>
                </div>
            </section>
        </>
    );
};

export default CustomCSSCompo;