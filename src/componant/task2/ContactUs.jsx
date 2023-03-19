import "./style/contactUs_style.css";

function Contact() {
  return (
    <>
      <div className="ContactUs">
        <h2> Contact Us </h2>{" "}
        <div className="container componant_ContactUs">
          <div className="row gx-5 gy-5">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <iframe
                title="This is our contact address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin "
                frameborder="0"
              ></iframe>{" "}
            </div>{" "}
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <form>
                <label> Name: </label> <input type="text" name="name" />
                <label> Email: </label> <input type="email" name="name" />
                <label> password: </label> <input type="password" name="name" />
                <label> Description: </label>{" "}
                <textarea name="" id="" cols="61" rows="5">
                  {" "}
                </textarea>{" "}
                <div className="submit">
                  <input type="submit" value="Submit" />
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
export default Contact;
