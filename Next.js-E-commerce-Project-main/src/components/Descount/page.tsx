"use client";

export default function Descount() {
  return (
    <section className="bg-[#e6faf7] py-10">
      <div className="main_container mx-auto px-4">
        <div className="relative  rounded-xl overflow-hidden flex  items-center justify-between" style={{
          backgroundImage: "url('/img/bg1.png') ", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div className="p-8  md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Lorem ipsum <br /> dolor sit.
            </h1>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing
              pellentesque feugiat gravida tincidunt lobortis mi. Nisl
              sollicitudin in dictumst elementum amet nulla. Malesuada tempor
              consequat dui fringilla pretium. Egestas nibh et sociis enim nisl
              aliquet ultricies.
            </p>
            <button className="bg-white text-[#05474F] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>

          <div className="relative w-1/2 hidden md:block">
            <img
              src="/img/happy-lady.png" 
              alt="Models"
              className="h-full object-contain"
              style={{marginLeft: '-115px'}}
            />

            <div className="absolute top-12 right-12  text-[#05474F] font-bold px-4 py-2 rounded-full">
              <div className="  rounded-full flex items-center justify-center shadow-md relative">
                <div className="absolute top-0 left-0 w-full h-full transform rotate-45 " />
                <img
                  src="/img/offer.png" 
                  alt="Models"
                  className="h-full object-contain" 
                  style={{position: 'relative', left: '111px'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}