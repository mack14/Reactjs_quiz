import Options from "./Options";
function Qustion({ qustion, dispatch, answer }) {
  //   console.log(qustion);
  return (
    <div>
      <h4>{qustion.question}</h4>
      <Options qustion={qustion} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Qustion;
