import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import React from 'react';
import Link from 'next/link';

/**
 * 标题栏
 * @param {*} props
 * @returns
 */
export const Title = (props) => {
  const { post } = props
  const title = post?.title || "Welcome to Li ZhongPing's website."
  const description = post ? "by Li ZhongPing." : (
    <React.Fragment>
      <Link href={`https://lizhongping.asia/category/%E5%9B%BE%E7%89%87`} passHref>
        <a className="hover:underline transform hover:scale-125 duration-150">⛰️户外摄影</a>
      </Link>
      <span>&#160;&#160;</span>  {/* 添加空格 */}
      <Link href={`https://lizhongping.asia/tag/%E9%AA%91%E8%A1%8C`} passHref>
        <a className="hover:underline transform hover:scale-125 duration-150">🚴骑行</a>
      </Link>
      <span>&#160;&#160;</span>  {/* 添加空格 */}
      <Link href={`https://lizhongping.asia/tag/%E8%83%8C%E5%8C%85%E5%BE%92%E6%AD%A5`} passHref>
        <a className="hover:underline transform hover:scale-125 duration-150">⛺️背包徒步</a>
      </Link>
      <span>&#160;&#160;</span>  {/* 添加空格 */}
      <Link href={`https://lizhongping.asia/tag/%E4%B8%9A%E4%BD%99%E6%97%A0%E7%BA%BF%E7%94%B5`} passHref>
        <a className="hover:underline transform hover:scale-125 duration-150">🛰️业余无线电</a>
      </Link>
    </React.Fragment>
  );

  return (
    <div className="text-center px-6 py-12 mb-6 bg-transparent dark:bg-transparent dark:border-hexo-black-gray border-b">
      <h1 className="text-xl md:text-4xl pb-4 mt-8"><NotionIcon icon={post?.pageIcon} />{title}</h1>
      <p className="leading-loose text-gray-dark">
        {description}
      </p>
    </div>
  )
}
