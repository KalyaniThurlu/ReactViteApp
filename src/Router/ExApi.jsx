
import { useState, useEffect } from "react";

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=3")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch images");
                }
                return response.json();
            })
            .then((data) => {
                setImages(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h2 className="text-center text-primary my-3">Image Gallery</h2>

            {loading && <p className="text-center">Loading images...</p>}
            {error && <p className="text-center text-danger">{error}</p>}

            <div className="row">
                {images.map((img) => (
                    <div className="col-md-3 mb-3" key={img.id}>
                        <img src={img.url} alt="Cute Cat" className="img-fluid rounded shadow" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
