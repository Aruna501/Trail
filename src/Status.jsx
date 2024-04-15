import React, { useEffect, useState } from 'react';


function Status ({ score, questions }) {
  const [avg, setAvg] = useState('');
  const [gradeVal, setGradeVal] = useState('');

  useEffect(() => {
    const totalQuestions = questions.length;
    const calculatedAverage = (score / totalQuestions) * 100;
    setAvg(calculatedAverage);

    if (calculatedAverage >= 90) {
      setGradeVal('A');
    } else if (calculatedAverage >= 80) {
      setGradeVal('B');
    } else if (calculatedAverage >= 70) {
      setGradeVal('C');
    } else if (calculatedAverage >= 60) {
      setGradeVal('D');
    } else {
      setGradeVal('F');
    }
  }, [score, questions]);

  return (
    <div className='score-section'>
      <h2>You've passed, but there's potential for improvement.</h2>
      <h3>Grade: {gradeVal}</h3>
      <h4>Total Questions: {questions.length}</h4>
      <h4>Correct Answers: {score}</h4>
      <h4>Your Score: {avg}%</h4>
      <h4>Passing Score: {avg}%</h4>
      <h4>Time Taken: </h4>
    </div>
  );
}


export default Status;
