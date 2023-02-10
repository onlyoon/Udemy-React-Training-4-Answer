import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

export default function App() {
  return (
    <div className="App">
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}
