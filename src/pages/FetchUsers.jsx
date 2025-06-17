import { useEffect, useState } from 'react';

function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Async function to fetch users
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    // Call the function once when component loads
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <p className="p-4">Loading users...</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Fetched Users</h2>
            <ul className="space-y-2">
                {users.map(user => (
                    <li key={user.id} className="p-2 border rounded">
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-sm">{user.address.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchUsers;
