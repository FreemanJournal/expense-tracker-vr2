import logo from './logo.svg';
import './App.css';
import ExpenseTracker from "./component/MiniExpenseTracker/ExpenseTracker"
import { GlobalProvider } from './component/MiniExpenseTracker/context/GlobalContext';
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <ExpenseTracker />
      </GlobalProvider>
    </div>
  );
}

export default App;
