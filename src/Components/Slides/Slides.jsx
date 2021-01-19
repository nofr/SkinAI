import "./Slides.css";
import { Carousel } from "react-bootstrap";

const Slides = () => {
  const carouselStyle = {
    marginTop: '40px',
    backgroundColor: 'whitesmoke',
    height: '40vh',
    zIndex: 0
  }
  return (
    <div>

    <Carousel style={carouselStyle}>
    <Carousel.Item className='about'>
      <h1>Skin AI</h1>
      <div>
        The most common early sign of skin cancer is a change in the skin or a
        lesion such as a beauty spot, freckle or mole.
        <br /> Most skin cancers can be cured if caught early. Get to know the
        symptoms of skin cancer to look out for. Sign up to Skin AI and get with
        a certain accuracy a result before even going to the doctor !
      </div>
  </Carousel.Item>
  <Carousel.Item className='about'>
      <h1>About Us</h1>
      <div>
        The most common early sign of skin cancer is a change in the skin or a
        lesion such as a beauty spot, freckle or mole.
        <br /> Most skin cancers can be cured if caught early. Get to know the
        symptoms of skin cancer to look out for. Sign up to Skin AI and get with
        a certain accuracy a result before even going to the doctor !
      </div>
  </Carousel.Item>
</Carousel>
    </div>

  );
}

export default Slides;
