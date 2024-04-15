import React from 'react'

function QstandAns({currentQuestion, data, handleClick, selectedAnswer, indexToAlphabet, handleNextqstn}) {
  return (
    <div>
        <div>
       <h1>Question No. {currentQuestion+1} of {data.length}</h1>
       <div>
           {data[currentQuestion].questionText}
       </div>
       <p>Please choose one of the following aswers:</p>
            </div>
            <div>
            {data[currentQuestion].answerOptions.map((answerOptions,index)=>(
                                <button key={index}
                onClick={()=>handleClick(answerOptions)}
                disabled={selectedAnswer}
                className={!selectedAnswer ? 'cursor-not-allowed' : 'cursor-pointer'}>
                                    {indexToAlphabet(index)}. {answerOptions.answerText}
                                    </button>
                                            ))}
            </div>
            <div>
                       <button 
            onClick={handleNextqstn}
            disabled={!selectedAnswer}
            className={selectedAnswer ? 'cursor-pointer' : 'cursor-not-allowed'}
            >Next</button>
            </div>
            
    </div>
  )
}

export default QstandAns