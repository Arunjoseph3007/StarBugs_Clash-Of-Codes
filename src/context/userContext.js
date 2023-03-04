import axios from "@/libs/axios";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
      const { data } = await axios.get("/accounts/MyUser/" + userId + "/");
      setUser({
        userName: data.username,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        dob: data.dob,
        bio: data.bio,
        photoUrl: process.env.NEXT_PUBLIC_API + data.profile_pic,
        userId: data.user_id,
      });
    } catch (e) {
      setUser(null);
    }
  };

  const login =  (res) => {
    try {
      

      refresh();

      return { ...res.data, success: true };
    } catch (error) {
      toast.error("Wrong Credentials");
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
      value={{ user, setUser, loading, error, register, login, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useUser = () => useContext(AuthContext);
