import Navbar from "../components/Navbar/Navbar"
import ContactForm from "../components/Contact/Contact"

export default function Contact(){
    return(
        <>
        <Navbar />
        <div className="background-contact">
        <ContactForm />
        </div>
  
        </>
    )
}