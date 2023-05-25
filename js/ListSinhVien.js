function ListSinhVien() {
    this.arrSinhVien = [];
    this.addSV = function (sinhVien) {
        this.arrSinhVien.push(sinhVien);
    }
    //tim sinh vien bang id
    this.findId = function(id) {
        var indexOfFind = -1;
        this.arrSinhVien.map(function(sinhVien,index){
            if(sinhVien.id === id){
                indexOfFind =index;
            }
        });
        return indexOfFind;
    }
    this.deleteSV = function(id){
        //de xoa thi can tim sinh vien bang id
        var deleteIndex = this.findId(id);
        if(deleteIndex>-1){
            this.arrSinhVien.splice(deleteIndex,1);
        }
    }
    this.updateSV = function (sinhVien) {
        var index = this.findId(sinhVien.id);
        if(index>-1) {
            this.arrSinhVien[index]=sinhVien;
        }
    }
}