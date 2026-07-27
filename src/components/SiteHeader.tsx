'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NavLink } from '@/lib/defaultNavigation'

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname || '/'
}

function isActive(pathname: string, href: string) {
  if (href === 'javascript:;') return false
  const p = normalizePath(pathname)
  const h = normalizePath(href.split('?')[0] || '/')
  if (h === '/') return p === '/'
  if (h === '/blog') return p === '/blog' || p.startsWith('/blog/')
  return p === h || p.startsWith(`${h}/`)
}

const homeHeaderPaths = new Set([
  '/',
  '/about',
  '/product-list',
  '/individuals',
  '/health-professionals',
  '/security',
  '/features',
  '/organisations',
  '/blog',
  '/gallery',
  '/testimonial',
  '/privacy-policy',
  '/terms-conditions',
  '/medical-disclaimer',
  '/contact',
  '/product-list',
])

export function SiteHeader({ navigation }: { navigation: NavLink[] }) {
  const pathname = usePathname()
  const p = normalizePath(pathname)
  const headerClass =
    homeHeaderPaths.has(p) || p.startsWith('/blog/') ? 'home-header' : 'inner-header'

  const renderLinks = (ulClassName = 'navbar-nav align-items-center') => (
    <ul className={ulClassName}>
      {navigation.map((item, i) => {
        const active = isActive(pathname, item.href)
        if (item.highlight && item.href === 'javascript:;') {
          return (
            <li key={`${item.label}-${i}`} className="nav-item">
              <a
                className="nav-link login-btn"
                href="javascript:;"
                id="loginModalLabel"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                {item.label}
              </a>
            </li>
          )
        }
        return (
          <li key={`${item.label}-${i}`} className="nav-item">
            <Link className={`nav-link ${active ? 'active' : ''}`} href={item.href}>
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <header className={`main-header ${headerClass}`}>
      <div className="container-fluid custom-container">
        <nav className="navbar navbar-expand-xl">
          <Link className="navbar-brand" href="/">
            <img
              src="/assets/img/logo.webp"
              width={150}
              height={50}
              loading="lazy"
              alt="logo"
              className="logo-img "
            />
          </Link>
          <button
            className="navbar-toggler d-xl-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
            aria-controls="navbarOffcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-none d-xl-flex" id="navbarNav">
            <div className="nav-links-wrapper ms-auto">{renderLinks()}</div>
          </div>
        </nav>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="navbarOffcanvas" aria-labelledby="navbarOffcanvasLabel">
          <div className="offcanvas-header">
            <img src="/assets/img/logo.webp" width={130} height={43} alt="logo" className="logo-img" />
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="nav-links-wrapper">{renderLinks('navbar-nav')}</div>
          </div>
        </div>
      </div>
    </header>
  )
}
