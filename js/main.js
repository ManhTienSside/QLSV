//b1 lay du lieu
// luu doi tuong SV
// hien thi theo yeu cau
// khoi 1 du lieu form
//khoi 2
    //tao so do lop ==> dinh huong thuoc tinh phuong thuc can tao
    //tao lop doi tuong
    // lay du lieu tu form
    //hien thi thong tin
//khoi 3
function SinhVien(id,fullName,loaiSV,toan,van) {
    this.id=id;
    this.fullName=fullName;
    this.loaiSV=loaiSV;
    this.toan=toan;
    this.van=van;
    this.diemTB=0;
    //method
    this.tinhdtb=function(){
        this.diemTB = (this.toan+this.van)/2
    }
    this.xepLoai = function(){
        if(this.tinhdtb>8 && this.tinhdtb<=10){
            return 'gioi';
        }else if(this.tinhdtb<=8 && this.tinhdtb >6) {
            return 'kha';
        }else{
            return 'trung binh';
        }
    }
}
function main() {
    //lay data from input
    var id = document.querySelector('#txtMaSV').value;
    var name = document.querySelector('#txtTenSV').value;
    var loaiSv = document.querySelector('#loaiSV').value;
    var toan = Number(document.querySelector('#txtDiemToan').value);
    var van = Number(document.querySelector('#txtDiemVan').value);
    console.log(id);
    // tao doi tuong sv(instane)
    var sinhVien = new SinhVien(id,name,loaiSv,toan,van);
    sinhVien.tinhdtb();
    // hien thi thong tin
    document.getElementById('spanTenSV').innerHTML=sinhVien.fullName;
    document.getElementById('spanMaSV').innerHTML=sinhVien.id;
    document.getElementById('spanLoaiSV').innerHTML=sinhVien.loaiSV;
    document.getElementById('spanDTB').innerHTML=sinhVien.diemTB;
    document.getElementById('spanXepLoai').innerHTML=sinhVien.xepLoai();
}
