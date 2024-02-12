import React, { useEffect, useState } from 'react';
import './Body.css';
import oImg from '../util/images/o.png';
import xImg from '../util/images/x-img.png';
import failAudioFile from '../util/audio/fail.mp3'; // Import audio files directly
import winAudioFile from '../util/audio/win.mp3';


let boardArr = ["","","","","","","","",""];

const Body = () => {
    const [failAudio] = useState(new Audio(failAudioFile));
    const [winAudio] = useState(new Audio(winAudioFile));
    let [count,setCount] = useState(0);
    let [end,setEnd] = useState(false);
    let [winner,setWinner] = useState("");
    const [title,setTitle]= useState('TIC TAC TOE')

    
    useEffect(() => {
        setTitle('TIC TAC TOE')
    },[] )

    useEffect(() => {
        const title = 'Congratulations ' + winner + ' !'
        end && setTitle(title) 
        console.log(winner)
        if(winner!==""){
            winAudio.play();
        }
        // setWinner("")
        
    }, [winner])

    useEffect(() =>{
        count === boardArr.length && setTitle('Better luck next time!') && setWinner("") ;
        
    },[count])
    

    const toggleXO =(e,num) =>{
        if(end){
            return 1;
        }
        if(boardArr[num] === ""){
            if(count%2 === 0 ){
                e.target.innerHTML = `<img src='${xImg}'>`;
                boardArr[num] = 'X';
                setCount(count+1);
            } else {
                e.target.innerHTML = `<img src='${oImg}'>`;
                boardArr[num] = 'O';
                setCount(count+1);
            }
    }
    checkVictory();
    }

    const checkVictory = () => {
        if(boardArr[0] === boardArr[1] && boardArr[1] === boardArr[2] && boardArr[2] !== ""  ){
            setResult(boardArr[0]);
        } else if (boardArr[3] === boardArr[4] && boardArr[4] === boardArr[5] && boardArr[5] !== ""  ){
            setResult(boardArr[3]);

        } else if (boardArr[6] === boardArr[7] && boardArr[7] === boardArr[8] && boardArr[8] !==""  ){
            setResult(boardArr[6]);

        } else if (boardArr[0] === boardArr[3] && boardArr[3] === boardArr[6] && boardArr[6] !== ""  ){
            setResult(boardArr[0]);

        } else if (boardArr[1] === boardArr[4] && boardArr[4] === boardArr[7] && boardArr[7] !== ""  ){
            setResult(boardArr[1]);

        } else if (boardArr[2] === boardArr[5] && boardArr[5] === boardArr[8] && boardArr[8] !== ""  ){
            setResult(boardArr[2]);

        } else if (boardArr[0] === boardArr[4] && boardArr[4] === boardArr[8] && boardArr[8] !== ""  ){
            setResult(boardArr[0]);

        } else if (boardArr[2] === boardArr[4] && boardArr[4] === boardArr[6] && boardArr[6] !== ""  ){
            setResult(boardArr[2]);

        }
    
    }

    const setResult = (player) => {
        setWinner(player);
        setEnd(true);
    }

    const resetGame = () => {
        setEnd(false);
        setTitle('TIC TAC TOE')
        setCount(0)
        setWinner("")
        boardArr = ["","","","","","","","",""];
        const elements = document.querySelectorAll('.grid-item');
        elements.forEach(element => {
            element.innerHTML =""; 
        });
    }

    return (
    <>
    <div className='tic-tac-toe'>
        <div>
            <h1 className='title'>{title}</h1>
        </div>
        <div className='board-con'>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,0)}}></div>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,1)}}></div>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,2)}}></div>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,3)}}></div>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,4)}}></div>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,5)}}></div>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,6)}}></div>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,7)}}></div>
            <div className="grid-item" onClick= {(e)=>{toggleXO(e,8)}}></div>
        </div>
        <div className='reset-con'>
            <button className='reset-btn' onClick={()=>{resetGame()}}>RESET</button>
        </div>
    </div>
    </>
  )
}

export default Body;