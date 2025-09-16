const FactorySection = () => {
  const items = [
    {
      img: "https://www.greenspringshop.com/Content/uploads/2023389378/2023112910132700c3de496fff44debe82fcb60ebde3fb.jpg?size=700x0", // apna image path yaha
      title: "R&D Laboratory",
    },
    {
      img: "https://www.greenspringshop.com/Content/uploads/2023389378/20231129101053308960bec7984b48a6a3fa2d6051963f.jpg?size=700x0",
      title: "Our Factory",
    },
    {
      img: "https://www.greenspringshop.com/Content/uploads/2023389378/20231129101159f76d604b497449e8b50ba4cddf504eb2.jpg?size=700x0",
      title: "Office Address",
    },
  ];

  return (
    <div className="w-full py-12">
      {/* Title */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-6 h-2 bg-green-700 rounded-lg"></div>
        <h2 className="mx-4 text-xl md:text-2xl font-bold text-center">
          Our Factory &amp; Equipment
        </h2>
        <div className="w-6 h-2 bg-green-700 rounded-lg"></div>
      </div>

      <p className="text-center text-gray-600 mb-10">
        Natural Health Creates Better Life
      </p>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl px-6  mx-auto">
        {items.map((item, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-green-700 text-white font-medium text-center text-xs py-2">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactorySection;
