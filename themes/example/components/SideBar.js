import { siteConfig } from '@/lib/config'
import Live2D from '@/components/Live2D'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Announcement from './Announcement'
import { InfoCard } from './InfoCard' // 导入 InfoCard 组件
const ExampleRecentComments = dynamic(() => import('./ExampleRecentComments'))

export const SideBar = (props) => {
  const { locale } = useGlobal()
  const { latestPosts, categoryOptions, notice } = props
  return (
    <div className="w-full md:w-64 sticky top-8">
      <aside className="rounded shadow overflow-hidden mb-6">
        <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">{locale.COMMON.CATEGORY}</h3>
        <div className="p-4">
          <ul className="list-reset leading-normal">
            {categoryOptions?.map(category => {
              return (
                <Link
                  key={category.name}
                  href={`/category/${category.name}`}
                  passHref
                  legacyBehavior
                >
                  <li><a href={`/category/${category.name}`} className="text-gray-darkest text-sm">{category.name}({category.count})</a></li>
                </Link>
              )
            })}
          </ul>
        </div>
      </aside>

      <aside className="rounded shadow overflow-hidden mb-6">
        <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">{locale.COMMON.LATEST_POSTS}</h3>
        <div className="p-4">
          <ul className="list-reset leading-normal">
            {latestPosts?.map(p => {
              return (
                <div key={p.id}>
                  <Link key={p.id} href={`/${p.slug}`} passHref legacyBehavior>
                    <li><a href={`/${p.slug}`} className="text-gray-darkest text-sm">{p.title}</a></li>
                  </Link>
                  <hr className="mt-2 border-gray-300 dark:border-gray-600"/>
                </div>
              )
            })}
          </ul>
        </div>
      </aside>

      {/* 将第三个 aside 渲染为 InfoCard 包含社交信息的卡片 */}
      <aside className="rounded shadow overflow-hidden mb-6">
        <InfoCard className="mb-6" siteInfo={siteConfig} />
      </aside>

      {siteConfig('COMMENT_WALINE_SERVER_URL') && siteConfig('COMMENT_WALINE_RECENT') && 
        <aside className="rounded shadow overflow-hidden mb-6">
          <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">{locale.COMMON.RECENT_COMMENTS}</h3>
          <div className="p-4">
            <ExampleRecentComments/>
          </div>
        </aside>
      }

      <aside className="rounded overflow-hidden mb-6">
        <Live2D />
      </aside>
    </div>
  )
}
