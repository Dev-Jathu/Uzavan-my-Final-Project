import "./Form.css";
import React from "react";

function Form(props) {
 
  return (
    <div className="Form">
      <form>
        <div className="alighn">
          <label className={props.class}>{props.name}</label>
        </div>
        <div>
          <input
            type={props.type}
            className={props.classinput}
            placeholder={props.place}
            value={props.value}
            name={props.Name}
          />
        </div>
      </form>
    
    </div>
  );
}

export default Form;
