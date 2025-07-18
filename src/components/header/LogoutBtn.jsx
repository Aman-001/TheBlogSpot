import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth"
import {logout } from "../../store/authSlice"


function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout =  () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
        })
        .catch((error) => {
            console.error("Logout failed:", error);
        }       
);
  
    }
  return (
    <button className="inline-block px-6 py-2 bg-red-400 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
      onClick={handleLogout}>
      Logout
    </button>
  );
}   

export default LogoutBtn;