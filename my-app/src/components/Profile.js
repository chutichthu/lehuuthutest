import "./Profile.css";
export default function Profile(props) {
  return (
    <div className="profile">
      <img className="avatar" src={props.avatar} alt="" />
      <p>Name : {props.name}</p>
      <button className="like">like</button>
    </div>
  );
}
