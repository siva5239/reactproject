import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Login = (props) => {
    //    const {email1,password1}=props
    //    console.log(email1)
    let navigate = useNavigate();
    const [details, setDetails] = useState([''])
    const [verifyuser, setVerifyuser] = useState({
        email2: "",
        password2: ""
    })
    const GetData = () => {
        axios.get("https://react-project-2e7b8-default-rtdb.firebaseio.com/postdata.json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then((res) => {

            // console.log(Object.values(res));
            const data1 = Object.values(res.data);

            // setDetails(data1)
            console.log(verifyuser.email2, verifyuser.password2)
            const display = data1.find((a) => {
                return a.email === verifyuser.email2 && a.password === verifyuser.password2

            })
            if (display?.email) {
                navigate('home')
            }

            console.log(display)
            // if(data1){
            //     navigate('home')
            // }

        })
    }

    function onChange(e) {
        setVerifyuser({ ...verifyuser, [e.target.name]: e.target.value })
        console.log(verifyuser)
    }
    // useEffect(() => {
    //     GetData()
    // }, [])
    // const MoovePostData=()=>{
    //    navigate('/postdata')
    // }
    const registerhere = () => {
        navigate('registration')
    }
    // const homedata=()=>{
    //         if(email1===email && password1===password){
    //            navigate('home') 
    //         } 
    // }

    return (
        <div>
            <div className='card dispaly'>
                <div className='card-header'>
                    <h2>Create account</h2>
                </div>
                <div>
                    <label>Email:</label>
                    <input name="email2" value={details.email2} onChange={onChange} type="email" className='form-control' placeholder="please enteremail" />
                </div>
                <div>
                    <label>Password:</label>
                    <input name="password2" value={details.password2} onChange={onChange} type="password" className='form-control' placeholder="please enterpassword" />
                </div>
                <div className='buttontop'>
                    <button className='btn btn-primary' onClick={GetData}>Login</button>
                </div>

                <div className='registerhere' >
                    <p >Don't have a account please<h5 onClick={registerhere}>RegisterHere?</h5></p>

                </div>
            </div>

        </div>
    )
}

export default Login