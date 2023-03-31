import logo from '/logo.webp'
import viteLogo from '/vite.svg'
import reactLogo from '../../assets/react.svg'
import zustandLogo from '../../assets/zustand.png'
import tailwindLogo from '../../assets/tailwind.webp'
import reactQueryLogo from '../../assets/react-query.png'

import './Home.styles.css'
import { Link } from 'react-router-dom'

type PoweredBy = {
  url: string
  img: string
  alt: string
  name: string
}

const poweredBy: PoweredBy[] = [
  {
    img: viteLogo,
    url: 'https://vitejs.dev',
    alt: 'ViteJS logo image',
    name: 'vite'
  },
  {
    img: reactLogo,
    url: 'https://react.dev/',
    alt: 'ReactJS logo image',
    name: 'react'
  },
  {
    img: tailwindLogo,
    url: 'https://tailwindcss.com/',
    alt: 'TailwindCSS logo image',
    name: 'tailwind'
  },
  {
    img: reactQueryLogo,
    url: 'https://tanstack.com/query/latest',
    alt: 'Tanstack React Query logo image',
    name: 'react-query'
  },
  {
    img: zustandLogo,
    url: 'https://tanstack.com/query/latest',
    alt: 'Zustand logo image',
    name: 'zustand'
  }
]

export function Home() {
  return (
    <div className='app'>
      <div className='magic-cube'>
        <img
          src={logo}
          alt='Magic Cbe logo'
          className='magic-cube-logo'
        />
        <h1 className='text-6xl'>Magic Cube</h1>
      </div>

      <div className='flex flex-col gap-10'>
        <div className='flex flex-row w-[800px] justify-start items-start'>
          <p className='font-semibold text-emerald-400 text-xl'>Powered by</p>
        </div>

        <div className='logos'>
          {poweredBy.map(({ img, url, alt, name }, index) => (
            <>
              <a
                href={url}
                target='_blank'
              >
                <img
                  src={img}
                  alt={alt}
                  className={'logo ' + name}
                />
              </a>

              {index === poweredBy.length - 1 ? null : (
                <span className='text-2xl font-semibold'>+</span>
              )}
            </>
          ))}
        </div>
      </div>

      <div className='flex flex-row gap-12 styled-link-container'>
        <Link
          to='/about'
          className='styled-link'
        >
          Sobre
        </Link>

        <Link
          to='/about'
          className='styled-link'
        >
          Como usar
        </Link>
      </div>
    </div>
  )
}
