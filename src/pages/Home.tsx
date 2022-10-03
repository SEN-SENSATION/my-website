const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home">
        <div className="home__modal">
          <div className="home__modal--top">
            <h3>
              Coming <span className="r">Soon</span>
            </h3>
            <p>
              My personal website is soon to come, in the mean time please visit{" "}
              <a href="https://ssdevelopers.xyz">https://ssdevelopers.xyz</a>
            </p>
          </div>
          <div className="home__modal--bottom">
            {new Date("10-03-2022").toLocaleDateString("en-UK", {
              year: "numeric",
              day: "2-digit",
              month: "short",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
