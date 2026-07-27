import type { BlogIndexFeedBlock, Post } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

import { BlogPopularItem } from '@/components/blog/BlogPopularItem'
import { BlogPostCardHorizontal } from '@/components/blog/BlogPostCardHorizontal'
import { BlogPostCardVertical } from '@/components/blog/BlogPostCardVertical'

export function BlogIndexFeedSection({
  block,
  posts,
}: {
  block: BlogIndexFeedBlock
  posts: Post[]
}) {
  const featured = posts.slice(0, 4)
  const recent = posts.slice(4)

  const shapeSrc = block.decorativeImage
    ? mediaUrl(block.decorativeImage)
    : '/assets/img/blog/blog-shape.webp'

  const ft = block.featuredTag ?? 'Featured'
  const fs = block.featuredSubtitle ?? 'This Month'
  const pt = block.popularTag ?? 'Popular'
  const ps = block.popularSubtitle ?? 'Posts'
  const rt = block.recentTag ?? 'Recently'
  const rs = block.recentSubtitle ?? 'Posted'

  return (
    <>
      <section className="blog-section">
        <div className="container-fluid custom-container">
          <div className="row justify-content-between g-3">
            <div className="col-xl-8">
              <div className="blog-title">
                <span className="tag">{ft}</span>
                <p className="">{fs}</p>
              </div>
              <div className="blog-cards-box">
                <div className="content-box">
                  {featured.length === 0 ? (
                    <p className="section-subtitle">No articles published yet — check back soon.</p>
                  ) : (
                    featured.map((post) => <BlogPostCardHorizontal key={post.id} post={post} />)
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="blog-title">
                <span className="tag">{pt}</span>
                <p className="">{ps}</p>
              </div>
              <div className="popular-wrapper">
                {posts.slice(0, 4).map((post, i) => (
                  <BlogPopularItem key={post.id} post={post} badgeClass={i === 0 ? 'green' : undefined} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="blog-divider" />

      <section className="blog-section two bg-none">
        <img
          src={shapeSrc}
          width={200}
          height={200}
          loading="lazy"
          alt=""
          className="blog-shape_img"
        />
        <div className="custom-container container-fluid">
          <div className="row g-3 justify-content-between">
            <div className="col-xl-12">
              <div className="blog-title">
                <span className="tag">{rt}</span>
                <p className="">{rs}</p>
              </div>
              <div className="row blog-row">
                {recent.length === 0 && featured.length === 0 ? null : recent.length === 0 ? (
                  <p className="section-subtitle">More articles coming soon.</p>
                ) : (
                  recent.map((post) => (
                    <div key={post.id} className="col-md-6">
                      <BlogPostCardVertical post={post} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
