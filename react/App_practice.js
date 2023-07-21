import Child from "./Child";
import "bootstrap/dist/css/bootstrap.min.css"
import sampleData from "./sampleData.json"
import { useCallback, useContext, useEffect, useMemo } from "react";

function App() {
  
  const girlsData = sampleData;
  const subject = "React!!!!!"
  const smplaeTag = <h3>거르그룹</h3>
  const 과일 = ["사과","바나나","오렌지","키위","망고"];
  const state = 1000;


  return (
    <div class = "container text-center">
     {/* <div>로 감싸주는 걸 추천</div> */}
      <h1>{subject} girl-group </h1>
      {smplaeTag}
      <hr/>
      {state >150 ? <p> 150보다 크네</p>:<p>150보다 작네</p>}
      <hr/>
      {과일.map((item, index) => {
        return (
          <p key={index}>{index+1}번째 과일은 {item}입니다.</p>
        )
      })}
      <hr/>
      {girlsData.map((item, index) => {
        return(
        <Child key={index} path = {item.path} name ={item.name}/>
        )
      })}
      <hr/>
       {/* <Child path={"https://i.ytimg.com/vi/ZoXM9rnKV2Y/maxresdefault.jpg"} 
      // name={"^모^"}/>
      // <Child path={"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F22693C4C51D6A6B706"} 
      // name={"ANG~"}/>
      // <Child path={"https://i.ytimg.com/vi/LhRzjHyYZ70/mqdefault.jpg"} 
      // name={"니 엄마다!"}/> */}
      </div>
  );
}

export default App;

// props drilling -> useContext -> Redux

// useState - 변수상태 변화
// useEffect- 렌더링 제어
// useCallback - 함수 재사용
// useMemo - 연산값 재사용
// useContext - 전역변수 값의 상태 관리
// useRef - DOM 특성 제어
// useLocation - Routing 되는 경로의 파라미터 관리
// useParams - 동적 라우팅되는 파라미터를 관리

import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  //1. 항상 렌더링이 된다.
  useEffect(() => {
    console.log("항상 렌더링1")
  })

  //2. 처음에만 렌더링
  useEffect(() => {
    console.log("처음에만 렌더링2")
  },[])

  //3-1. 카운트 변수 변할때 렌더링이 된다.
  useEffect(() => {
    console.log("count1 변할때 렌더링1")
  },[count])

  //3-2. 항상 렌더링이 된다.
  useEffect(() => {
    console.log("count2 변할때 렌더링2")
  },[count2])

  function multiple() {
    setCount2((prevValue) => prevValue*2)
  }

  function increase() {
    setCount(count+1);
    //setCount((이전값) => 이전값+1);
  }

  function decrease() {
    setCount(count-1);
    //setCount((이전값) => 이전값-1);
  }
  

  return (
    <div className="container text-center mt-3">
      <h1>React Hooks</h1>
      <hr/>
      <h4>현재값은 : {count}</h4>
      <button 
      className="btn btn-primary me-3"
      onClick={increase}>
        증가
      </button>
      <button 
      className="btn btn-primary me-3"
      onClick={decrease}>
        감소
      </button>
      <h4>현재값은 : {count2}</h4>
      <button 
      className="btn btn-primary"
      onClick={multiple}>
          X2
      </button>
    </div>
  )
}

export default App;


function Child(props) {
  const 사진주소 = props.path;
  const 사진이름 = props.name;
  return (
      <div className="col d-flex justify-content-center">
      <div className="card" style={{width: "18rem"}}>
          <img src={사진주소} className="card-img-top" alt="..."/>
          <div className="card-body">
              <p className="card-text">{사진이름}</p>
          </div>
          </div>
          </div>
  )
}

export default Child;


// prevValue = [{A},{B},{C},{D}]
// ...prevValue = {A},{B},{C},{D}
// tempObject = {E}
// [...prevValue, tempObject] = [{A},{B},{C},{D},{E}]
// 새로운 배열 탄생!