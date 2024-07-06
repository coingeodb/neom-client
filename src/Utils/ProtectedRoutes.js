import {Outlet, Navigate} from 'react-router-dom'


const ProtectedRoutes=()=>{
    const auth={'token': false}
    localStorage.getItem('token') ? auth.token=true : auth.token=false;

    return(
        auth.token ? <Outlet/> : <Navigate to='/login' />
    )
}

export default ProtectedRoutes;