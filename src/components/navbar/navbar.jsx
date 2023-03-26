import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar(props) {
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HamburgerMenu from "./burgermenu";
import { NavBarComponent } from "./NavBarComponent";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Drawercomp from "/src/components/drawercomponent.jsx";
// import HamburgerMenu from "./burgermenu";

function Navbar() {
	const [click, setClick] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const handleClick = () => {};
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => <div> hello </div>;
	return (
		<>
			{props.deptName === "default" ? <nav className="navbar font-bold text-primaryColor">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						Logo
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={handleClick}>
								About us
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-links" onClick={handleClick}>
								Departments
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/facilities" className="nav-links" onClick={handleClick}>
								Facilities
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Academics
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Students
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Governance
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Exams & Results
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Admissions
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Placements
							</Link>
						</li>
						<li className="nav-item">
							<a
								href="https://becalumni.org/"
								className="nav-links cursor-pointer"
							>
								Alumni
							</a>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Research
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Reach us
							</Link>
						</li>
					</ul>
				</div>
			</nav> :
				<nav className="flex">
					<Link to={`/departments/${props.deptRoute}/deptstat`} className="navbar-logo">
						Home
					</Link>
					<Link to={`/departments/${props.deptRoute}`} className="navbar-logo">
						IT Home
					</Link>
					<Link to={`/departments/${props.deptRoute}/ItStaff`} className="navbar-logo">
						Staff
					</Link>
					<Link to={`/departments/${props.deptRoute}/deptstat`} className="navbar-logo">
						Facilities
					</Link>
					<Link to={`/departments/${props.deptRoute}/deptstat`} className="navbar-logo">
						Students
					</Link>
					<Link to={`/departments/${props.deptRoute}/deptstat`} className="navbar-logo">
						News&Events
					</Link>
				</nav>
				
				
				
			}
		</>
	);

	return <>{isMobile ? <HamburgerMenu /> : <NavBarComponent />}</>;
}

export default Navbar;
