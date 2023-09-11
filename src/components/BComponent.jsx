import React from 'react';
import BChildComp from './BChildComp';

export default function BComponent() {
    return (
        <div style={{width: '500px', background: 'blue'}}>
            <h1>BComp</h1>
            <BChildComp/>
        </div>
    );
}

