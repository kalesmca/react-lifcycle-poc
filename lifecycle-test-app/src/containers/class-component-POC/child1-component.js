import React from "react";

export default class Child1Container extends React.Component {
    constructor(props){
        super(props)
    }
    // componentWillMount(){
    //     console.log('Child 1: :component will mount triggered')
    // }
    componentDidCatch(){
        console.log('Child 1: :component did catch triggered')

    }
    componentDidMount(){
        console.log('Child 1: :component did mount triggered')
    }
    componentDidUpdate(previousProps){

        console.log('Child 1: :component did update triggered:', previousProps, this.props)
    }
    // shouldComponentUpdate(){
    //     console.log('Child 1: :component should update triggered it condition basic call render method')

    // }

    componentWillUnmount(){
        console.log('Child 1: component unmount');
    }
    render(){
        console.log('Child1 render method trigging');
        return(
            <div>Child1Container</div>
        )
    }
}