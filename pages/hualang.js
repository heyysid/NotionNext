import React, { useState, useEffect } from 'react';

const Hualang = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    { src:'/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif', title:'这是一个完美的HDR图片示例', description:'from https://people.csail.mit.edu/ericchan/hdr/avif_images/20140606_102418_IMGP0297.jpg', portrait: true },
    { src:'/PQ_10_to_1000nits.avif', title:'PQ 10 to 1000nits', description:'这是一张展示HDR效果的图片，它的动态范围从10到1000nits' },
    { src:'/PQ_100_to_10000nits.avif', title:'PQ 100 to 10000nits', description:'这是一张展示HDR效果的图片，它的动态范围从100到10000nits' },
    { src:'/梦幻-树.jpg', title:'SDR', description:'SDR8bit', portrait: true },
    { src:'/梦幻-草地.jpg', title:'SDR', description:'SDR8bit' },
    { src:'/雪乡禾木SDRsRGB8k.jpg', title:'雪乡禾木', description:'禾木' },
    { src:'/_DSC0883-已锐化.jpg', title:'秋天的G318', description:'前往然乌湖的路上' },
    { src:'/禾木桥已经锐化.jpg', title:'禾木桥', description:'禾木桥', portrait: true },
    { src:'/冈仁波齐星野srgbsdr10-1.jpg', title:'冈仁波齐星野sRGBSDR10', description:'2024年6月在冈仁波齐' },
    { src:'/冈仁波齐蓝调1.jpg', title:'冈仁波齐蓝调', description:'2024年6月在冈仁波齐', portrait: true },
    { src:'/白沙湖.jpg', title:'白沙湖', description:'白沙湖' },
    { src:'/G219新藏线往新疆方向（暖）sRGBJPG10.JPG', title:'G219新藏线往新疆方向', description:'2024年6月11日在G219新藏线往新疆方向' },
    { src:'/嘎玛沟遇见的小孩.jpg', title:'嘎玛沟的小朋友', description:'在嘎玛沟遇到的小朋友' },
    { src:'/鸽子sRGBJPG10.JPG', title:'2021年', description:'2021inShenZhenuseZ5' },
    
    {/* { src:'/lyy的手sRGB10SDR.jpg', title:'SDR', description:'SDR8bit' },
    { src:'/lyy的手P3HDR.avif', title:'HDR', description:'HDR10bit' },
    { src:'/lyy的腿sRGB10锐化.jpg', title:'SDR', description:'SDR8bit', portrait: true },  
    { src:'/lyysRGBJPG10.JPG', title:'lyy家里', description:'202502inLYYhome' },
    { src:'/lyy4-已锐化.jpg', title:'lyy', description:'202412inWuLuMuQi' },
    { src:'/20240825-12.jpg', title:'喀什古城', description:'2024年8月在喀什古城' }, */}
    
  ];
  
  const handleNext = () =>
    setSelectedIndex((selectedIndex + 1) % images.length);
  const handlePrev = () =>
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);

  useEffect(() => {
    // 右键保留
    const enableContextMenu = e => e.stopPropagation();
    // ← → 切图
    const onKeyDown = e => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNext();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          setSelectedIndex(null);
        }
      }
    };

    document.addEventListener('contextmenu', enableContextMenu, true);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('contextmenu', enableContextMenu, true);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex]);

  // 声明一次 isPortrait
  const isPortrait =
    selectedIndex !== null && images[selectedIndex]?.portrait === true;

  return (
    <div>
      <h1>《画廊》</h1>
        <p style={{ margin: '20px 0' }}>这个页面展示一些“作品”，这些作品欢迎来自任何人的评论、批评和建设性交流，并且我由衷地感谢愿意为此付出精力的朋友，我认为那是难得和幸运的。</p>
        <p style={{ margin: '20px 0' }}>这个页面最后更新时间是2025年01月09日</p>
        <p style={{ margin: '20px 0' }}>浏览指引&gt;&gt;&gt;</p>
        <p>
          本页的图像大部分是HDR，所以请确认你的当前观看环境是否能够正确预览HDR，首先你可以使用下方的web工具检查硬件环境是否能够正确预览。
          <a target="_blank" rel="noopener noreferrer" href="https://www.wide-gamut.com/" className="hover:underline text-blue-500">widegamut「HDR」测试工具</a>
          ; 
          <a target="_blank" rel="noopener noreferrer" href="https://alexfry.github.io/ACES_ODT_Candidates_Examples/diagnostic.html" className="hover:underline text-blue-500">SDR和HDR对比</a>
          <a>（*请使用最新版本的Chrome打开）</a>
        </p>
        
        <p style={{ margin: '20px 0' }}>
          如果你确认你的硬件环境支持HDR，但你仍然无法正确预览本页面的HDR图像，请确认使用的Chrome浏览器版本是否为最新版，然后在Chrome的开发者实验室栏目里找到对应HDR的功能，确保HDR没有被禁用：
          <a target="_blank" rel="noopener noreferrer" href="https://lizhongping.eu.org/article/HDR#1d7870ed2ca542c6847abb06b3675b94" className="hover:underline text-blue-500">Chrome预览HDR重要注意事项</a>
        </p>
        
        <p style={{ margin: '20px 0' }}>
          如果您此前不曾接触HDR，或者想进一步了解有关HDR的信息，比如HDR与SDR的区别，请访问这个页面：
          <a target="_blank" rel="noopener noreferrer" href="https://lizhongping.eu.org/article/HDR" className="hover:underline text-blue-500">HDR（高动态范围）图片制作的资料和工具快查表</a>
        </p>
      
      {/* 图片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden w-full pt-[100%] cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="absolute top-0 left-0 w-full h-full object-cover bg-black bg-opacity-90"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center p-1">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* 弹窗 */}
      {selectedIndex !== null && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex justify-center z-50 ${
            isPortrait 
            ? 'items-center py-[2vh]' // 竖图：保持垂直居中，但减少上下边距
            : 'items-center py-[10vh]' // 横图：更大的上下边距
          }`}
          onClick={() => setSelectedIndex(null)}
        >
          {/* ← */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
            onClick={e => { e.stopPropagation(); handlePrev(); }}
          >
            &#10094;
          </button>

          <div
            className="max-w-[90%] max-h-[90%] flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].title}
            className={`max-w-full mb-4 ${
              isPortrait 
                ? 'max-h-[90vh]'  // 竖图允许更大的高度
                : 'max-h-[80vh]'  // 横图稍小高度
            }`}
            />
          </div>

          {/* → */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
            onClick={e => { e.stopPropagation(); handleNext(); }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Hualang;
