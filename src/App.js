/* eslint-disable */


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const post = '강남 우동 맛집';
// let [a ,b] = useState('코트 추천');
//a - state에 보관했던 자료가 나옴
//b - state 변경을 도와주는 함수
let [글제목 , 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
let [따봉, 따봉변경] = useState([0,0,0]);
let [modal,setModal] = useState(false);  
let [title,setTitle] = useState(0);
let [입력값, 입력값변경]  = useState('');

const todayTime = () =>{
  let now = new Date(); //현재 날짜 및 시간
  let todayMonth = now.getMonth() +1;
  let todaydate = now.getDate();
  const week = ['일','월','화','수','목','금','토'];
  let dayOfWeek = week[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  return todayMonth + '월 ' +todaydate + '일 ' + dayOfWeek + '요일 ' +
  hours + '시 ' + minutes + '분';
}

return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <h4>블로그 글 제목      </h4>
{/* {
        <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천'
          글제목변경(copy);
          }}>
        글수정
      </button>
      <button onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
          }}>
        가나다 정렬
      </button>
      <div className='list'>
        <h4 >{글제목[0]} <span onClick={() => { 따봉변경( 따봉 +=1)}}>👍</span> {따봉}</h4>
        <p>8월 10일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>8월 11일 발행</p>
      </div>
      
      <div className='list'>
      <h4 onClick={() => {setModal(!modal)}} >{글제목[2]}</h4>
        <p>8월 12일 발행</p>
      </div> */}

      {
        글제목.map(function(a,i){
          return <div className='list' key={i}>
                <h4 onClick={() => {setModal(!modal); setTitle(i)}}  
                
                >{글제목[i]}
                <span onClick={(e) => { e.stopPropagation(); 
                    let copy = [...따봉];
                    copy[i] += 1 ;
                    따봉변경( copy )}}>👍</span> {따봉[i]} </h4>
                <p>{todayTime() + ' 발행'}</p>
                
                <button onClick= {()=>{
                  let copy = [...글제목];
                  copy.splice(i,1);
                  따봉.splice(i,1);
                  글제목변경(copy);
                  따봉변경(따봉);
                  
                }}>
                삭제  
                </button>
                
                </div>

                
        })
      }



      <input onChange={(e)=> {
        입력값변경(e.target.value);
      }}>
      </input>

      <button onClick= {()=>{
        let copy = [...글제목];{

        입력값 == ''? null :
        copy.unshift(입력값);
        따봉.unshift(0);
        글제목변경(copy);
        따봉변경(따봉);
        }
      }}>
        글발행
      </button>
      {
        modal == true ? <Modal 
        change = "여자코트 추천"
        title={title}
        글제목={글제목} 
        글제목변경={글제목변경}/> : undefined
      }
      
    

    </div>
  );
}



function Modal(props) {
  return (
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy1 = [...props.글제목];
          copy1[0] = props.change;
          props.글제목변경(copy1);
          }}>
        글수정
      </button>
      </div>
  )
}


export default App;
