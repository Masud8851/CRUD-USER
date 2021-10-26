import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [bioDatas, setBioDatas] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/bioDatas")
			.then((res) => res.json())
			.then((data) => setBioDatas(data));
	}, []);

	const handleDelete = (id) => {
		fetch(`http://localhost:5000/bioDatas/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert("Done");
					const remainData = bioDatas.filter((user) => user._id !== id);
					setBioDatas(remainData);
				}
			});
	};

	return (
		<div>
			<h1>Users : {bioDatas.length}</h1>
			<ul>
				{bioDatas.map((bioData) => (
					<li key={bioData._id}>
						{" "}
						{bioData._id} {bioData.name} {bioData.email}
						<Link to={`/updateUser/${bioData._id}`}>Update</Link>
						<button onClick={() => handleDelete(bioData._id)}>delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
