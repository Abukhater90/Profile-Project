import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero flex">
        <div className="left-section ">
          <div className="parent-avatar flex">
            <img src="/public/svg.png" className="avatar" alt="avatar" />
            <dev className="icon-verified"></dev>
          </div>

          <h1 className="title">Software Design , Founder</h1>

          <p className="sub-title">
            <p>Hello ,</p>
            I&apos;m Ali Abu Khater , I'm  a passionate full-stack developer with a knack for crafting innovative digital solutions. With a blend of front-end and back-end expertise, I thrive on bringing ideas to life through clean, efficient code and intuitive user interfaces
          </p>

          <div className="all-icons flex">
            <div className="icon icon-mail4"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin"></div>
          </div>
        </div>

        <div className="right-section animation border">Animation</div>
      </section>
    </>
  );
};

export default Hero;
