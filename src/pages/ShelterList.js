// src/pages/ShelterList.js

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import ShelterItem from '../components/ShelterItem';
import Header from '../components/Header';
import { fetchSheltersAction } from '../redux/actions/sheltersActions'; // Import fetchSheltersAction
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const ShelterList = ({ fetchSheltersAction }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const shelters = useSelector(state => state.shelters.shelters); // Access shelters state from Redux

  useEffect(() => {
    // Fetch shelters data when component mounts using Redux action
    fetchSheltersAction();
  }, [fetchSheltersAction]); // Dependency array ensures effect runs only once on mount

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter shelters based on search term
  const filteredShelters = shelters.filter((shelter) => {
    if (typeof shelter.nama === 'string') {
      return shelter.nama.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return (
    <div className="bg-white">
      <Header />
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 mt-12">
        <h1 className="text-3xl font-bold mb-6">Daftar Lokasi Pengungsian</h1>

        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari lokasi pengungsian..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          />
        </div>

        {/* List of shelters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredShelters.length > 0 ? (
            filteredShelters.map((shelter) => (
              <ShelterItem key={shelter.id} shelter={shelter} />
            ))
          ) : (
            <p className="text-gray-600">Tidak ada lokasi pengungsian yang cocok dengan pencarian Anda.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { fetchSheltersAction })(ShelterList); // Connect component to Redux and fetchSheltersAction
