'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const ANDROID_PACKAGE = 'com.sewb.patient'
const ANDROID_SCHEME = 'sewb'
const IOS_APP_STORE_ID = '6756248257'
const IOS_SCHEME = 'sewb'
const LINK_HOST = 'sewb.ai'
const LINK_PATH = 'invite'
const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`
const APP_STORE_URL = `https://apps.apple.com/app/id${IOS_APP_STORE_ID}`

function decodeJwtPayload(token: string) {
  const parts = token.split('.')
  if (parts.length !== 3) return null
  try {
    const payloadJson = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'))
    return JSON.parse(payloadJson) as { exp?: number }
  } catch {
    return null
  }
}

export function InvitePage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') ?? ''
  const query = useMemo(() => {
    const q = searchParams.toString()
    return q ? `?${q}` : ''
  }, [searchParams])

  const validation = useMemo(() => {
    if (!token) return { isValid: false, errorMsg: 'No invitation token provided.' }
    const payload = decodeJwtPayload(token)
    if (!payload) return { isValid: false, errorMsg: 'Invalid invitation link format.' }
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return { isValid: false, errorMsg: 'This invitation link has expired.' }
    }
    return { isValid: true, errorMsg: '' }
  }, [token])

  const [showFallback, setShowFallback] = useState(!validation.isValid)
  const [actionHref, setActionHref] = useState('#')

  useEffect(() => {
    if (!validation.isValid) return

    const ua = navigator.userAgent || ''
    const isAndroid = /android/i.test(ua)
    const isIOS = /iphone|ipad|ipod/i.test(ua)

    const fallbackTimer = window.setTimeout(() => setShowFallback(true), 4000)

    if (isAndroid) {
      const intentUrl = `intent://${LINK_HOST}/${LINK_PATH}${query}#Intent;scheme=${ANDROID_SCHEME};package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`
      setActionHref(intentUrl)
      window.location.replace(intentUrl)
    } else if (isIOS) {
      let hasLeft = false
      const appUrl = `${IOS_SCHEME}://invite${query}`
      setActionHref(appUrl)
      window.location.replace(appUrl)
      const onVisibility = () => {
        if (document.hidden) hasLeft = true
      }
      document.addEventListener('visibilitychange', onVisibility)
      const iosTimer = window.setTimeout(() => {
        if (!hasLeft && !document.hidden) window.location.replace(APP_STORE_URL)
      }, 2500)
      return () => {
        window.clearTimeout(fallbackTimer)
        window.clearTimeout(iosTimer)
        document.removeEventListener('visibilitychange', onVisibility)
      }
    } else {
      setShowFallback(true)
    }

    return () => window.clearTimeout(fallbackTimer)
  }, [validation.isValid, query])

  return (
    <>
      <style jsx global>{`
        .invite-page {
          --primary: #01549e;
          --primary-dark: #003d73;
          --secondary: #00c6ff;
          --bg: #0a0e14;
          --card-bg: rgba(255, 255, 255, 0.05);
          --text: #ffffff;
          --text-dim: #a0aec0;
          --glass: rgba(255, 255, 255, 0.03);
          --border: rgba(255, 255, 255, 0.1);
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: var(--bg);
          background-image:
            radial-gradient(circle at 20% 20%, rgba(1, 84, 158, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(0, 198, 255, 0.1) 0%, transparent 40%);
          color: var(--text);
          display: flex;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
        }
        .invite-container {
          width: 90%;
          max-width: 440px;
          padding: 48px 32px;
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          border-radius: 32px;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .invite-logo {
          width: 140px;
          margin-bottom: 32px;
        }
        .invite-loader {
          width: 48px;
          height: 48px;
          border: 3px solid var(--glass);
          border-top: 3px solid var(--secondary);
          border-radius: 50%;
          margin: 0 auto 24px;
          animation: invite-spin 1s linear infinite;
        }
        @keyframes invite-spin {
          to {
            transform: rotate(360deg);
          }
        }
        .invite-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .invite-copy {
          font-size: 15px;
          color: var(--text-dim);
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .invite-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 24px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 16px;
          width: 100%;
        }
        .invite-btn-primary {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
        }
        .invite-btn-secondary {
          background: var(--glass);
          color: var(--text);
          border: 1px solid var(--border);
        }
        .invite-error {
          background: rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.2);
          padding: 16px;
          border-radius: 16px;
          margin-bottom: 24px;
          color: #f87171;
          font-size: 14px;
        }
        .invite-footer {
          margin-top: 32px;
          font-size: 12px;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .invite-hide {
          display: none !important;
        }
      `}</style>
      <main className="invite-page">
        <div className="invite-container">
          <div>
            <Link href="/">
              <img src="/assets/img/logo.webp" alt="SEWB" className="invite-logo" />
            </Link>
          </div>

          {!validation.isValid ? (
            <>
              <div className="invite-error">
                <strong>Link Status:</strong>
                <br />
                {validation.errorMsg}
              </div>
              <h1 className="invite-title">Join SEWB</h1>
              <p className="invite-copy">
                Ready to experience the future of health? Download the app to get started even without an invite.
              </p>
            </>
          ) : showFallback ? (
            <>
              <h1 className="invite-title">Opening App...</h1>
              <p className="invite-copy">
                We tried to open the SEWB app. If you don&apos;t have it installed, you can download it below.
              </p>
            </>
          ) : (
            <>
              <div className="invite-loader" />
              <h1 className="invite-title">Connecting to SEWB...</h1>
              <p className="invite-copy">
                Redirecting you to the app. If it doesn&apos;t open automatically, please tap the button below.
              </p>
            </>
          )}

          {validation.isValid && (
            <a href={actionHref} className="invite-btn invite-btn-primary">
              {showFallback ? 'Retry Opening App' : 'Open SEWB App'}
            </a>
          )}

          <div className={validation.isValid && !showFallback ? 'invite-hide' : ''}>
            <a href={PLAY_STORE_URL} className="invite-btn invite-btn-secondary">
              Get it on Google Play
            </a>
            <a href={APP_STORE_URL} className="invite-btn invite-btn-secondary">
              Download on App Store
            </a>
          </div>

          <div className="invite-footer">Powered by SEWB Ecosystem</div>
        </div>
      </main>
    </>
  )
}
