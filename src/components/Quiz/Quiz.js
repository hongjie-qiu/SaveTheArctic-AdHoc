import React from "react";
import "../../css/quiz.css";
import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "./contexts/quiz";
import { QuizProvider } from "./contexts/quiz";
import { getDatabase, ref , set, child, get, update, increment, onValue} from 'firebase/database';

function Quiz(prop) {
  const [quizState, dispatch] = useContext(QuizContext);
  const earnPoints = quizState.correctAnswersCount + 4;
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>
              You've got {quizState.correctAnswersCount} out of&nbsp;
              {quizState.question.length} questions right.
            </div>
            <div>You have earned {earnPoints} points towards your donation progress!</div>
          </div>

          <div className="buttons">
            <div
              onClick={() => dispatch({ type: "RESTART" })}
              className="next-button"
            >
              Restart
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="quizTitle">
            Daily Quiz!
          </div>
          {/* <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div> */}
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              SEE RESULT
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function updatePoints(uid, earnPoints) {
  const db = getDatabase();
  const pointsRef = ref(db, 'users/' + uid);

  get(child(pointsRef, 'points')).then((snapshot) => {
    if (snapshot.exists()) {
      update(pointsRef, { points: increment(earnPoints)} );
    }else {
      set(pointsRef, { points: 0 } );
    }
  })

  const userInfo = ref(db, "users/" + uid);
  onValue(userInfo, (snapshot) => {
    console.log(snapshot.val());
  })
}

function QuizPage(props) {
  //updatePoints(props.currentUser.uid, earnPoints);
  return (
    <React.Fragment>
        <QuizProvider>
        <Quiz prop={props}/>
        </QuizProvider>
    </React.Fragment>
  );
}

export default QuizPage;