//them Sinh vien vao trong array
/* tinh nang CRUD
    validation  
    findName
    showList
    showInformation
*/
/*them sinh vien
b1 lay du lieu input
b2  +lay gia tri tu form
    +tao doi tuong sinh vien
    +them sinh vien vao mang
    +hien thi ui
b3 them sv vao mang
*/
const danhSachSv = new ListSinhVien();
const validation = new Validation();
function setLocalStorage() {
    localStorage.setItem('listSinhVien',JSON.stringify(danhSachSv.arrSinhVien));
}
function getLocalStorgage() {
    var showData =JSON.parse(localStorage.getItem('listSinhVien'));
    if(showData!== null){
        showInfo(showData);
        danhSachSv.arrSinhVien = showData;
    } 
}
getLocalStorgage();

function addSinhVien() {
    var id = document.getElementById('txtMaSV').value;
    var fullName = document.getElementById('txtTenSV').value;
    var mail = document.getElementById('txtEmail').value;
    var numberPhone = document.getElementById('txtTelephone').value;
    var specieSv = document.getElementById('loaiSV').value;
    var diemRenLuyen = document.getElementById('txtRenLuyen').value;
    var toan = document.getElementById('txtDiemToan').value;
    var ly = document.getElementById('txtDiemLy').value;
    var hoa = document.getElementById('txtDiemHoa').value;
    var checkVar = true;
    checkVar &= validation.checkEmpty(id,'spanMaSV','please typping input and must not space');

    checkVar &= validation.checkEmpty(fullName,'spanTenSV','please typping input and must not space') && 
    validation.checkName(fullName,'spanTenSV','name just value String');

    checkVar &= validation.checkPhone(numberPhone,'spanMatKhau','number phone need from 9 to 10 number');

    checkVar &= validation.checkEmail(mail,'spanEmailSV','need input correct form email');
    if(checkVar){ 
        //tao doi tuong sinh vien instance
        var sinhVien = new SinhVien(id,fullName,mail,Number(numberPhone),specieSv,Number(diemRenLuyen),Number(toan),Number(ly),Number(hoa));
        sinhVien.tinhdtb();
        //add vao array cua class ListSV
        danhSachSv.addSV(sinhVien);
        setLocalStorage();
        showInfo(danhSachSv.arrSinhVien);
    }
}
function showInfo(array) {
    //moi 1sv 1 row
    //content  chua tat ca sv
    var content = '';
    //duyet tung the tr trong table
    // dung map de duyet mang
    array.map(function(sinhVien){
        var trSV = `<tr>
                <td>${sinhVien.id}</td>
                <td>${sinhVien.fullName}</td>
                <td>${sinhVien.mail}</td>
                <td>${sinhVien.numberPhone}</td>
                <td>${sinhVien.diemTB}</td>
                <td>
                <button onclick="deleteSv('${sinhVien.id}')" class ="btn btn-danger"> xoa </button>
                <button onclick="showSinhVien('${sinhVien.id}')"class ="btn btn-infor"> xem </button>
                </td>
        </tr>`
        content += trSV;
    });
    document.getElementById('tbodySinhVien').innerHTML = content;
}
function deleteSv(id) {
    danhSachSv.deleteSV(id);
    showInfo(danhSachSv.arrSinhVien);
    setLocalStorage();
}
function showSinhVien(id) {
    var index = danhSachSv.findId(id);
    if(index >-1) {
    document.getElementById('txtMaSV').value=danhSachSv.arrSinhVien[index].id;
    document.getElementById('txtMaSV').disabled = true;
    document.getElementById('txtTenSV').value=danhSachSv.arrSinhVien[index].fullName;
    document.getElementById('txtEmail').value=danhSachSv.arrSinhVien[index].mail;
    document.getElementById('txtTelephone').value=danhSachSv.arrSinhVien[index].numberPhone;
    document.getElementById('loaiSV').value=danhSachSv.arrSinhVien[index].specieSv;
    document.getElementById('txtRenLuyen').value=danhSachSv.arrSinhVien[index].diemRenLuyen;
    document.getElementById('txtDiemToan').value=danhSachSv.arrSinhVien[index].toan;
    document.getElementById('txtDiemLy').value=danhSachSv.arrSinhVien[index].ly;
    document.getElementById('txtDiemHoa').value=danhSachSv.arrSinhVien[index].hoa;
    }
}
function updateSV() {
    var id = document.getElementById('txtMaSV').value;
    var fullName = document.getElementById('txtTenSV').value;
    var mail = document.getElementById('txtEmail').value;
    var numberPhone = document.getElementById('txtTelephone').value;
    var specieSv = document.getElementById('loaiSV').value;
    var diemRenLuyen = document.getElementById('txtRenLuyen').value;
    var toan = document.getElementById('txtDiemToan').value;
    var ly = document.getElementById('txtDiemLy').value;
    var hoa = document.getElementById('txtDiemHoa').value;
    //tao doi tuong sinh vien instance
    var sinhVien = new SinhVien(id,fullName,mail,Number(numberPhone),specieSv,Number(diemRenLuyen),Number(toan),Number(ly),Number(hoa));
    sinhVien.tinhdtb();
    danhSachSv.updateSV(sinhVien);
    setLocalStorage();
    showInfo(danhSachSv.arrSinhVien);
}
function resetForm() {
    document.getElementById('formQLSV').reset();
    document.getElementById('txtMaSV').disabled=false;
}
document.getElementById('txtSearch').onkeyup = function () {
    var name = document.getElementById('txtSearch').value;
    var result = danhSachSv.findByName(name);
    showInfo(result);
}
