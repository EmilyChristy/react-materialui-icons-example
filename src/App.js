import "./App.css";
import { Typography } from "@mui/material";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BathroomIconOutlined from "@mui/icons-material/BathroomOutlined";
import BathroomTwoToneIcon from "@mui/icons-material/BathroomTwoTone";
import BatterySaverTwoToneIcon from "@mui/icons-material/BatterySaverTwoTone";

import { purple } from "@mui/material/colors";
import { green } from "@mui/material/colors";

function App() {
  //const { classes } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn to use <code>Material UI</code> icons.
        </p>
      </header>
      <Typography variant="h5" gutterBottom>
        Basic icon use
      </Typography>
      <BathroomIcon />
      <BathroomIconOutlined />
      <BathroomTwoToneIcon />
      <Typography variant="h5" gutterBottom>
        Change Material UI icon size
      </Typography>
      <BathroomIcon fontSize="small" />
      <BathroomIconOutlined fontSize="medium" />
      <BathroomTwoToneIcon fontSize="large" />
      <BathroomIcon style={{ fontSize: "60px" }} />
      <BathroomIconOutlined style={{ fontSize: "120px" }} />
      <BathroomTwoToneIcon style={{ fontSize: "160px" }} />
      <Typography variant="h5" gutterBottom>
        Change Material UI icon colour
      </Typography>
      <BathroomIcon style={{ color: purple[500], fontSize: "120px" }} />
      <BathroomIconOutlined style={{ color: "#ffee66", fontSize: "120px" }} />
      <BathroomTwoToneIcon style={{ color: "blue", fontSize: "120px" }} />

      <Typography variant="h5" gutterBottom>
        Change Material UI icon colour on hover
      </Typography>
      <BatterySaverTwoToneIcon
        sx={{
          color: green[200],
          fontSize: "120px",
          "&:hover": { color: green[500] },
        }}
      />
    </div>
  );
}

export default App;
