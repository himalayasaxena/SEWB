import type { User } from '@/payload-types'

import { editorDisplayName, editorPhotoUrl, editorSocialLinks } from '@/lib/cms/userAuthor'

const AVATAR_FALLBACKS = ['/assets/img/icons/profile2.webp', '/assets/img/icons/profile3.webp'] as const

type AuthorRow = {
  editor: User
  activeSocial?: boolean
}

function SocialIcon({
  href,
  src,
  alt,
  active,
}: {
  href?: string | null
  src: string
  alt: string
  active?: boolean
}) {
  if (!href?.trim()) return null
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={active ? 'active' : undefined}>
      <img src={src} width={12} height={10} loading="lazy" alt={alt} className="one" />
    </a>
  )
}

export function BlogAuthorList({ authors }: { authors: AuthorRow[] }) {
  if (authors.length === 0) {
    return <p className="section-subtitle">No writers have published posts yet.</p>
  }

  return (
    <div className="author-list">
      {authors.map(({ editor, activeSocial }, index) => {
        const social = editorSocialLinks(editor)
        const useFacebookActive = activeSocial ?? index === 0
        return (
          <div key={editor.id} className="author-item">
            <img
              src={editorPhotoUrl(editor, AVATAR_FALLBACKS[index % AVATAR_FALLBACKS.length])}
              width={80}
              height={80}
              loading="lazy"
              alt={editorDisplayName(editor)}
              className="author-avatar"
            />
            <div className="author-info">
              <h3>{editorDisplayName(editor)}</h3>
              <p>{editor.bio?.trim() || editor.email}</p>
              <div className="author-social">
                <SocialIcon
                  href={social.facebook}
                  src={useFacebookActive ? '/assets/img/icons/facebook.png' : '/assets/img/icons/facebook3.png'}
                  alt="Facebook"
                  active={useFacebookActive && Boolean(social.facebook)}
                />
                <SocialIcon href={social.twitter} src="/assets/img/icons/twitter3.png" alt="Twitter" />
                <SocialIcon href={social.instagram} src="/assets/img/icons/insta3.png" alt="Instagram" />
                <SocialIcon href={social.linkedin} src="/assets/img/icons/linkedin2.png" alt="LinkedIn" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function PostAuthorPanel({ editor }: { editor: User }) {
  const social = editorSocialLinks(editor)

  return (
    <div className="post-author-panel mt-5 pt-4">
      <div className="blog-title mb-4">
        <span className="tag">Written by</span>
      </div>
      <div className="author-item">
        <img
          src={editorPhotoUrl(editor)}
          width={80}
          height={80}
          loading="lazy"
          alt={editorDisplayName(editor)}
          className="author-avatar"
        />
        <div className="author-info">
          <h3>{editorDisplayName(editor)}</h3>
          <p>{editor.bio?.trim() || 'SEWB contributor'}</p>
          <div className="author-social">
            <SocialIcon
              href={social.facebook}
              src="/assets/img/icons/facebook.png"
              alt="Facebook"
              active={Boolean(social.facebook)}
            />
            <SocialIcon href={social.twitter} src="/assets/img/icons/twitter3.png" alt="Twitter" />
            <SocialIcon href={social.instagram} src="/assets/img/icons/insta3.png" alt="Instagram" />
            <SocialIcon href={social.linkedin} src="/assets/img/icons/linkedin2.png" alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  )
}
