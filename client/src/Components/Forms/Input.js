import React from "react";
import styles from "./Input.module.css";
import InputMask from "react-input-mask";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {

  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      { name === "nascimento" ? (
        <InputMask
          mask={"99/99/9999"}
          id={name}
          name={name}
          type={type}
          className={styles.input}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
      
        />
      ) : (
        ""
      )
      
      }

      { name === "telefone" ? (
        <InputMask
          mask={"(99) 9 9999-9999"}
          id={name}
          name={name}
          type={type}
          className={styles.input}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
       
        />
      ) : (
        ""
      )}
      {name !== "nascimento" && name !== "telefone" ? (
        <input
          id={name}
          name={name}
          type={type}
          className={styles.input}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        ""
      )}

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
