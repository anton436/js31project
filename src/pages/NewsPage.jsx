import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../style/NewsPage.css";
import NewCard from "../components/Product/NewCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function NewsPage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Box
      className="actve"
      sx={{
        width: 1300,
        position: "relative",
        minHeight: 400,
        boxShadow: "none",
        paddingTop: 5,
        margin: "0 auto",
      }}
    >
      {" "}
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 400,
          height: 80,
          paddingLeft: 6,
        }}
      >
        NEWS
      </Typography>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          color: "#AE322F",
          width: "1100px",
          paddingLeft: 10,
          backgroundColor: "white",
        }}
      >
        <Tabs
          sx={{ boxShadow: "none", color: "#AE322F" }}
          value={value}
          onChange={handleChange}
          // indicatorColor="red"
          // textColor="black"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab
            id="underline"
            sx={{
              fontSize: "12px",
              backgroundColor: "white",
            }}
            label="ALL NEWS"
            {...a11yProps(0)}
          ></Tab>
          <Tab
            sx={{
              fontSize: "12px",
              backgroundColor: "white",
            }}
            label="CORPORATE"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              fontSize: "12px",
              backgroundColor: "white",
            }}
            label="PRODUCT AND BRAND"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              fontSize: "12px",
              backgroundColor: "white",
              letterSpacing: 0,
            }}
            label="VIRTUAL PRESS CONFERENCES"
            {...a11yProps(3)}
          />
          <Tab
            sx={{
              fontSize: "12px",
              backgroundColor: "white",
            }}
            label="Select a year"
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          sx={{ display: "flex", fontFfamily: "Kanit, sans-serif;" }}
        ></TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ul>
            <li>Finance</li>
            <li>Ad-Hoc</li>
            <li>Corporate</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ul id="products">
            <li>Teamsport</li>
            <li>Sportstyle</li>
            <li>Running and Training</li>
            <li>Running and Training</li>
            <li>Golf</li>
            <li>Basketball</li>
            <li>Motorsport</li>
            <li>Accessories and Licensing</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}></TabPanel>
      </SwipeableViews>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <input type="number" min="1900" max="2099" step="1" value="2016" />
      </TabPanel>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // my: "1rem",
          justifyContent: "space-evenly",
        }}
      >
        <NewCard></NewCard>
        <NewCard></NewCard>
        <NewCard></NewCard>
        <NewCard></NewCard>
        <NewCard></NewCard>
        <NewCard></NewCard>
        <NewCard></NewCard>
        <NewCard></NewCard>
      </Box>
    </Box>
  );
}
