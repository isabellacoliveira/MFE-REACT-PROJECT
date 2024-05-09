import "./styles.css";

export default function Root(props) {
  return (
    <>
      <nav>
        {props.name} is mounted!
        <h1>FIAP FRONT-END MEETUP</h1>
        <h1>REACT APPLICATION IS RUNNING</h1>
        <a href="/">Link to Angular</a>
        <a href="vue">Link to Vue</a>
      </nav>
    </>
  );
}
