import { useState, useEffect } from 'react'
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';


function App() {
  const values = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  const [value, setValue] = useState(JSON.parse(localStorage.getItem("Feedback")) ?? values);
  const { good, neutral, bad } = value;
  const totalFeedback = good + neutral + bad;
  const updateFeedback = (feedbackType) => {
    setValue((prevValue) => ({
      ...prevValue,
      [feedbackType]: prevValue[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setValue(values)
  }
  
  useEffect(() => {
    localStorage.setItem("Feedback", JSON.stringify(value));
  }, [value])

  return (
    <>
      <Description />
      <Options optionsData={value} optionsClick={updateFeedback} optionsTotal={totalFeedback} reset={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedbackData={value} total={totalFeedback} />
      ) : (
          <Notification />
      )}
    </>
  )
}

export default App
