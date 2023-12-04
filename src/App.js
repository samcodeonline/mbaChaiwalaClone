import IntroVideo from "./Components/IntroVideo";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import freshTopicImg from "./Assets/academy.png";
import data from "./Data/data.json";
import freshTopic2Img from "./Assets/story.png";
import tedTalkImg from "./Assets/in-the-news.gif"
import franchiseImg from "./Assets/franchise.gif"
import mapImg from "./Assets/locations.png"
import coursesImg from "./Assets/image2.png"
import albumImg from "./Assets/mba-cares.gif"
import baratImg from "./Assets/image1.png"
import chaiwalaImg from "./Assets/image3.png"
import Misc from "./Components/Misc";

import "./Styles/App.scss";
import "./Styles/Intro.scss";
import "./Styles/Section.scss";
import "./Styles/Footer.scss";
import "./Styles/Misc.scss";
import "./Styles/mediaQuery.scss";
import { useEffect } from "react";


const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

function App() {

  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    barat,
    album,
    chaiwala } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");

    // console.log(e);
    cursor.style.top = `${e.pageY - 14}px`
    cursor.style.left = `${e.pageX - 14}px`

    const element = e.target;
    if (element.getAttribute("data-cursorpointer")) {

      cursor.classList.add("cursorHover");
    }
    else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    }
    else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }

  }
  useEffect(() => {
    window.addEventListener('mousemove', dotCursor)

    return () => {
      window.removeEventListener("mousemove", dotCursor)
    }
  }, [])

  return (
    <>
      <IntroVideo />
      {/* freshTopic */}

      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnText={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* freshTopic2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnText={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* TedTalks*/}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnText={tedTalks.btn}
        imgSrc={tedTalkImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* Franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnText={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      {/* Map */}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />

      {/* Courses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        btnText={courses.btn}
        imgSrc={coursesImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />

      {/* Album */}
      <Section
        h3={album.heading}
        text={album.text}
        btnText={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />


      {/* Barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        btnText={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* Chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnText={chaiwala.btn}
        imgSrc={chaiwalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Footer data-cursorpointermini={true} />


      <Misc />
    </>
  );
}

export default App;
