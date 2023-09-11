import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userToken } from '../Atoms';

export default function BChildComp() {
    const tokenValue = useRecoilValue(userToken);
    return (
        <h2>
           {`BChild 토큰값표시 : ${tokenValue}`}
        </h2>
    );
}

