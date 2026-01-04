function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projects-container">
                {/*Project 1 */}
                <div className="project-card">
                    <h3>Driver Drowsiness Detection System</h3>
                    <p>
                        Developed a real-time driver drowsiness detection system using
                        computer vision techniques. The system monitors facial landmarks
                        and calculates Eye Aspect Ratio(EAR) to detect fatigue and trigger alerts.
                    </p>
                    <p className="tech">
                        Tech Stack: Python, OpenCV, dlib, Pygame, Scipy
                    </p>
                </div>

                {/*Project 2 */}
                <div className="project-card">
                    <h3>Chronic Kidney Disease Detection using Machine Learning</h3>
                    <p>
                        Built a machine learning-based system to predict Chronic Kidney Disease
                        Detection with 97% accuracy using Random Forest algorithm. Integreted the model with
                        a Flask web application for real-time predection.
                    </p>
                    <p className="tech">
                        Tech Stack: Python, Pandas, Numpy, Scikit-learn, Flask
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;