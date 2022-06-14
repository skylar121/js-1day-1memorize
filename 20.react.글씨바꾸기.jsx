import { useState } from 'react'

function App() {
    const [wordFlag, setWordFlag] = useState(true);
    const [colorIndex, setColorIndex] = useState(0);
    
    const colorList = ['black', 'red', 'blue'];

    function changeWord() {
        setWordFlag(!wordFlag);
    }

    function changeColor() {
        setColorIndex((colorIndex+1)%colorList.length);
    }

        return (
        <div>
            <h1>Study State</h1>
            <p className='word'>단어: {wordFlag? '메롱': '바보'}</p>
            <p className='color'>색: {colorList[colorIndex]}</p>
            <button onClick={changeWord}>Change word</button>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}

export default App;

// import { useState } from 'react'

// function App() {
//     //초기 설정
//     const [name, setName] = useState('태태룽')
//     let color = 'white'

//     // 일반 함수로 바꾸기
//     function newColor() {
//         color = color === "white" ? "black" : "white";
//         document.querySelector('#color').textContent = color;
//     }

//     return (
//         <>
//             <h1>Study State</h1>
//             <h2 id="name">{name}</h2>
//             <p id='color'>{color}</p>
//             <button onClick={() => {
//                 setName(name === "그린티" ? "태태룽" : "그린티")
//             }}>Change1</button>
//             <button onClick={newColor}>Change2</button>
//         </>
//     )
// }

// export default App;