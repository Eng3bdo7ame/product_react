import "./style/About_style.css";
import corton_imge from "./imges/product-img/Product quality-bro.png";
function About() {
  return (
    <>
      <div className="about_page">
        <h1>About Us</h1>
        <div class="container">
          <div class="row g-3">
            <div class="col-3">
              <div className="imges">
                <img
                  src="https://media.istockphoto.com/photos/white-flying-cotton-tshirt-isolated-on-blue-background-clean-white-picture-id1324095626?k=20&m=1324095626&s=612x612&w=0&h=FxMkxdTj3LVbO3QOL7iu2PMUpXreRiYtRJNcPI9kRfQ="
                  alt=""
                />
              </div>
            </div>
            <div class="col-3">
              <div className="imges">
                <img
                  src="https://media.istockphoto.com/photos/shiny-diamonds-in-various-sizes-picture-id147992985?s=612x612"
                  alt=""
                />
              </div>
            </div>
            <div class="col-3">
              <div className="imges">
                <img
                  src="https://media.istockphoto.com/photos/old-electronic-devices-on-a-dark-background-the-concept-of-recycling-picture-id1372577388?k=20&m=1372577388&s=612x612&w=0&h=IjtwG6cD55l0GZ-EKyMZtggvkzXaiij7COakweC-trg="
                  alt=""
                />
              </div>
            </div>
            <div class="col-3">
              <div className="imges">
                <img
                  src="https://media.istockphoto.com/photos/boxes-on-conveyor-belt-picture-id1225833689?k=20&m=1225833689&s=612x612&w=0&h=jFF37F_2-Hj6fBPqKl2XNvl_WZR0zw8bLs_I6VRM2zY="
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row section_tow_about">
            <div className="col-6">
              <div className="information_about">
                <p>
                  We always strive to provide a reliable product for your
                  presence, and we are interested in providing the product and
                  all the accessories that you need in our daily lives because
                  technology has become dominating the world with its beautiful
                  services and products that help people and we hope you like
                  the content, You can buy everything online in an easy way, and
                  the product will be delivered within a day through the
                  shipping company and the shipping is completely free.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="information_img">
                <img src={corton_imge} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
