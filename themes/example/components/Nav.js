import { siteConfig } from '@/lib/config';
import { useGlobal } from '@/lib/global';
import CONFIG from '../config';
import { MenuItemDrop } from './MenuItemDrop';

export const Nav = (props) => {
  const { customNav, customMenu } = props;
  const { locale } = useGlobal();

  let links = [
    { id: 1, icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: siteConfig('EXAMPLE_MENU_SEARCH', null, CONFIG) },
    { id: 2, icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: siteConfig('EXAMPLE_MENU_ARCHIVE', null, CONFIG) },
    { id: 3, icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: siteConfig('EXAMPLE_MENU_CATEGORY', null, CONFIG) },
    { id: 4, icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: siteConfig('EXAMPLE_MENU_TAG', null, CONFIG) }
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
  
  return (
    <nav className="bg-white dark:border-hexo-black-gray dark:bg-black">
        {/* 电脑端布局，绝对定位在顶部最右侧 */}
        <ul className="hidden md:flex md:justify-end md:items-start md:absolute md:top-0 md:right-0">
          {links.map((link, index) => <MenuItemDrop key={index} link={link} />)}
        </ul>

        {/* 移动端布局 */}
        <ul className="flex top-0 left-0">
          {links.map((link, index) => <MenuItemDrop key={index} link={link} />)}
        </ul>
      </div>
    </nav>
  )
}
