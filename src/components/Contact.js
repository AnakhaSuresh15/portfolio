import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="header">Contact</h2>
            <div>
                <div className="title-text">EMAIL <div className="icon"><MdEmail /></div></div>
                <a href="mailto:anakhasuresh15@gmail.com">anakhasuresh15@gmail.com</a>
                <div className="title-text">LINKEDIN <div className="icon"><FaLinkedin /></div></div>
                <a href="https://www.linkedin.com/in/anakha-suresh">LinkedIn Profile</a>
                <div className="title-text">GITHUB <div className="icon"><FaGithub /></div></div>
                <a href="https://github.com/AnakhaSuresh15">Github profile</a>
            </div>
        </div>
    )
}

export default Contact;