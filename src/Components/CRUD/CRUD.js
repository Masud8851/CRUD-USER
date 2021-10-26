import React, { useRef } from "react";

const CRUD = () => {
	const getName = useRef();
	const getEmail = useRef();
	const getPassword = useRef();

	const handleAddUser = (e) => {
		e.preventDefault();
		const name = getName.current.value;
		const email = getEmail.current.value;
		const password = getPassword.current.value;

		const newUSer = { name, email, password };

		fetch("http://localhost:5000/bioDatas", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newUSer),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert("Successfully added the user.");
					e.target.reset();
				}
			});
	};

	return (
		<div>
			<h1>CRUD Operation</h1>
			<form onSubmit={handleAddUser}>
				<input type="text" ref={getName} placeholder="name" /> <br />
				<input type="email" ref={getEmail} placeholder="email" /> <br />
				<input type="password" ref={getPassword} placeholder="password" />{" "}
				<br />
				<input type="submit" value="Add" />
			</form>
			<br /> <br />
			<hr />
			<br />
			<button>Go to Home</button>
		</div>
	);
};

export default CRUD;
