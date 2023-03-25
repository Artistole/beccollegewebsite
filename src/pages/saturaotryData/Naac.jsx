import React, { useState } from 'react';
import NaacCyclePage from './NaacCyclePage';
import NaacItems from "/src/components/saturatoryDataComponents/NaacItems.jsx"
import naacCycles from "/src/Data/SaturatoryData/naacCycles.js"
function Naac() {
    const [selectedValue, setSelectedValue] = useState('');
    const [showButtons, setShowButtons] = useState(true);
    const [documentYear, setDocumentYear] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [showDroupdown, setShowDroupdown] = React.useState(false)
    const onDropdownClick = () => setShowDroupdown(!showDroupdown)
    console.log(documentYear);
    return (
        <div className='flex items-center justify-center flex-col py-3 overflow-x-hidden mt-2'>
            <div className='text-center  py-3 w-screen'>
                <h1 className='bg-indigo-500 text-slate-50 py-3'>NAAC DETAILS</h1>
            </div>
            <div className='row w-screen'>
                <div className="col-4">
                    <div className="nav flex-column nav-pills text-sm" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className='nav flex-column nav-pills text-left py-10 justify-items-start p-4' id='tab' role="tablist">
                            <button className="nav-link bg-slate-400 text-black mb-1 pr-2" onClick={() => setShowButtons(!showButtons)} > {showButtons ? <>Hide Buttons</> : <>ClickHere</>}</button>
                            <br />
                            {showButtons ?
                                <>
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="AICTEMandatoryDisclosure-tab" data-toggle="pill" href="#AICTEMandatoryDisclosure" role="tab" aria-controls="AICTEMandatoryDisclosure" aria-selected="false">Cycle-I</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="AICTEEOAS-tab" data-toggle="pill" href="#AICTEEOAS" role="tab" aria-controls="AICTEApproval" aria-selected="false">Cycle-II</a>
                                </>
                                : <></>}
                        </div>
                    </div>
                </div>

                <div className="flex left-navcontent col-8">
                    <div className="tab-content" id="tabContent">
                        <div className="tab-pane fade show active" id="AICTEMandatoryDisclosure" role="tabpanel" aria-labelledby="AICTEMandatoryDisclosure-tab">
                            <div className='mt-4'>
                                <h1 className='text-start py-2 text-xl text-neutral-900'>NAAC CYCLE-I</h1>
                                <embed src="/src/assets/saturatoryData/cycle-1.jpg" width={showButtons ? 600 : 1000} height={600}>
                                </embed>
                            </div>
                        </div>
                        <div className="tab-pane fade mt-2 " id="AICTEEOAS" role="tabpanel" aria-labelledby="AICTEEOAS-tab">NAAC CYCLE-II
                            <NaacCyclePage />


                            <div className="tab-pane fade mt-3 " id="DataVerification" role="tabpanel" aria-labelledby="DataVerification-tab"></div>
                            <div className="tab-pane fade mt-3 " id="selfStudyReport" role="tabpanel" aria-labelledby="selfStudyReport-tab">
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-8  w-auto'>

                                    {
                                        naacCycles.map((naacCycles, index) => (
                                            <NaacItems
                                                title={naacCycles.title}
                                                parts={naacCycles.parts}
                                                index={index}
                                            >
                                            </NaacItems>
                                        ))
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Naac
