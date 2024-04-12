import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return <footer className="z-10 relative w-full bg-white px-6 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray ">
        <DarkModeButton className='text-center pt-4'/>

        <div className="container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm">
            <div className='text-center'> &copy;{`${copyrightDate}`} {siteConfig('户外摄影、骑行、背包徒步、业余无线电，马督工粉丝')}. All rights reserved.
            </div>
        </div>
    </footer>
}
