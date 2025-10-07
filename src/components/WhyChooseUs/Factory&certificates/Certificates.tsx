const Certificates = () => {
 const certificates = [
  { src: "/pdfs/BRC-Compliance.pdf", title: "BRC Compliance" },
  { src: "/pdfs/certificate-of-trust.pdf", title: "Certificate of Trust" },
  { src: "/pdfs/Food-Safety-System-Certification.pdf", title: "Food Safety System Certification" },
  { src: "/pdfs/HALAL.pdf", title: "HALAL" },
  { src: "/pdfs/importer-exporter.pdf", title: "Importer Exporter" },
  { src: "/pdfs/KOSHER.pdf", title: "KOSHER" },
  { src: "/pdfs/NON-GMO.pdf", title: "NON-GMO" },

    { src: "/pdfs/registration-certificate.pdf", title: "Registration Certificate" },
  { src: "/pdfs/UDYAM-REGISTRATION-CERTIFICATE.pdf", title: "UDYAM Registration Certificate" },
  { src: "/pdfs/WHO-GMP.pdf", title: "WHO GMP" },

];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
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
            <div key={index} className="flex flex-col items-center text-center">
              {/* PDF download link */}
              <a
                href={cert.src}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 w-full py-2 rounded-md shadow-md hover:bg-gray-300 transition duration-300"
              >
                {cert.title} 
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
