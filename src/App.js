import './App.css';
import { UserForm } from './Components/TaksValid1';
import { NameForm } from './Components/Task1';
import { EssayForm } from './Components/Task2';
import { FlavorForm } from './Components/Task3';
import { FileInput } from './Components/Task4Ref';
import { CustomTextInput } from './Components/Task5Ref2';
import { CustomTextInput2 } from './Components/Task6Ref3';
import { Calculator } from './Components/Task7State-up';

function App() {
  return (
    <div>
    {/* <NameForm/> */}
    {/* <EssayForm/> */}

    {/* <FlavorForm/> */}
    {/* <UserForm /> */}

    {/* <FileInput/> */}
    <CustomTextInput/>
    {/* <CustomTextInput2/> */}


     {/* Подъем состояния */}
     {/* https://ru.legacy.reactjs.org/docs/lifting-state-up.html */}
      
      {/* <Calculator/> */}
      
    </div>
  );
}

export default App;
