import "./style/footer_style.css";
function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row footer_row">
            <div class="col-sm">
              <h5>
                Designed by <span class="footer_span"> Eng_3bdo_7amed</span>
              </h5>
            </div>
            <div class="col-sm">
              <div class="social-icons">
                <ul>
                  <li>
                    <a href="# ">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="# ">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i class="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm">
              <h5>
                Email: <span class="footer_span">3bdo.7amed.com@gmail.com</span>
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
