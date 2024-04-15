import React, {useState } from 'react'

import QandA from './QandA';
import Status from './Status';

function Output({selectedAnswer, score, questions, data, setIsAuthenticated, handlePlayAgain}) {
    const [displayStatus, setDisplayStatus] = useState(true);
    

    const handleHome = () => {
              setIsAuthenticated(false);
        } 

        const handleAgainplay = () => {
          handlePlayAgain(); 
                  };


    return (
      <div>
        <div className='buttons'>
          <button onClick={() => setDisplayStatus(true)}>Status</button>
          <button onClick={() => setDisplayStatus(false)}>QNA</button>
        </div>
        {displayStatus ? (
          <Status score={score} questions={questions} />
        ) : (
          <QandA
          data={data}
          selectedAnswer={selectedAnswer}
                    score={score}
          questions={questions} />
        )}
        <div>
        <button onClick={handleAgainplay}>Play Again</button>
          <button onClick={handleHome}>Back to home</button>
        </div>
      </div>
    );
  }

export default Output