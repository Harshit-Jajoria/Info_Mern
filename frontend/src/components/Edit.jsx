import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: 'Harshit',
    email: 'harshit@gmail.com',
    age: '20',              
  });
  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/users/single/${id}`
      );  
      setInputData(res.data);   
    };
    getAllData();
  }, [id]);

  const handleEditData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/v1/users/${id}`, inputData);
    navigate('/');
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div style={{ backgroundColor: 'blue' }}>
              <h1 className="text-white text-center mt-2">Update</h1>
            </div>
          </div>
          <div className="col-md-12">
            <form onSubmit={handleEditData}>
              <div className="mb-3">
                <label htmlFor="exampleinputDataEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={inputData.name}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="form-control"
                  id="exampleinputDataEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleinputDataPassword1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  name="email"
                  value={inputData.email}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="email"
                  className="form-control"
                  id="exampleinputDataPassword1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleinputDataPassword1"
                  className="form-label"
                >
                  Age
                </label>
                <input
                  value={inputData.age}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="age"
                  type="number"
                  className="form-control"
                  id="exampleinputDataPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                update
              </button>
            </form>
          </div>
        </div>
        <button onClick={() => navigate('/')} className="btn btn-info mt-2">
          Go To Home
        </button>
      </div>
    </>
  );
};

export default Edit;
