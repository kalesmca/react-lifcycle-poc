import React from "react";

export default class Child2Container extends React.Component {
    constructor(props){
        super(props)
        console.log('child1 constructor')
    }
    componentWillMount(){
        console.log('Child 2: :component will mount triggered')
    }
    componentDidCatch(){
        console.log('Child 2: :component did catch triggered')

    }
    componentDidMount(){
        console.log('Child 2: :component did mount triggered')
    }
    componentDidUpdate(){
        console.log('Child 2: :component did update triggered')
    }
    // shouldComponentUpdate(){
    //     console.log('Child 2: :component should update triggered it condition basic call render method')

    // }

    componentWillUnmount(){
        console.log('Child 2: component unmount');
    }
    render(){
        console.log('Child2 render method trigging');

        return(
            <div>Child2Container</div>
        )
    }
}