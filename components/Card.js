import Link from "next/link"
import Image from "next/image"

const Card = ({
  cardlinkhref,
  cardlinkas,
  imgsrc,
  imgalt,
  cardtitle,
  cardcontent,
  latitude,
  longitude,
  cardmaptext,
}) => {
  return (
    <div>
      <Link href={cardlinkhref} as={cardlinkas}>
        <a>
          <Image 
            src={imgsrc || "https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png"} 
            layout="responsive" 
            height="360" 
            width="560"
            alt={imgalt || ""} 
          />
          <div className="card__description">
            <h3 className="text-xl text-gray-900 mt-3">{cardtitle}</h3>
            <p className="text-gray-400 text-sm mt-2">{cardcontent}</p>
          </div>
        </a>
      </Link>
      {latitude && longitude ? 
        <div className="maplink">
          <a href={`http://www.google.com/maps?q=${latitude},${longitude}`} rel="noreferrer" target="_blank">{cardmaptext}</a>
        </div>
      :
        ""
      }
    </div>
  )
}

export default Card