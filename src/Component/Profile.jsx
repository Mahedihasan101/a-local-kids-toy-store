import { updateProfile } from 'firebase/auth';
import  { use, useEffect, useState } from 'react';
import { AuthContext } from '../Povider/AuthProvider';
import { Helmet } from 'react-helmet';

const Profile = () => {
     const { user,loading } = use(AuthContext)

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
   useEffect(() => {
    if (user) {
      setName(user?.displayName || "");
      setPhotoURL(user?.photoURL || "");
    }
  }, [user]);

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
   if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading your profile...</p>
      </div>
    );
  }

  

  return (
    
   <div>
    <Helmet>
      <title>MY Profile</title>
    </Helmet>
     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }} className='border-2 items-center flex flex-col'>
      <h2 className='font-bold text-4xl text-center mb-5'> MY Profile</h2>
      <img
        src={user?.photoURL || "https://via.placeholder.com/150"}
        alt="Profile"
        className='items-center'
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <p> {user?.displayName}</p>
      <p> {user?.email}</p>

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
          <label>P. URL:</label>
          <input
          className="border-2 ml-2"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>

        <button className='btn btn-primary flex mx-auto' type="submit" style={{ marginTop: "10px" }}>
          Save Changes
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
   </div>
  );
};


export default Profile;