import React from 'react';
import './style.css';

export default class AdminLogin extends React.Component {
	render() {
		return (
			<div className="agile-login">
				<h1>Winter Login Form</h1>
				<div className="wrapper">
					<h2>Sign In</h2>
					<div className="w3ls-form">
						<form action="/" method="post">
							<label>Username</label>
							<input type="text" name="name" placeholder="Username" required/>
							<label>Password</label>
							<input type="text" name="password" placeholder="Password" required/>
							<a href="#" className="pass">Forgot Password ?</a>
							<input type="submit" value="Log In"/>
						</form>
					</div>

					<div className="agile-icons">
						<a href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a>
						<a href="#"><span className="fa fa-facebook"></span></a>
						<a href="#"><span className="fa fa-pinterest-p"></span></a>
					</div>
				</div>
				<br/>
					<div className="copyright">
						<p>© 2017 Winter Login. All rights reserved | Design by <a href="#">W3layouts</a></p>
					</div>
			</div>
		)
	}
}