import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { userToken } from '../Atoms';

export default function AComponent() {
    

    const [token, setToken] = useRecoilState(userToken);
    const createToken = () => {
        console.log("create토큰");
        setToken('afjp21ASFgkfoF2');
    }

    const removeToken = () => {
        console.log("remove토큰")
        setToken(null);
    }

    return (
        <div style={{width: '500px', background: 'red'}}>
            AComp
            <button onClick={createToken}>토큰생성</button>
            <button onClick={removeToken}>토큰제거</button>
        </div>
    );
}

