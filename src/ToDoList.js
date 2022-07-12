import { Component } from "react";
import done from "./done.png";
import pic from "./delete.png";

export class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput:'',
            toDoList: []
            
}
    
        }

        onChangeEvent(e) {
        this.setState({userInput: e})
        }

        addCase(cases) {
            if (cases ==='') {
                alert ('Введите дело')
            }
            else {
                let caseArray = this.state.toDoList;
                caseArray.push(cases);
                this.setState({toDoList: caseArray, userInput: ''});
                }
        }

        crossedWord(e) {
            const liItem = e.target;
            liItem.classList.toggle('crossed');
        }

        deleteItems() {
            let caseArray = this.state.toDoList;
            caseArray = [];
            this.setState({toDoList: caseArray})
        }

        onFormSubmit(e) {
        e.preventDefault();
        }



        render() {
            return (
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <div className='conteiner'>
                            <input placeholder="Необходимо сделать" onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
                            <button className="btnItem" onClick={() => this.addCase(this.state.userInput)}>Добавить</button>
                        </div>
                        <div className='conteiner'>
                            <ul>
                                {this.state.toDoList.map((item, index) => (
                                    <li onClick={this.crossedWord} key={index}><img src={done} alt="done" width="16"/>{item}</li>
                                    
                                ))}
                            </ul>
                            
                        </div>
                        <div className='conteiner'>
                        <button onClick={() => this.deleteItems()} className="btnDel">На сегодня все <img className="pic" src={pic} alt="done" width="16"/></button>
                        </div>
                    </form>
                </div>
            )
        }
    }

   