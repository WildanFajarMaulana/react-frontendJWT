import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Login = () =>{
	const [email,setEmail]=React.useState("")
	const [password,setPassword]=React.useState("")
	const [msg,setMsg]=React.useState("")


	const navigate=useNavigate()

	const login = async (e)=>{
		e.preventDefault()
		try{
			await axios.post('http://localhost:5000/login',{
				email,
				password	
			})	
			navigate('/dashboard')
		}catch(e){
			if(e.response){
				setMsg(e.response.data.msg)
			}
		}
	}

	return (
		<>
		<section className="hero has-background-grey-light is-fullheight is-fullwidth">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-5-dekstop">
							<form className="box" onSubmit={login}>
								<p className="has-text-centered">{msg}</p>
								<div className="field mt-5">
									<label>Email or username</label>
									<div className="controls">
										<input type="text" className="input" placeholder="username or email" value={email} onChange={(e)=>setEmail(e.target.value)} />
									</div>
								</div>
								<div className="field mt-5">
									<label>Password</label>
									<div className="controls">
										<input type="password" className="input" placeholder="***" value={password} onChange={(e)=>setPassword(e.target.value)}/>
									</div>
								</div>
								<div className="field mt-5">
									<button className="button is-success is-fullwidth">Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default Login