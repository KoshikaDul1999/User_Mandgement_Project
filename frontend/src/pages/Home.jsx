export default function Home() {
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
                        <tr>
                            <td>user id</td>
                            <td>user name</td>
                            <td>user email</td>
                            <td>user address</td>
                            <td>user mobile</td>
                            <td>edit , delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div> 
    )
}