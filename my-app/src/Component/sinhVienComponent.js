import React, { Component } from 'react'
import {connect} from 'react-redux'

class SinhVienComponent extends Component {

    state = {
        values:{
            maSV:'',
            tenSV:'',
            soDienThoai:'',
            email: '',
        },
        errors: {
            maSV:'',
            tenSV:'',
            soDienThoai:'',
            email: '',
        }
    }
    
    handleChangeInput = (event) => {
        let {value,name} = event.target;

        let newValues = {...this.state.values};
        newValues[name] = value;

        let attrValue ='';
        let regex;

        if(event.target.getAttribute('typeEmail'))
        {
            attrValue = event.target.getAttribute('typeEmail');
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        }

        let newErrors = {...this.state.errors};
        let messErrors = '';
        if (value.trim() === ''){
            messErrors = name + ' không được bỏ trống!';
        }

        if(regex){
            if(attrValue  === 'email'){
                if(!regex.test(value)){
                    messErrors = name + ' phải đúng định dạng!'
                }
            }
        }

        newErrors[name] = messErrors;

        this.setState({
            values:newValues,
            errors:newErrors
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        let valid = true;
        for (let key in this.state.errors){
            if(this.state.errors[key] !== ''){
                valid = false;
                break;
            }
        }
        for(let key in this.state.values){
            if(this.state.values[key] === ''){
                valid = false;
                break;
            }
        }

        if(!valid){
            alert('Dữ liệu không hợp lệ');
            return;
        }

        const action = {
            type : 'THEM_SINH_VIEN',
            sinhVien: this.state.values
        }
        this.props.dispatch(action)
    }

    render() {
        return (
            <div className="container mt-5"> 
                <form className="card" onSubmit={this.handleSubmit}>  
                    <h2 className="card-header bg-dark text-light pt-3 pb-3"> Thông tin sinh viên </h2>
                    <div className="card-body"> 
                        <div className="d-flex">
                            <div className="form-group">
                                <p>Mã SV</p>
                                <input className="form-control" name="maSV" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.maSV}</p>
                            </div>
                            <div className="form-group">
                                <p>Họ tên</p>
                                <input className="form-control" name="tenSV" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.tenSV}</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input className="form-control" name="soDienThoai" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <p>Email</p>
                                <input typeEmail="email" className="form-control " name="email" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                    <button className="btn btn-success mt-3" type="submit">Thêm sinh viên </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(SinhVienComponent)
