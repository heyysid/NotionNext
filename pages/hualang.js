import { siteConfig } from '@/lib/config'
import { getLayoutByTheme } from '@/themes/theme'
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import Image from 'next/image';

const Hualang = () => {
  const Layout = getLayoutByTheme({
    theme: siteConfig('THEME'),
    router: useRouter()
});
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    {
      src: '/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif',
      title: '这是一个完美的HDR图片示例',
      description: 'form https://people.csail.mit.edu/ericchan/hdr/avif_images/20140606_102418_IMGP0297.jpg'
    },
    {
      src: '/PQ_10_to_1000nits.avif',
      title: 'PQ 10 to 1000nits',
      description: '这是一张展示HDR效果的图片，它的动态范围从10到1000nits'
    },
    {
      src:'/摩托车.jpg',
      title:'摩托车',
      description:'20240528在我姐姐的家里'
    },
    {
      src:'/秋.jpg',
      title:'秋天的G318',
      description:'前往然乌湖的G318路上'
    },
    {
      src:'/姊妹湖.jpg',
      title:'姊妹湖',
      description:'2024年6月9日，在四川省甘孜藏族自治州巴塘县'
    },
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
      <Layout>
    <div>
      <h1>画廊</h1>
      <p>这是我的画廊页面，展示一些作品和图片。</p>
      
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <Image 
              src={image.src} 
              alt={image.title} 
              fill
              style={{ objectFit: 'cover' }} // 确保图片适应容器
              className="gallery-image cursor-pointer"
              onClick={() => handleImageClick(image.src)}
            />
          </div>
        ))}
      </div>
                {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content-wrapper">
            <img className="modal-content" src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hualang;
