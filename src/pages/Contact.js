import Navbar from '../components/Navbar/Navbar';
import ContactForm from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="form-contact-page">
                <ContactForm />
            </div>

            <Footer />
        </>
    );
}
