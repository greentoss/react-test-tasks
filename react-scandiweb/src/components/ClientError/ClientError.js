import React from 'react';

export default class ClientError extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <>
            <div className='container' style={{height: 500, padding: 97}}>
                <h2>Error 404: wrong address, please check your address</h2>
            </div>
        </>;
    }
}