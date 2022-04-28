import Link from "next/link"
import Image from "next/image"

const Card = ({
  cardlinkhref,
  cardlinkas,
  imgsrc,
  imgalt,
  cardtitle,
  cardcontent,
  cardmaphref,
  cardmaptext,
}) => {
  return (
    <article className="card max-w-md mx-auto mt-4 shadow-sm border rounded-md duration-300 hover:shadow-lg">
      <Link href={cardlinkhref} as={cardlinkas}>
        <a>
          <Image 
            src={imgsrc} 
            layout="responsive" 
            height="360" 
            width="560"
            alt={imgalt} 
            className="w-full h-48 rounded-t-md hover:scale-105 transition duration-500 ease-in-out" 
          />
          <div className="pt-3 ml-4 mr-2 mb-3">
            <h3 className="text-xl text-gray-900">{cardtitle}</h3>
            <p className="text-gray-400 text-sm mt-1">{cardcontent}</p>
          </div>
        </a>
      </Link>
      
      <div className="maplink pt-3 ml-4 mr-2 mb-3">
        <a href={cardmaphref} rel="noreferrer" target="_blank">{cardmaptext}</a>
      </div>
    </article>
  )
}

export default Card