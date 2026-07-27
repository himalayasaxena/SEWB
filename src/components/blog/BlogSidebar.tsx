import type { CategoryWithCount, EditorWithCount } from '@/lib/cms/getBlogSidebarData'

import { BlogAuthorList } from './BlogAuthorList'

function formatCount(count: number): string {
  return String(count).padStart(2, '0')
}

export function BlogSidebar({
  authors,
  categories,
}: {
  authors: EditorWithCount[]
  categories: CategoryWithCount[]
}) {
  return (
    <div className="col-xl-4">
      <div className="sidebar-search mb-4">
        <img src="/assets/img/icons/search.png" loading="lazy" alt="Search" className="search-icon" />
        <input type="text" placeholder="Search health articles..." />
      </div>
      <div className="sidebar-box">
        <div>
          <div className="blog-title mb-4">
            <span className="tag">Top</span>
            <p className="">Writers</p>
          </div>
          <BlogAuthorList authors={authors.map(({ editor }) => ({ editor }))} />
        </div>
        <div>
          <div className="blog-title mb-4">
            <span className="tag">Categories</span>
          </div>
          <ul className="category-list">
            {categories.length === 0 ? (
              <li className="category-item">
                <span className="category-name">No categories yet</span>
              </li>
            ) : (
              categories.map(({ category, count }) => (
                <li key={category.id} className="category-item">
                  <span className="category-name">{category.title}</span>{' '}
                  <span className="count">{formatCount(count)}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
