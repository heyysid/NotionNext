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
      src: '/PQ_100_to_10000nits.avif',
      title: 'PQ_100_to_10000nits',
      description: '这是一张展示HDR效果的图片，它的动态范围从100到10000nits'
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
    {
      src:'/乌鲁木齐秋jpgSDR3.jpg',
      title:'乌鲁木齐秋jpgSDR3',
      description:'2024年10月11日，在乌鲁木齐'
    },
    {
      src:'/乌鲁木齐秋jpgSDR5.jpg',
      title:'乌鲁木齐秋jpgSDR5',
      description:'2024年10月11日，在乌鲁木齐'
    },
  ];

return (
    <div>
      <h1>《画廊》</h1>
      <p>这是我的画廊页面，展示一些作品和图片。</p>
      <p>浏览指引&gt;&gt;&gt;</p>
      <p style={{ margin: '20px 0' }}>
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
  )
}

export default Hualang
