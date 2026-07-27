import type { HomeFaqBlock } from '@/payload-types'

export function HomeFaqSection({ block, instanceKey }: { block: HomeFaqBlock; instanceKey: string }) {
  const uid = (block.id ?? instanceKey).toString().replace(/[^a-zA-Z0-9]/g, '')
  const accordionId = `faqAccordion-${uid}`
  const items = block.items ?? []

  return (
    <section className="faq-section" id="faq">
      <div className="container-fluid custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2 className="faq-title">{block.heading}</h2>
            <div className="accordion faq-accordion" id={accordionId}>
              {items.map((item, idx) => {
                const collapseId = `faq-${uid}-${idx}`
                const isFirst = idx === 0
                return (
                  <div key={item.id ?? idx} className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className={isFirst ? 'accordion-button' : 'accordion-button collapsed'}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst}
                        aria-controls={collapseId}
                      >
                        {item.question}
                      </button>
                    </h3>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse${isFirst ? ' show' : ''}`}
                      data-bs-parent={`#${accordionId}`}
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
