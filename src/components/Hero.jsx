const Hero = () => {
    return (
        <div className=" h-[500px] bg-[url('/assets/15740@2x.png')] bg-cover text-white relative mb-[200px]">
            <div className=" w-full h-full absolute top-0 left-0 bg-black opacity-60"></div>
            <div className=" container  relative z-10 flex flex-col items-center gap-[25px] py-16 text-center">
                <h1 className=" font-light text-[50px] leading-none">
                    TRIPPRO - AN ECOMMERCE SOLUTION
                </h1>
                <p className=" font-light text-[18px] text-white ">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                </p>

                <div className=" flex items-center">
                    <div className=" flex items-center gap-4 px-[30px]">
                        <span className=" font-bold">Built for:</span>
                        <img
                            src="/assets/responsive.svg"
                            alt="responsive.svg"
                        />
                    </div>
                    <div className=" flex items-center gap-4  px-[30px] border-s-2 border-e-2 border-white">
                        <div className="flex flex-col items-start">
                            <span>Technologies:</span>
                            <span className=" font-bold">Wordpress</span>
                        </div>
                        <img
                            src="/assets/wordpress-development-logo-banner.svg"
                            alt="wordpress-development-logo-banner.svg"
                        />
                    </div>
                    <div className=" flex items-center gap-4  px-[30px]">
                        <div className="flex flex-col items-start">
                            <span>Industry:</span>
                            <span className=" font-bold">Ecommerce</span>
                        </div>
                        <img
                            src="/assets/shopping-cart.svg"
                            alt="shopping-cart.svg"
                        />
                    </div>
                </div>
            </div>

            <div className=" w-[490px] absolute left-[50%] translate-x-[-50%]">
                <img src="assets/Laptop@2x.png" alt="Laptop@2x.png" />
                <img
                    src="assets/devwp.visibleone.net_tripprohk_@2x.png"
                    className=" w-[375px] absolute top-4 left-14"
                    alt="devwp.visibleone.net_tripprohk_@2x.png"
                />
            </div>
        </div>
    );
};

export default Hero;
