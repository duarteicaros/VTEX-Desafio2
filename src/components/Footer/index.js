import React from 'react';
import { Footers } from './style';

export default function Footer() {
    return ( 
        <Footers>
            <footer>
                <h4 className="text-footer">Todos os direitos reservados.</h4>
                <h4 className="text-footer">Siga-nos nas redes sociais</h4>

                <div>
                    <ul className="social-network">
                        <li><a href="https://www.facebook.com/icaro.duarte.96" className="icoFacebook" title="Facebook">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </a></li>
                        <li><a href="https://www.instagram.com/icaro_duarte/" className="icoInstagram"
                        title="Instagram">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/icaro-duarte/"  className="icoLinkedin"
                        title="Linkedin">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a></li>
                        <li><a href="https://github.com/duarteicaros" className="icoLinkedin" title="Linkedin">
                        <i className="fa fa-github-square" aria-hidden="true"></i>
                        </a></li>
                    </ul>
                </div>

                <div>
                    <span className="copyright"> © 2021 Copyright: Icaro Duarte</span>
                    <div>
                    <span className="copyright">Projeto desenvolvido durante aprendizado com a  Gama Academy | Hiring Coders </span>
                    </div>
                </div>
            </footer>
        </Footers>   
    )
}