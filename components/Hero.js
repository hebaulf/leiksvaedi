import Link from "next/link"
import Image from "next/image"

const Hero = ({
  heroTitle,
  heroTitleColored,
  heroDescription,
  heroImageUrl,
  heroImageAlt,
  HeroBtnText
}) => {
  return (
    <section className="herosection relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-10 md:pb-15 lg:max-w-2xl lg:w-1/2 lg:pb-20">
          <svg
            className="verticalspacer hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="herotext pt-8 mx-auto max-w-7xl px-4 sm:pt-10 sm:px-6 md:pt-20 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:block">{heroTitle}</span>
                <span className="block text-indigo-600 xl:vlock">{heroTitleColored}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" >
                {heroDescription}
              </p>
              <div className="herobuttons mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/leiksvaedi">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Leiksvæði
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/sledabrekkur">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Sleðabrekkur
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heroimage-wrap hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-full w-full object-cover sm:h-72 md:h-full lg:w-full lg:h-full"
          height="600"
          width="1024"
          src={heroImageUrl || "https://www.pngkey.com/png/full/233-2332677_image-500580-placeholder-transparent.png"}
          alt={heroImageAlt || ""}
        />
      </div>
    </section>
  )
}

export default Hero