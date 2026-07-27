'use client'

import { RichText } from '@payloadcms/richtext-lexical/react'

import type { PdfDownloadBlock, Post } from '@/payload-types'

import { mediaPublicUrl } from './mediaUrl'

function toTabId(raw: string): string {
  return raw
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function YoutubeEmbed({ url }: { url: string }) {
  let id = ''
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) id = u.pathname.replace(/^\//, '').split('/')[0] ?? ''
    else id = u.searchParams.get('v') ?? ''
  } catch {
    return null
  }
  if (!id) return null
  return (
    <div className="ratio ratio-16x9 my-4">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube video"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

export function PostRichBody({ body }: { body: Post['body'] }) {
  return (
    <div className="post-text mb-5">
      <RichText
        data={body}
        converters={({ defaultConverters }) => ({
          ...defaultConverters,
          blocks: {
            embedYoutube: ({
              node,
            }: {
              node: { fields?: { url?: string | null } | null }
            }) => {
              const url = typeof node.fields?.url === 'string' ? node.fields.url : ''
              return url ? <YoutubeEmbed key={url} url={url} /> : null
            },
            imageGallery: ({ node }: { node: { fields?: { images?: unknown; caption?: string | null } | null } }) => {
              const images = node.fields?.images
              if (!Array.isArray(images) || !images.length) return null
              return (
                <figure className="my-4">
                  <div className="row g-2">
                    {images.map((img, i) => (
                      <div key={typeof img === 'object' && img?.id ? img.id : i} className="col-md-6">
                        <img
                          src={mediaPublicUrl(img)}
                          alt={typeof img === 'object' ? img.alt || '' : ''}
                          className="img-fluid rounded-3"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  {node.fields?.caption ? (
                    <figcaption className="text-muted small mt-2">{node.fields.caption}</figcaption>
                  ) : null}
                </figure>
              )
            },
            pdfDownload: ({ node }: { node: { fields?: PdfDownloadBlock | null } }) => {
              const block = node.fields
              const file = block?.file
              const label = block?.label?.trim() || 'Download PDF'
              const href = mediaPublicUrl(typeof file === 'object' ? file : null, '#')
              if (href === '#') return null
              return (
                <p className="my-3">
                  <a href={href} className="view-link" download target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </p>
              )
            },
            diagnosticTestTabs: ({
              node,
            }: {
              node: {
                fields?: {
                  tab1Label?: string | null
                  tab2Label?: string | null
                  tab3Label?: string | null
                  tab1Title?: string | null
                  tab1Description?: string | null
                  tab2Title?: string | null
                  tab2Description?: string | null
                  tab3Title?: string | null
                  tab3Description?: string | null
                } | null
              }
            }) => {
              const block = node.fields
              if (!block) return null

              const tab1Label = block.tab1Label?.trim() || 'Blood glucose tests'
              const tab2Label = block.tab2Label?.trim() || 'HbA1c tests'
              const tab3Label = block.tab3Label?.trim() || 'Fasting blood sugar tests'
              const tab1Title = block.tab1Title?.trim() || 'Blood Glucose Tests'
              const tab2Title = block.tab2Title?.trim() || 'HbA1c Tests'
              const tab3Title = block.tab3Title?.trim() || 'Fasting Blood Sugar'
              const tab1Description = block.tab1Description?.trim() || ''
              const tab2Description = block.tab2Description?.trim() || ''
              const tab3Description = block.tab3Description?.trim() || ''
              const scope = `${tab1Label}-${tab2Label}-${tab3Label}`
              const uid = toTabId(scope) || 'diagnostic-tabs'
              const tab1Id = `glucose-${uid}`
              const tab2Id = `hba1c-${uid}`
              const tab3Id = `fasting-${uid}`

              return (
                <div className="test-tabs-wrapper mt-4">
                  <ul className="nav nav-tabs border-0 mb-4" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id={`${tab1Id}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${tab1Id}`}
                        type="button"
                        role="tab"
                        aria-controls={tab1Id}
                        aria-selected="true"
                      >
                        {tab1Label}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id={`${tab2Id}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${tab2Id}`}
                        type="button"
                        role="tab"
                        aria-controls={tab2Id}
                        aria-selected="false"
                      >
                        {tab2Label}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id={`${tab3Id}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${tab3Id}`}
                        type="button"
                        role="tab"
                        aria-controls={tab3Id}
                        aria-selected="false"
                      >
                        {tab3Label}
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content detail-tab-content p-4 rounded-3">
                    <div className="tab-pane fade show active" id={tab1Id} role="tabpanel" aria-labelledby={`${tab1Id}-tab`}>
                      <h3>{tab1Title}</h3>
                      <p className="m-0">{tab1Description}</p>
                    </div>
                    <div className="tab-pane fade" id={tab2Id} role="tabpanel" aria-labelledby={`${tab2Id}-tab`}>
                      <h3>{tab2Title}</h3>
                      <p className="m-0">{tab2Description}</p>
                    </div>
                    <div className="tab-pane fade" id={tab3Id} role="tabpanel" aria-labelledby={`${tab3Id}-tab`}>
                      <h3>{tab3Title}</h3>
                      <p className="m-0">{tab3Description}</p>
                    </div>
                  </div>
                </div>
              )
            },
          },
        })}
      />
    </div>
  )
}
