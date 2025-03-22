import React, { useState } from 'react';

const Hualang = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src:'/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif',
      title:'这是一个完美的HDR图片示例',
      description:'form https://people.csail.mit.edu/ericchan/hdr/avif_images/20140606_102418_IMGP0297.jpg'
    },
    {
      src:'/PQ_10_to_1000nits.avif',
      title:'PQ 10 to 1000nits',
      description:'这是一张展示HDR效果的图片，它的动态范围从10到1000nits'
    },
    {
      src:'/PQ_100_to_10000nits.avif',
      title:'PQ_100_to_10000nits',
      description:'这是一张展示HDR效果的图片，它的动态范围从100到10000nits'
    },
    {
      src:'/梦幻-树.jpg',
      title:'SDR',
      description:'SDR8bit'
    },
    {
      src:'/梦幻-草地.jpg',
      title:'SDR',
      description:'SDR8bit'
    },
    {
      src:'/雪乡禾木SDRsRGB8k.jpg',
      title:'雪乡禾木SDRsRGB8k.jpg',
      description:'禾木'
    },
    {
      src:'/秋.jpg',
      title:'秋天的G318',
      description:'前往然乌湖的路上'
    },
    {
      src:'/禾木桥已经锐化.jpg',
      title:'禾木桥已经锐化.jpg',
      description:'禾木桥'
    },
    {
      src:'/20240825-12.jpg',
      title:'20240825-12.jpg',
      description:'2024年10月11日在喀什古城'
    },
    {
      src:'/G219新藏线往新疆方向（暖）sRGBJPG10.JPG',
      title:'G219新藏线往新疆方向（暖）sRGBJPG10.JPG',
      description:'2024年10月11日在G219新藏线往新疆方向'
    },
    {
      src:'/G219新藏线往新疆方向sRGBJPG10.JPG',
      title:'G219新藏线往新疆方向sRGBJPG10.JPG',
      description:'2024年10月11日在G219新藏线往新疆方向'
    },
  ];

  return (
    <div>
      <h1>《画廊》</h1>
      <p>这是我的画廊页面，展示一些作品和图片。（8/100）</p>

      {/* 图片展示区域 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden w-full pt-[100%] cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.title} 
              className="absolute top-0 left-0 w-full h-full object-cover bg-black bg-opacity-90"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* 图片弹窗展示 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-[90%] max-h-[90%] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] mb-4"
            />
            <h3 className="text-white text-xl">{selectedImage.title}</h3>
            <p className="text-white text-center">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hualang;
