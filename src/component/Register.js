import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Register = () =>{
	const [name,setName]=React.useState("")
	const [email,setEmail]=React.useState("")
	const [password,setPassword]=React.useState("")
	const [confirmPassword,setConfirmPassword]=React.useState("")
	const [msg,setMsg]=React.useState("")


	const navigate=useNavigate()

	const register = async (e)=>{
		e.preventDefault()
		try{
			await axios.post('http://localhost:5000/users',{
				name,
				email,
				password,
				confirmPassword
			})	
			navigate('/')
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
							<form className="box" onSubmit={register}>
								<p className="has-text-centered">{msg}</p>
								<div className="field mt-5">
									<label>Name</label>
									<div className="controls">
										<input type="text" className="input" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
									</div>
								</div>
								<div className="field mt-5">
									<label>Email </label>
									<div className="controls">
										<input type="text" className="input" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
									</div>
								</div>
								<div className="field mt-5">
									<label>Password</label>
									<div className="controls">
										<input type="password" className="input" placeholder="***" value={password} onChange={(e)=>setPassword(e.target.value)}/>
									</div>
								</div>
								<div className="field mt-5">
									<label>Konfirmasi Password</label>
									<div className="controls">
										<input type="password" className="input" placeholder="***" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
									</div>
								</div>
								<div className="field mt-5">
									<button className="button is-success is-fullwidth">Register</button>
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

export default Register