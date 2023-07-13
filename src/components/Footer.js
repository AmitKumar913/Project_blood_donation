function Footer()
{
    return (
        <footer id="contact" className="container-fluid" style={{marginTop: '8%'}}>
            <div className="container" >
                <div className="footer-copy">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <p>Copyright © <a href="https://www.ruby.com">support@blooddonerapp.com</a> | All right reserved.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 socila-link">
                            <ul>
                                <li><a><i className="fab fa-github" /></a></li>
                                <li><a><i className="fab fa-google-plus-g" /></a></li>
                                <li><a><i className="fab fa-pinterest-p" /></a></li>
                                <li><a><i className="fab fa-twitter" /></a></li>
                                <li><a><i className="fab fa-facebook-f" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    
    );
}
export default Footer;