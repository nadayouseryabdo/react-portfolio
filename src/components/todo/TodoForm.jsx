import { useState } from "react";
import { useDispatch } from 'react-redux'
// import { addNewTodo } from '../../redux/oldredux'
import { addNewTodo } from "../../redux/features/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (task) => {
    if(title && content){
      dispatch(addNewTodo(task))
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="border border-success w-50 mx-auto py-4">
      <h3 className="text-success mb-4">Add TODO</h3>
      <form onSubmit={handleSubmission}>
        <label htmlFor="">Title:</label><br />
        <input
          type="text"
          name="title"
          className="mb-3 w-75"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="">Content:</label><br />
        <textarea
          name="content"
          value={content}
          className=' w-75'
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="mt-4 mb-2 btn btn-success btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
