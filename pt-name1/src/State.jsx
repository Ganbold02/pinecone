import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const styles = {
  wrapper: {
    minHeight: "100vh",
    width: 580,
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    height: "45px",
    width: "100%",
    paddingLeft: 30,
    paddingRight: 60,
    borderRadius: 50,
    boxShadow: "0 1px 6px 0 rgb(0 0 0 /38%)",
    border: 0,
  },
  plusIcon: {
    color: "darkcyan",
    fontSize: 20,
  },
  RIcon: {
    color: "red",
    fontSize: 20,
  },
  button: {
    padding: "12.5px 20px",
    lineHeight: "20px",
    margin: 0,
    background: "transparent",
    boxShadow: "none",
    border: 0,
    position: "absolute",
    right: 0,
  },
  form: {
    position: "relative",
    width: "100%",
    marginBottom: 40,
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  li: {
    borderBottom: "1px solid #eaeaea",
    padding: "17px 0",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.2rem",
  },
  check: {
    marginRight: 15,
  },
};
const RIcon = () => (
  <svg
    style={styles.RIcon}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
  </svg>
);
const PlusIcon = () => (
  <svg
    style={styles.plusIcon}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
  </svg>
);
export default function State() {
  const [todos, setTodos] = useState([
    { value: "egg", checked: false, editing: false },
    { value: "Bread", checked: true, editing: false },
    { value: "Ham", checked: false, editing: true },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input !== "") {
      const newList = [
        ...todos,
        { value: input, checked: false, editing: false },
      ];
      setTodos(newList);
      console.log(newList);
      setInput("");
    } else return;
  };
  // const ustgah = (b) => {
  //   console.log(b);
  // };

  // const delTodo = (e) => {
  //   // todos=['', 'asd', 'Ganbooold', 'Temuuulen']
  //   // console.log(e.target.textContent);
  //   let input1 = e.target.textContent;
  //   let filteredTodo = todos.filter((todo) => {
  //     return todo !== input1;
  //   });
  //   console.log(filteredTodo);
  //   setTodos(filteredTodo);
  // };
  const removeTodo = (index) => {
    setTodos(todos.filter((k, i) => i !== index));
  };
  const handCheck = (index) => {
    const newList = todos.map((todo, i) => {
      if (i === index) {
        const newTodo = { ...todo };
        newTodo.checked = !newTodo.checked;
        return newTodo;
      }
      return todo;
    });
    setTodos(newList);
  };
  return (
    <>
      <div style={styles.wrapper}>
        <nav>
          <h1 style={styles.h1}>todo</h1>
        </nav>
        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add todo"
          />

          <button style={styles.button} type={"submit"}>
            <PlusIcon />
          </button>
        </form>

        <ul style={styles.ul}>
          {todos.map((todo, index) => (
            <li style={styles.li} key={`list-item-${index}`}>
              <div>
                <input
                  type="checkbox"
                  style={styles.check}
                  checked={todo.checked}
                  onClick={() => {
                    handCheck(index);
                  }}
                />
                <span
                  style={{ textDecoration: todo.checked ? "line-through" : "" }}
                >
                  {todo.value}
                </span>
              </div>
              <div
                onClick={() => {
                  removeTodo(index);
                }}
              >
                <RIcon />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
