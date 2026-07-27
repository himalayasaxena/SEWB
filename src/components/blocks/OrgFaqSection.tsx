import type { OrgFaqBlock } from '@/payload-types'

export function OrgFaqSection({ block, instanceKey }: { block: OrgFaqBlock; instanceKey: string }) {
  const uid = (block.id ?? instanceKey).toString().replace(/[^a-zA-Z0-9]/g, '')
  const accordionId = `faqAccordion-org-${uid}`
  const items = block.items ?? []

  return (
    <section className="faq-section">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center faq-row">
          <div className="col-12">
            <div className="faq-block">
              <h2 className="faq-title">{block.heading}</h2>
              <div className="accordion faq-accordion" id={accordionId}>
                {items.map((item, i) => {
                  const collapseId = `org-faq-${uid}-${i}`
                  const isFirst = i === 0
                  return (
                    <div key={item?.id ?? i} className="accordion-item">
                      <h3 className="accordion-header">
                        <button
                          className={isFirst ? 'accordion-button' : 'accordion-button collapsed'}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={isFirst ? 'true' : 'false'}
                          aria-controls={collapseId}
                        >
                          {item?.question}
                        </button>
                      </h3>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse${isFirst ? ' show' : ''}`}
                        data-bs-parent={`#${accordionId}`}
                      >
                        <div className="accordion-body">{item?.answer}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
