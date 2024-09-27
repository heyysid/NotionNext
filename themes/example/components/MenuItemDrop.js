import Link from 'next/link'
import { useState, useEffect } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768) // 根据需要调整阈值
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
return (
    <li
      className={`cursor-pointer text-nowrap`}
      onMouseOver={() => changeShow(true)}
      onMouseOut={() => changeShow(false)}>
      {!hasSubMenu && (
        <div className='rounded px-1 md:pl-0 md:mr-3 my-4 md:pr-3 text-gray-700 dark:text-gray-200 no-underline md:border-r border-gray-light'>
          <Link href={link?.to} target={link?.target}>
            {link?.icon && <i className={link?.icon} />} {link?.name}
            {!isMobile && hasSubMenu && <i className='px-1 fa fa-angle-down'></i>} 
          </Link>
        </div>
      )}
      {hasSubMenu && (
        <div className='rounded px-1 md:pl-0 md:mr-3 my-4 md:pr-3 text-gray-700 dark:text-gray-200 no-underline md:border-r border-gray-light'>
          {link?.icon && <i className={link?.icon} />} {link?.name}
          <i
            className={`px-1 duration-500 transition-all ${show ? ' rotate-180' : ''}`}></i>
        </div>
      )}

      {hasSubMenu && (
        <ul
          className={`${show ? 'visible opacity-100  top-12' : 'invisible opacity-0 top-10'} border-gray-100 bg-white dark:bg-black dark:border-gray-800 transition-all duration-300 z-20 absolute block drop-shadow-lg `}>
          {link.subMenus.map((sLink, index) => {
            return (
              <li
                key={index}
                className='not:last-child:border-b-0 border-b text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 tracking-widest transition-all duration-200  dark:border-gray-800 py-3 pr-6 pl-3'>
                <Link href={sLink.to} target={link?.target}>
                  <span className='text-xs text-nowrap sm:text-sm font-extralight'>
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
