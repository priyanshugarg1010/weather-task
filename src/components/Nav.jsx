import Lottie from "lottie-react";
import weather from "../../public/weather.json";

const Nav = () => {
  return (
    <div>
      <nav className="flex lg:w-[1300px] md:w-[800px] w-96 mb-16 pt-3 flex-start">
        <div className="flex items-start justify-start">
          <h1 className="orange_gradient py-2 lg:text-4xl md:text-4xl text-3xl  font-extrabold font-serif ">
            Weather_Finder
          </h1>
          <div className="lg:block md:block hidden">
            <Lottie
              animationData={weather}
              style={{ height: "100px" }}
              loop={true}
              height={20}
              width={20}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
