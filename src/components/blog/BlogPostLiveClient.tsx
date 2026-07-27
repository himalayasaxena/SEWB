'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import Link from 'next/link'

import { editorDisplayName, editorFromPost, editorPhotoUrl } from '@/lib/cms/userAuthor'
import type { Category, Post, User } from '@/payload-types'

import { BlogAuthorList, PostAuthorPanel } from './BlogAuthorList'
import { BlogPopularItem } from './BlogPopularItem'
import { BlogPostCardVertical } from './BlogPostCardVertical'
import { PostRichBody } from './PostRichBody'
import { formatPostDate, mediaPublicUrl } from './mediaUrl'

function categoryBadge(post: Post): string {
  const c = post.categories?.[0]
  if (c && typeof c === 'object' && c.title) return c.title.toUpperCase()
  return 'ARTICLE'
}

function authorName(post: Post): string {
  const editor = editorFromPost(post)
  return editor ? editorDisplayName(editor) : 'SEWB'
}

function authorAvatar(post: Post): string {
  const editor = editorFromPost(post)
  return editor ? editorPhotoUrl(editor, '/assets/img/icons/profile.webp') : '/assets/img/icons/profile.webp'
}

function formatCount(count: number): string {
  return String(count).padStart(2, '0')
}

export function BlogPostLiveClient({
  initialPost,
  relatedPosts,
  categories,
  topAuthors,
  categoryCounts,
}: {
  initialPost: Post
  relatedPosts: Post[]
  categories: Category[]
  topAuthors: User[]
  categoryCounts: { category: Category; count: number }[]
}) {
  /** Must match Payload `serverURL` / browser origin so Live Preview postMessage matches. */
  const serverURL = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '') || 'http://localhost:3000'

  const { data: post } = useLivePreview<Post>({
    initialData: initialPost,
    serverURL,
    depth: 2,
  })

  const heroImg = mediaPublicUrl(post.featuredImage)
  const postEditor = editorFromPost(post)

  return (
    <>
      <section className="common-hero-section">
        <div className="container-fluid custom-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-content">
                <div className="hero-badge-wrap">
                  <span className="hero-badge">Expert Insights</span>
                </div>
                <div className="hero-title">
                  Healthcare <span className="highlight">Article Detail</span>
                </div>
                <p className="hero-subtitle">
                  Deep dive into professional medical perspectives, latest health trends, and innovative healthcare
                  technology updates.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-wrap">
                <img src={heroImg} width={500} height={400} loading="lazy" alt="" className="hero-main-img img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-detail-section">
        <div className="container-fluid custom-container">
          <div className="row justify-content-between g-3">
            <div className="col-xl-8">
              <div className="blog-detail-content">
                <span className="badge mb-3">{categoryBadge(post)}</span>
                <h1 className="post-title">{post.title}</h1>
                <div className="meta-box top">
                  <ul>
                    <li>
                      <div className="icon-box">
                        <img
                          src={authorAvatar(post)}
                          width={25}
                          height={25}
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
                <div className="featured-img mb-4">
                  <img src={heroImg} width={500} height={400} loading="lazy" alt="" className="img-fluid w-100 rounded-3" />
                </div>
                <PostRichBody body={post.body} />

                {postEditor ? <PostAuthorPanel editor={postEditor} /> : null}

                <div className="social-icons">
                  <div className="line"></div>
                  <div className="icons">
                    <Link href="#">
                      <img src="/assets/img/icons/share2.png" width={20} height={20} loading="lazy" alt="" />
                    </Link>
                    <Link href="#">
                      <img src="/assets/img/icons/fb.png" width={20} height={20} loading="lazy" alt="" />
                    </Link>
                    <Link href="#">
                      <img src="/assets/img/icons/tw.png" width={20} height={20} loading="lazy" alt="" />
                    </Link>
                    <Link href="#">
                      <img src="/assets/img/icons/insta.png" width={20} height={20} loading="lazy" alt="" />
                    </Link>
                    <Link href="#">
                      <img src="/assets/img/icons/pinterest.png" width={20} height={20} loading="lazy" alt="" />
                    </Link>
                  </div>
                  <div className="line"></div>
                </div>

                {relatedPosts.length > 0 ? (
                  <div className="related-posts-section mt-5 pt-5">
                    <div className="blog-title mb-4">
                      <span className="tag">See Related</span>
                      <p className="">Posts</p>
                    </div>
                    <div className="row">
                      {relatedPosts.slice(0, 2).map((r) => (
                        <div key={r.id} className="col-md-6">
                          <BlogPostCardVertical post={r} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col-xl-4 ps-40">
              <div className="sidebar-search mb-4">
                <img src="/assets/img/icons/search.png" loading="lazy" alt="" className="search-icon" />
                <input type="text" placeholder="Search health articles..." readOnly />
              </div>
              <div className="sidebar-box mt-0">
                <div className="blog-title mb-4">
                  <span className="tag">Top</span>
                  <p className="">Writers</p>
                </div>
                <BlogAuthorList authors={topAuthors.map((editor) => ({ editor }))} />
                <div className="blog-title mb-4 mt-5">
                  <span className="tag">Categories</span>
                </div>
                <ul className="category-list">
                  {categoryCounts.map(({ category, count }) => (
                    <li key={category.id} className="category-item">
                      <span className="category-name">{category.title}</span>{' '}
                      <span className="count">{formatCount(count)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="blog-detail_sidebar">
                <div className="blog-title">
                  <span className="tag">Popular</span>
                  <p className="">Posted</p>
                </div>
                <div className="popular-list">
                  {relatedPosts.map((r, i) => (
                    <BlogPopularItem key={r.id} post={r} badgeClass={i === 0 ? 'green' : undefined} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
