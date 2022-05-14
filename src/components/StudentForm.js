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
        type: 'email',
      },
      mark_point: {
        title: 'điểm toán',
        value: "",
        type: 'number',
        isSubject: true,
      },
      physical_point: {
        title: 'điểm lý',
        value: "",
        type: 'number',
        isSubject: true,
      },
      chemistry_point: {
        title: 'điểm hóa',
        value: "",
        type: 'number',
        isSubject: true,
      },
    },
    errors: {},
  }

  onFieldChange = ({ name, value }) => {
    const { student } = this.state;
    this.setState({
      student: {
        ...student,
        [name]: { ...student[name], value: value },
      }
    })
  }

  onSubmitHandler = (e) => {
    const { student } = this.state;
    e.preventDefault();
    const subject = Object.values(student).reduce((t, v) => v.isSubject ? [...t, v.value] : t, []);
    const gpa = (subject.reduce((t, v) => +t + +v) / subject.length).toFixed(1);
    this.props.onStudentRegister({ ...student, gpa: +gpa });
    this.setState({
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
          type: 'email',
        },
        mark_point: {
          title: 'điểm toán',
          value: "",
          type: 'number',
          isSubject: true,
        },
        physical_point: {
          title: 'điểm lý',
          value: "",
          type: 'number',
          isSubject: true,
        },
        chemistry_point: {
          title: 'điểm hóa',
          value: "",
          type: 'number',
          isSubject: true,
        },
      }
    })

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
                    <input id={key} type={field.type} className='form-input' name={key} value={field.value} onChange={e => this.onFieldChange(e.target)} />
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
