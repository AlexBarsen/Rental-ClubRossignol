import React from "react";

// import "./gallery.styles.scss";

import ImageModal from "../../components/image-modal/image-modal.component";

const Gallery = () => (
  <div className="gallery">
    <ImageModal index={0} />

    <ImageModal index={1} />

    <ImageModal index={2} />

    <ImageModal index={3} />

    <ImageModal index={4} />

    <ImageModal index={5} />
  </div>
);

export default Gallery;
