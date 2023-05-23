import { Github } from "react-bootstrap-icons"

export default function Footer() {

 const gitHubUrl = 'https://github.com/ilanvaks/lacetalk-web'
 const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p className="footer-text text-center">
        <a href= {gitHubUrl}
        target="_blank"
        rel="noreferrer"
        className="button-effect">
        <Github size='40' color='black'/>
        </a>
        <div>
        <small>&copy; {currentYear} Ilan Vaks </small>
        </div>
        </p>
        </footer>



  )

}