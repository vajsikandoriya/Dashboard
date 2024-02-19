import './User.css'; 
import AddNew from './Components/AddNew';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <div className='add-user-main'>
          <AddNew />
      </div>
    </BrowserRouter>
  );
}

export default App;
