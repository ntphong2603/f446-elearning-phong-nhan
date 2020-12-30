import React, { Component } from "react";
import { connect } from "react-redux";
import wrapper from "../../HOCs/functionWrapper";
import { getDetailCourse } from "../../redux/actions/courseActions";

class DetailPage extends Component {
  render() {
    return (
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        {/* <h2 className="text-center">Detail Page</h2> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={this.props.detailCourse.hinhAnh}
            style={{ width: 350, height: 450 }}
            alt="hinh"
          />
          <div style={{ marginLeft: 50 }}>
            <h3>{this.props.detailCourse.tenKhoaHoc}</h3>
            <p>Mô tả: {this.props.detailCourse.moTa}</p>
            <p>Ngày tạo: {this.props.detailCourse.ngayTao}</p>
            <p>Lượt xem: {this.props.detailCourse.luotXem}</p>
            <p>Số lượng học viên: {this.props.detailCourse.soLuongHocVien}</p>
            <button
              style={{
                backgroundColor: "orange",
                color: "#ffffff",
                border: "none",
                borderRadius: 5,
                width: 100,
              }}
            >
              Add to Cart
            </button>
            <button
              style={{
                backgroundColor: "green",
                color: "#ffffff",
                border: "none",
                borderRadius: 5,
                width: 100,
                marginLeft: 30,
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getDetailCourse(this.props.match.params.id));
  }
}

const mapStateToProps = (state) => {
  return {
    detailCourse: state.course.detailCourse,
  };
};

export default connect(mapStateToProps)(wrapper(DetailPage));
