function SinhVien(id,fullName,mail,phone,specieSv,diemRenLuyen,toan,ly,hoa) {
    this.id = id;
    this.fullName = fullName;
    this.mail = mail;
    this.numberPhone = phone;
    this.specieSv= specieSv;
    this.diemRenLuyen=diemRenLuyen;
    this.toan=toan;
    this.ly=ly;
    this.hoa=hoa;
    this.diemTB=0;
    //method
    this.tinhdtb=function(){
        this.diemTB = (this.toan+this.ly+this.hoa+this.diemRenLuyen)/4
    }
}