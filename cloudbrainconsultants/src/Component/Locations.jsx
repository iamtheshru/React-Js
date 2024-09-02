function Locations() {
  return (
    <>
      <section id="locations" className=" location_bg py-14 bg-[#fff5d9]">
        <div className="container mx-auto ">
          <div className=" h-auto w-full flex flex-wrap flex-col items-center text-center ">
            <h2 className="text-black font-serif font-bold text-2xl  md:text-3xl text-center">
              <span className="com-textcolor">Our </span> Locations
            </h2>
          </div>
          <div className="overflow-hidden flex justify-center my-3 	w-full ">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1f8OocQYSwfgCPgDK6brGRrKQx2m2MNg&amp;ehbc=2E312F"
              className="w-3/4 h-64 md:h-96 rounded border-2"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Locations;
