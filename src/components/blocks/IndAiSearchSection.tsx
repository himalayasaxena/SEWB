import type { IndAiSearchBlock, Media } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

function DoctorCard({
  doctor,
  ratingIcon,
  premiumIcon,
  clockIcon,
}: {
  doctor: {
    photo?: string | Media | null
    name?: string | null
    specialty?: string | null
    ratingScore?: string | null
    ratingCount?: string | null
    experienceText?: string | null
    availabilityText?: string | null
    nextAvailableTime?: string | null
    bookHref?: string | null
  }
  ratingIcon: string
  premiumIcon: string
  clockIcon: string
}) {
  const photo = doctor?.photo ? mediaUrl(doctor.photo) : ''

  return (
    <div className="doctor-card">
      <div className="doc-info-main">
        {photo ? (
          <img src={photo} width={140} height={130} loading="lazy" alt="" className="doc-img" />
        ) : null}
        <div className="doc-details">
          <h3 className="card-title">{doctor?.name}</h3>
          <p className="card-desc">{doctor?.specialty}</p>
          <div className="rating-box">
            {ratingIcon ? <img src={ratingIcon} width={24} height={24} loading="lazy" alt="" /> : null}
            <span>
              {' '}
              <b>{doctor?.ratingScore}</b> ({doctor?.ratingCount})
            </span>
          </div>
        </div>
      </div>
      <div className="doc-meta">
        <div className="meta-item">
          {premiumIcon ? <img src={premiumIcon} height={24} width={24} loading="lazy" alt="" /> : null}
          <span>{doctor?.experienceText}</span>
        </div>
        <div className="meta-item">
          {clockIcon ? <img src={clockIcon} height={24} width={24} loading="lazy" alt="" /> : null}
          <span className="badge-available today">{doctor?.availabilityText}</span>
        </div>
        <p className="next-available">
          Next available: <b>{doctor?.nextAvailableTime}</b>
        </p>
      </div>
      <a href={doctor?.bookHref ?? '#'} className="btn-book btn-gradient">
        Book Appointment
      </a>
    </div>
  )
}

export function IndAiSearchSection({ block }: { block: IndAiSearchBlock }) {
  const symptomIcon = block.symptomInputIcon ? mediaUrl(block.symptomInputIcon) : ''
  const locIcon = block.locationInputIcon ? mediaUrl(block.locationInputIcon) : ''
  const ratingIcon = block.metaRatingIcon ? mediaUrl(block.metaRatingIcon) : ''
  const premiumIcon = block.metaPremiumIcon ? mediaUrl(block.metaPremiumIcon) : ''
  const clockIcon = block.metaClockIcon ? mediaUrl(block.metaClockIcon) : ''

  const tabs = block.tabs ?? []
  const panes = block.panes ?? []
  const activeIdx = tabs.findIndex((t) => t?.defaultActive)
  const firstActive = activeIdx >= 0 ? activeIdx : 0
  const activePaneId = tabs[firstActive]?.paneId ?? tabs[0]?.paneId ?? ''

  return (
    <section className="ai-search-section section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            {block.badge ? <span className="section-badge text-uppercase">{block.badge}</span> : null}
            <h2 className="section-title two text-uppercase">{block.title}</h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="search-bar-wrapper">
          <div className="search-input-group">
            {symptomIcon ? (
              <img src={symptomIcon} width={32} height={32} loading="lazy" alt="" />
            ) : null}
            <input type="text" placeholder={block.symptomPlaceholder} />
          </div>
          <div className="search-input-group" style={{ flex: '0 0 280px' }}>
            {locIcon ? (
              <img src={locIcon} width={25} height={25} loading="lazy" alt="" />
            ) : null}
            <input type="text" placeholder={block.locationPlaceholder} />
          </div>
          <button type="button" className="btn-search btn-gradient">
            {block.searchButtonLabel ?? 'Search'}
          </button>
        </div>
        <ul className="nav nav-pills filter-pills " id="doctorTabs">
          {tabs.map((tab, i) => (
            <li key={tab?.id ?? i} className="nav-item">
              <button
                className={i === firstActive ? 'nav-link active filter-pill' : 'nav-link filter-pill'}
                type="button"
                data-bs-toggle="pill"
                data-bs-target={`#${tab?.paneId ?? ''}`}
              >
                {tab?.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {panes.map((pane, pi) => {
            const paneId = pane?.paneId ?? `pane-${pi}`
            const doctors = pane?.doctors ?? []
            const colClass =
              pane?.columnClass?.trim() ||
              (paneId === 'all' ? 'col-lg-4 col-sm-6' : 'col-lg-4 col-md-6')
            const isActive = Boolean(activePaneId && paneId === activePaneId) || (!activePaneId && pi === 0)

            return (
              <div
                key={pane?.id ?? pi}
                className={`tab-pane fade${isActive ? ' show active' : ''}`}
                id={paneId}
              >
                <div className="row g-4">
                  {doctors.map((doc, di) => (
                    <div key={doc?.id ?? di} className={colClass}>
                      <DoctorCard
                        doctor={doc}
                        ratingIcon={ratingIcon}
                        premiumIcon={premiumIcon}
                        clockIcon={clockIcon}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
