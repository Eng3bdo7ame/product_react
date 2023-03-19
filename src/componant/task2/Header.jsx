import "./style/header_style.css";
import { Link } from "react-router-dom";
function Header() {
  function show_bar() {
    document.querySelector(".tab-mobile").style.display = "block";
  }

  function hiden_bar() {
    document.querySelector(".tab-mobile").style.display = "none";
  }

  return (
    <section className="all">
      <nav>
        <div className="container">
          <div className="row row-nav">
            <div className="col-8  col-md-3 logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrpWdUzO55G6pdRjPMsBlhoUcg3o-wW9-biSw3t-qEngZf6zO89QREGkXflNSqIQTU0g&usqp=CAU"
                alt="logo"
              />{" "}
            </div>
            <div className="col-md-5 nav-linkes">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Contact_Us">Contact Us</Link>
                </li>
                <li>
                  <p className="nav-count">count (0)</p>
                </li>
              </ul>
            </div>
            <div className="contact-bar col-md-4 ">
              <ul>
                <li>
                  <i className="fab fa-facebook"></i>
                </li>
                <li>
                  <i className="fab fa-whatsapp"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
              </ul>
            </div>
            <div className="icon-linkes-bar col-4 ">
              <ul>
                <li onClick={show_bar}>
                  <i className="fas fa-bars"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="tab-mobile">
        <div className="tab-mobile-linkes">
          <ul className="close-ul">
            <li onClick={hiden_bar}>
              <i className="fas fa-times-circle close-btn"></i>
            </li>
          </ul>
          <ul className="linkes_list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact_Us">Contact Us</Link>
            </li>
            <li>
              <p className="tab-mobile-count">count (0)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
