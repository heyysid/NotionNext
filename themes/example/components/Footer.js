import { siteConfig } from '@/lib/config'
import DarkModeButton from '@/components/DarkModeButton'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className="z-10 relative w-full bg-white px-6 border-t dark:border-hexo-black-gray dark:bg-hexo-black-gray ">
    <DarkModeButton className='text-center pt-4'/>
      <div className="container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm">
        <div className='text-center'>
          &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
