import React, {Component} from "react";
import QuizQuestiom from "./QuizQuestion";

let quizData = require("./quiz_data.json");


class Quiz extends Component{
  constructor(props){
    super(props);

    this.state = {quiz_position: 1};
  }
  render(){
    return(
      <div>
          <QuizQuestion quizQuestion ={quizData.quiz_question[this.state.quiz_position-1]>
          </QuizQuestion>
      </div>
    );
  }
}





export default Quiz;