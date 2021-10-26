import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CRUD from "./Components/CRUD/CRUD";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import UpdateUser from "./Components/UpdateUser/UpdateUser";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/crud">
						<CRUD></CRUD>
					</Route>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/updateUser/:id">
						<UpdateUser></UpdateUser>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
