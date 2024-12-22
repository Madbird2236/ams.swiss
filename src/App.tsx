import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TimeSheet from './components/TimeSheet/TimeSheet';
import ProjectManager from './components/ProjectManager/ProjectManager';
import InventoryManagement from './components/InventoryManagement/InventoryManagement';
import VacationLeaveManagement from './components/VacationLeaveManagement/VacationLeaveManagement';
import EmployeeOnboarding from './components/EmployeeOnboarding/EmployeeOnboarding';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/time-sheet" component={TimeSheet} />
        <Route path="/project-manager" component={ProjectManager} />
        <Route path="/inventory-management" component={InventoryManagement} />
        <Route path="/vacation-leave-management" component={VacationLeaveManagement} />
        <Route path="/employee-onboarding" component={EmployeeOnboarding} />
        <Route path="/" exact component={TimeSheet} />
      </Switch>
    </Router>
  );
};

export default App;