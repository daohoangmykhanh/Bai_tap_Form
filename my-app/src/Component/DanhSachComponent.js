import React, { Component } from 'react'
import {connect} from 'react-redux'

class DanhSachComponent extends Component {

  
    render() {
        return (
            <div className="container mt-5">
                <table className=" table " >
                    <thead className="bg-dark text-light">
                        <tr>
                            <th> Mã SV</th>
                            <th> Họ tên</th>
                            <th> Số điện thoại</th>
                            <th> Email</th>   
                            <th></th>              
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.arrSinhVien.map((sinhVien,index) => {
                                return <tr key={index}>
                                    <td> {sinhVien.maSV} </td>
                                    <td> {sinhVien.tenSV} </td>
                                    <td> {sinhVien.soDienThoai} </td>
                                    <td> {sinhVien.email} </td>
                                    <td> 
                                        <button className="btn btn-outline-danger mr-4"> Xóa</button>
                                        <button className="btn btn-outline-primary">Chỉnh sửa</button>
                                    </td>
                                </tr>

                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        arrSinhVien: rootReducer.sinhVienReducer.arrSinhVien
    }
}

export default connect(mapStateToProps)(DanhSachComponent)