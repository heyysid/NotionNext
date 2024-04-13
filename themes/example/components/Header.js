import Link from 'next/link'

/**
 * 网站顶部
 * @returns
 */
export const Header = (props) => {
  return (
    <header className="w-full flex justify-end px-6 bg-white dark:bg-black relative z-10 h-auto md:h-0"> {/* 将高度设置为自动以适应内容 */}
      <div className="container mx-auto max-w-4xl md:flex justify-between items-center">
        <Link href='/' className="py-6 w-full text-center md:text-left md:w-auto text-gray-dark no-underline flex justify-center items-center">
          {/* 空的文本，不显示任何字符 */}
        </Link>
        <div className="w-full md:w-auto text-center md:text-right">
          {/* 右侧文字 */}
        </div>
      </div>
    </header>
  )
}
