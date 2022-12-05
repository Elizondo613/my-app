import {useAuth} from "../context/Auth";
import {Navigate} from 'react-router-dom';

export function ProtectRoute({children}){
    const {user,loading}=useAuth();
    if(loading) return <p>Conectando con la app...</p>
    if(!user)return <Navigate to='/'/>
    return <>{children}</>
}