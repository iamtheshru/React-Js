import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-ld-4">
                        <ol>
                            <li><Link to="whatiscomponate">what is componate</Link></li>
                            <li><Link to="classcompointro">Class Compointro </Link></li>
                            <li><Link to="jsx">Jsx</Link></li>
                            <li><Link to="event">Event</Link></li>
                            <li><Link to="state">State</Link></li>
                            <li><Link to="propsinclass">PropsInClassCompo</Link></li>
                            <li><Link to="statelifecycle">StateLifeCycleInClassCompo</Link></li>
                            <li><Link to="statelifecycleloader">Statelifecycleloader</Link></li>
                            <li><Link to="conditionalRendering">ConditionalRendering</Link></li>
                            <li><Link to="loaderExample">LoaderExample</Link></li>
                            <li><Link to="listKeysClassCompo">ListKeysClassCompo</Link></li>
                            <li><Link to="dynamicSubMenu">DynamicSubMenu</Link></li>
                            <li><Link to="classcompospreadrest">ClassCompoSpreadRest</Link></li>
                            <li><Link to="controlledcompo">ControlledCompo</Link></li>
                            <li><Link to="dynamicsubmenuex">DynamicSubMenuEx</Link></li>
                            <li><Link to="uncontrolledcompo">UncontrolledCompo</Link></li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </>
        )
    }
};

export default ClassCompoMenu;
