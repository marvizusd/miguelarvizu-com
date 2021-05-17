import Head from 'next/head'
import Footer from '../components/Footer'
import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext, ThemeUpdate } from '../providers/ThemeProvider'
import { useEffect } from 'react'

export default function Home() {
  const currentURL = "/home"
  const previewImage = "preview image"
  const siteName = "Miguel Arvizu Portfolio"
  const pageTitle = "Page Title"
  const description = "Description text goes here"

  const backgroundColor = ""

  const { theme } = useContext(ThemeContext)
  const { toogleTheme } = useContext(ThemeUpdate)

  const triggerToogle = () => {
    return toogleTheme()
  }

  let className = theme.type === "light" ? "bg-green-500" : "bg-red-500"
  let themeSVG = theme.type === "light" ? "/sun.svg" : "/moon.svg"

  return (
    <div className="flex flex-col h-screen">
      <Head>
        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>

      <div className="mb-auto pt-4">
        <nav className="flex space-x-4">
          <a>About</a>
          <a>Projects</a>
          <a>Blog</a>
          <div>
            <button onClick={triggerToogle}>
              <img src={themeSVG} className="w-10 h-10"/>
            </button>
          </div>
        </nav>
      </div>

      <Footer />

      <style jsx>{`
      
      `}</style>
    </div>
  )
}
