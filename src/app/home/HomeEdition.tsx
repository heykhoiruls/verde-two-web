import ParallaxImage from "./components/ParallaxImage";
import ParallaxLogo from "./components/ParallaxLogo";

const HomeEdition = () => {
  return (
    <div className="bg-color h-[100vh] space-y-6">
      <div className="container top-0 space-y-2 pb-4 md:px-[100px]">
        <p>With our collective efforts and determination,</p>
        <h2>lets realize anything you want.</h2>
      </div>
      <ParallaxImage />
      <h2 className="pt-4 text-center">Our designers</h2>
      <ParallaxLogo />
    </div>
  );
};

export default HomeEdition;
