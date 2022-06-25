import img from "./images/image-hero-desktop.png";
import imge from "./images/image-hero-mobile.png";
import Audio from "./images/client-audiophile.svg";
import Data from "./images/client-databiz.svg";
import Maker from "./images/client-maker.svg";
import Meet from "./images/client-meet.svg";
function header() {
  return (
    <section className="container justify-center md:justify-around pr-8 mx-auto pt-6  flex md:flex-row  space-y-6 flex-col-reverse">
      <div className="flex flex-col  pt-12 pl-12 md:pt-20 space-y-6 w-[90%] md:max-w-[35%]">
        <h1 className="text-3xl font-bold md:text-left text-center ">
          Make remote work
        </h1>
        <p className="text-center md:text-left">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar
        </p>
        <span className="bg-white border-2  self-center md:self-start hover:text-gray-400 h-fit w-fit px-4 pb-2 text-black border-black rounded-md">
          <a className=" text-sm font-medium" href="/">
            Learn more
          </a>
        </span>
        <div className="flex flex-row md:justify-start justify-center space-x-3 text-gray-500">
          <img className="w-12 h-4" src={Audio} alt="" />
          <img className="w-12 h-4" src={Data} alt="" />
          <img className="w-12 h-4" src={Maker} alt="" />
          <img className="w-12 h-4" src={Meet} alt="" />
        </div>
      </div>
      <div className=" md:block hidden self-center md:max-w-[35%] w-[70%] md:max-h-[85vh] imag  ">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <div className="  block md:hidden self-center md:max-w-[35%] w-[70%] md:max-h-[85vh] pt-8  ">
        <img className="w-full h-full" src={imge} alt="" />
      </div>
    </section>
  );
}
export default header;
