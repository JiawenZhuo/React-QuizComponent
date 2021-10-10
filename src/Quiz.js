import react, {Component} from "react";


let quizData = required("./quiz_data.json");


class Quiz extends Component{
  constructor(props){
    super(props);

    this.state = {quiz_position: 1};
  }
  render(){
    return(
      <div>
        <div className="QuizQuestion">
        </div>
      </div>
    );
  }
}





export default Quiz;