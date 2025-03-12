/**
 * - Зберігання значень між оновленнями компонента
 * - Відсутність реактивності
 */

import { useRef, useState } from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);
    const timerRef = useRef();

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        console.log('startTimer: ', timerRef);
    };

    const stopTimer = () => {
        console.log('stopTimer: ', timerRef);
        clearInterval(timerRef.current);
    };

    return (
        <div>
            <p>Час: {time} секунд</p>
            <button onClick={startTimer}>Старт</button>
            <button onClick={stopTimer}>Стоп</button>
        </div>
    );
}
