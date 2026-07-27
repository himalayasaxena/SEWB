import Link from 'next/link'

import { editorDisplayName, editorFromPost, editorPhotoUrl } from '@/lib/cms/userAuthor'
import type { Post } from '@/payload-types'

import { formatPostDate, mediaPublicUrl } from './mediaUrl'

function categoryLabel(post: Post): string {
  const c = post.categories?.[0]
  if (c && typeof c === 'object' && c.title) return c.title
  return 'Article'
}

function authorName(post: Post): string {
  const editor = editorFromPost(post)
  return editor ? editorDisplayName(editor) : 'SEWB'
}

function authorAvatar(post: Post): string {
  const editor = editorFromPost(post)
  return editor ? editorPhotoUrl(editor, '/assets/img/icons/profile.webp') : '/assets/img/icons/profile.webp'
}

export function BlogPopularItem({ post, badgeClass }: { post: Post; badgeClass?: string }) {
  const href = `/blog/${post.slug}`
  const img = mediaPublicUrl(post.featuredImage)
  return (
    <div className="popular-item">
      <img src={img} width={400} height={250} loading="lazy" alt="" className="blog-sm" />
      <div>
        <span className={`badge ${badgeClass ?? ''}`.trim()}>{categoryLabel(post)}</span>
        <Link href={href} className="blog-title-two">
          {post.title}
        </Link>
        <div className="meta-box">
          <ul>
            <li>
              <div className="icon-box">
                <img
                  src={authorAvatar(post)}
                  width={20}
                  height={20}
                  loading="lazy"
                  alt=""
                  className="profile-img"
                />
              </div>
              <p className="meta">{authorName(post)}</p>
            </li>
            <li>
              <div className="icon-box">
                <img src="/assets/img/icons/date.png" width={13} height={14} loading="lazy" alt="" />
              </div>
              <p className="meta">{formatPostDate(post.publishedAt)}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
