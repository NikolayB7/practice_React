import {Component} from "react";

class AppForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            position: ''
        }
    }

    commitInputChanges = (e,color) => {
        console.log(color)
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {position} = this.state;
        return (
            <div>
                <form action="">
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) =>this.commitInputChanges(e,'some color')}/>
                </form>
                <div>
                    Position - {position}
                </div>
            </div>
        );
    }
}


export default AppForm;