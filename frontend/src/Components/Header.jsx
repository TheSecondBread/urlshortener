import { useContext, useRef } from "react";
import { LinkContext } from "../Store/ContextProvider";

function Header() {
    const {Sendlink,currUrl}=useContext(LinkContext)
    const link=useRef(null)
  return (
    <>
      <center>
        <h1 style={{ color: "blue" ,marginTop:"30px"}}>URL SHORTENER</h1>
        <div className="Container shadow">
          <div className="elements">
            <h1>Paste URL to be shortened</h1>
            <div className="input-group input-group-lg">
              <input
                ref={link}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
              <button type="button" className="btn btn-primary " onClick={()=>Sendlink(link)}>
                Shorten
              </button>

            </div>
            <p>
              URL Shortener is a free tool to shorten URLs and generate short links
              URL shortener allows to create a shortened link making it easy to
              share
            </p>
            <p>{currUrl}</p>
          </div>
        </div>
      </center>
    </>
  );
}
export default Header;
