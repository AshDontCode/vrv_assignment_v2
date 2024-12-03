export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null;
  };
  
  export const getUserRole = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.role || "User"; 
  };
  