import React, {Component} from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import './App.css';
import Scroll from "../Components/Scroll";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>  response.json())
            .then(users => this.setState({ robots : users }));
    }

    onSearchChange (event){
        this.setState({ searchField : event.target.value })
        //console.log(filterRobots);
    }

    render(){
        //ES6 javascript
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1>LOADING...</h1>
        }else{
            return (
                <div className="tc">
                    <h1 className='f1'>Robotfriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
