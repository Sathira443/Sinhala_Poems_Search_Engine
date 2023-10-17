import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
