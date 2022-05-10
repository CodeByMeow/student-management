import React, { Component } from 'react';

class StudentForm extends Component {
  state = {
    student: {
      id: {
        title: 'mã sv',
        value: '',
        type: 'text',
      },
      fullname: {
        title: 'họ tên',
        value: '',
        type: 'text',
      },
      phone: {
        title: 'số điện thoại',
        value: '',
        type: 'text',
      },
      email: {
        title: 'email',
        value: '',
        type: 'text',
      },
      mark_point: {
        title: 'điểm toán',
        value: 0,
        type: 'number',
      },
      physical_point: {
        title: 'điểm lý',
        value: 0,
        type: 'number',
      },
      chemistry_point: {
        title: 'điểm hóa',
        value: 0,
        type: 'number',
      },
    }
  }

  onFieldChange = ({ id, value }) => {
    const { student } = this.state;
    this.setState({
      student: {
        ...student,
        [id]: { ...student[id], value: value },
      }
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onStudentRegister(this.state.student);
  }
  render() {
    const { student } = this.state;
    return (
      <div className='student-register'>
        <div className='student-form-title'>
          <h2>Thông tin sinh viên</h2>
        </div>
        <div className='student-form'>
          <form onSubmit={this.onSubmitHandler}>
            {
              Object.entries(student).map(([key, field]) => {
                return (
                  <div className='form-field' key={key}>
                    <label htmlFor={key}>{field.title}</label>
                    <input id={key} type={field.type} className='form-input' name={key} onChange={e => this.onFieldChange(e.target)} />
                  </div>
                )
              })
            }
            <input type='submit' className='submit-btn' value='Thêm sinh viên' />
          </form>
        </div>

      </div>
    );
  }
}

export default StudentForm;
