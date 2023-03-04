import "./App.css";
import Button from "react-bootstrap/Button";
import React from "react";
import _ from "lodash";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  const [user, setUser] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");

  socket.on("welcome", (message) => {
    console.log(message);
  });

  socket.on("newUser", (data) => {
    setUsers(data.users);
    setMessages(data.messages);
  });

  socket.on("newMessage", (message) => {
    const newMessages = _.cloneDeep(messages);
    newMessages.push(message);
    setMessages(newMessages);
  });

  function loginButton(e) {
    e.preventDefault();
    if (input !== "") {
      console.log("Entra");
      setUser(input);
      const newUsers = _.cloneDeep(users);
      newUsers.push(input);
      setUsers(newUsers);
      socket.emit("newUser", input);
    }
  }

  function handleSubmitChat(e) {
    e.preventDefault();
    if (message !== "") {
      const newMessages = _.cloneDeep(messages);
      const newMessage = { user, message };
      newMessages.push(newMessage);
      setMessages(newMessages);
      setMessage("");
      socket.emit("newMessage", newMessage);
    }
  }

  const login = (
    <div className='login'>
      <h2 className='login__title'>Ingreso</h2>
      <form className='login__form'>
        <div className='login__form-group'>
          <label className='login__form-group-label'>
            <span>🧑🏻 Usuario</span>
          </label>
          <input
            type='text'
            placeholder='Escriba el usuario'
            onChange={(e) => setInput(e.target.value)}
            className='login__text-input'
          />
        </div>
        <Button className='login__login-button' variant='primary' onClick={loginButton}>
          Login
        </Button>
      </form>
    </div>
  );

  const chat = (
    <div className='principal'>
      <div className='panel1'>
        <div className='video'>
          {messages.length > 0 &&
            messages.map((chat, index) => {
              return (
                <p
                  key={`message-${index}`}
                  className={chat.user === user ? "me" : "others"}
                  id={chat.userType}
                >
                  {`${chat.user}: ${chat.message}`}
                </p>
              );
            })}
        </div>
        <div className='chat'>
          <form onSubmit={handleSubmitChat} className='chat-form'>
            <label className='form-label'>Mensaje</label>
            <input
              type='text'
              placeholder='Escriba su mensaje'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='form-control chat__text-input'
            />
            <Button className='chat__send-button' variant='primary' type='submit'>
              Enviar
            </Button>
          </form>
        </div>
      </div>
      <div className='panel2'>
        <div className='chats'>
          <h2>Chat users</h2>
          {users.map((user, index) => {
            return <div key={`user-${index}`}>{user}</div>;
          })}
        </div>
        <div className='userInformation'>
          <h3>Usuario</h3>
          <p>{user}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className='App'>
      <header className='App-header'>{user === "" ? login : chat}</header>
    </div>
  );
}

export default App;
