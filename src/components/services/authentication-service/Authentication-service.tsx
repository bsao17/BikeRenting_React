import React, {Component} from 'react';

interface myProps {
    props: string | number
}

interface myState {
    username: string
}

class AuthenticationService extends Component <myProps, myState> {
    public constructor(props: myProps){
        super(props);
        props = this.props
        this.state = {
            username: "",
        }
    }




    render() {
        return (
            <div>
            </div>
        );
    }
}

export default AuthenticationService;