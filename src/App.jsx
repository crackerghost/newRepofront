import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [result,setResult] = useState("");
  axios.defaults.baseURL = "https://new-repo-eosin.vercel.app";

  // useEffect(() => {
  //   const getName = async () => {
  //     try {
  //       const res = await axios.post("/getName",{
  //         name: "Raj",
  //         age: 20,
  //       }, {
  //         headers: {
  //           Authorization: "raj",
  //           xcustom : "mycustom"
  //         },
  //         params: {
  //           id: "123@",
  //         },
  //       });
  //       setName(res.data.name);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getName();
  // }, [name]);

  const handleSubmit = (e)=>{
   e.preventDefault()
   const postData = async () => {
     try {
        const res = await axios.post("/createUser",{
          email: email,
          password: password,
        }
        )
        setResult(res.data.msg);
      } catch (error) {
        console.log(error);
      }
   }
   postData()

  }

  return (
    <div className="main">
     <form onSubmit={handleSubmit}>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
        <p>{result}</p>
        <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
