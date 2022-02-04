import './styles.css'

export const Button = ({ click, text, disable }) => {
    return (
        <div>
            <button
                className="button"
                onClick={click}
                disabled={disable}
            >
                {text}
            </button>
        </div>
    )

}