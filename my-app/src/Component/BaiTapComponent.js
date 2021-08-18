import React, { Component } from 'react'
import SinhVienComponent from './SinhVienComponent'
import DanhSachComponent from './DanhSachComponent'

export default class BaiTapComponent extends Component {
    render() {
        return (
            <div>
                <SinhVienComponent/>
                <DanhSachComponent/>
            </div>
        )
    }
}
