import '/src/pages/Placements/Placements.css'
import {Link} from 'react-router-dom';
import Placementsteam from '../../Data/Placementsteam.js';
import Staff from "/src/components/staff/staff.jsx";
import Slides from "/src/components/Carousel/Slides.jsx"
import RegistrationForm from "/src/components/RegistrationForms/Form.jsx"
import "/src/components/RegistrationForms/Form.css"

const PlacementsStaff = Placementsteam.map((dataArg) => {
	return <Staff key={dataArg.staffId} item={dataArg} />;
});

let Placements=() =>{
    return(
		<>
	<Slides />
<div className="row w-full pt-3">
<div className="col-3">
	<div className="nav flex-column nav-pills placementmenuitems" id="tab" role="tablist" aria-orientation="vertical">
		<div className="Training-Placements-Menu">Traininng and Placements Menu</div>
      	<a className="nav-link" id="aboutplacements-tab" data-toggle="pill" href="#aboutplacements" role="tab" aria-controls="aboutplacements" aria-selected="true">About Placements</a>
      	<a className="nav-link" id="trainingandplacementsteam-tab" data-toggle="pill" href="#trainingandplacementsteam" role="tab" aria-controls="trainingandplacementsteam" aria-selected="false">Training and Placements Team</a>
      	<a className="nav-link" id="notifications-tab" data-toggle="pill" href="#notifications" role="tab" aria-controls="notifications" aria-selected="false">Notifications</a>
      	<a className="nav-link" id="trainingregistration-tab" data-toggle="pill" href="#trainingregistration" role="tab" aria-controls="trainingregistration" aria-selected="false">Training Registration</a>
		<Link className="nav-link" to={"/YearWise-Placements"} >YearWise Placements</Link>
		<Link className="nav-link" to={"/BranchWise-Placements"} >BranchWise Placements</Link>
	</div>
</div>
	<div className="left-navcontent">
		<div className="col pl-3">
    		<div className="tab-content" id="tabContent">
			<div className="tab-pane fade show in active" style={{width:"fit-content"}} id="aboutplacements" role="tabpanel" aria-labelledby="aboutplacements-tab">
			<div className='aboutplacements pb-1'>About Placements</div>
			<div className='line w-14 h-1 mb-2' style={{background:"#0060b1"}}></div>
				<div className='Objective pb-1'>Objective</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
				<div>The Objective of the Training and Placement Cell is </div>
				<div className='Functions pb-1'>Functions</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
				<div className='WeareHonest pb-1'>We are Honest</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
					<div>In an endeavor to do justiceto each of the company that is 
						choosing their engineering and managerial human resources from us, 
						the college.
					</div>
					<div>In an endeavor to do justiceto each of the company that is 
						choosing their engineering and managerial human resources from us, 
						the college.
					</div>
			</div>
			<div className="tab-pane fade" id="trainingandplacementsteam" role="tabpanel" aria-labelledby="trainingandplacementsteam-tab">
			<div className='TrainingAndPlacementsTeam pb-1 md:ml-28 xl:ml-0'>Training & Placement Team</div>
			<div className='line w-14 h-1 mb-2 md:ml-28 xl:ml-0' style={{background:"#0060b1"}}></div>
				<div className="staff-container grid grid-flow-row justify-center gap-6 mt-2 mb-2 md:grid-cols-1 md:ml-32 md:justify-items-center lg:grid-cols-1 xl:ml-0 xl:grid-cols-2 2xl:grid-cols-2">{PlacementsStaff}</div>
			</div>
			<div className="tab-pane fade md:ml-28 xl:ml-0" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
				<div className='notifications pb-1'>Training & Placement Notifications</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
				<div>
					<a href=""><li>Attended students  for training</li></a>
					<a href=""><li>Schedule for training</li></a>
					<a href=""><li>Campus Placement Drive is on 10/11/2022</li></a>
					<a href=""><li>Campus Placement Drive is on 10/11/2022</li></a>
					<a href=""><li>Placements Registration</li></a>
				</div>
			</div>
			<div className="tab-pane fade " id="trainingregistration" role="tabpanel" aria-labelledby="trainingregistration-tab">
				<div className='TrainingRegistration pb-1 md:ml-28 xl:ml-0'>Training Registration Form</div>
				<div className='line w-14 h-1 md:ml-28 xl:ml-0' style={{background:"#0060b1"}}></div>
				<div className='flex max-h-96 md:ml-28 xl:ml-0'><RegistrationForm /></div> 
			</div>
			<div className="tab-pane fade" id="yearWiseplacements" role="tabpanel" aria-labelledby="yearWiseplacements-tab">
				This page can be used to yearWiseplacements
			</div>
			<div className="tab-pane fade" id="branchWiseplacements" role="tabpanel" aria-labelledby="branchWiseplacements-tab">
				This page can be used to branchWiseplacements 
			</div>  
			</div>
  		</div>
	</div>
</div>


			<div className='Recruitersdiv mt-5 flex'>
			<div className='flex h-26'>
			<div className='Recruiters' style={{background:"#0060b1"}}>Our Recruiters</div>
			</div>
			<div className='marqueeplacementimages'>
				<marquee className='marquee' speed={30}>
					<div className='marqueeplacementimages flex'>
						<img className='mr-6 w-36 h-24' src="src\assets\tcs.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\Infosys.jpg" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\wipro.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\ibm.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\techmahindra.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\snovasys.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\bosch.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\amararaja.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\efftronics.png" alt="" />
					</div>
				</marquee>
			</div>
			</div>

			

			
		</>
    )}

export default Placements