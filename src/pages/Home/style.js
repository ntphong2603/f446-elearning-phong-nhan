import backgroundCarousel from "../../assets/images/carousel.jpg";
import BackgroundBanner from "../../assets/images/purple-intersect.svg";

const style = (theme) => {
  return {
    media: {
      height: 138,
      width: 240,
      marginBottom: theme.spacing(5),
    },
    body: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    carousel: {
      backgroundImage: `url(${backgroundCarousel})`,
      width: "100%",
      height: "400px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    carouselContent: {
      width: "440px",
      height: "auto",
      marginTop: 50,
      marginLeft: 50,
      backgroundColor: "#ffffff",
    },
    carouselDetail: {
      padding: "25px",
    },
    bkVSTc: {
      display: "none",
    },
    itemTitle: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#3c3b37",
    },
    itemText: {
      marginTop: 10,
      fontSize: 20,
      fontWeight: 350,
      lineHeight: 1,
    },
    bTybGL: {
      position: "absolute ! important",
      right: "1% ! impotant",
    },
    form: {
      display: "flex",
      flexDirection: "row",
      border: "1px",
      borderStyle: "solid",
      borderColor: "#989586",
      borderRadius: 5,
      width: "100%",
      height: 46,
      alignItems: "center",
      fontSize: 14,
      marginBottom: 10,
    },
    iconSearch: {
      color: "#73726c",
      marginLeft: 30,
      cursor: "pointer",
      fontSize: 24,
    },
    input: {
      border: "none",
      outline: "none",
      height: 40,
      marginLeft: 10,
      fontSize: 14,
      width: "80%",
    },
    titleText: {
      color: "#3c3b37",
      marginTop: 70,
      marginLeft: 30,
    },
    text: {
      color: "#73726c",
      marginLeft: 30,
    },
    banner: {
      backgroundImage: `url(${BackgroundBanner})`,
      backgroundColor: "#6e1a52",
      color: "#ffffff",
      height: 232,
      width: "100%",
      // justifyContent: "center",
      // alignItems: "center",
    },
    bannerDetail: {
      marginTop: 30,
      textAlign: "center",
      // padding: [60, 0, 60, 0],
      // justifyContent: "center",
      alignItems: "center",
    },
    bannerDetailTitle: {
      marginTop: 30,
      fontWeight: 700,
      fontSize: 35,
      color: "#ffffff",
    },
    bannerDetailText: {
      fontSize: 20,
      // marginBottom: 30,
    },
    bannerDetailButton: {
      fontSize: 20,
      fontWeight: 700,
      border: 1,
      borderStyle: "solid",
      borderColor: "#ffffff",
      padding: 10,
      borderRadius: 5,
      cursor: "pointer",
    },
    categories: {
      marginBottom: 20,
      cursor: "pointer",
    },
    categories2: {
      marginLeft: 30,
      marginRight: 20,
      marginTop: 40,
      marginBottom: 30,
      cursor: "pointer",
    },
    title: {
      paddingTop: 5,
      paddingBottom: 10,
      marginLeft: 15,
      marginRight: 15,
      fontWeight: 700,
      fontSize: 20,
    },
    img: {
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
    },
    BecomeAnInstrutor: {
      marginTop: 60,
      borderBottom: 1,
      borderBottomColor: "#888",
      borderBottomStyle: "solid",
      marginBottom: 30,
    },
    BecomeAnInstrutorGroup: {
      backgroundColor: "#fbfbf8",
      display: "flex",
      flexDirection: "row",
      // paddingBottom: 50,
      height: 310,
    },
    BecomeAnInstrutorImg: {
      marginLeft: 240,
      marginTop: -40,
    },
    BecomeAnInstrutorDetail: {
      width: 400,
      padding: [60, 0, 60, 0],
      marginLeft: 100,
    },
    BecomeAnInstrutorTitle: {
      fontWeight: 700,
    },
    BecomeAnInstrutorText: {
      fontSize: 20,
      marginBottom: 30,
    },
    BecomeAnInstrutorButton: {
      fontSize: 18,
      fontWeight: 600,
      padding: 15,
      border: 1,
      borderStyle: "solid",
      borderColor: "#0f7c90",
      borderRadius: 5,
      backgroundColor: "#0f7c90",
      color: "aliceblue",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#053e5f",
        border: 1,
        borderStyle: "solid",
        borderColor: " #053e5f",
      },
    },
    forBussiness: {
      marginTop: 90,
      borderBottom: 1,
      borderStyle: "solid",
      borderColor: "#888",
      paddingBottom: 80,
    },
    detail: {
      backgroundColor: "#003640",
    },
    detailInfo: {
      color: "aliceblue",
      paddingTop: 80,
      paddingBottom: 80,
      width: "33%",
      marginLeft: "15%",
    },
    button: {
      padding: [10, 20, 10, 20],
      backgroundColor: "#0f7c90",
      border: 1,
      borderColor: "#0f7c90",
      borderStyle: "solid",
      borderRadius: 5,
      fontWeight: 700,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#054b58",
        border: 1,
        borderColor: "#054b58",
        borderStyle: "solid",
      },
    },
    img2: {
      position: "absolute",
      marginLeft: "55%",
      marginTop: -40,
    },
    // title: {
    //   fontWeight: 700,
    //   fontSize: 30,
    // },
    // text: {
    //   fontSize: 20,
    //   marginBottom: 40,
    // },
    tenKhoaHoc: {
      color: "black",
    },
    tabs: {
      color: "#73726c",
      fontWeight: 700,
      "&:active": {
        color: "#73726c",
        fontWeight: 700,
      },
    },
  };
};

export default style;
