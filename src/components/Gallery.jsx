import hackathon1 from "../assets/hackathon1.jpg";
import hackathon2 from "../assets/hackathon2.jpg";

function Gallery() {
    return (
        <section id="gallery">
            <h2>Gallery</h2>

            <div className="gallery-container">
                <div className="gallery-item">
                    <img src={hackathon1} alt="Hackathon participation 1" />
                </div>

                <div className="gallery-item">
                    <img src={hackathon2} alt="Hackathon participation 2" />
                </div>
            </div>
        </section>
    );
}

export default Gallery;