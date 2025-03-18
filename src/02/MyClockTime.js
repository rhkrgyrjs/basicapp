import styles from './MyClockTime.module.css';
import { useState, useEffect } from 'react';

function MyClockTime()
{
    const [ctime, setCtime] = useState(new Date);

    useEffect(() => {
        const tm = setInterval(() => {
            setCtime(new Date);
        }, 1000);
        
        return () => {
            clearInterval(tm);
        }; // 클리어
    
    }, []); // 디펜던시 어레이에 아무것도 안쓰면 맨 처음 한 번 실행됨

    return(
        <div className={styles.c3}>
            현재 시각 : {ctime.toLocaleTimeString()}
        </div>
    );
}

export default MyClockTime;