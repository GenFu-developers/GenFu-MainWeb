import Button from "../Button";

export default function Header() {
    return (
        <div className="h-screen top-10">
            <img className="absolute  w-full h-full" src="/hero-image.png" alt="" />
            <div className="relative ml-20 w-max top-64 flex flex-col gap-10">
                <h1 className="text-txt-light text-7xl">
                    Wir <br />
                    entwickeln <br />
                    <span className="relative text-primary">deine Website</span>
                </h1>
                <p className="max-w-md text-shadow-md-dark text-txt-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quaerat assumenda commodi impedit qui veritatis blanditiis dicta aliquid ea iure culpa quibusdam sequi veniam quisquam saepe quos accusamus sed mollitia?</p>
                <div className="flex gap-8">
                    <Button type="link" href="/shop" buttonStyle="success">
                        <span>Angebote</span>
                    </Button>
                    <Button type="link" href="/" buttonStyle="outline">
                        <span>Wie wir arbeiten</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
