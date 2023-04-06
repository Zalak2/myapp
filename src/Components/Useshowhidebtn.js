import {useState} from 'react';

const App = () => {
  const [buttonText, setButtonText] = useState('Show');
  const [text1,setText1]=useState('');
  const [show,setShow]=useState(false); //to repeat show and hide text

  function click() {
   //to repeat show and hide text
    setShow(!show)
    {
        if(show === false)
        {
            setButtonText('Hide'); //for button text
            setText1("This is Demo")//for show and hide text
        }
        else{
            setButtonText('show'); //for button text
            setText1(" ")//for show and hide text
        }
    }

   

  }

  return (
    <div>
      <button onClick={click}>{buttonText}</button>
      <p>{text1}</p>
    </div>
  );
};

export default App;