import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeUi from './components/HomeUi';
import AboutUi from './components/AboutUi';
import InvoiceUi from './components/InvoiceUi';
import AddUi from './components/AddUi';
import Navigation from './components/Navigation';
import UpdateUi from './components/UpdateUi';

function App() {
  return (
    <div >
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomeUi/>}/>
        <Route path='/home' element={<HomeUi/>}/>
        <Route path='/about' element={<AboutUi/>}/>
        <Route path='/invoice' element={<InvoiceUi/>}/>
        <Route path='/addInvoice' element={<AddUi/>}/>
        <Route path='/updateInvoice/:invoiceId' element={<UpdateUi/>}/>

        </Routes>
    </div>
  );
}

export default App;
