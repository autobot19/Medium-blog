import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {signupInput} from "../../../common/src/index"
import axios from "axios";
import { BACKEND_URL } from "../config";


const Auth = ({type}: {type: "signup" | "signin"}) => {
  const navigate = useNavigate();
const [ postInputs , setPostInputs]= useState<signupInput>({
  name: "",
  username: "",
  password: ""
})

async function sendRequest(){
  try{
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"? "signup" : "signin"}`, postInputs)
    const jwt = response.data;
    localStorage.setItem("token",jwt)
    navigate("/blogs")
  }catch(e){

  }

}

  return <div className=" h-screen flex justify-center flex-col">
    <div className="flex justify-center">
      <div>
        <div className="px-10">
      <div className="text-3xl font-extrabold">
        Create an account
      </div>
      <div className="text-slate-400">
        {type === "signin"? "Don't have account?" : "Already have an account?"} 
         <Link className="underline pl-2" to={type === "signin"? "/signup" : "/signin"}>
         {type === "signin"? "Sign up" : "Sign in"}
         </Link>   
      </div>
      </div>
      <div className="pt-8">
     {type === "signup"? <LabelledInput label="Name" placeholder="John doe.." onChange={(e)=>{
        setPostInputs({
          ...postInputs,
          name: e.target.value
        })
      }} /> : null}
      <LabelledInput label="Username" placeholder="johnDoe@gmail.com" onChange={(e)=>{
        setPostInputs({
          ...postInputs,
          username: e.target.value
        })
      }}/>
      <LabelledInput label="Password" type={"password"} placeholder="12345" onChange={(e)=>{
        setPostInputs({
          ...postInputs,
          password: e.target.value
        })
      }}/>
      <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
       focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
        dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup"? "Sign up": "Sign in"}</button>
    </div>
    </div>
     </div>
  </div>
   
}

export default Auth;

interface LabelledInputType {
      label: string;
      placeholder: string;
      onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
      type? : string;
}

function LabelledInput({label , placeholder, type , onChange}: LabelledInputType){
  return <div>
  <label  className="block mb-2 text-sm font-semibold text-black pt-2">{label}</label>
  <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
</div>
}