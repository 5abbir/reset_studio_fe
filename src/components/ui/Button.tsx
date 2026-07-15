type ButtonProps={
    text: string;
};

function Button({text}:ButtonProps){
    return(
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg">
            {text}
        </button>
    );
}

export default Button;