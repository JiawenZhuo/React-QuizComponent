import React, {Component} from "react";


class QuizQuestion extends Component{
    render(){
        return(
            <main>
            <section>
              <p>{this.props}</p>
            </section>
            <section className="buttons">
              <ul>
                  <li>{this.props.quiz_Question.answer_options[0]}</li>
              </ul>
            </section>
          </main>
        );
    }
}




export default QuizQuestion;
