
import "./Main.css";

const Main = () => {
  // Array of image URLs
  const imageUrls = [
    "https://colorlib.com/wp/wp-content/uploads/sites/2/brooke-simple-website-template.jpg.webp",

    "https://colorlib.com/wp/wp-content/uploads/sites/2/julian-simple-website-template.jpg.webp",

    "https://colorlib.com/wp/wp-content/uploads/sites/2/dovile-simple-website-template.jpg.webp",

    "https://colorlib.com/wp/wp-content/uploads/sites/2/resume-website-template.jpg.webp",

    "https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-online-resume-template.jpg.webp",

    "https://colorlib.com/wp/wp-content/uploads/sites/2/cvio-resume-website-template.jpg.webp" ,

    "https://colorlib.com/wp/wp-content/uploads/sites/2/arter-resume-template.jpg.webp",

    "https://colorlib.com/wp/wp-content/uploads/sites/2/teoro-resume-template.jpg.webp",
    
    "https://colorlib.com/wp/wp-content/uploads/sites/2/leven-resume-website-template.jpg.webp"

  ];

  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>Javascript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>

      <section className="flex right-section">
        {imageUrls.map((imageUrl, index) => {
          return (
            <article key={index} className="card">
              <img width={266} src={imageUrl} alt={`Project ${index}`} />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Landing Page</h1>
                <p className="sub-title">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maiores unde qui incidunt deserunt non dolorum ratione
                  voluptate, illo quos tempore!
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="https://www.example.com"> {/* Add a proper href */}
                    More
                    <span style={{ alignSelf: "end" }} className="icon-arrow-right2"></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
