
const PageIntro = ({ title, text }) => {
  return (
    <section className="text-center">
			<h1 className="text-3xl text-gray-800 font-semibold">
				{title}
			</h1>
			<p className="mt-3 text-gray-500">
				{text}
			</p>
    </section>
  )
}

export default PageIntro