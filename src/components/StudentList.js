import React, { Component } from 'react';

class StudentList extends Component {
  state = {
    tempStudents: this.props.students,
  }
  average = arr => arr.reduce((a, b) => a += b, 0) / arr.length;
  onSelectHandler = query => {
    const tempStudents = [...this.state.tempStudents].map(student => {
      const subjects = Object.values(student).filter(prop => prop.isCalc);
      const subjectsPoint = subjects.map(subject => parseInt(subject.value));
      return {
        ...student,
        gpa: this.average(subjectsPoint).toFixed(1)
      }
    });
    switch (query) {
      case 'gpa-up': tempStudents.sort((a, b) => a.gpa - b.gpa);
        break;
    }
    this.setState({
      tempStudents,
    })

  }

  render() {
    const tempStudents = [...this.props.students].map(student => {
      const subjects = Object.values(student).filter(prop => prop.isCalc);
      const subjectsPoint = subjects.map(subject => parseInt(subject.value));
      return {
        ...student,
        gpa: this.average(subjectsPoint).toFixed(1)
      }
    });
    return (
      <div className='student-list'>
        <select name='table-sort' className='table-sort' onChange={(e) => this.onSelectHandler(e.target.value)}>
          <option value="gpa-up">GPA tăng dần</option>
          <option value="gpa-down">GPA giảm dần</option>
          <option value="fullname">Họ tên</option>
        </select>
        <table>
          <thead>
            <tr>
              <td>mã sv</td>
              <td>họ tên</td>
              <td>số điện thoại</td>
              <td>email</td>
              <td>Điểm TB</td>
            </tr>
          </thead>
          <tbody>
            {
              tempStudents.map(({ id, fullname, email, phone, gpa }) => {
                return (
                  <tr key={id.value}>
                    <td>{id.value}</td>
                    <td>{fullname.value}</td>
                    <td>{phone.value}</td>
                    <td>{email.value}</td>
                    <td className="text-center">{gpa}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
