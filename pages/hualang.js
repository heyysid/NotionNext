import React from 'react'

const Hualang = () => {
  const images = [
    {
      src: '/PQ_10_to_1000nits.avif',
      title: 'PQ 10 to 1000nits',
      description: 'This image demonstrates HDR effects with a dynamic range from 10 to 1000 nits.'
    },
    {
      src: '/example-image2.avif', // Add more images here
      title: 'Image 2 Title',
      description: 'Image 2 description'
    },
    // Add more images as needed
  ];

  return (
    <div>
      <h1>画廊</h1>
      <p>这是我的画廊页面，展示一些作品和图片。</p>
      
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.title} 
              className="gallery-image cursor-pointer" 
              onClick={() => handleImageClick(image.src)} // Use your existing fullscreen image click handler
            />
            <h3 className="text-center">{image.title}</h3>
            <p className="text-center">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Fullscreen image click handler, replace with your existing tool's method
const handleImageClick = (src) => {
  // Implement the logic to open the image in fullscreen using your current tool
};

export default Hualang;
