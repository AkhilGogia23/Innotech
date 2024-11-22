import React, { useState, useEffect } from "react";
import './Profile.css'; // Import the CSS file

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate a fake user profile when the component mounts
  useEffect(() => {
    setTimeout(() => {
      const mockUserData = {
        userId: "12345",
        email: "johndoe@example.com",
        name: "John Doe",
        profilePicture: "/default-profile.png", // Placeholder for the profile picture
        rating: 4.5, // Mock rating (e.g., a user rating out of 5)
        bio: "Software developer with a passion for building web applications.",
        location: "New York, USA",
      };
      setUserData(mockUserData);
      setLoading(false); // Set loading to false once the data is set
    }, 1000); // Simulate a delay for loading
  }, []);

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading-placeholder">
          <div className="profile-picture-placeholder"></div>
          <div className="profile-details-placeholder">
            <div className="name-placeholder"></div>
            <div className="email-placeholder"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img
            src={userData.profilePicture || "/default-profile.png"}
            alt="Profile"
          />
        </div>
        <h2>Welcome, {userData.name}</h2>
        <div className="user-rating">
          <span>Rating: {userData.rating} ⭐</span>
        </div>
      </div>

      <div className="profile-details">
        <h3>About Me</h3>
        <p>{userData.bio}</p>

        <div className="user-info">
          <p><strong>User ID:</strong> {userData.userId}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Location:</strong> {userData.location}</p>
        </div>
      </div>

      <div className="profile-management">
        <button>Edit Profile</button>
        <button>Change Password</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Profile;