import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = async () => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      setUser(null);
      return;
    }

    try {
        const headers={
            headers: { 
                'Authorization': `Token ${localStorage.getItem("token")}`
              }
        }
      const { data } = await axios.get("http://coctrinity.pythonanywhere.com/login/profile-detail/" + userId + "/",headers);
      setUser({
        
        name:data[0].name,
        email: data[0].email,
        dob: data[0].dob,
        bio: data[0].about,
        gender:data[0].gender,
        is_verified:data[0].is_verify,
        photoUrl:  data[0].profile_pic,
        userId: data[0].user,
      });
      console.log(data,"Here");
    } catch (e) {
      setUser(null);
    }
  };

  const Login =  (res) => {
    try {
      

      refresh();

      return { ...res.data, success: true };
    } catch (error) {
      return { ...error, success: false };
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");

    setUser(null);
  };

  useEffect(() => {
    setLoading(true);
    refresh();
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, Login, logout,refresh }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useUser = () => useContext(AuthContext);
