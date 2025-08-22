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
    { src:'/_DSC0883-已锐化.jpg', title:'秋天的G318', description:'前往然乌湖的路上' },
    { src:'/禾木桥已经锐化.jpg', title:'禾木桥', description:'禾木桥' },
    { src:'/禾木河边.jpg', title:'禾木河', description:'null' },
    { src:'/冈仁波齐星野srgbsdr10-1.jpg', title:'冈仁波齐星野sRGBSDR10' },
    { src:'/在禾木失败的长曝光.jpg', title:'在禾木失败的长曝光', description:'null' },
    { src:'/冈仁波齐蓝调1.jpg', title:'冈仁波齐蓝调', description:'2024年6月在冈仁波齐' },
    { src:'/在赛里木湖遇见的女孩.jpg', title:'在赛里木湖遇见的小孩', description:'null' },
    { src:'/树枝剪影SDRP3101.jpg', title:'树枝剪影', description:'null' },
    { src:'/布达拉宫sRGBJPG10.JPG', title:'布达拉宫', description:'null' },
    { src:'/姊妹湖高反差-强光.jpg', title:'姊妹湖', description:'null' },
    { src:'/雪山徒步.jpg', title:'在托乎拉苏徒步', description:'null' },
    { src:'/60岁哈族牧民究极锐化.jpg', title:'托乎拉苏草原牧民', description:'null' },
    { src:'/牧民房究极锐化.jpg', title:'垭口的牧民房', description:'null' },
    { src:'/阳光与树木锐化了的.jpg', title:'阳光与树木SDR', description:'null' },
    { src:'/禾木SDRsRGB10.jpg', title:'禾木村', description:'null' },
    { src:'/G219新藏线往新疆方向（暖）sRGBJPG10.JPG', title:'G219新藏线往新疆方向', description:'2024年6月11日在G219新藏线往新疆方向' },
    { src:'/摩托车公路电影色调.jpeg', title:'摩托车公路电影色调', description:'null' },
    { src:'/白沙湖2原图.jpg', title:'白沙湖', description:'null' },
    { src:'/马儿究极锐化.jpg', title:'马儿', description:'null' },
    { src:'/生命SDRsRGB10.jpg', title:'坚韧', description:'null' },


    { src:'/在珠峰东坡嘎玛沟遇见的小孩SDRsRGB10.jpg', title:'在珠峰东坡遇见的小孩', description:'null' },
    { src:'/鸽子sRGBJPG10.JPG', title:'2021年', description:'2021在ShenZhenu使用Z5拍摄' },
    { src:'/lyy的手sRGB10SDR.jpg', title:'SDR', description:'SDR8bit' },
    { src:'/lyy的手P3HDR.avif', title:'HDR', description:'HDR10bit' },

    {/*
    { src:'/乌鲁木齐婚礼新娘.jpg', title:'乌鲁木齐婚礼新娘', description:'null' },
    { src:'/乌鲁木齐维族婚礼.jpg', title:'乌鲁木齐维族婚礼', description:'null' },
    { src:'/谢一旦.jpg', title:'xeydan', description:'2024年8月在喀什古城' },
    { src:'/香港2SDRsRGB10.jpg', title:'香港', description:'null' },
    { src:'/香港SDRsRGB10.jpg', title:'香港', description:'null' },
    { src:'/白沙湖.jpg', title:'白沙湖', description:'白沙湖' },
    { src:'/腿.jpg', title:'SDR', description:'SDR8bit' },
    { src:'/lyysRGBJPG10.JPG', title:'20250202', description:'202502' },
    { src:'/梁莹莹副本.jpg', title:'20250108', description:'null' },
    { src:'/lyy4-已锐化.jpg', title:'20250108', description:'null' },
    { src:'/谭家欣很漂亮4比3.jpg', title:'20230816', description:'null' },
    { src:'/谭家欣1锐化4比3.jpg', title:'20230816', description:'null' },
    { src:'/谭家SDRsRGB10.jpg', title:'清晨', description:'null' },
    { src:'/男友视角.jpg', title:'20250303', description:'null' },
    { src:'/赛里木湖垭口.jpg', title:'20240825', description:'null' },
    { src:'/广东大峡谷风车山.jpg', title:'20240825', description:'null' },
    { src:'/低配版LA罗浮山.jpg', title:'20240825', description:'null' },
    { src:'/眺看赛里木湖.jpg', title:'20240825', description:'null' },
    { src:'/秦岭.jpg', title:'20240825', description:'null' }, 
    { src:'/谭家欣JK.jpg', title:'2021', description:'null' },
    */}
    
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
        {/* 此处新增返回首页链接 */}
        <p style={{ margin: '20px 0' }}><a target="_self" href="https://lizhongping.eu.org/" className="text-blue-500 hover:underline" >&lt;&lt;&lt;返回博客首页</a></p>
      <h1>《画廊》</h1>
        <p style={{ margin: '20px 0' }}>这个页面展示一些“摄影作品”，这些作品欢迎来自任何人的评论、批评和建设性交流，并且我由衷地感谢愿意为此付出精力的朋友，我认为那是难得和幸运的。</p>
        <p style={{ margin: '20px 0' }}>这个页面的最后更新时间是2025年07月31日</p>
        <p style={{ margin: '20px 0' }}>浏览指引&gt;&gt;&gt;</p>
          
        <p>
          本页的图片大部分是HDR，所以请先使用下方的web工具确认你当前的观看环境是否能够正确预览这些HDR，首先是检查硬件环境是否能够正确预览的web工具。
          <a target="_blank" rel="noopener noreferrer" href="https://www.wide-gamut.com/" className="hover:underline text-blue-500">widegamut「HDR」测试工具</a>
          ; 
          <a target="_blank" rel="noopener noreferrer" href="https://alexfry.github.io/ACES_ODT_Candidates_Examples/diagnostic.html" className="hover:underline text-blue-500">SDR和HDR对比</a>
          <a>（*请使用最新版本的Chrome打开）</a>
        </p>
        
        <p style={{ margin: '20px 0' }}>
          如果你确认你的硬件环境支持HDR，但你仍然无法正确预览本页面的HDR图像，请确认使用的是Chrome浏览器并确认版本是否为最新，然后在Chrome的开发者实验室栏目里找到对应HDR的功能，确保他们没有被禁用：
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
