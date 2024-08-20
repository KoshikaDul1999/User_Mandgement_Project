import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        const result = await axios.delete(`http://localhost:8080/api/users/${id}`);
        loadUsers();
    }

    return (
       <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Address</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2"
                                        to={`/viewuser/${user.id}`}
                                    >
                                        View
                                    </Link>
                                    <Link className="btn btn-outline-primary mx-2"
                                        to={`/edituser/${user.id}`}
                                    >
                                        Edit
                                    </Link>

                                    <button className="btn btn-danger mx-2"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
       </div> 
    )
}