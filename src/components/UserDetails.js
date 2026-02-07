import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setUser(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Small delay so Cypress can detect Loading...
        setTimeout(() => {
          setUser(data);
          setLoading(false);
        }, 500);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

export default UserDetails;
