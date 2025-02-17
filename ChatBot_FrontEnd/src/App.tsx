import { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "./Message";
const submitelement = <FontAwesomeIcon icon={faPaperPlane} />;

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="screen">
      <section className="largechatsection">
        <section className="chat">
          <Message message="Test" isUser={true}></Message>
          <Message message="That test worked!" isUser={false}></Message>
        </section>
        <section className="inputbar">
          <form>
            <input type="text" id="inputbar" name="inputbar"></input>
            <button id="submit">{submitelement}</button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default App;
