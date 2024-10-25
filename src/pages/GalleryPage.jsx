import React, { useState } from 'react';

// Simple Lightbox Component
const Lightbox = ({ image, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
    <button className="absolute top-4 right-4 text-white text-3xl" onClick={onClose}>✕</button>
    <img className="max-w-full max-h-full object-contain" src={image.src} alt={image.alt} />
  </div>
);

const GalleryPage = ({ customStyles }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered image index
  const [lightboxImage, setLightboxImage] = useState(null); // State for lightbox image
  const [loading, setLoading] = useState(true); // State to track loading status

  const images = [
    {
      src: "https://pagedone.io/asset/uploads/1688031162.jpg",
      alt: "Gallery view 1",
      description: "This is a beautiful view of the landscape.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031232.jpg",
      alt: "Gallery view 2",
      description: "A stunning sunset captured in this photo.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031357.jpg",
      alt: "Gallery view 3",
      description: "A serene beach with crystal clear waters.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031375.jpg",
      alt: "Gallery view 4",
      description: "Mountains shrouded in mist create a mystical atmosphere.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031396.jpg",
      alt: "Gallery view 5",
      description: "A vibrant city skyline at night.",
    },
    {
      src: "https://pagedone.io/asset/uploads/1688031414.png",
      alt: "Gallery view 6",
      description: "A close-up of a beautiful flower.",
    },
  ];

  const handleImageLoad = () => {
    setLoading(false); // Mark loading as complete when image loads
  };

  return (
    <div className={`container mx-auto p-4 ${customStyles?.container}`}>
      <h1 className={`text-2xl font-semibold text-center mb-6 ${customStyles?.title}`}>Gallery</h1>
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div> {/* Add your loader styles here */}
        </div>
      )}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${loading ? 'hidden' : 'block'}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)} // Set index on hover
            onMouseLeave={() => setHoveredIndex(null)} // Clear index on mouse leave
          >
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-200 transform group-hover:scale-105"
              src={image.src}
              alt={image.alt}
              onLoad={handleImageLoad} // Call handleImageLoad when image loads
              onClick={() => setLightboxImage(image)} // Open lightbox on click
            />
            {hoveredIndex === index && ( // Show description if hovered
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center text-white text-center p-4 rounded-lg transition-opacity duration-200 opacity-100">
                <p className="text-sm">{image.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {lightboxImage && ( // Display the lightbox if an image is selected
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </div>
  );
};

export default GalleryPage;
