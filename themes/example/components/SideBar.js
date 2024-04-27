import { siteConfig } from '@/lib/config'
import Live2D from '@/components/Live2D'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Announcement from './Announcement'
const ExampleRecentComments = dynamic(() => import('./ExampleRecentComments'))

export const SideBar = (props) => {
  const { locale } = useGlobal()
  const { latestPosts, categoryOptions, notice, tagsptions } = props
  return (         
      <div className="w-full md:w-64 sticky top-8">
        <aside className="rounded shadow overflow-hidden mb-6">
          <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">{locale.COMMON.CATEGORY}</h3>
          <div className="p-4">
            <ul className="list-reset leading-normal">
               <li key='1'>
                 <Link href={`https://lizhongping.asia/tag/HDR`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#HDR</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/tag/背包徒步`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#背包徒步</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/tag/python`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#编程</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/tag/PT%2FBT`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#PT/BT</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/tag/AI`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#AI</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/tag/骑行`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#骑行</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/tag/户外`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#户外</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/tag/业余无线电`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#业余无线电</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/tag/摄影`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#摄影</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/category/项目`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#项目</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/category/资料`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#资料</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/category/图片`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#图片</a>
                 </Link>
                 <Link href={`https://lizhongping.asia/category/文章`} passHref>
                   <a className="text-gray-darkest hover:underline text-sm mr-4 md-4">#文章</a>
                 </Link>
               </li>
           </ul>
         </div>
       </aside>
            
      <aside className="rounded shadow overflow-hidden mb-6">
        <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">最近更新</h3>
        <div className="p-4">
          <ul className="list-reset leading-normal">
            {latestPosts?.map(p => (
              <div key={p.id}>
                <Link href={`/${p.slug}`} passHref>
                  <li>
                    <a className="text-gray-darkest hover:underline text-sm">{p.title}</a>
                  </li>
                </Link>
                <hr className="mt-2 border-gray-300 dark:border-gray-600"/>
              </div>
            ))}
          </ul>
        </div>
      </aside>

      <aside className='rounded shadow overflow-hidden mb-6'>
         <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">社交媒体覆盖</h3>
         <div className='justify-center space-x-3 text-xl text-gray-600 dark:text-gray-300 p-4'>
          {siteConfig('CONTACT_GITHUB') && <a key="github" target='_blank' rel='noreferrer' title={'github'} href={siteConfig('CONTACT_GITHUB')}>
            <i className='transform hover:scale-125 duration-150 fab fa-github dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {siteConfig('CONTACT_TWITTER') && <a key="twitter" target='_blank' rel='noreferrer' title={'twitter'} href={siteConfig('CONTACT_TWITTER')}>
            <i className='transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {siteConfig('CONTACT_TELEGRAM') && <a key="telegram" target='_blank' rel='noreferrer' href={siteConfig('CONTACT_TELEGRAM')} title={'telegram'}>
            <i className='transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {siteConfig('CONTACT_LINKEDIN') && <a target='_blank' rel='noreferrer' href={siteConfig('CONTACT_LINKEDIN')} title={'linkIn'} >
            <i className='transform hover:scale-125 duration-150 fab fa-linkedin dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {siteConfig('CONTACT_WEIBO') && <a target='_blank' rel='noreferrer' title={'weibo'} href={siteConfig('CONTACT_WEIBO')} >
            <i className='transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {siteConfig('CONTACT_INSTAGRAM') && <a target='_blank' rel='noreferrer' title={'instagram'} href={siteConfig('CONTACT_INSTAGRAM')} >
            <i className='transform hover:scale-125 duration-150 fab fa-instagram dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {siteConfig('CONTACT_EMAIL') && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${siteConfig('CONTACT_EMAIL')}`} >
            <i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {JSON.parse(siteConfig('ENABLE_RSS')) && <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
            <i className='transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {siteConfig('CONTACT_BILIBILI') && <a target='_blank' rel='noreferrer' title={'bilibili'} href={siteConfig('CONTACT_BILIBILI')} >
            <i className='transform hover:scale-125 duration-150 fab fa-bilibili dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
          {siteConfig('CONTACT_YOUTUBE') && <a target='_blank' rel='noreferrer' title={'youtube'} href={siteConfig('CONTACT_YOUTUBE')} >
            <i className='transform hover:scale-125 duration-150 fab fa-youtube dark:hover:text-indigo-400 hover:text-indigo-600'/>
          </a>}
        </div>
      </aside>

      <aside className="rounded  overflow-hidden mb-6">
        <Live2D />
      </aside>
    </div>
  )
}
