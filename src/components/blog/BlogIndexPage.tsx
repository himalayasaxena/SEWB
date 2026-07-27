import { getCategoryPostCounts, getTopAuthors } from '@/lib/cms/getBlogSidebarData'
import { getPublishedPosts } from '@/lib/cms/getPublishedPosts'

import { BlogPopularItem } from './BlogPopularItem'
import { BlogPostCardHorizontal } from './BlogPostCardHorizontal'
import { BlogPostCardVertical } from './BlogPostCardVertical'
import { BlogSidebar } from './BlogSidebar'

export default async function BlogIndexPage() {
  const [posts, categories, authors] = await Promise.all([
    getPublishedPosts(24),
    getCategoryPostCounts(),
    getTopAuthors(3),
  ])
  const featured = posts.slice(0, 4)
  const recent = posts.slice(4)

  return (
    <>
      <section className="common-hero-section">
        <div className="container-fluid custom-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-content">
                <div className="hero-badge-wrap">
                  <span className="hero-badge">Latest Healthcare Insights</span>
                </div>
                <h1 className="hero-title">
                  Healthcare <span className="highlight">Insights &amp; Updates</span>
                </h1>
                <p className="hero-subtitle">
                  Discover the latest news, medical advice, and industry trends to stay informed and healthy.
                </p>
                <div className="hero-features-tags">
                  <span className="feature-tag">
                    <i className="fas fa-check-circle"></i> Expert Advice
                  </span>
                  <span className="feature-tag">
                    <i className="fas fa-check-circle"></i> Health Tips
                  </span>
                  <span className="feature-tag">
                    <i className="fas fa-check-circle"></i> Industry News
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-wrap">
                <img
                  src="/assets/img/blog/blog-bc.webp"
                  width={550}
                  height={420}
                  loading="lazy"
                  alt=""
                  className="hero-main-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container-fluid custom-container">
          <div className="row justify-content-between g-3">
            <div className="col-xl-8">
              <div className="blog-title">
                <span className="tag">Featured</span>
                <p className="">This Month</p>
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
            <div className="col-xl-4 ps-40">
              <div className="blog-title">
                <span className="tag">Popular</span>
                <p className="">Posted</p>
              </div>
              <div className="popular-list">
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
          src="/assets/img/blog/blog-shape.webp"
          width={200}
          height={200}
          loading="lazy"
          alt=""
          className="blog-shape_img"
        />
        <div className="custom-container container-fluid">
          <div className="row g-3 justify-content-between">
            <div className="col-xl-8">
              <div className="blog-title">
                <span className="tag">Recently</span>
                <p className="">Posted</p>
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
            <BlogSidebar authors={authors} categories={categories} />
          </div>
        </div>
      </section>
    </>
  )
}
