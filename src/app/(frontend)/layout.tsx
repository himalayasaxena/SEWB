import type { Metadata } from 'next'
import Script from 'next/script'
import { getPayload } from 'payload'
import React from 'react'

import { DraftPreviewBar } from '@/components/DraftPreviewBar'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { isNoIndexEnabled, siteNoIndexRobots } from '@/lib/noIndexSite'
import { canonicalBaseFromSiteUrl, getSiteBaseUrl, mediaAbsoluteUrl } from '@/lib/siteBaseUrl'
import config from '@/payload.config'
import { defaultNavigation, resolveNavigation, type NavLink } from '@/lib/defaultNavigation'
import type { Footer as FooterGlobal } from '@/payload-types'

/** Site-wide defaults; each route adds its own title/description via `buildPageMetadata` + CMS Page. */
export async function generateMetadata(): Promise<Metadata> {
  const fallbackTitle = 'SEWB - Global Care'
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const site = await payload.findGlobal({ slug: 'site', depth: 2 })
    const title = typeof site.siteName === 'string' && site.siteName.trim() ? site.siteName : fallbackTitle
    const base = canonicalBaseFromSiteUrl(site.siteUrl)
    const ogImage = mediaAbsoluteUrl(base, site.defaultOgImage)

    return {
      metadataBase: new URL(base),
      title: {
        default: title,
        template: `%s | ${title}`,
      },
      ...(isNoIndexEnabled() ? { robots: siteNoIndexRobots } : {}),
      openGraph: {
        siteName: title,
        type: 'website',
        ...(ogImage ? { images: [{ url: ogImage }] } : {}),
      },
    }
  } catch {
    const base = await getSiteBaseUrl()
    return {
      metadataBase: new URL(base),
      title: { default: fallbackTitle, template: `%s | ${fallbackTitle}` },
      ...(isNoIndexEnabled() ? { robots: siteNoIndexRobots } : {}),
    }
  }
}

export default async function FrontendLayout(props: { children: React.ReactNode }) {
  const { children } = props

  let navigation: NavLink[] = defaultNavigation
  let footerGlobal: FooterGlobal | null = null
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const header = await payload.findGlobal({ slug: 'header' })
    navigation = resolveNavigation(header.navigation)

    footerGlobal = (await payload.findGlobal({ slug: 'footer' })) as FooterGlobal
  } catch {
    navigation = defaultNavigation
    footerGlobal = null
  }

  return (
    <html lang="en">
      <head>
        {isNoIndexEnabled() ? <meta name="robots" content="noindex, nofollow" /> : null}
        <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
        <link rel="preload" as="image" href="/assets/img/banner/ban1.webp" />
        <link rel="preload" as="image" href="/assets/img/banner/center-overlay.webp" />
        <link rel="preload" as="image" href="/assets/img/banner/left-overlay.webp" />
        <link rel="preload" as="image" href="/assets/img/banner/right-overlay.webp" />
        <link rel="preload" href="/assets/fonts/open-sans/OpenSans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/open-sans/OpenSans-medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/open-sans/OpenSans-semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/open-sans/OpenSans-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        <DraftPreviewBar />
        <SiteHeader navigation={navigation} />
        {children}
        <SiteFooter footer={footerGlobal} />
        <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
