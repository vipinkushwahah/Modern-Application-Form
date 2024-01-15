import './application.css'

import { useState } from 'react'

const Application = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isinfoactive, setinfoactive] = useState('true')
    const [info, setinfo] = useState({ name: '', email: '', contect: '', date: '', male: '', female: '', teansgender: '', resume: '', url: '', textarea: '', password: "" })
    const handle = (name, event) => {
        
        if(name==="resume"){
            console.log(event.target.files)
        }
        setinfo((prv) => {
            return {
                ...prv,
                [name]: event.target.value
            }
        })
    };

    const signin = () => {
        console.log(info)
        setinfo("signin")
    }


    const handelinfoclick = () => {
        setinfoactive(false);
    };

    const handelsigninclick = () => {
        setinfoactive(true);
    };

    return (
        <div className={`container ${isinfoactive ? 'active' : 'false'}`}>

            <div className='hadder sign-in'>
                <form>
                    <div className='heading'>
                        <h1>Application-Form</h1>
                    </div>

                    <div>
                        <label className='inline'>Enter Name</label><br />
                        <input type='text' placeholder='Name' onChange={(e) => handle("name", e)} />
                    </div>
                    <div>
                        <label>Enter E-mail </label><br />
                        <input type='text' placeholder='E-mail' onChange={(e) => handle("email", e)} />
                    </div>
                    <div>
                        <label className='outline'>Contect Number</label><br />
                        <input type='contect' name='contect' placeholder='Contect' onChange={(e) => handle("contect", e)} />
                    </div>
                    <div>
                        <label>Enter D.O.B</label><br />
                        <input type='DATE' placeholder='date' onChange={(e) => handle("date", e)} />
                    </div>
                    <div>
                        <label>Enter password</label><br />
                        <input
                            placeholder='Password'
                            id="pass"
                            type={
                                showPassword ? "text" : "password"
                            }
                            value={info.password}
                            onChange={(e) =>
                                handle("password", e)
                            }
                        />
                        <br />
                        <label for="check">Show Password</label>

                        <input
                            id="check"
                            type="checkbox"
                            value={showPassword}
                            onChange={() =>
                                setShowPassword((prev) => !prev)
                            }
                        />
                    </div>
                    <div className='gender'>
                        <label>Gender</label>
                        <br />
                        Male<input type='radio' name='gender' onChange={(e) => handle("male", e)} />
                        Female<input type='radio' name='gender' onChange={(e) => handle("female", e)} />
                        other<input type='radio' name='gender' onChange={(e) => handle("teansgender", e)} />
                    </div>
                    <div className='resume'>
                        upload resume <br /><input type='file' required onChange={(e) => handle("resume", e)} />
                    </div>
                    <div className='url'>
                        Enter URL <br /> <input type='url' placeholder='url' name='url' onChange={(e) => handle("url", e)} />
                    </div>
                    <div >
                        <textarea cols={30} rows={4} required placeholder='Describe yourself in your own words' onChange={(e) => handle("textarea", e)} />
                    </div>
                    <div className='submit'>
                        <a href='https://zapier.com/blog/best-ai-website-builder/'  target="blank">
                        <button type="button" onClick={signin}>Sign-In</button>
                        </a>
                    </div>
                </form>
            </div>
            <div className='hadder info'>
                <div className='title'>
                    <h3>Information about the apllcation form</h3>
                </div>
                <div className='text'>
                    <p>This apllication form was been made to help the user to creat an id. to
                        get an access to our page info and lern new AI tools to fit in the world of AI.
                        which is gonna be amazing amd futuristic world full of artificial inteligence.
                        after geting an access to our page we can asure you that you will get success and
                        become a man which the socity and the world wants you to be.thats all we want to
                        say. </p>
                </div>
                <div className='image'>
                    <img src='https://media.istockphoto.com/id/1206796363/photo/ai-machine-learning-hands-of-robot-and-human-touching-on-big-data-network-connection.jpg?s=612x612&w=0&k=20&c=xIX5Bz7h50B83cCZG_gXkyZSOu-mG93DtOcNK7RNEAo=' alt='AI' />
                </div>
            </div>
            <div className='toggel-container'>
                <div className='toggel'>
                    <div className='toggel-panel toggel-left'>
                        <h2>Hey buddy are you qurious</h2>
                        <p>if you like to explore about us and the form than click on the button provided below. </p>
                        <button type='button' className='hidden' onClick={handelinfoclick}>Info</button>
                    </div>
                    <div className='toggel-panel toggel-rigth'>
                        <h1>Hey buddy</h1>
                        <p>welcome back buddy it looks like you are willing to fill the form
                            if yes then click the button provided below.
                        </p>
                        <button type='button' className='hidden' onClick={handelsigninclick}>Sign-In</button>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Application