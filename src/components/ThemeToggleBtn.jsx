import { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <button>
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
          onClick={() => setTheme('light')}
          className="size-8 p-1.5 border rounded-full"
        />
      ) : (
        <img
          src={assets.moon_icon}
          onClick={() => setTheme('dark')}
          className="size-8 p-1.5 border rounded-full"
        />
      )}
    </button>
  )
}

export default ThemeToggleBtn
