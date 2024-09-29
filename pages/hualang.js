import { siteConfig } from '@/lib/config'
import { getLayoutByTheme } from '@/themes/theme'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from 'next/image'

const HualangPage = props => {
  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme({
    theme: siteConfig('THEME'),
    router: useRouter()
  })

  const Hualang = () => {
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
        src: '/摩托车.jpg',
        title: '摩托车',
        description: '20240528在我姐姐的家里'
      },
      {
        src: '/秋.jpg',
        title: '秋天的G318',
        description: '前往然乌湖的G318路上'
      },
      {
        src: '/姊妹湖.jpg',
        title: '姊妹湖',
        description: '2024年6月9日，在四川省甘孜藏族自治州巴塘县'
      },
    ];

    const handleImageClick = (src) => {
      setSelectedImage(src);
    };

    const closeModal = () => {
      setSelectedImage(null);
    };

    return (
      <Layout {...props}>
        <div>
          <h1>画廊</h1>
          <p>这是我的画廊页面，展示一些作品和图片。</p>

          <div className="gallery">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={500} // 建议根据实际图片的分辨率调整
                  height={500}
                  className="gallery-image cursor-pointer"
                  onClick={() => handleImageClick(image.src)}
                  layout="responsive" // 确保图片保持其比例
                />
                <h3 className="text-center">{image.title}</h3>
                <p className="text-center">{image.description}</p>
              </div>
            ))}
          </div>

          {/* 模态框，点击图片后显示 */}
          {selectedImage && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>&times;</span>
                <img className="modal-content" src={selectedImage} alt="Full size" />
              </div>
            </div>
          )}
        </div>

        {/* 添加一些 CSS 使得模态框居中显示 */}
        <style jsx>{`
          .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }

          .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 1000;
          }

          .modal-content-wrapper {
            position: relative;
          }

          .modal-content {
            max-width: 90vw;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 10px;
          }

          .close {
            position: absolute;
            top: 10px;
            right: 20px;
            color: white;
            font-size: 30px;
            cursor: pointer;
          }
        `}</style>
      </Layout>
    );
  };

export default Hualang;
