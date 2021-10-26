import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
	const { id } = useParams();
	const [bioData, setBioData] = useState({});
	useEffect(() => {
		fetch(`http://localhost:5000/biodatas/${id}`)
			.then((res) => res.json())
			.then((data) => setBioData(data));
	}, []);

	// Handel Name Change
	const handelName = (e) => {
		const changedName = e.target.value;
		const updatedUser = { ...bioData, name: changedName };
		setBioData(updatedUser);
	};
	const handleEmail = (e) => {
		const chengedEmail = e.target.value;
		const updatedUser = { ...bioData, email: chengedEmail };
		setBioData(updatedUser);
	};
	// Handle Update
	const handleUpdate = (e) => {
		fetch(`http://localhost:5000/biodatas/${id}`, {
			method: "put",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(bioData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert("Successfully Updated");
				}
			});

		e.preventDefault();
	};
	return (
		<div>
			<p>{id}</p>
			<h5>
				{bioData.name} :: {bioData.email}
			</h5>

			<form onSubmit={handleUpdate}>
				<input
					type="text"
					placeholder="Name"
					onChange={handelName}
					value={bioData.name || ""}
				/>
				<br />
				<input
					type="email"
					placeholder="Email"
					onChange={handleEmail}
					value={bioData.email || ""}
				/>
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default UpdateUser;
