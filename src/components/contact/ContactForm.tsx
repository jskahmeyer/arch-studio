import { useState, useRef } from 'react'
import arrow from '../../assets/images/icons/icon-arrow.svg'
import greenArrow from '../../assets/images/icons/icon-arrow-green.svg'

const ContactForm = () => {
    const [validForm, setValidForm] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    function isEmpty() {
        if (!formRef.current) return
        const inputElements = Array.from(formRef.current.children).slice(0, -1) as HTMLElement[]

        inputElements.forEach(input => {
            const field = input.children[0] as HTMLInputElement | HTMLTextAreaElement
            if (field.value.trim() === '') {
                input.classList.add('invalid');
                (input.children[1] as HTMLElement).innerText = `Can't be empty`

                const timeoutID = setTimeout(() => {
                    input.classList.remove('invalid')
                    return () => clearTimeout(timeoutID)
                }, 10000)
            } else {
                input.classList.remove('invalid')
            }
        })
    }

    function isValid() {
        if (!formRef.current) return
        const email = formRef.current.children[1] as HTMLElement
        const emailField = email.children[0] as HTMLInputElement

        function validateEmail(emailStr: string): boolean {
            const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return validEmail.test(emailStr.toLowerCase())
        }

        if (!validateEmail(emailField.value.trim()) && emailField.value !== '') {
            email.classList.add('invalid');
            (email.children[1] as HTMLElement).innerText = 'Please use a valid email address'

            const timeoutID = setTimeout(() => {
                if (emailField.value === '') email.classList.remove('invalid')
                return () => clearTimeout(timeoutID)
            }, 10000)
        } else {
            isEmpty()
        }
    }

    const checkInputs = (e: React.FormEvent<HTMLFormElement>) => {
        if (!formRef.current) return
        const inputElements = Array.from(formRef.current.children).slice(0, -1) as HTMLElement[]

        e.preventDefault()
        isEmpty()
        isValid()

        if (!inputElements.some(input => input.classList.contains('invalid'))) {
            setValidForm(true)
            setTimeout(() => {
                formRef.current?.reset()
                setValidForm(false)
            }, 1000)
        }
    }

    const tryAgain = (e: React.FocusEvent<HTMLElement>) => {
        e.target.parentElement?.classList.remove('invalid')
    }

    return (
        <div className="connect-section">
            <h2 className="connect-section-heading">Connect with us</h2>
            <form className="connect-section-form" ref={formRef} onSubmit={checkInputs}>
                <div className="connect-section-form-control">
                    <input
                        aria-label="Enter your first and last name here"
                        placeholder="Name"
                        type="text"
                        onFocus={tryAgain}
                    />
                    <small />
                </div>
                <div className="connect-section-form-control">
                    <input
                        aria-label="Enter your email address here"
                        placeholder="Email"
                        type="email"
                        onFocus={tryAgain}
                    />
                    <small />
                </div>
                <div className="connect-section-form-control">
                    <textarea
                        aria-label="Enter your message here"
                        placeholder="Message"
                        onFocus={tryAgain}
                    />
                    <small />
                </div>
                <button className="connect-section-form-button" aria-label="Submit completed form here">
                    <img
                        className={`connect-section-form-button-arrow ${validForm && 'active'}`}
                        src={validForm ? greenArrow : arrow}
                        alt=""
                    />
                </button>
            </form>
        </div>
    )
}

export default ContactForm
