import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots : robots,
            searchField : ''
        }
        this.onSearchChange = this.onSearchChange.bind(this)
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

        return (
            <div className="tc">
                <h1>Robot friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots} />
            </div>
        );
    }
}

export default App;
