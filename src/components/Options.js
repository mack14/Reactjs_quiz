function Options({ qustion, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {qustion.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === "answer" ? "answer" : ""} ${
            hasAnswered
              ? index === qustion.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
