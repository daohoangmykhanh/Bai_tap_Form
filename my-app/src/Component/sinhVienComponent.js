import React, { Component } from 'react'

export default class SinhVienComponent extends Component {
    render() {
        return (
            <div className="container mt-5"> 
                <div className="card ">  
                    <h2 className="card-header bg-dark text-light pt-3 pb-3"> Thông tin sinh viên </h2>
                    <div className="card-body"> 
                        <div className="d-flex">
                            <div className="form-group">
                                <p>Mã SV</p>
                                <input className="form-control"/>
                            </div>
                            <div className="form-group">
                                <p>Họ tên</p>
                                <input className="form-control"/>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input className="form-control"/>
                            </div>
                            <div className="form-group">
                                <p>Email</p>
                                <input className="form-control"/>
                            </div>
                        </div>
                    <button className="btn btn-success">Thêm sinh viên </button>
                    </div>
                </div>
            </div>
        )
    }
}
