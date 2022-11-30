import { useEffect } from "react";

const Composant = ({ id, value, handle }) => {
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const Validate = (value) => {
    var Valid = Number(value);
    return Valid == value ? "valid" : "invalid";
  };

  return (
    <>
      <input
        id="amount"
        label="Montant"
        type="text"
        className={Validate(value)}
        onChange={handle}
        value={value}
      />
      <span
        className="helper-text"
        data-error="erreur"
        data-succes="valide"
      ></span>
      <label htmlFor={id}> Montant </label>
    </>
  );
};

export default Composant;
