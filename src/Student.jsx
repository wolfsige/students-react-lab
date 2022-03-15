import Score from "./Score";

const Student = (props) => {
  return (
    <div>
      Name: {props.student.name}<br />
      Bio: {props.student.bio}
      {props.student.scores.map(score =>
        <Score key={score.score} score={score.score} date={score.date} />
      )}
      <br />
    </div>
  );
}

export default Student;