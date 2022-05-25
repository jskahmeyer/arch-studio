import { useState, useRef } from 'react'
import arrow from '../../assets/images/icons/icon-arrow.svg'
import greenArrow from '../../assets/images/icons/icon-arrow-green.svg'

const ContactForm = () => {
    const [validForm, setValidForm] = useState(false)
    let formRef = useRef(null)

    function isEmpty() {
        let inputElements = [...formRef.current.children]

        inputElements.forEach(input => {
            if (input.children[0].value.trim() === '') {
                input.classList.add('invalid')
                input.children[1].innerText = `Can't be empty`

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
        let email = formRef.current.children[1]

        if (!validateEmail(email.children[0].value.trim()) && email.children[0].value !== '') {
            email.classList.add('invalid')
            email.children[1].innerText = `Please use a valid email address`

            const timeoutID = setTimeout(() => {
                email.children[0].value === '' && email.classList.remove('invalid')
                return () => clearTimeout(timeoutID)
            }, 10000)
            
        } else {
            isEmpty(email.children[0].value.trim())
        }
    
        function validateEmail(email) {
            let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return validEmail.test(String(email).toLowerCase())
        }
    }

    const checkInputs = (e) => {
        let inputElements = [...formRef.current.children].slice(0, -1);

        e.preventDefault()
        isEmpty()
        isValid()

        if (!inputElements.some(input => input.classList.contains('invalid'))) {
            setValidForm(true)
            setTimeout(() => {
                formRef.current.reset()
                setValidForm(false)
            }, 1000)
        }        
    }

    const tryAgain = (e) => {
        e.target.parentElement.classList.remove('invalid')
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