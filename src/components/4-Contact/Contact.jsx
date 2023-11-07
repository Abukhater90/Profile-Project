import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail4"> </span>
        Contact Us
      </h1>

      <p className="sub-title">Contact Us for More Information</p>

      <div className="flex">
      <form className="" >

        <div className="flex"> 
        <label htmlFor="email">Email Address</label>
        <input required type="email" id="email" />
        </div>
      
        <div className="flex" style={{marginTop: 
        "24px"}}>
        <label htmlFor="Message" >Your Message</label>
        <textarea required name="" id="Message" >
        </textarea>
        </div>
        

        <button className="submit">Submit</button>

      </form>
      <div className="border animation"></div>
      </div>



    </section>
  );
};

export default Contact;
