function getArraySinhVien() {
  // GET request for remote image in node.js
axios({
  method: 'get',
  url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',
  
})
  .then(function (response) {
    console.log(response.data);
    showInfo(response.data);
  }).catch(function (error) {
    console.log(error);
  });
}
getArraySinhVien();

function showInfo(array) {
    //moi 1sv 1 row
    //content  chua tat ca sv
    var content = '';
    //duyet tung the tr trong table
    // dung map de duyet mang
    array.map(function(sinhVien){
      var dtb = (sinhVien.diemRenLuyen+sinhVien.diemToan+sinhVien.diemLy+sinhVien.diemHoa)/4;
        var trSV = `<tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.soDienThoai}</td>
                <td>${dtb}</td>
                <td>
                <button onclick="deleteSv('${sinhVien.maSinhVien}')" class ="btn btn-danger"> xoa </button>
                <button onclick="showSinhVien('${sinhVien.maSinhVien}')"class ="btn btn-infor"> xem </button>
                </td>
        </tr>`
        content += trSV;
    });
    document.getElementById('tbodySinhVien').innerHTML = content;
}

function addSinhVien() {
    var id = document.getElementById('txtMaSV').value;
    var fullName = document.getElementById('txtTenSV').value;
    var email = document.getElementById('txtEmail').value;
    var numberPhone = document.getElementById('txtTelephone').value;
    var specieSv = document.getElementById('loaiSV').value;
    var diemRenLuyen = document.getElementById('txtRenLuyen').value;
    var toan = document.getElementById('txtDiemToan').value;
    var ly = document.getElementById('txtDiemLy').value;
    var hoa = document.getElementById('txtDiemHoa').value;
    var sv = new SinhVien(id,fullName,specieSv,toan,ly,hoa,diemRenLuyen,email,numberPhone);
    // Send a POST request
    axios({
      method: 'post',
      url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
      data: sv
    }).then(function (result) {
      //thanhcong
      console.log(result);
      getArraySinhVien();
    }).catch(function (error) {
      console.log(error);
    })
    ;
}
function deleteSv(id) {

axios({
  method: 'delete',
  url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${id}`,
}).then(function () {
  alert('da xoa');
  getArraySinhVien();
}).catch(function (error) {
  console.log(error);
});
}
function showSinhVien(id) {
  axios({
    method: 'get',
    url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${id}`,
  }).then(function (result) {
    document.getElementById('txtMaSV').value=result.data.maSinhVien;
    document.getElementById('txtMaSV').disabled = true;
    document.getElementById('txtTenSV').value=result.data.tenSinhVien;
    document.getElementById('txtEmail').value=result.data.email;
    document.getElementById('txtTelephone').value=result.data.soDienThoai;
    document.getElementById('loaiSV').value=result.data.loaiSinhVien;
    document.getElementById('txtRenLuyen').value=result.data.diemRenLuyen;
    document.getElementById('txtDiemToan').value=result.data.diemToan;
    document.getElementById('txtDiemLy').value=result.data.diemLy;
    document.getElementById('txtDiemHoa').value=result.data.diemHoa;
    
  }).catch(function (error) {
    console.log(error);
  });
  
}
function updateSV() {
  var id = document.getElementById('txtMaSV').value;
  var fullName = document.getElementById('txtTenSV').value;
  var email = document.getElementById('txtEmail').value;
  var numberPhone = document.getElementById('txtTelephone').value;
  var specieSv = document.getElementById('loaiSV').value;
  var diemRenLuyen = document.getElementById('txtRenLuyen').value;
  var toan = document.getElementById('txtDiemToan').value;
  var ly = document.getElementById('txtDiemLy').value;
  var hoa = document.getElementById('txtDiemHoa').value;
  var sv = new SinhVien(id,fullName,specieSv,toan,ly,hoa,diemRenLuyen,email,numberPhone);
  // Send a POST request
  axios({
    method: 'put',
    url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${id}`,
    data: sv
  }).then(function (result) {
    //thanhcong
    console.log(result);
    getArraySinhVien();
  }).catch(function (error) {
    console.log(error);
  })
  ;
}