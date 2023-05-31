import './App.css';
import Header from './Header/Header';
import SearchFilter from './SearchSection/SearchFilter';

function App() {
  return (
    <>
    <Header/>
    <SearchFilter/>
    <div style={{width:"100%", backgroundColor:"red", minHeight:"70dvh", display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap", gap:"2rem"}}>
      <div style={{width:"20rem", height:'30rem', backgroundColor:"black", marginBlock:"1rem", color:"white"}}>CARD</div>
      <div style={{width:"20rem", height:'30rem', backgroundColor:"black", marginBlock:"1rem", color:"white"}}>CARD</div>
      <div style={{width:"20rem", height:'30rem', backgroundColor:"black", marginBlock:"1rem", color:"white"}}>CARD</div>
      <div style={{width:"20rem", height:'30rem', backgroundColor:"black", marginBlock:"1rem", color:"white"}}>CARD</div>
      <div style={{width:"20rem", height:'30rem', backgroundColor:"black", marginBlock:"1rem", color:"white"}}>CARD</div>
      <div style={{width:"20rem", height:'30rem', backgroundColor:"black", marginBlock:"1rem", color:"white"}}>CARD</div>
      <div style={{width:"20rem", height:'30rem', backgroundColor:"black", marginBlock:"1rem", color:"white"}}>CARD</div>
      <div style={{width:"20rem", height:'30rem', backgroundColor:"black", marginBlock:"1rem", color:"white"}}>CARD</div>
    </div>
    </>
  );
}

export default App;
