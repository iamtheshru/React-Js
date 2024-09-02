import ico1 from "../../src/assets/images/ico1.png";
import ico2 from "../../src/assets/images/ico2.png";
import ico3 from "../../src/assets/images/ico3.png";
import ico4 from "../../src/assets/images/ico4.png";




function Services() {
    return (<>
        <section id="services" className=" ser_bg py-8 mt-5 ">
            <div className="container mx-auto ">
                <div className=" h-auto w-full flex flex-wrap flex-col items-center text-center ">
                    <h2 className="text-black font-serif font-bold text-2xl  md:text-3xl text-center">
                        <span className="com-textcolor">Popular </span> Services
                    </h2>
                </div>
                <div className="flex flex-wrap items-center md:justify-start justify-center">
                    <div className="w-auto flex  items-center my-5 ser-box1bg rounded py-2 mx-2 lg:w-80">
                        <div className=" p-3">
                            <img className="bg-white rounded-full p-1 text-center " src={ico1} alt="" />
                        </div>
                        <div className="p-1 ser_box1 md:text-sm text-xs">
                            <h2 className="font-bold py-1">Temporary Staffing</h2>
                            <p className="w-full md:w-56 font-semibold text-sm  ser_textcol">Staff augmentation for your needs as needed</p>
                        </div>
                    </div>
                    <div className="w-auto flex items-center my-5 ser-box2bg rounded  py-2 mx-2 lg:w-80">
                        <div className="p-3">
                            <img className="bg-white rounded-full p-1 text-center" src={ico2} alt="" />
                        </div>
                        <div className="p-1 ser_box2 md:text-sm text-xs">
                            <h2 className="font-bold py-1">Temporary Staffing</h2>
                            <p className="w-full md:w-56 font-semibold text-sm  ser_textcol">Staff augmentation for your needs as needed</p>
                        </div>
                    </div>
                    <div className="w-auto flex  items-center my-5 ser-box3bg rounded py-2 mx-2 lg:w-80">
                        <div className="p-3">
                            <img className="bg-white rounded-full p-1 text-center" src={ico3} alt="" />
                        </div>
                        <div className="p-1 ser_box3 md:text-sm text-xs">
                            <h2 className="font-bold py-1">Temporary Staffing</h2>
                            <p className="w-full md:w-56 font-semibold text-sm ser_textcol ">Staff augmentation for your needs as needed</p>
                        </div>
                    </div>
                    <div className="w-auto flex  items-center my-5 ser-box4bg rounded py-2 mx-2 lg:w-80">
                        <div className="p-3">
                            <img className="bg-white rounded-full p-1 text-center" src={ico4} alt="" />
                        </div>
                        <div className="p-1 ser_box4 md:text-sm text-xs">
                            <h2 className="font-bold py-1">Temporary Staffing</h2>
                            <p className="w-full md:w-56 font-semibold text-sm ser_textcol ">Staff augmentation for your needs as needed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Services;