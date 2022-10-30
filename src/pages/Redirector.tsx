import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Redirecting = () => {
  const param = useParams();
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (param.path === "newtonian-pdf-1") {
      setUrl(
        "https://drive.google.com/file/d/1OzvNxB0lbTMfnPlLydJ0w0DydL0U7TIm/view?usp=sharing"
      );
      location.href =
        "https://drive.google.com/file/d/1OzvNxB0lbTMfnPlLydJ0w0DydL0U7TIm/view?usp=sharing";
    }
  }, []);

  return (
    <div className="home__wrapper">
      <div className="home">
        <div className="home__modal">
          <div className="home__modal--top">
            <h3>
              Redirecting <span className="r">...</span>
            </h3>
            <p>
              redirecting you to the provided resources{" "}
              <a href={url}>{param.path}</a>
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

export default Redirecting;
