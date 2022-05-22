import { useState } from "react";
import Image from 'next/image'
import imgtemp from '../../public/imgtemp.png'
// import "./App.css";

function Tabs({namaRestoran,lokasiRestoran,gambarRestoran,gambarMenu}) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  var imageSize ={
    width:"420px", height:"350px"
  }

  return (
    <div className="nav_container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <h4><b>Overview</b></h4>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <h4><b>Menu</b></h4>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <h4><b>Review</b></h4>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
        <h2>Overview</h2>
          <hr />
          <p>
            {namaRestoran} is a restaurant that serve Indonesian Food and Western Food which the taste is very gud.
            <br></br><br></br>
            Hours of Operation :<br></br>
            10.00 AM - 20.00 PM
            <br></br><br></br>
            Phone Number :<br></br>
            +621234567890
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Menu </h2>
          <hr />
          <p>
           Check The Picture Below
           <br></br>
           <img src={gambarMenu} alt="menu" style={imageSize}></img>
           {/* <Image
              src={gambarMenu}
              width={420}
              height={350}
              />     */}
          </p>
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Review</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;