import Page from '../components/shared/Page'
import ContactHero from '../components/contact/ContactHero'
import ContactDetails from '../components/contact/ContactDetails'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => (
    <Page label="Contact">
        <ContactHero />
        <ContactDetails />
        <ContactForm />
    </Page>
)

export default Contact
