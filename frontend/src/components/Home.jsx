import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { api } from '../constant';

const Home = () => {
  
  const [users, setUsers] = useState([]); // this state is to get all of the users
  const [render, setRender] = useState(false); // this state is used to render the state only when its gets change and we have not to reload the page again and again
  const [inputData, SetInputData] = useState({
    // this state is to get the all form fields
    name: '',
    email: '',
    age: '',
  });
 

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${api}/api/v1/users`);
      setUsers(res.data);
    };
    getData();
  }, [render]);

  const changeFormData = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    SetInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${api}/api/v1/users`, inputData);
    setRender(true);
    SetInputData({
      name: '',
      email: '',
      age: '',
    });
  };
  const handelDelete = async (id) => {
    await axios.delete(`${api}/api/v1/users/${id}`);
    const newUsers = users.filter((item) => {
      return item._id !== id;
    });
    setUsers(newUsers);
    //setRender(true); // agar isko karenge bina newuser create kiye toh bhi shi chal rha h
  };

  console.log(users);
  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="background">
              <h1 className="text-white text-center m-4">CRUD APP</h1>
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  value={inputData.name}
                  onChange={changeFormData}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  value={inputData.email}
                  onChange={changeFormData}
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Age
                </label>
                <input
                  name="age"
                  value={inputData.age}
                  onChange={changeFormData}
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  // <TableData user={user} index={index} />
                  <tr key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/edit/${user._id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handelDelete(user._id)}
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
      </div>
    </>
  );
};

export default Home;
