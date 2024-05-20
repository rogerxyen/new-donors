import React, { useState } from 'react';

const DonorForm = ({ addDonor }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const donorData = {
      id: Date.now(),
      name,
      email,
      photo,
      description,
      approved: false
    };
    addDonor(donorData);
    setName('');
    setEmail('');
    setPhoto(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DonorForm;
