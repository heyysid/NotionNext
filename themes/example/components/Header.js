import Link from 'next/link'

/**
 * 网站顶部
 * @returns
 */
export const Header = (props) => {
  return (
    <header className="w-full px-6 bg-white  dark:bg-black relative top-0 z-10">
      <div className="container mx-auto max-w-4xl md:flex justify-between items-center">
        <Link 
            href='/' 
            className="py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center">
            'cheshi22'
        </Link>
        <div className="w-full md:w-auto text-center md:text-right">
          'cheshi'
        </div>
      </div>
    </header>
  )
}
