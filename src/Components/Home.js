import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://react-project-2e7b8-default-rtdb.firebaseio.com/mobileinfo.json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then(resp => {


            const data1 = Object.values(resp.data)
            //    console.log(data1)
            setData(data1)
            // const display = data1.map(dat => {
            //     console.log(dat.file)
            // })
            // const dispalydata = display.getDownloadURL();
            // console.log(dispalydata)
            // console.log(Promise.all(dispalydata));

            //   console.log(resp.data) 
            // console.log(data)
        })

    }, [])

    //     const fetchdata = () => {
    //         axios.get("https://react-project-2e7b8-default-rtdb.firebaseio.com/mobileinfo.json").then(resp => {


    //             const data1 = Object.values(resp.data)
    //             //    console.log(data1)
    //             setData(data1)
    //             const display = data1.map(dat => {
    //                 console.log(dat.file)
    //             })
    //         const dispalydata = display.getDownloadURL();
    //             console.log(dispalydata)
    //           return Promise.all(dispalydata);

    //     })
    // }

    // const urls =  fetchdata()
    // setData(urls);
    // console.log("inside .then() ", urls)


    return (
        <div>
            <h1>HomeComponent</h1>
            <center>
                <div className='container'>
                    <div className='row'>
                        {data.map((item, i) => (
                            <div className='col-md-4' style={{ padding: "5px" }}>
                                <div className='card' style={{ height: "25rem", width: "18rem", padding: "3px" }}>
                                    <img src={item.file} key={i} className="card-img-top imag" />
                                    <div className='card-body'>
                                        <h5 className='card-title'><b>Company:</b>{item.mobile}</h5>
                                        <div className='card-text'><b>Model:</b>{item.model}</div>
                                        <div className='card-text'><b>RS:</b>{item.price}</div>
                                        <button className='btn btn-info'>Order</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </center>

        </div>
    )
}

export default Home