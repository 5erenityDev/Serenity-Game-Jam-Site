import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              About Us
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jams" className={navLinkText}>
              Jams
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/theme" className={navLinkText}>
              Theme Generator
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/countdown" className={navLinkText}>
              Jam Countdown
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout