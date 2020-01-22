import React from "react";
import "./styles.css";
import { Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterAction";
import { loggedin } from "./actions/isLoggedIn";

function App() {
  const counter = useSelector(state => state.count);
  const Login = useSelector(state => state.Login);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>The App</h1>
        <p>Counter:{counter}</p>

        <Button
          className="ui green button"
          onClick={() => dispatch(increment(increment))}
        >
          +
        </Button>
        <Button
          className="ui red button"
          onClick={() => dispatch(decrement(decrement))}
        >
          -
        </Button>
      </div>
      <div>
        {!Login ? (
          <button
            style={{ margin: "20px" }}
            className="ui inverted blue button"
            onClick={() => dispatch(loggedin())}
          >
            Login
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default App;
