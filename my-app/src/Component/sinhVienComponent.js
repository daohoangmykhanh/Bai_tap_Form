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

        let newErrors = {...this.state.errors};
        let messErrors = '';
        if (value.trim() === ''){
            messErrors = name + 'không được bỏ trống!';
        }
        newErrors[name] = messErrors;

        this.setState({
            value:newValues,
            errors:newErrors
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
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
                                <input className="form-control " name="email" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                    <button className="btn btn-success mt-3" tyoe="submit">Thêm sinh viên </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        
    }
}

export default connect(mapStateToProps)(SinhVienComponent)
