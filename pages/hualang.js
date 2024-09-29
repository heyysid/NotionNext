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
    <p>在阅览之前，你可以使用下方的web工具检查你当前观看环境是否支持 HDR，这会有助于阅览，因为本页面的图像大部分都是HDR。</p>
    <a target="_blank" href="https://www.wide-gamut.com/" className="hover:underline">widegamut「HDR」测试工具</a>
    <p>请使用最新版本的Chrome打开</p>
    <p>如果你仍然无法正确预览HDR，请确认Chrome的开发者实验室栏目里对应HDR的功能是否被禁用：</p>
    <a target="_blank" href="https://lizhongping.asia/article/HDR#1d7870ed2ca542c6847abb06b3675b94" className="hover:underline" >重要注意事项:</a>
    <a target="_blank" href="https://alexfry.github.io/ACES_ODT_Candidates_Examples/diagnostic.html" className="hover:underline" >SDR和HDR对比</a>
    <p>想了解更多有关HDR的信息，比如HDR与SDR的区别，请访问：</p>
    <a target="_blank" href="https://lizhongping.asia/article/HDR#46fbfcfec9554340abdfe306b670ce78" className="hover:underline" >HDR（高动态范围）图片制作的资料和工具快查表</a>
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
