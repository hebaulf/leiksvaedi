import Link from "next/link"
import Image from "next/image"

const Card = ({
  key,
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
    <article className="card max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
      <Link href={cardlinkhref} as={cardlinkas}>
        <a>
          <Image 
            src={imgsrc} 
            layout="responsive" 
            height="240" 
            width="560" 
            loading="lazy" 
            alt={imgalt} 
            className="w-full h-48 rounded-t-md" 
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