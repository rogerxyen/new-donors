import React from 'react';

const Feed = ({ donors, approveDonor }) => {
  return (
    <div>
      <h2>Donor Profiles</h2>
      {donors.filter(donor => donor.approved).map((donor) => (
        <div key={donor.id} className="donor-card">
          <img src={URL.createObjectURL(donor.photo)} alt={`${donor.name}'s photo`} />
          <h3>{donor.name}</h3>
          <p>{donor.email}</p>
          <p>{donor.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
