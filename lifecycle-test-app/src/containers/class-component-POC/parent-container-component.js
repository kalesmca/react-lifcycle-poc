import React from "react";
import Child1Container from "./child1-component";
import Child2Container from "./child2-component";

export default class ParentContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {name: 'kalees'}
    }
    componentWillMount(){
        console.log('parent :component will mount triggered')
    }
    componentDidCatch(){
        console.log('parent :component did catch triggered')

    }
    componentDidMount(){
        console.log('parent :component did mount triggered')
    }
    componentDidUpdate(){
        console.log('parent :component did update triggered')
    }
    shouldComponentUpdate(newProps, newState){

        console.log('parent :component should update triggered it condition basic call render method', this.state, newState)
        debugger
        if(newState != this.state){
            return true;
        } else {
            return false;
        }

    }

    componentWillUnmount(){
        console.log('parent component unmount');
    }

    render(){
        console.log('parent render method trigging');
        return(
            <div className="container">ParentContainer
                <div>Parent</div>
                <div>Name : <input  value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/></div>
                <Child1Container name={this.state.name}/>
                <Child2Container />
            </div>
        )
    }
}