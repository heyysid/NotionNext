import { siteConfig } from '@/lib/config';
import { useGlobal } from '@/lib/global';
import CONFIG from '../config';
import { MenuItemDrop } from './MenuItemDrop';

export const Nav = (props) => {
  const { customNav, customMenu } = props;
  const { locale } = useGlobal();

  //定义导航栏图标和文本与字符，自动化从notion导入菜单
  
  let links = [
    { id: 1, icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: siteConfig('EXAMPLE_MENU_SEARCH', null, CONFIG) },
    { id: 2, icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: siteConfig('EXAMPLE_MENU_ARCHIVE', null, CONFIG) },
    { id: 3, icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: siteConfig('EXAMPLE_MENU_CATEGORY', null, CONFIG) },
    { id: 4, icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: siteConfig('EXAMPLE_MENU_TAG', null, CONFIG) },
    { id: 5, icon: 'fas fa-image', name:locale.COMMON.feed, to: '/hualang', show: siteConfig('EXAMPLE_MENU_feed', null, CONFIG)  },
  ];

  if (customNav) {
    links = links.concat(customNav);
  }

  // 如果 开启自定义菜单，则不再使用 Page生成菜单。
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu;
  }

  if (!links || links.length === 0) {
    return null;
  }

  //定义导航栏菜单组件内部布局，子元素在MenuItemDrop.js里

  return (
    <nav className="w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-light dark:border-hexo-black-gray dark:bg-black">
      <div className="container mx-auto max-w-4xl md:flex text-base">
        <ul className="flex text-nowrap absolute top-1 right-2">
        
          {links.map((link, index) => <MenuItemDrop key={index} link={link} />)}
        </ul>
      </div>
    </nav>
  )
}
