import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="header">Contact</h2>
            <div>
                <div className="title-text">EMAIL <div class="icon"><MdEmail /></div></div>
                anakhasuresh15@gmail.com
                <div className="title-text">LINKEDIN <div class="icon"><FaLinkedin /></div></div>
                <a href="https://www.linkedin.com/in/anakha-suresh">Anakha Suresh - LinkedIn Profile</a>
                <div className="title-text">GITHUB <div class="icon"><FaGithub /></div></div>
            </div>
        </div>
    )
}

export default Contact;