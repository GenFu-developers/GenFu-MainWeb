import Button from "../Button/Button";

export default function Header() {
    return (
        <div className="h-screen top-10">
            <img className="absolute  w-full h-full object-cover" src="/hero-image.png" alt="" />
            <div className="relative text-shadow-md-dark px-2 md:ml-20 w-max max-w-xs md:max-w-md lg:max-w-screen-md mx-auto top-64 flex flex-col gap-5 md:gap-8 lg:gap-10">
                <h1 className="text-txt-light dark:text-primary text-4xl  md:text-6xl lg:text-7xl">
                    Wir <br />
                    entwickeln <br />
                    <span className="relative text-primary dark:text-txt-light">deine Website</span>
                </h1>
                <div className="flex gap-8">
                    <Button type="link" href="/" buttonStyle="outline" className="text-txt-light">
                        <span>Wie wir arbeiten</span>
                    </Button>
                    <Button type="link" href="/shop" buttonStyle="success">
                        <span>Angebote</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
