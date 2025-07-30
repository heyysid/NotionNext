import { siteConfig } from '@/lib/config'
import Live2D from '@/components/Live2D'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Announcement from './Announcement'
import Progress from './Progress';
import Catalog from './Catalog';

const ExampleRecentComments = dynamic(() => import('./ExampleRecentComments'))
export const SideBar = (props) => {
  const { locale } = useGlobal()
  const { latestPosts, post, categoryOptions, notice, tagsptions } = props
  return (         
      <div className="w-full w-80 sm:w-80 md:W-80 sticky top-8">
        <aside className="rounded shadow overflow-hidden mb-6">
          <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">
              {post ? (
                <>
                  <i className="mr-2 fas fa-list-ul" />阅读进度
              </>
             ) : (
              <>
                  <i className="fas fa-signs-post mr-2" />导航
              </>
           )}
          </h3>
          <div className="p-4">
            {post ? (
              <>
                <Progress toc={post?.toc} />
                <Catalog toc={post?.toc} />
              </>
            ) : (
            <ul className="list-reset leading-normal">
               <li key='1'>
                 <Link href={`https://lizhongping.eu.org/tag/HDR`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
              <div className='font-light'><img src="/image2.gif" className='inline-block mr-1' alt="image2.gif icon" />HDR</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/tag/背包徒步`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
               <div className='font-light'><img src="/folder-1.gif" className='inline-block mr-1' alt="folder-1.gif icon" />背包徒步</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/tag/代码相关`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                  <div className='font-light'><img src="/binary.gif" className='inline-block mr-1' alt="binary.gif icon" />代码相关</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/tag/PT%2FBT`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                 <div className='font-light'><img src="/image1.gif" className='inline-block mr-1' alt="image1.gif icon" />PT/BT</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/tag/AI`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                    <div className='font-light'><img src="/ball.red.gif" className='inline-block mr-1' alt="ball.red.gif icon" />AI</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/tag/骑行`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                     <div className='font-light'><img src="/quill.gif" className='inline-block mr-1' alt="quill icon" />骑行</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/tag/户外`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                     <div className='font-light'><img src="/1165257258.png" className='inline-block mr-1' alt="1165257258.png icon" />户外</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/tag/业余无线电`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                    <div className='font-light'><img src="/world1.gif" className='inline-block mr-1' alt="world1 icon" />业余无线电</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/tag/摄影`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                    <div className='font-light'><img src="/burst.gif" className='inline-block mr-1' alt="burst.gif icon" />摄影</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/category/计划`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                    <div className='font-light'><img src="/image3.gif" className='inline-block mr-1' alt="image3.gif icon" />计划</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/category/资料`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                    <div className='font-light'><img src="/comp.blue.gif" className='inline-block mr-1' alt="comp.blue icon" />资料</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/category/图片`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                    <div className='font-light'><img src="/portal.gif" className='inline-block mr-1' alt="portal.gif icon" />图片</div></a>
                 </Link>
                 <Link href={`https://lizhongping.eu.org/category/文章`} passHref>
                   <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-black dark:hover:bg-white dark:text-white hover:shadow-xl duration-200 bg-transparent hover:underline ">
                    <div className='font-light'><img src="/text.gif" className='inline-block mr-1' alt="text icon" />文章</div></a>
                 </Link>
               </li>
           </ul>
           )}
         </div>
       </aside>
  
      <aside className="rounded shadow overflow-hidden mb-6">
        <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b"><i className="mr-2 fas fa-history" />最近更新</h3>
        <div className="p-4">
          <ul className="list-reset leading-normal">
            {latestPosts?.map(p => (
              <div key={p.id} className="mb-4 flex items-center">
                <Link href={`/${p.slug}`} passHref>
                 <a className="flex items-center">
                   <img
                       src={p.pageCoverThumbnail || siteConfig('defaultCover')}
                       alt={p.title}
                       className="rounded w-20 h-14 object-cover mr-4"
                   />
                    <div className="text-gray-darkest hover:underline text-sm">{p.title}</div>
                 </a>
                </Link>
                <hr className="mt-2 border-gray-300 dark:border-gray-600"/>
              </div>
            ))}
          </ul>
        </div>
      </aside>
  
      <aside className='rounded shadow overflow-hidden mb-6'>
         <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b"><i className="mr-2 fas fa-square-rss" />社交媒体覆盖</h3>
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
        </div>
      </aside>
      <aside className="rounded  overflow-hidden mb-6">
        <Live2D />
      </aside>
    </div>
  )
}
