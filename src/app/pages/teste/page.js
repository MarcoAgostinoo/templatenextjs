'use client';

import styles from './teste.module.css';
import { useRef, useState, useEffect } from 'react';

export default function Teste() {
    const [number, setNumber2] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const boxRef = useRef(null);
    const boxRef1 = useRef(null);
    const [position, setPosition] = useState(0);
    const [position1, setPosition1] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.9555) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, {
            threshold: 0.9555 // O callback será chamado quando 15% do elemento estiver visível
        });

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible && number < 300) {
            const animationId = requestAnimationFrame(() => setNumber2(prev => prev + 1));
            return () => cancelAnimationFrame(animationId);
        }
    }, [isVisible, number]);

    const movement = () => {
        if (position < 95) {
            setPosition((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const slider = boxRef.current;
        if (slider && isVisible) {
            slider.style.left = position + '%';
            if (position < 10) {
                const animationFrame = requestAnimationFrame(movement);
                return () => cancelAnimationFrame(animationFrame);
            }
        }
    }, [position, isVisible]);

    const movement1 = () => {
        if (position1 < 95) {
            setPosition1((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const slider1 = boxRef1.current;
        if (slider1 && isVisible) {
            slider1.style.left = position1 + '%';
            if (position1 < 35) {
                const animationFrame = requestAnimationFrame(movement1);
                return () => cancelAnimationFrame(animationFrame);
            }
        }
    }, [position1, isVisible]);

    return (
        <div className={styles.path} id='patch1' onClick={() => setNumber2(0)}>
            <h1>Contagem: {number}</h1>
            <section className={styles.path2} id="path2" onClick={movement}>
                <div
                    className={styles.box}
                    id="box2"
                    ref={boxRef}
                ></div>
                <div
                    className={styles.box1}
                    id="box3"
                    ref={boxRef1}
                ></div>
            </section>
        </div>
    );
}

// 'use client';

// import styles from './teste.module.css';
// import { useRef, useState, useEffect } from 'react';

// export default function Teste() {
    
//     const [number, setNumber2] = useState(0);
//     useEffect(() => {
//         if (number < 300) {
//             const animationId = requestAnimationFrame(() => setNumber2(prev => prev + 1));
//             return () => cancelAnimationFrame(animationId);
//         }
//     }, [number]);

//     const boxRef = useRef(null);
//     const [position, setPosition] = useState(0);

//     const movement = () => {
//         if (position < 95) {
//             setPosition((prev) => prev + 1);
//         }
//     };

//     useEffect(() => {
//         const slider = boxRef.current;
//         if (slider) {
//             slider.style.left = position + '%';
//         }

//         if (position < 10) {
//             const animationFrame = requestAnimationFrame(movement);
//             return () => cancelAnimationFrame(animationFrame);
//         }
//     }, [position]);

//     const boxRef1 = useRef(null);
//     const [position1, setPosition1] = useState(0);

//     const movement1 = () => {
//         if (position1 < 95) {
//             setPosition1((prev) => prev + 1);
//         }
//     };

//     useEffect(() => {
//         const slider = boxRef1.current;
//         if (slider) {
//             slider.style.left = position1 + '%';
//         }

//         if (position1 < 35) {
//             const animationFrame = requestAnimationFrame(movement1);
//             return () => cancelAnimationFrame(animationFrame);
//         }
//     }, [position1]);



//     return (
//         <div className={styles.path} id='patch1' onClick={() => setNumber2(0)}>
//             <h1>Contagem: {number}</h1>
//             <section className={styles.path2} id="path2" onClick={movement}>
//                 <div
//                     className={styles.box}
//                     id="box2"
//                     ref={boxRef}
//                 ></div>
//                 <div
//                     className={styles.box1}
//                     id="box3"
//                     ref={boxRef1}
//                 ></div>
//             </section>


//         </div>
//     );
// }
// O codigo acima é esse abaixo em javascript puro modificado para react
// let output = document.getElementById('path1')
// function numbers() {     number++
//     output.textContent = number
//     if(number < 300) {
//         requestAnimationFrame(numbers)
//     }
// }
