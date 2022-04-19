import React from "react";
import Fancybox from "../../utilities/fancybox";

function CardGallery(props) {
  return (
    <div className="overlay-container">
      <div className="neumorphism-effect__btn">
        <div className="horizontal-scroll-wrapper squares d-flex">
          <div
            className="form__files-container d-flex"
            id="card-list-container"
          >
            <Fancybox>
              {
              props.galleryImages ?  
              props.galleryImages.map((img) => (
                <a
                  key={img}
                  data-fancybox="gallery12"
                  className="box-images item-center"
                  href={img}
                >
                  <img src={img} alt={img.name} />
                </a>
              )) : <p>Images are not available</p>}
            </Fancybox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGallery;
