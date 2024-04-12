import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'

/**
 * 标题栏
 * @param {*} props
 * @returns
 */
export const Title = (props) => {
  const { post } = props
  const title = post?.title || siteConfig('户外摄影、骑行、背包徒步、业余无线电，马督工粉丝')
  const description = post?.description || siteConfig('AUTHOR')

  return <div className="text-center px-6 py-12 mb-6 bg-gray-100 dark:bg-hexo-black-gray dark:border-hexo-black-gray border-b">
        <h1 className="text-xl md:text-4xl pb-4"><NotionIcon icon={post?.pageIcon} />{title}</h1>
        <p className="leading-loose text-gray-dark">
            {'Li ZhongPing.'}
        </p>
    </div>
}
