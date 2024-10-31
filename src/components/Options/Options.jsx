import s from "./Options.module.css"

const Options = ({ optionsData, optionsClick, optionsTotal, reset }) => {
    return (
        <div className={s.wrapper}>
            {Object.keys(optionsData).map((option) => {
                return (<button key={option} onClick={() => optionsClick(option)}>
                    {option}
                </button>)
            })}
            {optionsTotal > 0 ? (
                    <button onClick={reset}>Reset</button>
                ) : (<></>)
            }
        </div>
    )
}

export default Options