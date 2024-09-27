import React from 'react'

const Hualang = () => {
  const images = [
    {
      src: '/PQ_10_to_1000nits.avif',
      title: 'PQ 10 to 1000nits',
      description: '这是一张展示 HDR 效果的图片，动态范围从 10 到 1000 nits'
    },
    {
      src: '/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif',
      title: '这是一个完美的HDR图片示例',
      description: 'form https://people.csail.mit.edu/ericchan/hdr/avif_images/20140606_102418_IMGP0297.jpg'
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
              onClick={() => handleImageClick(image.src)}
            />
            <h3 className="text-center">{image.title}</h3>
            <p className="text-center">{image.description}</p>
          </div>
        ))}
      </div>
          
        <button onClick={() => router.back()} className="back-button">
          返回
        </button>
    </div>
      <style jsx>{`
        .gallery-item {
          text-align: center;
          margin-bottom: 20px;
        }
        .gallery-image {
          max-width: 500px;
          cursor: pointer;
        }
        .back-button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #333;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
  );
};

const handleImageClick = (src) => {
};

export default Hualang;
