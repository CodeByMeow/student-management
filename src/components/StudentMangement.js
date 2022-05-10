import React, { Component } from 'react';
import StudentForm from './StudentForm';
import './student.css';
class StudentMangement extends Component {
  state = {
    students: [],
  }

  onStudentRegister = (student) => {
    if (student.id.value === '') return;
    this.setState({
      students: [...this.state.students, student],
    })
  }
  render() {
    return (
      <div className='container'>
        <StudentForm onStudentRegister={this.onStudentRegister} />
      </div>
    );
  }
}

export default StudentMangement;
