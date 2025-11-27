import { useState } from 'react'

const Button = ({onClick, text}) =>  <button onClick={onClick}> {text} </button>

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad, total, average, positive}) => {

  if ((good + neutral + bad )== 0) {
    return (
      <>
      <h1>statistics</h1>
      <div> No feedback given </div>
      </>
    )
  }

  return (
    <>
    <h1>statistics</h1>
    <table>
      <tbody>
      <StatisticsLine text={"good"} value ={good} />
      <StatisticsLine text={"neutral"} value ={neutral} />
      <StatisticsLine text={"bad"} value ={bad} />
      <StatisticsLine text={"all"} value ={total} />
      <StatisticsLine text={"average"} value ={average} />
      <StatisticsLine text={"positive"} value ={positive} />
      </tbody>
    </table>
      
      </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)

  const [average, setAverage] = useState(0)

  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    const updatedTotal = updatedGood + neutral + bad
    setGood(updatedGood)
    setTotal(updatedTotal)
    setAverage((updatedGood - bad) / updatedTotal)
    setPositive((updatedGood / updatedTotal) * 100)
  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = good + updatedNeutral + bad
    setNeutral(updatedNeutral)
    setTotal(updatedTotal)
    setAverage((good - bad) / updatedTotal)
    setPositive((good / updatedTotal) * 100)
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    const updatedTotal = good + neutral + updatedBad

    setBad(updatedBad + 1)
    setTotal(updatedTotal)
    setAverage((good - updatedBad) / updatedTotal)
    setPositive((good / updatedTotal) * 100)
  }



  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />

      <Statistics good = {good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </>


  )
}

export default App