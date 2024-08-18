

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
		loadUser();
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
					(u) => u.id !== user.id
				);
				setVendors(updatedUsers);
				toast.success("Successfully deleted.");
			}
		}
	}


export default UserList
