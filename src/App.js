import "./App.css";
import Todos from "./components/Todos";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

const App = () => {
	return (
		<div className='container'>
			<h1 className='text-center'>ToDo App in ReactJS</h1>
			<Todos />
		</div>
	);
};

export default App;
