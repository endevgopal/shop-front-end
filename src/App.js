import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import Header from './components/header/Header';
import MainPage from './components/mainpage/MainPage';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPage />
        </div>  
      </Router>
      <ToastContainer />
    </DataProvider>
  );
}

export default App;
