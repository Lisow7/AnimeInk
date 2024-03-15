import Picture from "../components/Picture";

const LoginRegister = () => {
  return (
    <>
      <h1 className="start">🔐LOGIN / REGISTER PAGE🔐</h1>
      <Picture />
      <p className="start">Login or Register here !</p>;
    </>
  );
};
/*

const LoginRegister = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };npm run

  const [checked, setChecked] = useState(true);
  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <form>
        <textarea value={value} onChange={handleChange} />
        <textarea value={value} onChange={handleChange} />
        <textarea value={value} onChange={handleChange} />
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        <button disable={!checked}>Envoyer</button>
      </form>
    </>
  );
};
*/

export default LoginRegister;
