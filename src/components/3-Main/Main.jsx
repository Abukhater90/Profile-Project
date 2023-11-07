import "./Main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className="flex left-section ">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>Javascript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>

      {["aa", "bb", "cc" , 1 , 2 ].map((item) => {
        return (
          <section className="flex right-section ">

            <article key={item} className="card ">


              <img width= {266} 
                src="https://www.sliderrevolution.com/wp-content/uploads/2021/10/cofe-header.png" />

              <div style={{ width: "266px" }} className="box ">
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

                  <a className="link flex" href="">
                    More
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right2"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          </section>
        );
      })}
    </main>
  );
};

export default Main;
