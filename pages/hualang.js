import React from 'react'

const Hualang = () => {
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

return (
  <div>
    <h1>画廊</h1>
    <p>这是我的画廊页面，展示一些作品和图片。</p>
    <p>
      在阅览之前，你可以使用下方的 web 工具检查你当前观看环境是否支持 HDR，这会有助于阅览，因为本页面的图像大部分都是 HDR。
    </p>
    <a 
      target="_blank" 
      rel="noopener noreferrer" 
      className="notion-link" 
      href="https://www.wide-gamut.com/"
    >
      wide-gamut「HDR」测试工具，请使用最新版本的 Chrome 打开
    </a>
    <p>
      如果你仍然无法正确预览 HDR，请确认 Chrome 的开发者实验室栏目里对应的 HDR 功能是否被禁用：
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        className="notion-link" 
        href="https://lizhongping.asia/article/HDR#1d7870ed2ca542c6847abb06b3675b94"
      >
        重要注意事项:
      </a>
    </p>
    <a 
      target="_blank" 
      rel="noopener noreferrer" 
      className="notion-link" 
      href="https://alexfry.github.io/ACES_ODT_Candidates_Examples/diagnostic.html"
    >
      wide-gamut「HDR」测试工具
    </a>
    <p>
      想了解更多有关 HDR 的信息，比如 HDR 与 SDR 的区别，请访问：
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        className="notion-link" 
        href="https://lizhongping.asia/article/HDR#46fbfcfec9554340abdfe306b670ce78"
      >
        HDR（高动态范围）图片制作的资料和工具快查表
      </a>
    </p>
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img 
            src={image.src} 
            alt={image.title} 
            className="gallery-image" 
          />
          <h3 className="text-center">{image.title}</h3>
          <p className="text-center">{image.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Hualang;
