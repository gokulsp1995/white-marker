const Form = ({ children, onSubmit, className }) => {
    return (
        <form className={`form ${className}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

export default Form;