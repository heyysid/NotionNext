import { useEffect, useState, useRef, useCallback, } from 'react'
import { isBrowser } from '@/lib/utils'
import throttle from 'lodash.throttle'
import { uuidToId } from 'notion-utils'
import { useGlobal } from '@/lib/global'

/**
 * 顶部页面阅读进度条
 * @returns {JSX.Element}
 * @constructor
 */
const Progress = ({ targetRef, showPercent = true }) => {
  const currentRef = targetRef?.current || targetRef
  const [percent, changePercent] = useState(0)
  const scrollListener = () => {
    const target = currentRef || (isBrowser && document.getElementById('article-wrapper'))
    if (target) {
      const clientHeight = target.clientHeight
      const scrollY = window.pageYOffset
      const fullHeight = clientHeight - window.outerHeight
      let per = parseFloat(((scrollY / fullHeight) * 100).toFixed(0))
      if (per > 100) per = 100
      if (per < 0) per = 0
      changePercent(per)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollListener)
    return () => document.removeEventListener('scroll', scrollListener)
  }, [])

//下方组件是导航栏进度条
  return (
    <div className="h-4 w-full shadow-2xl bg-gray-700 rounded-sm">
      <div
        className="h-4 bg-indigo-600 duration-200 rounded-sm"
        style={{ width: `${percent}%` }}
      >
        {showPercent && (
          <div className="text-right text-white text-xs">{percent}%</div>
        )}
      </div>
    </div>
  )
}

/**
 * 目录导航组件
 * @param toc
 * @returns {JSX.Element}
 * @constructor
 */
const Catalog = ({ toc }) => {
  const { locale } = useGlobal()
  const tocIds = useRef([])  // 使用 useRef 保持 tocIds 的一致性
  const tRef = useRef(null)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const handleScroll = throttle(actionSectionScrollSpy, 200)
    window.addEventListener('scroll', handleScroll)
    actionSectionScrollSpy() // 初始化时触发一次
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection])

  const actionSectionScrollSpy = useCallback(() => {
    const sections = document.getElementsByClassName('notion-h')
    let prevBBox = null
    let currentSectionId = activeSection
    for (let i = 0; i < sections.length; ++i) {
      const section = sections[i]
      if (!section || !(section instanceof Element)) continue
      if (!currentSectionId) currentSectionId = section.getAttribute('data-id')
      const bbox = section.getBoundingClientRect()
      const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
      const offset = Math.max(150, prevHeight / 4)
      if (bbox.top - offset < 0) {
        currentSectionId = section.getAttribute('data-id')
        prevBBox = bbox
        continue
      }
      break
    }
    setActiveSection(currentSectionId)
    const index = tocIds.current.indexOf(currentSectionId) || 0
    tRef?.current?.scrollTo({ top: 28 * index, behavior: 'smooth' })
  }, [activeSection])

  if (!toc || toc.length < 1) return null

  return (
    <div className='px-3 py-1'>
      <div className='w-full'><i className='mr-1 fas fa-stream' />{locale.COMMON.TABLE_OF_CONTENTS}</div>
      <div className='w-full py-3'>
        <Progress />
      </div>
      <div className='overflow-y-auto max-h-36 lg:max-h-96 overscroll-none scroll-hidden' ref={tRef}>
        <nav className='h-full text-black'>
          {toc.map((tocItem) => {
            const id = uuidToId(tocItem.id)
            if (!tocIds.current.includes(id)) tocIds.current.push(id)
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`notion-table-of-contents-item duration-300 transform font-light dark:text-gray-200
                notion-table-of-contents-item-indent-level-${tocItem.indentLevel}`}
              >
                <span
                  style={{ display: 'inline-block', marginLeft: tocItem.indentLevel * 16 }}
                  className={`${activeSection === id ? 'font-bold text-indigo-600' : ''}`}
                >
                  {tocItem.text}
                </span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

// 确保 Progress 组件的默认导出
export default Progress;

// 确保 Catalog 组件的命名导出
export { Catalog };
