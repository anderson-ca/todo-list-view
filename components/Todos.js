import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Profile.module.scss";
import { useSession } from "next-auth/react";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todos, setTodos] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    handleFetchTodos(setTodos);
  }, [todos]);

  // useEffect(() => {
  //   console.log("-------> todos here ", todos);
  //   if (todos.length !== 0) {
  //     todos.map((t) => console.log(t.id));
  //   }
  // }, [todos]);

  // event.preventDefault();
  // try {
  //   await fetch('http://localhost:1337/todos', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ task }),
  //   });
  //   setTask('');
  // } catch (error) {
  //   console.error(error);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    setTitle(event.target[0].value);
    setDescription(event.target[1].value);

    setTodoList([
      ...todoList,
      {
        title: event.target[0].value,
        description: event.target[1].value,
        complete: false,
      },
    ]);

    event.target[0].value = "";
    event.target[1].value = "";
  };

  const handleCompleteTodo = (i) => {
    const filteredList = todoList.filter((item, index) => index !== i);
    console.log("my index ---> ", filteredList);
    setTodoList([...filteredList]);
  };

  // handle strapi API

  // get todos
  const handleFetchTodos = async (setData) => {
    const res = await fetch(
      "https://blooming-headland-56632.herokuapp.com/api/todos/"
    );
    const { data } = await res.json();
    // console.log("got my todos.. -> ", data);
    setData(data);
  };
  // add todo
  const handleAddTodo = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `https://blooming-headland-56632.herokuapp.com/api/todos/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            title: event.target[0].value,
            description: event.target[1].value,
          },
        }),
      }
    );

    event.target[0].value = "";
    event.target[1].value = "";

    console.log(res);
  };

  // delete todo
  const handleDeleteTodo = async (id) => {
    const res = await fetch(
      `https://blooming-headland-56632.herokuapp.com/api/todos/${id}/`,
      {
        method: "DELETE",
      }
    );

    console.log(res);
  };

  if (!session) {
    return (
      <div className="container">
        <div>
          <h3>todo form</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="bam" required />
            <input type="text" name="bum" required />
            <button type="submit">Submit</button>
          </form>
        </div>
        <h3>todo list</h3>
        <div className="listContainer">
          {todoList.length !== 0 ? (
            <>
              <ul>
                {todoList.map(({ title, description, complete }, index) => (
                  <li key={index}>
                    <div className="content">
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <button
                        type="button"
                        onClick={() => handleCompleteTodo(index)}
                      >
                        Done Son!
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h4>Your list is empty 📭</h4>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.conntainer}>
      <h1>Todo List</h1>

      <div>
        <h3>todo form</h3>
        <form onSubmit={handleAddTodo}>
          <input type="text" name="bam" required />
          <input type="text" name="bum" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {todos.length !== 0 ? (
          <ul>
            {todos.map((t, i) => (
              <li key={i}>
                <h4>{t.attributes.title}</h4>
                <p>{t.attributes.description}</p>
                <button onClick={() => handleDeleteTodo(t.id)}>
                  Done Son!
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p>empty</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Todos;
