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
    shouldComponentUpdate(newProps){

        console.log('parent :component should update triggered it condition basic call render method')
        if(newProps != this.props){
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
            <div>ParentContainer
                <div>Parent</div>
                <div>Name : <input  value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/></div>
                <Child1Container />
                <Child2Container />
            </div>
        )
    }
}