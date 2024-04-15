import React, { useState } from 'react'
import questions from './Data';
import Output from './Output';
import QstandAns from './QstandAns';
// import './tailwind.css';

function Dashboard({setIsAuthenticated}) {

    const [data, setData] = useState(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer]=useState(false)
  

  
  const handleClick = (selectedAnswerpara) =>{
      let newData = [...data];
      newData[currentQuestion].optionSelected=selectedAnswerpara;
      setData(newData);
      if(selectedAnswerpara.isCorrect===true){
          setScore(score+1)
                  }
        setSelectedAnswer(true);
              };

  const handleNextqstn = () => {
    const nextQuetions = currentQuestion + 1;

    if(nextQuetions < data.length){
        setCurrentQuestion(nextQuetions);
        setSelectedAnswer(false);
    }
    else{
        setShowScore(true);
    }
  }

  const indexToAlphabet = (index) => {
    return String.fromCharCode(65 + index);
  };

  const handlePlayAgain = () => {
    
    setShowScore(false); 
    setSelectedAnswer(false);
    setScore(0); 
    setCurrentQuestion(0);
  };

  return (
    <div>
        {showScore ? (
          <Output score={score}
          questions={questions} 
          data={data}
                    handleClick={handleClick}
                    selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
                    setIsAuthenticated={setIsAuthenticated}
          handlePlayAgain={handlePlayAgain}
                                        />
        )
          :(
              <div>
        <QstandAns 
        currentQuestion={currentQuestion}
        data={data} 
        handleClick={handleClick} 
        selectedAnswer={selectedAnswer} 
        indexToAlphabet={indexToAlphabet} 
        handleNextqstn={handleNextqstn} />
            </div>
            )
}
    </div>
  )
}

export default Dashboard