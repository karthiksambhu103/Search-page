import React from "react";
import "./UserDetail.css";

export const UserDetail = ({ user, setSelectedUser }) => {
    const handleBackClick = () => {
      setSelectedUser(null); // Reset the selected user
    };
  
    return (
      <div className="user-detail">
        <button className="back-button" onClick={handleBackClick}>
          Back to Search
        </button>
        <h2>{user.name}</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
  
        <h3>Address:</h3>
        <p><strong>Street:</strong> {user.address.street}</p>
        <p><strong>Suite:</strong> {user.address.suite}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
  
        <h3>Company:</h3>
        <p><strong>Company Name:</strong> {user.company.name}</p>
        <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
        <p><strong>Business:</strong> {user.company.bs}</p>
      </div>
    );
  };