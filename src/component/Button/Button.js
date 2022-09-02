const Button = ({btnName, callback, className}) => {
    const handleBtn = (e) => {
        callback(e);
    }

    return (
        <>
            <button onClick={(e) => handleBtn(e)} type="button" className={className}>
                {btnName}
            </button>
        </>
    );
};


export default Button;
