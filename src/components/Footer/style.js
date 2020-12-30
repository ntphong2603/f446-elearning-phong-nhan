const style = () => {
  return {
    footerUp: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 50,
      paddingRight: 50,
      borderBottom: 1,
      borderBottomColor: "#dcdacb",
      borderBottomStyle: "solid",
      borderTop: 1,
      borderTopColor: "#dcdacb",
      borderTopStyle: "solid",
      marginTop: 50,
      paddingTop: 25,
      paddingBottom: 25,
    },
    footerText: {
      fontSize: 19,
      fontWeight: 700,
      color: "#3c3b37",
      width: "40%",
      "& > p": {
        margin: "auto",
      },
    },
    span3: {
      color: "#007791",
      cursor: "pointer",
      "&:hover": {
        color: "#003845",
      },
    },
    footerSym: {
      width: "60%",
      textAlign: "right",
      "& > img": {
        marginLeft: 20,
      },
    },
    //
    contact: {
      display: "flex",
      flexDirection: "row",
      marginTop: 30,
      marginLeft: 10,
    },
    select: {
      height: 40,
      borderRadius: 3,
      width: 200,
      marginLeft: 480,
    },
    logo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 30,
      marginRight: 60,
    },
    logoItem: {
      width: 100,
      marginLeft: 40,
    },
    text: {
      fontSize: 12,
      color: "#888",
    },

    //
  };
};
export default style;
