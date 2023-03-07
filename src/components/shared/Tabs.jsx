import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function TabsComponent(props) {
    return (
        <Tabs
            defaultActiveKey={props.defaultKey}
            id={new Date().valueOf().toString()}
            className="my-2"
            fill
        >
            {props.tabsData.map(x => <Tab eventKey={x.tabKey} title={x.tabTitle}>
                {x.tabView}
            </Tab>)}
        </Tabs>
    );
}

