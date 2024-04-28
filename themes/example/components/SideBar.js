import { siteConfig } from '@/lib/config';
import Live2D from '@/components/Live2D';
import { useGlobal } from '@/lib/global';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Announcement from './Announcement';

const ExampleRecentComments = dynamic(() => import('./ExampleRecentComments'));
import Progress from './Progress';

const SidebarLink = ({ href, iconClass, text }) => (
  <Link href={href} passHref>
    <a className="cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white text-gray-600 hover:shadow-xl dark:border-gray-400 notion-red_background dark:bg-gray-800 text-gray-darkest hover:underline">
      <div className="font-light dark:text-gray-400">
        <i className={iconClass} /> {text}
      </div>
    </a>
  </Link>
);

const SocialLinks = () => {
  const socialConfig = [
    { key: 'github', title: 'github', icon: 'fab fa-github', href: siteConfig('CONTACT_GITHUB') },
    { key: 'twitter', title: 'twitter', icon: 'fab fa-twitter', href: siteConfig('CONTACT_TWITTER') },
    { key: 'telegram', title: 'telegram', icon: 'fab fa-telegram', href: siteConfig('CONTACT_TELEGRAM') },
    { key: 'linkedin', title: 'linkIn', icon: 'fab fa-linkedin', href: siteConfig('CONTACT_LINKEDIN') },
    { key: 'weibo', title: 'weibo', icon: 'fab fa-weibo', href: siteConfig('CONTACT_WEIBO') },
    { key: 'instagram', title: 'instagram', icon: 'fab fa-instagram', href: siteConfig('CONTACT_INSTAGRAM') },
    { key: 'email', title: 'email', icon: 'fas fa-envelope', href: `mailto:${siteConfig('CONTACT_EMAIL')}` },
    { key: 'rss', title: 'RSS', icon: 'fas fa-rss', href: '/feed', enabled: JSON.parse(siteConfig('ENABLE_RSS')) },
    { key: 'bilibili', title: 'bilibili', icon: 'fab fa-bilibili', href: siteConfig('CONTACT_BILIBILI') },
    { key: 'youtube', title: 'youtube', icon: 'fab fa-youtube', href: siteConfig('CONTACT_YOUTUBE') },
  ];

  return (
    <aside className="rounded shadow overflow-hidden mb-6">
      <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">社交媒体覆盖</h3>
      <div className="justify-center space-x-3 text-xl text-gray-600 dark:text-gray-300 p-4">
        {socialConfig.map(({ key, title, icon, href, enabled = true }) => {
          if (href && enabled) {
            return (
              <a key={key} target="_blank" rel="noreferrer" title={title} href={href}>
                <i className={`transform hover:scale-125 duration-150 ${icon} dark:hover:text-indigo-400 hover:text-indigo-600`} />
              </a>
            );
          }
          return null;
        })}
      </div>
    </aside>
  );
};

export const SideBar = (props) => {
  const { locale } = useGlobal();
  const { post, tag, category } = props;

  return (
    <div className="w-full md:w-64 sticky top-8">
      <aside className="rounded shadow overflow-hidden mb-6">
        <h3 className="text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b">
          {post ? "进度条" : locale.COMMON.CATEGORY}
        </h3>
        <div className="p-4">
          {post ? (
            <Progress />
          ) : (
            <ul className="list-reset leading-normal">
              {tag && (
                <li key={tag.name}>
                  <SidebarLink
                    href={`/tag/${encodeURIComponent(tag.name)}`}
                    iconClass="mr-1 fas fa-tag"
                    text={`${tag.name}(${tag.count})`}
                  />
                </li>
              )}
              {category && (
                <li key={category.name}>
                  <SidebarLink
                    href={`/category/${encodeURIComponent(category.name)}`}
                    iconClass="mr-1 fas fa-tag"
                    text={`${category.name}(${category.count})`}
                  />
                </li>
              )}
            </ul>
          )}
        </div>
      </aside>

      <SocialLinks />

      <aside className="rounded overflow-hidden mb-6">
        <Live2D />
      </aside>
    </div>
  );
};
