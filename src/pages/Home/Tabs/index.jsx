import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import style from "./styles";
import { Tabs } from "antd";
import {
  // getListCourse,
  getCategoriesCourse,
} from "../../../redux/actions/courseActions";
import { connect } from "react-redux";
class SimpleTabs extends Component {
  render() {
    return this.props.categoriesCourse.map((course, index) => {
      const { TabPane } = Tabs;
      const { classes } = this.props;
      function callback(key) {
        console.log(key);
      }
      return (
        // <Grid className={this.props.classes.categories} item lg={2} key={index}>
        //   <Typography variant="h1" component="h6">
        //     {course.tenDanhMuc}
        //   </Typography>
        // </Grid>
        <Tabs defaultActiveKey="0" onChange={callback} className={classes.tabs}>
          <TabPane tab={course.tenDanhMuc} key={index}></TabPane>
        </Tabs>
      );
    });
  }
  componentDidMount() {
    // this.props.dispatch(getListCourse());
    this.props.dispatch(getCategoriesCourse());
  }
}
const mapStateToProps = (state) => {
  return {
    // courseList: state.course.listCourse,
    categoriesCourse: state.course.categoriesCourse,
  };
};
export default connect(mapStateToProps)(withStyles(style)(SimpleTabs));
