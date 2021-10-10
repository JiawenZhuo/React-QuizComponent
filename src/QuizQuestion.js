import React, {Component} from "react";


class QuizQuestion extends Component{
    render(){
        return(
            <main>
            <section>
              <p>// instruction text goes here</p>
            </section>
            <section className="buttons">
              <ul>
                  <li>{this.props.QuizQuestion.answer_options[0]}</li>
              </ul>
            </section>
          </main>
        );
    }
}




export default QuizQuestion;
