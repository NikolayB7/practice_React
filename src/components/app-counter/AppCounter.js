import {Component} from 'react'
import './app-counter.css';

class AppCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCounter: this.props.counter
        }
    }

    counterUp = () => {
        this.setState(state => ({
            currentCounter: ((state.currentCounter + 1) > 50) ? 50 : state.currentCounter + 1
        }))

    }
    counterDown = () => {
        this.setState(state => ({
            currentCounter: ((state.currentCounter - 1) < -50) ? -50 : state.currentCounter - 1
        }))
    }
    counterRandom = () => {
        const  min = -50
        const  max = 50
        this.setState(state => ({
            currentCounter: Math.floor(Math.random() * (max - min + 1)) + min
        }))
    }
    counterReset = () =>{
        this.setState((state,props) => ({
            currentCounter: props.counter
        }))
    }


    render() {
        const {currentCounter} = this.state
        return (
            <div className="app">
                <div className="counter">{currentCounter}</div>
                <div className="controls">
                    <button onClick={this.counterUp}>INC</button>
                    <button onClick={this.counterDown}>DEC</button>
                    <button onClick={this.counterRandom}>RND</button>
                    <button onClick={this.counterReset}>RESET</button>
                </div>
            </div>
        )
    }
}


//+ 1) Начальное значение счетчика должно передаваться через props
//+ 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
//+ 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
//+ 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов


export default AppCounter;