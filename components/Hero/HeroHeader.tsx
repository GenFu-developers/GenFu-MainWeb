import HeroHeaderText from "./HeroHeaderText";
import HeroImageSlider from './HeroImageSlider'

export default function Header() {

    return (
        <div>

            {/*  */}
            <div className="h-screen">
                <HeroImageSlider />
                <HeroHeaderText />
                {/* <img className="translate-y-96  mx-auto " width={450} height={450} src="/LaptopDisplayLogo.png" alt="" /> */}
            </div>
        </div>
    );
};
