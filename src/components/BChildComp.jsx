import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userToken } from '../Atoms';

export default function BChildComp() {
    const tokenValue = useRecoilValue(userToken);
    return (
        <div>
            <h2>
            {`BChild 토큰값표시 : ${tokenValue}`}
            </h2>
            <h3> docker 자동배포 테스트</h3>
        </div>
    );
}

