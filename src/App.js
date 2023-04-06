
import './App.css';
import Example from './Components/Example';
import Arraymap from './Components/Arraymap';
import Arrfilter from './Components/Arrfilter';
import Taskimage from './Components/Taskimage';
import Usestate from './Components/Usestate';
import UsestateTask from './Components/UsestateTask';
import UseStImgTask from './Components/UseStImgTask';
import UsestCss from './Components/UsestCssTask';
import Useshowhidebtn from './Components/Useshowhidebtn';
import Changee from './Components/Changee';


function App() {
const abc=" age of";
  return (
    <div className="App" >
      {/* <Arraymap/> */}
      {/* <Arrfilter/> */}
      <Useshowhidebtn/>
      <Taskimage/>
      <Usestate/>
      <UsestateTask/>
      <UseStImgTask/>
      <UsestCss/>
      <Changee/>
    {/* <Example fname={abc} age="26"/>
    <Example fname="xyz" age="30"/> */}
    </div>
  );
}

export default App;
