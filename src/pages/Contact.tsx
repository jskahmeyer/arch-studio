import ContactHero from '../components/contact/ContactHero'
import ContactDetails from '../components/contact/ContactDetails'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => (
    <div className="page">
        <div className="page-directory">
            <span>Contact</span>
        </div>
        <ContactHero />
        <ContactDetails />
        <ContactForm />
    </div>
)

export default Contact;