import { Component } from "react"

class Counter extends Component{


    constructor(){
     super()
    this.add=this.add.bind(this)
    this.sub=this.sub.bind(this)
    this.state={
        a:0
    }


    }


    add(){
     this.setState({
        a:this.state.a+1
     })    
    }

    sub(){
        this.setState({
            a:this.state.a-1
        })
    }


render(){

    var res;

    if(this.state.a>5){

     res={color:"red"};
    //   res= <h1 style={{color:"red"}}>{this.state.a}</h1>

    }else if(this.state.a<=5 && this.state.a>=0){

        res={color:"green"};
        // res= <h1 style={{color:"green"}}>{this.state.a}</h1>

        
    }else{

        res={color:"yellow"};
    //   res= <h1 style={{color:"yellow"}}>{this.state.a}</h1>


    }


return(
    <>
  <div style={{textAlign:"center"}}>

  <h1>counter</h1>

  <br />
  <br />

  <button onClick={this.add}>add</button>


{/* {res} */}
<h1 style={res}>{this.state.a}</h1>


<button onClick={this.sub}>sub</button>

  </div>

    
    </>
)

}

}

export default Counter
