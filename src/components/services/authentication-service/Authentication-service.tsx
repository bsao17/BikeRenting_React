import React, {Component} from 'react';

interface myProps {
    [props: string]: any
}

interface myState {
    [state: string]: any
}

class AuthenticationService extends Component <myProps, myState> {
    public constructor(props: myProps){
        super(props);

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AuthenticationService;