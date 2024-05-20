import React, { useState } from 'react';
import DonorForm from './components/DonorForm';
import Feed from './components/Feed';

const App = () => {
  const [donors, setDonors] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addDonor = (donor) => {
    setDonors([...donors, donor]);
    setShowForm(false);
  };

  const approveDonor = (id) => {
    setDonors(donors.map(donor => donor.id === id ? { ...donor, approved: true } : donor));
  };

  return (
    <div className="App">
      <h1>Donor Management</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Donor'}
      </button>
      {showForm && <DonorForm addDonor={addDonor} />}
      <Feed donors={donors} approveDonor={approveDonor} />
    </div>
  );
};

export default App;
