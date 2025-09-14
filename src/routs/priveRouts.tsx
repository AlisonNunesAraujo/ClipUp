import { useState } from "react";
import Login from "../pages/login";
import StackNav from "./stackNav";


export default function PriveRouts() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(

    isLoggedIn ? <StackNav /> : <Login />

  )

}