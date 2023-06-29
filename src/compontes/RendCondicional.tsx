import React, { Component } from "react";

interface UserComponentState{
    isLoggerIn: boolean;
}

class UserComponent extends Component<{}, UserComponentState>{
    constructor(props: {}){
        super(props);
        this.state = {
            isLoggerIn: false
        };
    }

    handelLogin = () => {
        this.setState({isLoggerIn: true});
    }

    handelLogout = () => {
        this.setState({isLoggerIn: false})
    }
    render() {
        const { isLoggerIn } = this.state;
        return(
            <div>
                {isLoggerIn? (
                    <h2>Bienvenido, Usuario </h2>
                ): (
                    <button onClick={this.handelLogin}>Iniciar Sesión</button>
                )}
                {isLoggerIn && (
                    <button onClick={this.handelLogout}>Cerrar Sesión</button>
                )}
            </div>
        )
    }
}

export default UserComponent