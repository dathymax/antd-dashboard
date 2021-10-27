import React from 'react'
import CreateEmployee from './CreateEmployee'
import EmployeeList from './EmployeeList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Container = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <EmployeeList/>
                </Route>
                <Route path="/create-employee">
                    <CreateEmployee/>
                </Route>
            </Switch>
        </div>
    )
}

export default Container
