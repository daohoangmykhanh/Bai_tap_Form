import React, { Component } from 'react'

export default class DanhSachComponent extends Component {
    render() {
        return (
            <div className="container mt-5">
                <table className=" table bg-dark text-light" >
                    <thead>
                        <tr>
                            <th> Mã SV</th>
                            <th> Họ tên</th>
                            <th> Số điện thoại</th>
                            <th> Email</th>                 
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}
