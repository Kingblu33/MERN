import React from 'react';
import App from '../App';
import ReactDOM from 'react';


const TabContent = (props) => {
    const { tab, setTab } = props;

    const onClickHandler = (index) => {
        setTab({ ...tab, selectedTab: index })

        console.log(...tab);
    }

    return (
        <div>
            <div className="d-flex justify-content-evenly ">
                {
                    tab.content.map((tab, index) => (
                        <button key={index} style={{ width: "600px", height: "50px", margin: "5px" }} className="tabs" onClick={() => onClickHandler(index)}>
                            Tab {index + 1}
                        </button>
                    ))
                }
            </div>
            <div style={{ width: "1300px", height: "100px", border: "2px solid black" }}>
                <h4> {props.tab.content[props.tab.selectedTab]}</h4>
            </div>

        </div>
    )

}

export default TabContent;

