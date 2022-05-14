import React, { Component } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import { SORT_BY_NAME } from '../utils/constant';
import './student.css';

class StudentMangement extends Component {
  state = {
    students: [],
    sort: SORT_BY_NAME,
  }

  onStudentRegister = (student) => {
    if (student.id.value === '') return;
    this.setState({
      students: [...this.state.students, student],
    })
  }

  onSortHandler = (sort) => this.setState({ sort: +sort })

  onDeleteHandler = (id) => this.setState({ students: this.state.students.filter(v => v.id.value !== id) })

  render() {
    return (
      <div className='container'>
        <StudentForm onStudentRegister={this.onStudentRegister} />
        <StudentList students={this.state.students} sort={this.state.sort} onSortHandler={this.onSortHandler} onDeleteHandler={this.onDeleteHandler} />
      </div>
    );
  }
}

export default StudentMangement;
