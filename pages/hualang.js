import React from 'react'

const Hualang = () => {
  return (
    <div>
      <h1>画廊</h1>
      <p>这是我的画廊页面，展示一些作品和图片。</p>
      
      <div className="gallery">
        <img src="/PQ_10_to_1000nits.avif" alt="PQ 10 to 1000 nits" />
        <img src="/20140606_102418_IMGP0297_hdr_rec2020_pq_yuv444_full_cq10.avif" alt="HDR photo" />
      </div>

      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 每行三列 */
          gap: 10px; /* 图片之间的间距 */
        }

        .gallery img {
          width: 100%; /* 图片自适应列宽 */
          height: auto; /* 保持图片比例 */
        }
      `}</style>
    </div>
  )
}

export default Hualang
