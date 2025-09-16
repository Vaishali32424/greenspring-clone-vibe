const Certificates = () => {
  const certificates = [
    { src: "https://www.greenspringshop.com/Content/uploads/2023389378/20230209140628bc5c578fddba4b7abd1e7dd7bd881633.jpg", title: "FDA" },
    { src: "https://www.greenspringshop.com/Content/uploads/2023389378/2023020914152346bdc18bf160437e9b173634cb09ac94.jpg", title: "IFS" },
    { src: "https://www.greenspringshop.com/uploads/18070/page/202412161444554b302.jpg?size=1000x0", title: "BRC" },
    { src: "/images/cert4.jpg", title: "ISO9001" },
    { src: "/images/cert5.jpg", title: "COSMOS" },
    { src: "/images/cert6.jpg", title: "Food Safety" },
    { src: "/images/cert7.jpg", title: "ECOCERT" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto ">
           <div className="bg-teal-700 text-white text-center py-3 rounded-md font-bold">
                  CERTIFICATES

      </div>
      
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10">
          The company always adheres to the corporate mission of creating
          healthy life, strictly controls product quality and is certified with
          ISO9001 quality management system certificate, Halal and Kosher
          certificates. The company is continuously making innovations and
          developments and has been issued with high-tech enterprise
          certificates for many consecutive years.
        </p>

        {/* Grid for certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="rounded-md shadow-md hover:scale-105 transition duration-300"
              />
              <h3 className="mt-3 text-md font-semibold text-gray-800 bg-gray-200 w-full py-2">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
