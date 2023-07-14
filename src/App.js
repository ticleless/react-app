import './App.css';

function Header() {
  return (
    <header>
      <h1>React는 처음이야 끼요잇!</h1>
    </header>
  );
}

function Article() {
  return (
    <article>
      <p>너무나 설레자너 헤헷 히힛 호홍</p>
    </article>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Article></Article>
      <Article></Article>
    </div>
  );
    
}

export default App;
