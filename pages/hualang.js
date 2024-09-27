import React from 'react'

const Hualang = () => {
  const images = [
    {
      src: '/PQ_10_to_1000nits.avif',
      title: 'PQ 10 to 1000nits',
      description: '这是一个1000 nits的HDR测试页面'
    },
    {
      src: '/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif',
      title: '这是一个HDR示例图片',
      description: 'form https://people.csail.mit.edu/ericchan/hdr/avif_images/20140606_102418_IMGP0297.jpg'
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
