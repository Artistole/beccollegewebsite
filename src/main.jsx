import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Root from "/src/routes/root.jsx";
import Homepage from "/src/pages/homepage.jsx";
import ExaminationCell from "/src/pages/examsResults/examination.jsx";
import ExamNotifs from "/src/pages/examsResults/examsNotifs.jsx";
import It from "/src/pages/departments/IT.jsx";
import ExamDownloads from "/src/pages/examsResults/exam-downloads.jsx";
import ExamLogin from "/src/pages/examsResults/examLogin.jsx";
import ExamResults from "/src/pages/examsResults/examResults.jsx";
import Placements from "/src/pages/Placements/placements.jsx";
import YearWisePlacements from "/src/pages/Placements/YearWisePlacements";
import BranchWisePlacements from "/src/pages/Placements/BranchWisePlacements";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <Homepage /> },
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
				path: "/BranchWise-Placements",
				element: <BranchWisePlacements />,
			},
			{
				path: "/departments/IT",
				element: <It />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
				{/* <RouterProvider router={router} /> */} 
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</React.StrictMode>
	</>
);
