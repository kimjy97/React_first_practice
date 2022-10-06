/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  return <header>
    <div className='black-nav'>
    <h2><a href="/" style={{ color:'white', textDecoration:'none' }} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
      }}>{ props.title }</a></h2>
    </div>
  </header>
}

function Nav(props) {
  const lis = [];
  for (let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} style={{color:'black', textDecoration:'none'}} onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{ t.title }</a>
    </li>);
  }
  return <nav>
    <ul className='list'>
      {lis}
    </ul>
  </nav>
}

function Article(props) {
  return <article className='content'>
    <h2>{props.title}</h2>
    {props.contents}
  </article>
}

function App() {
  const [mode, setMode] = useState(0);
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'가을 코트 추천', body:'베이지 코트가 짱이야!'},
    {id:2, title:'서울 맛집 추천', body:'따뜻한 우동이 먹고싶다.'},
    {id:3, title:'11일부터 개강~~', body:'너무 설레지만 두렵다..ㅠㅠ'}
  ];

  let content = null;
  if (mode === 0) {
    content = <Article title='Welcome' contents='Hello, WEB'></Article>
  } else if (mode === 1) {
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        content = <Article title={topics[i].title} contents={topics[i].body}></Article>
      }
    }
  }


  return (
    <div>
      <Header title="ReactBlog" onChangeMode={() => {
        setMode(0);
        }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setMode(1);
        setId(id);
        }}></Nav>
      {content}
    </div>
  );
}

export default App;
