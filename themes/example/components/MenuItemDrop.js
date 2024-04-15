import Link from 'next/link'
import { useState } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0

  // 这是首页导航栏的菜单按钮，父元素在nav.js中
  // 这是在没有子菜单时的样式
  return (
    <li
      className={`cursor-pointer`}
      onMouseOver={() => changeShow(true)}
      onMouseOut={() => changeShow(false)}>
      {!hasSubMenu && (
        <div className='rounded px-1 md:pl-0 md:mr-3 my-4 md:pr-3 text-gray-700 dark:text-gray-200 no-underline md:border-r border-gray-light'>
          <Link href={link?.to} target={link?.target}>
            {link?.icon && <i className={link?.icon} />} {link?.name}
   //这是导航栏字符旁边的那个箭头
            {hasSubMenu && <i className='px-1 fa fa-angle-down'></i>} 
          </Link>
        </div>
      )}

   //这是在有子菜单时的样式
      {hasSubMenu && (
   //决定导航栏菜单
        <div className='rounded px-1 md:pl-0 md:mr-3 my-4 md:pr-3 text-gray-700 dark:text-gray-200 no-underline md:border-r border-gray-light'>
          {link?.icon && <i className={link?.icon} />} {link?.name}
   //图标
          <i
            className={`px-1 fas fa-chevron-down duration-500 transition-all ${show ? ' rotate-180' : ''}`}></i>
        </div>
      )}

   //导航栏菜单的子菜单
      {hasSubMenu && (
   //子菜单格局
        <ul
          className={`${show ? 'visible opacity-100  top-12' : 'invisible opacity-0 top-10'} border-gray-100 bg-white dark:bg-black dark:border-gray-800 transition-all duration-300 z-20 absolute block drop-shadow-lg `}>
   //定义每个子菜单的格局
          {link.subMenus.map((sLink, index) => {
            return (
              <li
                key={index}
                className='not:last-child:border-b-0 border-b text-gray-700 dark:text-gray-200 text-nowrap hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200  dark:border-gray-800 py-3 pr-6 pl-3'>
                <Link href={sLink.to} target={link?.target}>
    //定义每个子菜单里的文本内容
                  <span className='text-xs sm:text-sm text-nowrap font-extralight'>
                    {link?.icon && <i className={sLink?.icon}> &nbsp; </i>}
                    {sLink.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}
