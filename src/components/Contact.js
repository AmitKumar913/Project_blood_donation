function Contact()
{
    return(
                        <footer id="contact" className="container-fluid">
                <div className="container">
                    <div className="row content-ro">
                    <div className="col-lg-4 col-md-12 footer-contact">
                        <h2>Contact Informatins</h2>
                        <div className="address-row">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="detail">
                            <p>Ruby General Hospital,Kasba Golpark, E. M. Bypass, Kolkata, West Bengal 700107</p>
                        </div>
                        </div>
                        <div className="address-row">
                        <div className="icon">
                            <i className="far fa-envelope" />
                        </div>
                        <div className="detail">
                            <p>ruby@blooddonerapp.com <br /> support@blooddonerapp.com</p>
                        </div>
                        </div>
                        <div className="address-row">
                        <div className="icon">
                            <i className="fas fa-phone" />
                        </div>
                        <div className="detail">
                            <p>+91 9000009090 <br /> +91 9000000080</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 footer-links">
                    
                    </div>
                    <div className="col-lg-4 col-md-12 footer-form" style={{marginTop:"10%"}}>
                        <div className="form-card">
                        <div className="form-title">
                            <h4>Quick Message</h4>
                        </div>
                        <div className="form-body">
                            <input type="text" placeholder="Enter Name" className="form-control" />
                            <input type="text" placeholder="Enter Mobile no" className="form-control" />
                            <input type="text" placeholder="Enter Email Address" className="form-control" />
                            <input type="text" placeholder="Your Message" className="form-control" />
                            <button className="btn btn-sm btn-primary w-100">Send Request</button>
                        </div>
                        </div>
                    </div>
                    </div>
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
export default Contact;