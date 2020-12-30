import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getListCourse,
  getCategoriesCourse,
} from "../../redux/actions/courseActions";
import {
  Container,
  Grid,
  Card,
  // Button,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  withStyles,
} from "@material-ui/core";
import wrapper from "../../HOCs/functionWrapper";
import style from "./style";
import { Search } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import BecomeAnInstrutor from "./BecomeAnInstructor";
import ForBusiness from "./ForBusiness";
import TrustedByCompany from "./TrustedByCompany";
import TranForms from "./Tranforms";
import { Tabs } from "antd";
import SimpleTabs from "./Tabs";
const categories = [
  {
    id: 1,
    img: require("../../assets/images/C1.jpg"),
    group: "Design",
  },
  {
    id: 2,
    img: require("../../assets/images/C2.jpg"),
    group: "Development",
  },
  {
    id: 3,
    img: require("../../assets/images/C3.jpg"),
    group: "Marketing",
  },
  {
    id: 4,
    img: require("../../assets/images/C4.jpg"),
    group: "IT and Software",
  },
  {
    id: 5,
    img: require("../../assets/images/C5.jpg"),
    group: "Personal Development",
  },
  {
    id: 6,
    img: require("../../assets/images/C6.jpg"),
    group: "Business",
  },
  {
    id: 7,
    img: require("../../assets/images/C7.jpg"),
    group: "Photography",
  },
  {
    id: 8,
    img: require("../../assets/images/C8.jpg"),
    group: "Music",
  },
];
class HomePage extends Component {
  //render danh muc khoa hoc
  renderCategoriesCourse = () => {
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
        <Tabs defaultActiveKey="1" onChange={callback} className={classes.tabs}>
          <TabPane tab={course.tenDanhMuc} key={index}></TabPane>
        </Tabs>
      );
    });
  };

  //render danh sach khoa hoc
  renderListCourse = () => {
    // const { classes } = this.props;
    return this.props.courseList.map((course, index) => {
      return (
        <Grid item /*xs={4} md={5} lg={2}*/ key={index}>
          <Card>
            <CardActionArea>
              <NavLink to={`/detail/${course.maKhoaHoc}`}>
                <CardMedia
                  image={course.hinhAnh}
                  className={this.props.classes.media}
                  title="Contemplative Reptile"
                />
              </NavLink>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ color: "#000000" }}
                >
                  {course.tenKhoaHoc}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {course.ngayTao}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <NavLink to={`/detail/${course.maKhoaHoc}`}>
                <p style={{ marginLeft: 10 }}>Chi tiết</p>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  };
  renderCategory = () => {
    const { classes } = this.props;
    return categories.map((item) => {
      return (
        <div className={classes.categoriesItem}>
          <div className="col-3">
            <img src={item.img} className={classes.img} alt="Item" />
          </div>
          <div className={classes.title}>
            <p>{item.group}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    const { classes } = this.props;
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 576, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 992, itemsToShow: 5 },
      { width: 1200, itemsToShow: 5 },
    ];
    return (
      <div>
        {/* CAROUSEL */}
        <div className={classes.carousel}>
          <br />
          <div className={classes.carouselContent}>
            <div className={classes.carouselDetail}>
              <p className={classes.itemTitle}>Learn on your schedule</p>
              <p className={classes.itemText}>
                Anywhere, anytime. Start learning today!
              </p>
              <form className={classes.form}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="What do you want to learn?"
                ></input>
                <Search className={classes.iconSearch} />
              </form>
            </div>
          </div>
        </div>
        {/* END CAROUSEL  */}

        {/* NAV */}
        <h2 className={classes.titleText}>
          The world's largest selection of courses
        </h2>
        <p className={classes.text}>
          Choose from 130,000 online video courses with new additions published
          every month
        </p>

        {/* END NAV */}

        <Container maxWidth="xl">
          <Grid container spacing={1}>
            {/* {this.renderCategoriesCourse()} */}
            <SimpleTabs />
          </Grid>

          {/* COURSE LIST */}
          <Grid container spacing={1}>
            <Carousel pagination={false} breakPoints={breakPoints}>
              {this.renderListCourse()}
            </Carousel>
          </Grid>
          {/* <div className="row">{this.renderListCourse()}</div> */}
          {/* END COURSE LIST */}

          <Grid container spacing={1}>
            <Typography variant="h1" component="h4">
              Student are viewing
            </Typography>
            <Carousel pagination={false} breakPoints={breakPoints}>
              {this.renderListCourse()}
            </Carousel>
          </Grid>
        </Container>
        <div className={classes.banner}>
          <div className={classes.bannerDetail}>
            <h3 className={classes.bannerDetailTitle}>
              Get personal learning recommendations
            </h3>
            <p className={classes.bannerDetailText}>
              Answer a few questions for your top picks
            </p>
            <span className={classes.bannerDetailButton}>Get started</span>
          </div>
        </div>

        <div className={classes.categories2}>
          <h3>Top categories</h3>
          <div className="row">{this.renderCategory()}</div>
        </div>

        <BecomeAnInstrutor />
        <TrustedByCompany />
        <ForBusiness />
        <TranForms />
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getListCourse());
    this.props.dispatch(getCategoriesCourse());
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.course.listCourse,
    categoriesCourse: state.course.categoriesCourse,
  };
};

export default connect(mapStateToProps)(
  withStyles(style, { withTheme: true })(wrapper(HomePage))
);
