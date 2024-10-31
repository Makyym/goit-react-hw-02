const Feedback = ({feedbackData, total}) => {
    const {good, neutral, bad} = feedbackData;
    return (
        <div>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive: {Math.round((good / total) * 100)}%</li>
            </ul>
        </div>
    )
}

export default Feedback