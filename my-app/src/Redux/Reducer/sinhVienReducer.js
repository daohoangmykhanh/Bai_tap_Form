
const stateDefault = {
    arrSinhVien:[
        {maSV:1,tenSV: 'Dao Hoang My Khanh',soDienThoai: '0396719516', email: 'daohoangmykhanh@gmail.com'},
    ]
}

export const sinhVienReducer = (state=stateDefault, action) => {

    switch(action.type){

        case 'THEM_SINH_VIEN':{
            state.arrSinhVien = [...state.arrSinhVien,action.sinhVien]
            return {...state}

        }
        case 'XOA_SINH_VIEN':{
            state.arrSinhVien = [...state.arrSinhVien.filter(sinhVien => sinhVien.maSV !== action.maSV)];
            return {...state};
        }
        default: return state
    }
}