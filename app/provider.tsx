"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
     CreateNewUser()
  }, []);

  const [userDetail, setUserDetail] = useState(null)

  const CreateNewUser = async() => {
     const result = await axios.post('/api/user', {});
     console.log(result.data);
  }

  return (
   <UserDetailContext.Provider value={({userDetail, setUserDetail})}>
       <div>
         {children}
      </div>
   </UserDetailContext.Provider>
 
)
}

export default Provider;
