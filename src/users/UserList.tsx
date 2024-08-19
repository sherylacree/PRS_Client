import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import UserCard from "./UserCard";


function UserList() {
  const [users, setUsers] = useState<User[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadUsers() {
		setBusy(true);
		let data = await userAPI.list();
		setUsers(data);
		setBusy(false);
	}
	useEffect(() => {
		loadUsers();
	}, []);

	async function remove(user: User) {
		if (
			confirm(
				"Are you sure you want to delete this User?"
			)
		) {
			if (user.id) {
				await userAPI.delete(user.id);
				let updatedUsers = user.filter(
					(u: { id: number | undefined; }) => u.id !== user.id
				);
				setVendors(updatedUsers);
				toast.success("Successfully deleted.");
			}
		}
	}

return (
  <section className="d-flex flex-wrap gap-0">
{busy && (
  <div className="d-flex justify-content-evenly align-align-items-center w-100 vh-100">
<div className="spinner-border" role="status">
  <span> Loading . . . {""}</span>

</div>
  </div>
)}
{users.map((user)=> (
  
    <UserCard key={user.id} user={user} onRemove={remove}
  />
))}
  </section>
)
export default UserList;

  function setVendors(updatedUsers: void) {
    throw new Error("Function not implemented.");
  }
 