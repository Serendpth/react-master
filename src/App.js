import { useState } from 'react';
import Inputs from './Input';
import {Routes,Route,Link} from "react-router-dom";
// Routes 컴포넌트는 여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할을 한다.
// Route 는 path속성에 경로, element속성에는 컴포넌트를 넣어 준다. 여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 *을 사용하면 된다.
// Link 는 <a> 태그로 대체됨

function App() {

  const [toDo,setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  const onSub = (e) => {
    e.preventDefault();
    
    if(toDo === "") {
      return;
    }
   
    setToDos(current => [toDo,...current]);
     setToDo("");
  }

  const Change = (e) => {
    setToDo(e.target.value);
  }


  return (
    <div>
      <h1>투두 리스트 입니다({toDos.length})</h1>
      <form onSubmit={onSub}>
        <input onChange={Change} value={toDo} type="text" placeholder='당신의 할일을 쓰세요.' />
        <button>등록하기</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => (
        <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>    
  );
}

export default App;
