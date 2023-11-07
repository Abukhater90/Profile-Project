import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgwdoae");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail4"> </span>
        Contact Us
      </h1>

      <p className="sub-title">Contact Us for More Information</p>

      <div className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input required type="email" id="email" name="email"/>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="Message">Your Message</label>
            <textarea required name="message" id="Message" ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {" "}
            Submit
          </button>
        </form>
        <div className=" animation">
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
