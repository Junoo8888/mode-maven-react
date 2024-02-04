import { AppBar, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";

const Landing = () => {
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "white",
          zIndex: 1000,
          boxShadow: "none", // 그림자 없애기
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" component="div" color={"black"}>
            테스트 랜딩페이지 테스트 push test 마지막 테스트다
          </Typography>
        </Toolbar>
        <div> </div>
      </AppBar>
      <Divider style={{ backgroundColor: "gray", height: 2 }} />
    </>
  );
};

export default Landing;
