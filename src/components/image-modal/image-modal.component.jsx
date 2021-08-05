import React from "react";

import Image1 from "../../assets/fata.jpg";
import Image2 from "../../assets/img/terrace.jpg";
import Image3 from "../../assets/terasa2.jpg";
import Image4 from "../../assets/apreski.jpg";
import Image5 from "../../assets/img/room-2.jpg";
import Image6 from "../../assets/camera.jpg";

class ImageModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageModal: false,
      index: this.props.index,
    };
  }

  // * update state.index
  handleNext = (index) => {
    if (this.state.index === 5) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  // * update state.index
  handlePrevious = () => {
    if (this.state.index === 0) {
      this.setState({ index: 5 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  // * toggle visible or hidden Modal
  toggleModal = () => {
    this.setState((prevState) => ({ imageModal: !prevState.imageModal }));

    if (this.state.imageModal) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  // * merge all images into an array
  render() {
    const modalImages = [Image1, Image2, Image3, Image4, Image5, Image6];

    return (
      <>
        <div
          className={`gallery__item gallery__item--${this.props.index}`}
          onClick={this.toggleModal}
        >
          <img
            src={modalImages[this.props.index]}
            className="gallery__img"
            alt="Gallery item"
          />
        </div>

        {/* render images from the imageModal[] depending on the state.index */}
        {this.state.imageModal && (
          <div className="image-modal">
            <span className="close" onClick={this.toggleModal}>
              &times;
            </span>
            <img
              src={modalImages[this.state.index]}
              alt="Modal content"
              className="image-modal__content"
            />
            <span className="arrow arrow--right" onClick={this.handleNext}>
              &#129138;
            </span>
            <span className="arrow arrow--left" onClick={this.handlePrevious}>
              &#129136;
            </span>
          </div>
        )}
      </>
    );
  }
}

export default ImageModal;
