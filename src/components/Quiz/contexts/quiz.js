import React, { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";
import { getAuth } from "firebase/auth";
import { getDatabase, ref , set, child, get, update, increment, onValue} from 'firebase/database';

function updatePoints(earnPoints) {
  const db = getDatabase();
  let userId = getAuth().currentUser.uid;
  const userRef = ref(db, 'users/' + userId);

  const getDate = () => {
    const date = new Date();
    return date.toLocaleString().split(",")[0];
  }

  get(child(userRef, "lastUpdate")).then((date_snap) => { 
      if (date_snap.val() !== getDate()) {
        get(child(userRef, 'points')).then(() => {
          set(userRef, {points: 0});
          update(userRef, { lastUpdate: getDate(), points: increment(earnPoints)});
        })
      }
  })

  onValue(userRef, (snapshot) => {
    console.log(snapshot.val());
  })
}

let today = new Date();
let day = (today.getDate());
if (day == 20 || day == 30)
  day = 10;
if (day > 10)
  day = day % 10;

let question = questions.filter(
  function (obj) {
    return obj.id == day;
  }
)

const initialState = {
  question,
  currentQuestionIndex: 0,
  currentAnswer: "",
  answers: shuffleAnswers(question[0]),
  showResults: false,
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.question[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
        updatePoints(correctAnswersCount + 4);
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.question.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.question[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value} >{children}</QuizContext.Provider>;
};