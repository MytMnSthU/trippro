// As I assume that header, footer designs, logo are not given,
// I just put the image you provide at that place
const Header = () => {
    return (
        <>
            <img
                src="/assets/Header@2x.png"
                className=" hidden lg:block"
                alt="Header@2x.png"
            />
        </>
    );
};

export default Header