import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer className="bg-darkWine p-4">
            <div className="flex justify-center space-x-4">
                <span className="text-xl text-lightChamPink sm:text-center">
                    &copy; 2023 Wumi Afolabi.
                </span>
                <a href="https://github.com/babycodeher">
                    <FontAwesomeIcon icon= {faGithub} size='2xl' color='white'/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;