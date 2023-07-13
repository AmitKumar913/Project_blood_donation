function Topheader()
{
    return(
        <div className="header-top">
            <div className="container">
            <div className="row col-det">
                <div className="col-lg-6 d-none d-lg-block">
                <ul className="ulleft">
                    <li>
                    <i className="far fa-envelope" />
                    ruby@blooddonerapp.com
                    <span>|</span></li>
                    <li>
                    <i className="far fa-clock" />
                    Service Time : 12:AM</li>
                </ul>
                </div>
                <div className="col-lg-6 col-md-12">
                <ul className="ulright">
                    <li>
                    <i className="fas fa-cloud-upload-alt" />
                    Upload Video
                    <span>|</span></li>
                    <li>
                    <i className="fas fa-user" />
                    Login</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Topheader;