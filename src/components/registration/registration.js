import './registration.css'
import {useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate=useNavigate()
    const [inputs, setInputs] = useState({
        name:null,
        age:null
    });
    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs({...inputs,[name]:value})

    }
    const registerPlayer = (event) => {
        event.preventDefault();
      const data={
          name:inputs.name,
          age:parseInt(inputs.age)
      }


        console.log(data)
        axios.post('/player-registration',data).then(res=>{
            setInputs({})
            if (res.data.responseCode===1){
                localStorage.setItem("player_name",data.name)
                localStorage.setItem("player_number",res.data.playerNumber)

                swal("success",res.data.message,"success")
                navigate("/game")
            }else {
                swal("Error",res.data.message,"error")
            }
            // console.log(res)
        })
    }
    return (
        <div className="reg-parent">
            <div className="reg-container">
                <form className="reg-form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" required={true} onChange={handleInputChange}
                               value={inputs.name || ''} placeholder="Enter your name"/>
                    </div>
                    <div className="field">
                        <label>Age</label>
                        <input type="number" name="age" required onChange={handleInputChange}
                               value={inputs.age || ''} placeholder="Enter your age"/>
                    </div>
                    <div className="field">
                        <button type="submit" onClick={registerPlayer} value="Register ">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Registration