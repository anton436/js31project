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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
        bgcolor: "background.paper",
        width: 1000,
        position: "relative",
        minHeight: 200,
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          // indicatorColor="red"
          // textColor="red"
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
            }}
            label="VIRTUAL PRESS CONFERENCES"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          ALL NEWS
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          CORPORATE
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          PRODUCT AND BRAND
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          VIRTUAL PRESS CONFERENCES
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
