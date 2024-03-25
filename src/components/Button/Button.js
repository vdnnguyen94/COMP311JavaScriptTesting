const Button = ({ setToggle, btnTxt }) => {
 
    // data-testid is a testing id 
    // which is used only during tests
    return <button data-testid="button1"
        onClick={() => setToggle((prev) => !prev)}>
        {btnTxt}
    </button>
}
 
export default Button;