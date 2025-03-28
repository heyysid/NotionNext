import React, { useState, useEffect } from 'react';

const Hualang = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    { src:'/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif', title:'这是一个完美的HDR图片示例', description:'from https://people.csail.mit.edu/ericchan/hdr/avif_images/20140606_102418_IMGP0297.jpg' },
    { src:'/PQ_10_to_1000nits.avif', title:'PQ 10 to 1000nits', description:'这是一张展示HDR效果的图片，它的动态范围从10到1000nits' },
    { src:'/PQ_100_to_10000nits.avif', title:'PQ 100 to 10000nits', description:'这是一张展示HDR效果的图片，它的动态范围从100到10000nits' },
    { src:'/梦幻-树.jpg', title:'SDR', description:'SDR8bit' },
    { src:'/梦幻-草地.jpg', title:'SDR', description:'SDR8bit' },
    { src:'/雪乡禾木SDRsRGB8k.jpg', title:'雪乡禾木', description:'禾木' },
    { src:'/秋.jpg', title:'秋天的G318', description:'前往然乌湖的路上' },
    { src:'/禾木桥已经锐化.jpg', title:'禾木桥', description:'禾木桥' },
    { src:'/20240825-12.jpg', title:'喀什古城', description:'2024年10月11日在喀什古城' },
    { src:'/G219新藏线往新疆方向（暖）sRGBJPG10.JPG', title:'新藏线', description:'2024年10月11日在G219新藏线往新疆方向' },
    { src:'/G219新藏线往新疆方向sRGBJPG10.JPG', title:'新藏线', description:'2024年10月11日在G219新藏线往新疆方向' },
  ];

  const handleNext = () => setSelectedIndex((selectedIndex + 1) % images.length);
  const handlePrev = () => setSelectedIndex((selectedIndex - 1 + images.length) % images.length);

    useEffect(() => {
    const enableContextMenu = (e) => e.stopPropagation();
    document.addEventListener('contextmenu', enableContextMenu, true);
    return () => {
      document.removeEventListener('contextmenu', enableContextMenu, true);
    };
  }, []);

  return (
    <div>
      <h1>《画廊》</h1>
        <p>这是我的画廊页面，展示一些作品和图片。（8/100）</p>
        <p style={{ margin: '20px 0' }}>浏览指引&gt;&gt;&gt;</p>
        <p>
          本页的图像大部分是HDR，请先确认您当前观看环境是否能正确预览HDR效果，您可以使用下方的web工具检查当前观看环境是否支持预览HDR。
          <a target="_blank" rel="noopener noreferrer" href="https://www.wide-gamut.com/" className="hover:underline text-blue-500">widegamut「HDR」测试工具</a>
          ; 
          <a target="_blank" rel="noopener noreferrer" href="https://alexfry.github.io/ACES_ODT_Candidates_Examples/diagnostic.html" className="hover:underline text-blue-500">SDR和HDR对比</a>
          <a>（*请使用最新版本的Chrome打开）</a>
        </p>
        
        <p style={{ margin: '20px 0' }}>
          如果您确认您的硬件环境支持HDR，但您仍然无法正确预览本页面的HDR图像，请确认使用的Chrome浏览器版本是否为最新版，然后在Chrome的开发者实验室栏目里找到对应HDR的功能，确保HDR没有被禁用：
          <a target="_blank" rel="noopener noreferrer" href="https://lizhongping.asia/article/HDR#1d7870ed2ca542c6847abb06b3675b94" className="hover:underline text-blue-500">Chrome预览HDR重要注意事项</a>
        </p>
        
        <p style={{ margin: '20px 0' }}>
          如果您此前不曾接触HDR，现在想进一步了解有关HDR的信息，比如HDR与SDR的区别，请访问我的另一个页面：
          <a target="_blank" rel="noopener noreferrer" href="https://lizhongping.asia/article/HDR" className="hover:underline text-blue-500">HDR（高动态范围）图片制作的资料和工具快查表</a>
        </p>

      {/* 图片展示区域 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden w-full pt-[100%] cursor-pointer" onClick={() => setSelectedIndex(index)}>
            <img src={image.src} alt={image.title} className="absolute top-0 left-0 w-full h-full object-cover bg-black bg-opacity-90" />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center p-1">{image.title}</div>
          </div>
        ))}
      </div>

      {/* 图片弹窗展示 */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={() => setSelectedIndex(null)}>
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>&#10094;</button>
          <div className="max-w-[90%] max-h-[90%] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedIndex].src} alt={images[selectedIndex].title} className="max-w-full max-h-[80vh] mb-4" />
            <h3 className="text-white text-xl">{images[selectedIndex].title}</h3>
            <p className="text-white text-center">{images[selectedIndex].description}</p>
          </div>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl" onClick={(e) => { e.stopPropagation(); handleNext(); }}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default Hualang;
