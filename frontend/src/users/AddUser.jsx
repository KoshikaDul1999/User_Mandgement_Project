import { Link } from "react-router-dom";

export default function AddUser() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <form>
                        <div className="mb-3">
                            <label>
                                Name
                            </label>
                            <input type="text" className="form-control" placeholder="enter your name" />
                        </div>
                        <div className="mb-3">
                            <label>
                                E-mail
                            </label>
                            <input type="text" className="form-control" placeholder="enter your email" />
                        </div>
                        <div className="mb-3">
                            <label>
                                Address
                            </label>
                            <input type="text" className="form-control" placeholder="enter your address" />
                        </div>
                        <div className="mb-3">
                            <label>
                                Contact Number
                            </label>
                            <input type="text" className="form-control" placeholder="enter your mobile number" />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}