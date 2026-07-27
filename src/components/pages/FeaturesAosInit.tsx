'use client'

import Script from 'next/script'

/** Matches UI/features.php bottom AOS init (depends on global `AOS`). */
export function FeaturesAosInit() {
  return (
    <Script
      src="https://unpkg.com/aos@next/dist/aos.js"
      strategy="afterInteractive"
      onLoad={() => {
        const w = window as unknown as { AOS?: { init: (o: object) => void } }
        w.AOS?.init({
          duration: 800,
          once: true,
        })
      }}
    />
  )
}
