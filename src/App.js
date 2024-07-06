import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ProtectedRoutes from './Utils/ProtectedRoutes';

import Header from './Components/Header/Header'



import Home from './Pages/Home/Home';
import Sindalah from './Pages/Sindalah/Sindalah';

const App = () => {
  return (
    <div className="App">
        <Router>
        <Routes>
          {/* Non-protected routes */}
          <Route 
            path='/*'
            element={
              <>
                <Header/>
                <Routes>

                  {/* Managing the undefined routes */}
                  <Route path='*' element={<Navigate to='/' />} />
                
                  <Route element={<Home/>} path='/' />
                  <Route element={<Sindalah/>} path='/sindalah' />
                  
                </Routes>
                {/* <Footer/> */}
              </>
            } 

          />
          


          {/* Protected Routes */}
          <Route
            path='/user/*'  //Routes will start with /user/then_the_routes_given_below
            element={
              <>
                {/* <HeaderAuth/> */}
                <Routes>
                  <Route element={<ProtectedRoutes/>}> {/* Protected */}

                    {/*Managing the undefined routes */}
                    <Route path='*' element={<Navigate to='/' />} />

                    {/* <Route element={<Dashboard/>} path='/dashboard' /> */}
                    
                  </Route>
                </Routes>
              </>
            }
          />
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
