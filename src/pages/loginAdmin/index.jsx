import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { addCourse } from "../../redux/actions/courseActions";
import style from "./style";
class Admin extends Component {
  state = {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    hinhAnh: "",
    maNhom: "",
    ngayTao: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: "",
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addCourse(this.state));
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h3>THÊM KHÓA HỌC</h3>
          <div>
            <input
              placeholder="Mã khóa học"
              name="maKhoaHoc"
              onChange={this.handleChange}
              style={{ width: 500 }}
            ></input>
          </div>
          <div style={{ marginTop: 20 }}>
            <input
              placeholder="Url ảnh mô tả"
              name="hinhAnh"
              onChange={this.handleChange}
              style={{ width: 500 }}
            ></input>
          </div>
          <div style={{ marginTop: 20 }}>
            <input
              placeholder="Tên khóa học"
              name="tenKhoaHoc"
              onChange={this.handleChange}
              style={{ width: 500 }}
            ></input>
          </div>
          <div style={{ marginTop: 20 }}>
            <textarea
              placeholder="Mô tả"
              name="moTa"
              onChange={this.handleChange}
              style={{ width: 500, height: 200 }}
            ></textarea>
          </div>
          <div style={{ marginTop: 20 }}>
            <input
              placeholder="Ngày tạo"
              name="ngayTao"
              onChange={this.handleChange}
              style={{ width: 500 }}
            ></input>
          </div>
          {/* <div style={{ marginTop: 20 }}>
            <input placeholder="Giá" style={{ width: 500 }}></input>
          </div> */}
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <button
              type="submit"
              onAuxClick={this.handleSubmit}
              className={classes.button}
            >
              THÊM
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(style)(Admin);
