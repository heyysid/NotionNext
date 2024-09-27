import React, { useState } from 'react'
import Link from 'next/link'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
  {
    src: '/PQ_10_to_1000nits.avif',
    title: '图像 1 标题',
    description: '这是图像 1 的说明'
  },
  {
    src: '/PQ_10_to_1000nits.avif',
    title: '图像 2 标题',
    description: '这是图像 2 的说明'
  },
  {
    src: '/PQ_10_to_1000nits.avif',
    title: '图像 3 标题',
    description: '这是图像 3 的说明'
  }
]

const Hualang = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* 菜单栏 */}
      <nav className="menu">
        <Link href="/">
          <a className="back-button">返回首页</a>
        </Link>
        <ul className="menu-list">
          <li><Link href="/about">关于</Link></li>
          <li><Link href="/contact">联系</Link></li>
        </ul>
      </nav>

      <h1>画廊</h1>
      <p>这是我的画廊页面，展示一些作品和图片。</p>

      {/* 图片展示 */}
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image.src}
              alt={image.title}
              onClick={() => {
                setPhotoIndex(index)
                setIsOpen(true)
              }}
              className="image"
            />
            <h3 className="title">{image.title}</h3>
            <p className="description">{image.description}</p>
          </div>
        ))}
      </div>

      {/* 图片放大 */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* 样式 */}
      <style jsx>{`
        .menu {
          display: flex;
          justify-content: space-between;
          background-color: #333;
          padding: 10px;
        }
        .menu-list {
          list-style: none;
          display: flex;
          gap: 15px;
        }
        .menu-list a {
          color: white;
          text-decoration: none;
        }
        .back-button {
          color: white;
          text-decoration: none;
        }
        .gallery {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .image-item {
          text-align: center;
        }
        .image {
          width: 100%;
          max-width: 500px;
          cursor: pointer;
        }
        .title {
          font-size: 1.2rem;
          margin-top: 10px;
        }
        .description {
          font-size: 1rem;
          color: gray;
        }
      `}</style>
    </div>
  )
}

export default Hualang
