import profile from "../assets/profile.jpg"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1 className="hero-title">Hi, I am R Sagar Shresti</h1>
                <p className="hero-subtitle">
                    Computer Science Student | AI/ML | Computer Vision | Full Stack
                </p>

                <p className="hero-desc">
                    I build intelligent and practical application using Machine Learning,
                    Computer Vision and Modern web technologies.
                </p>

                <a
                href="/R_Sagar_shresti_Resume.pdf"
                download
                className="resume-btn"
                >
                    Download Resume
                </a>
            </div>

            <div className="hero-image">
                <img src={profile} alt="R Sagar Shresti"/>
            </div>
        </section>
    );
}

export default Hero;