import React, { useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: '',
      age: ''
    };
    setStudents([...students, newStudent]);
  };

  const updateStudent = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  const removeStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div>
    <h2>Students</h2>
      <button onClick={addStudent}>Add Student</button>
      <ul>
        {students.map((student, index) => (
          <li key={student.id}>
            <input
              type="text"
              value={student.name}
              onChange={(e) => updateStudent(index, 'name', e.target.value)}
            />
            <input
              type="text"
              value={student.age}
              onChange={(e) => updateStudent(index, 'age', e.target.value)}
            />
            <button onClick={() => removeStudent(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
