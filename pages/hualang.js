import React from 'react'

const Hualang = () => {
  const images = [
    {
      title: '这是一个完美的HDR图片示例',
      description: 'form https://people.csail.mit.edu/ericchan/hdr/avif_images/20140606_102418_IMGP0297.jpg'
      src: '/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif',
    },
    {
      title: 'PQ 10 to 1000nits',
      description: '这是一张展示HDR效果的图片，它的动态范围从10到1000nits'
      src: '/PQ_10_to_1000nits.avif',
    },
    
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

const handleImageClick = (src) => {
};

export default Hualang;
