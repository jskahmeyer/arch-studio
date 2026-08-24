import { useState } from 'react'
import type { FormEvent } from 'react'
import arrow from '../../assets/images/icons/icon-arrow.svg'
import greenArrow from '../../assets/images/icons/icon-arrow-green.svg'

type FieldName = 'name' | 'email' | 'message'
type Errors = Partial<Record<FieldName, string>>
type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpzveek'

const EMAIL_PATTERN =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validate = (data: Record<FieldName, string>): Errors => {
    const errors: Errors = {}

    if (data.name.trim() === '') errors.name = `Can't be empty`
    if (data.message.trim() === '') errors.message = `Can't be empty`

    if (data.email.trim() === '') {
        errors.email = `Can't be empty`
    } else if (!EMAIL_PATTERN.test(data.email.trim().toLowerCase())) {
        errors.email = 'Please use a valid email address'
    }

    return errors
}

const ContactForm = () => {
    const [errors, setErrors] = useState<Errors>({})
    const [status, setStatus] = useState<FormStatus>('idle')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        }

        const validationErrors = validate(data)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) return

        setStatus('submitting')

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) throw new Error('Formspree request failed')

            form.reset()
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    const resetFieldFeedback = (field: FieldName) => {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
        setStatus((prev) => (prev === 'submitting' ? prev : 'idle'))
    }

    return (
        <div className="connect-section">
            <h2 className="connect-section-heading">Connect with us</h2>
            <form className="connect-section-form" onSubmit={handleSubmit} noValidate>
                <div className={`connect-section-form-control ${errors.name ? 'invalid' : ''}`}>
                    <label htmlFor="contact-name" className="sr-only">
                        Name
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby="contact-name-error"
                        onFocus={() => resetFieldFeedback('name')}
                    />
                    <small id="contact-name-error" role="alert">
                        {errors.name}
                    </small>
                </div>
                <div className={`connect-section-form-control ${errors.email ? 'invalid' : ''}`}>
                    <label htmlFor="contact-email" className="sr-only">
                        Email
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby="contact-email-error"
                        onFocus={() => resetFieldFeedback('email')}
                    />
                    <small id="contact-email-error" role="alert">
                        {errors.email}
                    </small>
                </div>
                <div className={`connect-section-form-control ${errors.message ? 'invalid' : ''}`}>
                    <label htmlFor="contact-message" className="sr-only">
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Message"
                        required
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby="contact-message-error"
                        onFocus={() => resetFieldFeedback('message')}
                    />
                    <small id="contact-message-error" role="alert">
                        {errors.message}
                    </small>
                </div>
                {(status === 'success' || status === 'error') && (
                    <p
                        className={`connect-section-form-status ${status === 'error' ? 'error' : ''}`}
                        role="status"
                    >
                        {status === 'success'
                            ? 'Thanks! Your message has been sent.'
                            : 'Something went wrong. Please try again, or email us directly.'}
                    </p>
                )}
                <button
                    className="connect-section-form-button"
                    aria-label={
                        status === 'submitting' ? 'Sending message…' : 'Submit completed form here'
                    }
                    disabled={status === 'submitting'}
                >
                    <img
                        className={`connect-section-form-button-arrow ${status === 'success' ? 'active' : ''}`}
                        src={status === 'success' ? greenArrow : arrow}
                        alt=""
                    />
                </button>
            </form>
        </div>
    )
}

export default ContactForm
