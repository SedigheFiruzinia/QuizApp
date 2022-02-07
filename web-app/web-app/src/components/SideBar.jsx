import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Icons from "./utils/Icons";

const SideBar = ({ selection }) => {
  const [selected, setSelected] = useState(selection);
  console.log(selected);

  return (
    <Navbar className="flex-sm-column sideBar" bg="dark" variant="dark">
      <Navbar.Text>
        <Link
          to="/Data"
          onClick={() => setSelected("Data")}
          style={selected === "Data" ? styles.selected : styles.text}
        >
          <Icons.Data />
          <span style={{ marginLeft: "15px" }}>Data</span>
        </Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link
          onClick={() => setSelected("Analysis")}
          style={selected === "Analysis" ? styles.selected : styles.text}
        >
          <Icons.Analysis />

          <span style={{ marginLeft: "15px" }}>Analysis</span>
        </Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link
          to="/About"
          onClick={() => setSelected("About")}
          style={selected === "About" ? styles.selected : styles.text}
        >
          <Icons.About />
          <span style={{ marginLeft: "15px" }}>About</span>
        </Link>
      </Navbar.Text>
    </Navbar>
  );
};
const styles = {
  text: {
    textDecoration: "none",
    marginRight: "15px",
    fontSize: "15px",
    fontWeight: "300",
  },
  selected: {
    textDecoration: "none",
    marginRight: "15px",
    fontSize: "18px",
    fontWeight: "400",
    color: "rgba(0, 130, 230, 255)",
  },
};

export default SideBar;
