import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';

function AddProjects() {
    const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([]);

  const handleNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleAddProject = () => {
    if (projectName.trim() !== '') {
      setProjects([...projects, projectName]);
      setProjectName('');
    }
  };
  return (
    <Box>
      <h1>Add Project</h1>
      <inputfield >Name
      </inputfield>
      <TextField
        label="Project Name"
        variant="outlined"
        value={projectName}
        onChange={handleNameChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddProject}
        style={{ marginTop: '10px' }}
      >
        Add
      </Button>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </Box>
  );
}

export default AddProjects

