import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizservice from "./quizservice";
import QuestionBox from "./component/QuestionBox";
import Result from "./component/Result";
class Quizbay extends Component {
    state={
        questionBank:[],
        score:0,
        responses:0
    };
    getQuestion=()=>{
        quizservice().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    };
    playAgain =()=>{
        
        this.getQuestion();
        this.setState({
         score:0,response:0 
         });
    };
    computAnswer=(answer,correctAnswer)=>{
        if(answer===correctAnswer){
            this.setState({
                score:this.state.score+1
            });
        }
        this.setState({
            responses: this.state.responses <5 ? this.state.responses+1:5
        });
    };
 
    componentDidMount(){
        this.getQuestion();
    };
  
render(){
    return(
    <div className="container">
        <div className="title">Quizbay</div>
        {this.state.questionBank.length>0 &&
        this.state.responses < 5 &&
        this.state.questionBank.map(({question,answers,correct,questionId})=>(
            <QuestionBox 
            question={question} 
            options={answers}
            key={questionId}
            selected={answer=>this.computAnswer(answer,correct)}
            />
        )
        ) }
        {this.state.responses=== 5 ?(
        <Result score={this.state.score}  playAgain= {this.playAgain}/> 
        ): null }
    </div>
    );
}
}
ReactDOM.render(<Quizbay/>,document.getElementById("root"));
