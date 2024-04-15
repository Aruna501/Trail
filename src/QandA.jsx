import React from 'react'

function QandA ({userAnswers, questions, data }) {
    


    
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Questions</th>
              <th>Your Answer</th>
              <th>Correct Answer</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
          
                            {data.map((question, index) => {
                                // console.log(question)
                        const correctAnswerOption  = question.answerOptions.find(
              option => option.isCorrect);
              const correctAnswer = correctAnswerOption ? correctAnswerOption.answerText : '';
            
            return (
              <tr key={index}>
                  
                <td>{index + 1}</td>
                <td>{question.questionText}</td>
                <td>{question.optionSelected.answerText}</td>
                <td>{correctAnswer}</td>
                <td>{+ question.optionSelected.isCorrect}</td>
              </tr>
            )
                })
          }
          </tbody>
        </table>
      </div>
    );
  }

export default QandA