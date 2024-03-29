// import { Link } from "react-router-dom";

function Nav() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link over" id="home" href="/home">Home</a>
                                {/* <Link to="/home" className="nav-link over" id="home">Home</Link> */}
                            </li>
                            <li className="nav-item"><a className="nav-link over" id="about" href="/about">About</a></li>
                            <li className="nav-item"><a className="nav-link over" id="contact" href="/contact">Contact</a></li>
                            <li className="nav-item"><a className="nav-link over" aria-current="page" id="blog" href="/blog?sort=1&order=1&category=1&target=1&keyword=&num=10&page=1">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;