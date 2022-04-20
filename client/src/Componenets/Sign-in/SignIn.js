/** @format */

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { LoginWrapper } from "./styles/sign-in.styled";
import Container from "react-bootstrap/Container";
import { FaLock } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../Hooks/axios";
import checkCircle from "../../Assets/imgs/checkCircle.gif";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const SignIn = ({ user }) => {
	const { auth, setAuth } = useContext(AuthContext);
	const [data, setData] = useState({});
	const emailRefrence = useRef();
	const errRefrence = useRef();
	const navigate = useNavigate();
	const [email, setEmail] = useState("sameh@gmail.com");
	const [password, setPassword] = useState("sameh");
	const [errorMsg, setErrorMsg] = useState("");
	const [succesMsg, setSuccessMsg] = useState("");

	// handle cookies
	const [cookies, setCookie] = useCookies([]);

	// set ref focus for screen readers

	useEffect(() => {
		emailRefrence?.current?.focus();
	}, []);

	// set the error message
	useEffect(() => {
		setErrorMsg("");
	}, [email, password]);

	// handle form submit and fetch login
	const SubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`/api/auth/login/`,
				{
					email: email,
					password: password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			console.log(response);
			const accessToken = response?.data?.accessToken;
			const username = response?.data?.username;
			const userID = response?.data?._id;
			console.log(response);
			if (username && password && accessToken) {
				setAuth(response?.data);
				setCookie("token", accessToken);
				setCookie("id", userID);
				setSuccessMsg(true);
				setEmail("");
				setPassword("");
				setTimeout(() => navigate("/"), 3600);
			}
		} catch (err) {
			if (!err?.response) {
				setErrorMsg("no server running");
			} else if (err.response?.status === 401) {
				setErrorMsg("wrong email or password");
			} else {
				setErrorMsg("failed to login");
			}
			errRefrence?.current?.focus();
		}
	};

	return (
		<>
			<LoginWrapper>
				<Container className='container'>
					<h1>Sign In</h1>
					{succesMsg ? (
						<section class='successLogin'>
							<img src={checkCircle} alt='check circle' />
							<h1>Login successfully</h1>
						</section>
					) : (
						<Form onSubmit={SubmitHandler}>
							<InputGroup className='mb-3'>
								<InputGroup.Text id='email'>
									<IoMdMailOpen />
								</InputGroup.Text>
								<FormControl
									required
									type='email'
									ref={emailRefrence}
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									placeholder='Email'
									aria-label='Email'
									aria-describedby='email'
									autoComplete='off'
								/>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text id='password'>
									<FaLock />
								</InputGroup.Text>
								<FormControl
									required
									type='password'
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Password'
									aria-label='Password'
									aria-describedby='password'
								/>
							</InputGroup>
							{/*In  register only i think */}
							{/* <Form.Group
								className='mb-3 checkTerms'
								controlId='formBasicCheckbox'
							>
								<Form.Check type='checkbox' required />I read and agree to{" "}
								<Link to='/'>Terms & Conditions</Link>
							</Form.Group> */}
							<Button className='LoginBtn' type='submit'>
								Sign In
							</Button>
							{errorMsg && (
								<p
									ref={errRefrence}
									className={errorMsg ? "errorMsg" : "d-none"}
									aria-live='assertive'
								>
									{errorMsg}
								</p>
							)}
						</Form>
					)}
				</Container>
			</LoginWrapper>
		</>
	);
};

export default SignIn;
