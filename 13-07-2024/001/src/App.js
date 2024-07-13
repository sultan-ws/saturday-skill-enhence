import { useState } from "react";


function App() {
 const [inpType, setType] = useState('password');
 const [btnText, setBtnText] = useState('Show');
 const [mdalPosition, setPosition] = useState('-50%');

 const handleInp = ()=>{
  if(btnText === 'Show'){
    setType('text');
    setBtnText('Hide')
  }
  else{
    setType('password');
    setBtnText('Show')
  }

  
 };

  return (
    <div className="App">
      <input type={inpType}/>
      <button onClick={handleInp}>{btnText}</button>
      <button onClick={()=>{ setPosition('50%')}}>Get MOdal</button>
      <div className="modal" onClick={()=>{setPosition('-50%')}} style={{top:mdalPosition}}></div>
    </div>
  );
}

export default App;
