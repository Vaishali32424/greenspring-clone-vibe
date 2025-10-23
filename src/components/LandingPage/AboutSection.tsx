import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">
        {/* Left Side - YouTube Video with Badge */}
        <div className="relative">
          {/* YouTube Video */}
          <div className="overflow-hidden shadow-md relative">
        
            <iframe
                width="100%"
              height="350"
              src="assets/shreesai.mp4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              
                            className="w-full h-[350px]"

            ></iframe>
            {/* Top Right Square Box */}
            <div className="absolute -top-1  z-50 -right-1 w-10 h-10 p-1.5 bg-white rounded-md shadow-md">
              <div className="h-full w-full rounded-md  bg-green-700"></div>
            </div>
          </div>

          {/* Years of Experience Badge */}
          <div className="absolute -bottom-6 -left-14 bg-[#F7F9FD] rounded-lg shadow p-6 text-center">
            <div className="p-3 bg-[#EBF0FB] rounded-lg">
              <p className="text-3xl font-bold text-green-700">22</p>
              <p className="text-gray-600 text-sm">
                Years of <br /> Experience
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Shree Sai Biotech
          </h2>
          <p className="text-gray-600 mb-6">
Shree sai Biotech® offer a range of botanical extract products with
            proven health benefits to meet the demands of our customers in the
            food, cosmetic, healthcare and natural color industries.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-6">
            {[
              "Natural raw material Manufacturer",
              "Strict quality assurance",
              "Professional Natural Botanical Extracts ",
              "Over 25 years of export experience",
              "OEM and ODM service",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 text-lg" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-green-700 text-white font-medium px-6 py-2 rounded-md shadow hover:bg-green-800 transition">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
