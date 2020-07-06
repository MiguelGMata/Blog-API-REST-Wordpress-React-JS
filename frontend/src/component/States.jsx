import React from 'react';


class States extends React.Component {
    state = {
        useEffect:true
    }

    montrerUseEffect = () => {
        this.setState({useEffect: !this.state.useEffect})
    }

    render() { //cette méthode montre dans l'écran
        if(this.state.useEffect){
            return(
                <div id="post">
                    <h1>{this.props.text}</h1>
                    <h2>{this.props.subtext}</h2>
                    <button onClick={this.montrerUseEffect}>Montrer</button>
                </div>
            )
        }else{
            return <h1>
                        il n' y a pas elements
                        <button onClick={this.montrerUseEffect}>Montrer</button>
                   </h1>
        }
    }
}


export default States;


/*
function Post(props) {
    return (
      <div>
        {props.text}
        {props.subtext}
      </div>
    );
}
*/

