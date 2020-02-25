import axios from 'axios';
const AppAPI = {
    request(options, done) {
        axios(options)
            .then(result => {
                return done(null, result);
            })
            .catch(error => {
                return done(true, error.response);
            });
    },
    getProducts(done) {
        let options = {
            url: 'http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05',
            method: "get"
        };
        AppAPI.request(options, done);
    }
}

export default AppAPI;