import React, { Component } from 'react';
import { SORT_BY_NAME, SORT_GPA_DOWN, SORT_GPA_UP } from '../utils/constant';

class StudentList extends Component {

  render() {
    const { sort, students, onSortHandler, onDeleteHandler } = this.props;
    switch (sort) {
      case SORT_GPA_UP: students.sort((a, b) => a.gpa - b.gpa); break;
      case SORT_GPA_DOWN: students.sort((a, b) => b.gpa - a.gpa); break;
      case SORT_BY_NAME: students.sort((a, b) => a.fullname.value > b.fullname.value ? 1 : (b.fullname.value > a.fullname.value ? -1 : 0)); break;
    }
    const studentContent = students.map(({ id, fullname, phone, email, gpa }, index) => (
      <tr key={index}>
        <td>{id.value}</td>
        <td>{fullname.value}</td>
        <td>{phone.value}</td>
        <td>{email.value}</td>
        <td>{gpa}</td>
        <td><button onClick={() => onDeleteHandler(id.value)} className="btn">Delete</button></td>
      </tr >
    ))
    return (
      <div className='student-list'>
        <select name='table-sort' className='table-sort' onChange={(e) => onSortHandler(e.target.value)}>
          <option value={SORT_GPA_UP}>GPA tăng dần</option>
          <option value={SORT_GPA_DOWN}>GPA giảm dần</option>
          <option value={SORT_BY_NAME}>Họ tên</option>
        </select>
        <table>
          <thead>
            <tr>
              <td>mã sv</td>
              <td>họ tên</td>
              <td>số điện thoại</td>
              <td>email</td>
              <td>Điểm TB</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {studentContent}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
