import { updateProfile } from 'firebase/auth';
import  { use, useEffect, useState } from 'react';
import { AuthContext } from '../Povider/AuthProvider';

const Profile = () => {
     const { user } = use(AuthContext)

  const [name, setName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [message, setMessage] = useState("");
   useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);
   if (!user) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          Please log in to view your profile.
        </h2>
      </div>
    );
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Error updating profile: " + error.message);
    }
  };
  

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2 className='font-bold text-4xl'> MY Profile</h2>
      <img
        src={user.photoURL || "https://via.placeholder.com/150"}
        alt="Profile"
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>

      <form onSubmit={handleSave} style={{ marginTop: "20px" }}>
        <div>
          <label>Name:</label>
          <input
          className="border-2 ml-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className='mt-2'>
          <label>Photo URL:</label>
          <input
          className="border-2 ml-2"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>

        <button className='btn btn-primary' type="submit" style={{ marginTop: "10px" }}>
          Save Changes
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};


export default Profile;