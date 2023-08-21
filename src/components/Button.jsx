const Button = ({ text, onButtonClick }) => {
    return (
        <button
            onClick={() => onButtonClick()}
            type="button"
            className=" px-[40px] py-[15px] rounded-full font-bold bg-gradient-to-r from-accentBlue to-accentGreen text-white uppercase text-[18px]"
        >
            {text}
        </button>
    );
};

export default Button