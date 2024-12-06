type OfferImageProps = {
  img: string;
}

type OfferImagesProps = {
  images: string[];
  offerId: string;
}

const OfferImage = (offerImageData: OfferImageProps) => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={offerImageData.img} alt="Photo studio" />
  </div>
);
function OfferGallery({offerId, images}: OfferImagesProps): JSX.Element {

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image: string) => <OfferImage key={offerId + image} img={image}/>)}
      </div>
    </div>
  );
}

export default OfferGallery;
