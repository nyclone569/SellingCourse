import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../../services/auth";
import { message } from "antd";
import { clearToken, clearUser, getUser, setToken, setUser } from "../../utils/token";
import { userService } from "../../services/user";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../config/path";

export const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, _setUser] = useState(getUser)
    const navigate = useNavigate()
    const {state} = useLocation()
    useEffect(() => {
        setUser(user || null)
    }, [user])

    const login = async (data) => {
        try{
            const res = await authService.login(data)
            if(res.data){
                setToken(res.data)
                await getProfile()
            }
        } catch(err){
            console.log(err)
            if(err?.response?.data?.message){
                message.error(err.response.data.message)
            }
        }
    }

    const getProfile = async () => {
        const user = await userService.getProfile()
        _setUser(user.data)
        message.success('Đăng nhập tài khoản thành công!')
        if(state?.redirect){
            navigate(state.redirect)
        } else {
            navigate(PATH.profile.index)
        }

        
    }

    const logout = () => {
        clearToken()
        clearUser()
        _setUser(null)
        message.success('Đăng xuất tài khoản thành công!')
    }

    return <AuthContext.Provider value={{user, login, logout, setUser: _setUser, getProfile}}>{children}</AuthContext.Provider>
}