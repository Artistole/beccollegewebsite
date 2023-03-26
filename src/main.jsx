import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Root from "/src/routes/root.jsx";
import Homepage from "/src/pages/homepage.jsx";
import ExaminationCell from "/src/pages/examsResults/examination.jsx";
import ExamNotifs from "/src/pages/examsResults/examsNotifs.jsx";
import It from "/src/pages/departments/IT.jsx";

import Cse from "/src/pages/departments/CSE.jsx";
import Aicte from "/src/pages/saturaotryData/aicte.jsx"
import NaacHome from "/src/pages/saturaotryData/naacHomepage.jsx"
import NaacPage from "/src/pages/saturaotryData/Naac.jsx"
import IqacPage from "./pages/saturaotryData/Iqac"
import Nirf from "/src/pages/saturaotryData/Nirf.jsx"

import Aicte from "/src/pages/saturaotryData/aicte.jsx";
import NaacHome from "/src/pages/saturaotryData/naacHomepage.jsx";
import NaacPage from "/src/pages/saturaotryData/Naac.jsx";
import IqacPage from "./pages/saturaotryData/IqacPage.jsx";
import Nirf from "/src/pages/saturaotryData/NirfPage.jsx";
import Acheivements from "/src/pages/academics/acheivements.jsx";

import ExamDownloads from "/src/pages/examsResults/exam-downloads.jsx";
import ExamLogin from "/src/pages/examsResults/examLogin.jsx";
import ExamResults from "/src/pages/examsResults/examResults.jsx";
import Placements from "/src/pages/Placements/placements.jsx";
import YearWisePlacements from "/src/pages/Placements/YearWisePlacements";
import BranchWisePlacements from "/src/pages/Placements/BranchWisePlacements";
import Facilities from "/src/pages/Facilities/Facilities.jsx";
import Library from "/src/pages/Facilities/Library.jsx";
import RoboticCentre from "/src/pages/Facilities/RoboticCentre.jsx";
import BoschRexrothCEO from "/src/pages/Facilities/BoschRexrothCEO.jsx";
import Cafteria from "/src/pages/Facilities/Cafteria.jsx";
import Transportation from "/src/pages/Facilities/Transportation.jsx";
import Hostels from "/src/pages/Facilities/Hostel.jsx";
import Sports from "/src/pages/Facilities/Sports.jsx";
import Others from "/src/pages/Facilities/Otherfacilities.jsx";

import ItStaff from "/src/pages/departments/staff.jsx"
import { DeptStats } from "./pages/departments/deptstat";
import UploadStaffImage from "./pages/departments/UploadStaffImage";


// import Sidebar from "/src/components/Sidebar.jsx"
// import AboutPlacements from "/src/pages/Placements/AboutPlacements"

import Overview from "/src/pages/academics/academics";
import Programme from "/src/pages/academics/programme";
import Patents from "/src/pages/academics/patents";
import Rules from "/src/pages/academics/rules.jsx";
import Autonomous from "/src/pages/academics/autonomous";
import Institution from "/src/pages/academics/institution";
import ItStaff from "/src/pages/departments/staff.jsx";
import Imggallery from "./components/homepage/gallery/imggallery";
import AllAlumni from "./components/homepage/alumini/all-alumni";
import NaacHomePage from "/src/pages/saturaotryData/naacHomepage.jsx";
import UploadStaffImage from "./pages/UploadStaffImage";
import CommittePage from "./pages/saturaotryData/committee";
import RtiAct from "./pages/saturaotryData/Rti"
import Bos from "./pages/saturaotryData/BosPage"
// import { FacilitiesChart } from "./components/facilities/facilities";
import { FacilitiesChart } from "./components/facilities/facilities";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				path: "/",
				element: <Homepage />,
			},
			{
				path: "/Placements",
				element: <Placements />,
			},
			{
				path: "/examination-cell",
				element: <ExaminationCell />,
			},
			{
				path: "/exam-notifications",
				element: <ExamNotifs />,
			},
			{
				path: "/naac",
				element: <NaacHome />,
			},
			{
				path: "/naacInfo",
				element: <Aicte />,
			},
			{
				path: "/naacPage",
				element: <NaacPage />,
			},
			{
				path: "/iqacPage",
				element: <IqacPage />,
			},
			{
				path: "/nirf",
				element: <Nirf />,
			},
			{

				path: "/committees",
				element: <CommittePage />,
			},
			{
				path: "/rti",
				element: <RtiAct />,
			},
			{
				path: "/bos",
				element: <Bos />,
			},
			{
				path: "/exam-downloads",
				element: <ExamDownloads />,
			},
			{
				path: "/exam-login",
				element: <ExamLogin />,
			},
			{
				path: "/exam-results",
				element: <ExamResults />,
			},
			{
				path: "/YearWise-Placements",
				element: <YearWisePlacements />,
			},
			{
				path: "/Imggallery",
				element: <Imggallery />,
			},
			{
				path: "/AllAlumni",
				element: <AllAlumni />,
			},
			{
				path: "/BranchWise-Placements",
				element: <BranchWisePlacements />,
			},
			{
				path: "/departments/IT",
				element: <It />,
			},
			{
				path: "/departments/CSE",
				element: <It />,
			},
			{
				path: "/departments/IT/ItStaff",
				element: <ItStaff />,
			},
			{
				path: "/Facilities",
				element: <Facilities />,
			},
			{
				path: "/Acheivements",
				element: <Acheivements />,
			},
			{
				path: "/Library",
				element: <Library />,
			},
			{
				path: "/RoboticCentre",
				element: <RoboticCentre />,
			},
			{
				path: "/BoschRexrothCEO",
				element: <BoschRexrothCEO />,
			},
			{
				path: "/Cafteria",
				element: <Cafteria />,
			},
			{
				path: "/Transportation",
				element: <Transportation />,
			},
			{
				path: "/Hostels",
				element: <Hostels />,
			},
			{
				path: "/Sports",
				element: <Sports />,
			},
			{
				path: "/Others",
				element: <Others />,
			},
			{
				path: "/departments/IT/deptstat",
				element: <DeptStats />,
			},
			{
				path: "/Overview",
				element: <Overview />,
			},
			{
				path: "/Programme",
				element: <Programme />,
			},
			{
				path: "/Patents",
				element: <Patents />,
			},
			{
				path: "/Rules",
				element: <Rules />,
			},
			{
				path: "/Autonomous",
				element: <Autonomous />,
			},
			{
				path: "/Institution",
				element: <Institution />,
			},
			{
				path: "/NaacHomePage",
				element: <NaacHomePage />,
			},
			{
				path: "/upload/staffimage",

				element: <UploadStaffImage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</React.StrictMode>
	</>
);
