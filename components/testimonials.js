export default function Testimonials() {
    return (
      <section className="bg-gray-900">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">
          Testimonials
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">I love this page as here I can not only get useful resources to polish my skills but also get suitable job recommendations as per my requirements.</p>
              <p className="text-gray-500 text-xs md:text-sm px-6">Jamie</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">I love to volunteer for a social cause, but could never do so due to lack of time. This website helped me to find volunteering opportunities which require minimal time committments.</p>
              <p className="text-gray-500 text-xs md:text-sm px-6">Lisa</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">I always thought that I can never save enough money with my current salary, but then I came across this page that helped me earn extra money in my free time.</p>
              <p className="text-gray-500 text-xs md:text-sm px-6">James</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}