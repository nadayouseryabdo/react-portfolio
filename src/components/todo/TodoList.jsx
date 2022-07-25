import { useDispatch, useSelector } from 'react-redux'
// import { DeleteOneTodo } from '../../redux/oldredux'
import { DeleteOneTodo } from '../../redux/features/todoSlice';
import image from '../../assets/images/todoEnpty.jpg'


const TodoList = () => {
  const todos = useSelector(state => state.tReducer.todos)
  console.log(todos)
  const dispatch = useDispatch()

  const deleteTodo = (index) => {
    dispatch(DeleteOneTodo(index))
  }
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <>
            <div key={i} className=" d-flex align-items-center text-start pe-3 w-75 mx-auto mt-3 border border-success">
              <ul className="list-group w-100">
                <li className="list-group-item border-0">
                  <div className="text">
                    <p className="fw-light fs-6 text-decoration-underline text-center text-success">ToDo no.{i+1}</p>
                    <p className="fw-normal">Title : {todo.title}</p>
                    <p className="fw-normal">Content : {todo.content}</p>
                  </div>
                </li>
              </ul>
              <button className="btn btn-danger btn ms-auto " onClick={() => deleteTodo(i)}>x</button>
            </div>
            </>
        );
      })
    ) : (
      <img className='w-50' src={image} alt="" />
    );

  return (
    <div className="text-left">
      {todosList}
    </div>
  );
};

export default TodoList;
