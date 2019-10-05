import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        //Super calls the constructor method on the component class --- gives us access to this.state for the class
        //this.state holds all state information for the class
        super();

            this.state = {
                monsters:[],
                searchField : '',
            };

            //NB!! This binds the this keyword in the function to point to the class context allowing us to access this.setstate --- By default this is bound to the element not the class
            //Bind is required when non arrow functions are used. ES6 arrow functions automatically binds this
            // this.handleChange = this.handleChange.bind(this);
    };

    //Using the arrow function we do not have to bind this
    handleChange=(e)=>{
        this.setState({searchField:e.target.value})
    };


    // NB !! when a non arrow function is used this needs to be bound in the constructor
    // handleChange(e){
    //     this.setState({searchField:e.target.value})
    // };


    //Use this to set the state when the component instance is created in the dom for the first time called right after the initial render -- this is used to update the list of monsters from an api call
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({monsters:users}) //Sets the state to the retrieved paramaeters

        })
    }

    render() {
        //NB everytime this.setState is called the render method is called to update the page
        const {monsters,searchField}=this.state; //Destructoring is the same as saying const monsters = this.state.monsters and const searchField = this.state.searchfield
        const filteredMonsters = monsters.filter(monster=>{
           return monster.name.toLowerCase().includes(searchField.toLowerCase()) // If condition true flter adds monster to the filtered list
        });
        return (
            //Pass the monsters array as a prop for the component
            //Note this.setstate is an async function that *can take a callback aka after setting state do blah
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeHolder='Search Monster' handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters} />
        </div>
        );
    }
}

export default App;

// {/*<input type='search' placeholder='Search Monsters' onChange={e=>{this.setState({searchField:e.target.value}); //This event causes rener to be called again , resulting in the filteredMonsters array being updated*/}
// {/*    // this.setState({searchField:e.target.value},()=> console.log(this.state.searchField));*/}
// {/*}}/>*/}
