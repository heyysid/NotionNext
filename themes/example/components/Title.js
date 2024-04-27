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
  const title = post?.title || "Welcome,This is Li Zhongping's blog."
  const description = post ? "by Li ZhongPing." : (
    <React.Fragment>
      <Link href={`https://lizhongping.asia/tag/outdoor-photography`} passHref>
        <a className="hover:underline">⛰️户外摄影</a>
      </Link>
      <span>&#160;&#160;</span>  {/* 添加空格 */}
      <Link href={`https://lizhongping.asia/tag/cycling`} passHref>
        <a className="hover:underline">🚴骑行</a>
      </Link>
      <span>&#160;&#160;</span>  {/* 添加空格 */}
      <Link href={`https://lizhongping.asia/tag/hiking`} passHref>
        <a className="hover:underline">⛺️背包徒步</a>
      </Link>
      <span>&#160;&#160;</span>  {/* 添加空格 */}
      <Link href={`https://lizhongping.asia/tag/amateur-radio`} passHref>
        <a className="hover:underline">🛰️业余无线电</a>
      </Link>
    </React.Fragment>
  );

  return (
    <div className="text-center px-6 py-12 mb-6 bg-gray-100 dark:bg-hexo-black-gray dark:border-hexo-black-gray border-b">
      <h1 className="text-xl md:text-4xl pb-4 mt-8"><NotionIcon icon={post?.pageIcon} />{title}</h1>
      <p className="leading-loose text-gray-dark">
        {description}
      </p>
    </div>
  )
}
