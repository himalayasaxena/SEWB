'use client'

import { useActionState } from 'react'

import { submitContact, type ContactActionState } from '@/actions/contact'
import { phpAsset } from '@/lib/phpAsset'

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, null as ContactActionState | null)

  return (
    <form className="contact-form-modern" action={formAction}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      {state?.error ? (
        <p className="section-subtitle text-danger mb-3" role="alert">
          {state.error}
        </p>
      ) : null}
      {state?.ok ? (
        <p className="section-subtitle mb-3" role="status">
          Thank you — your message has been received.
        </p>
      ) : null}
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Contact name"
              required
              disabled={pending || state?.ok}
            />
            <label className="form-label">Contact name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="street"
              className="form-input"
              placeholder="Street"
              required
              disabled={pending || state?.ok}
            />
            <label className="form-label">Street</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="city"
              className="form-input"
              placeholder="City"
              disabled={pending || state?.ok}
            />
            <label className="form-label">City</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="postCode"
              className="form-input"
              placeholder="Post code"
              disabled={pending || state?.ok}
            />
            <label className="form-label">Post code</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="Contact phone"
              required
              disabled={pending || state?.ok}
            />
            <label className="form-label">Contact phone</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              required
              disabled={pending || state?.ok}
            />
            <label className="form-label">Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <textarea
              name="message"
              className="form-input form-textarea"
              placeholder="Message"
              rows={5}
              disabled={pending || state?.ok}
            ></textarea>
            <label className="form-label">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="primary-btn w-100" disabled={pending || state?.ok}>
            Submit{' '}
            <img src={phpAsset('assets/img/icons/left-arrow.png')} width={14} height={14} alt="arrow" />
          </button>
        </div>
      </div>
    </form>
  )
}
