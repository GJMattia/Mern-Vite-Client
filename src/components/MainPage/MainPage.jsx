import "./MainPage.css";

export default function MainPage({ user }) {
  console.log(user);
  return (
    <div className="MainPage">
      <p>Hello {user.name}</p>
      <p>Your email is {user.email}</p>

      <p>Created at {user.createdAt}</p>

      <p>
        Birthday: {user.birthday.mm}/{user.birthday.dd}/{user.birthday.yyyy}
      </p>
    </div>
  );
}
