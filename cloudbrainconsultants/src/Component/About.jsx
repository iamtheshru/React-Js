import about from "../../src/assets/images/about.jpg";

function About() {
  return (
    <>
      <section id="about" className="font-nunitosans container mx-auto">
        <div className="  flex flex-col  flex-wrap md:flex md:flex-row items-center justify-around mt-8 pt-5 mb-4">
          <div className="m-3 ">
            <div className="text-black font-serif font-bold text-2xl  md:text-3xl ">
              <h2>
                Know about <span className="com-textcolor">Cloud Brain</span>
              </h2>
            </div>
            <div className="  flex items-center mt-2  mr-5 ">
              <div className="py-2 px-3 about_bg m-2 rounded-sm">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </p>
              </div>
              <div className="w-full md:w-80 text-xs pl-2">
                <h3 className=" font-bold py-1  lg:text-base">
                  Founders – Group of people with 25+ Years of US IT experience
                </h3>
                <p className="text_col py-1 lg:text-base">
                  Specialized in depth Industrial experience and Niche
                  Technologies
                </p>
              </div>
            </div>
            <div className="  flex items-center mt-2 ">
              <div className="py-2 px-3 about_bg m-2 rounded-sm">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </p>
              </div>
              <div className="w-full text-xs pl-2 ">
                <h3 className=" font-bold py-1 lg:text-base ">
                  Specialized in IT Services :
                </h3>
                <p className="text_col py-1 lg:text-base">
                  Quality Sourcing Resources on Niche Technologies
                </p>
              </div>
            </div>
            <div className=" flex items-center mt-2 ">
              <div className="py-2 px-3 about_bg m-2 rounded-sm">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </p>
              </div>
              <div className="w-full  text-xs  pl-2">
                <h3 className=" font-semibold py-1 lg:text-base">
                  AWS Services :
                </h3>
                <p className="text_col py-1 lg:text-base ">
                  Offer Professional and support Services in both
                </p>
                <p className="text_col py-1 lg:text-base"  >
                  AWS Infrastructure and application development
                </p>
              </div>
            </div>
          </div>

          <div className="mx-5 ">
            <img
              className=" rounded-2xl"
              src={about}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
