import React from 'react';
import './App.css';
import Total from './components/Total.jsx';
import AddCash from './components/AddCash.jsx';
import Monthly from './components/MonthlyBills.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
	return (
			<div className='wrapper'>
				<h1 className='left mt-3 text-light'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Total />
					</div>
				</div>

				<div className='row mt-3'>
					<div className = 'col-sm'>
						<h2 className='left mt-3 text-light'>Add Daily Tips:</h2>
						<AddCash/>
					</div>
				</div>
				<div className='row mt-3'>
					<div className = 'col-sm'>
					
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col-sm'>
						<h3 className='left mt-3 text-light'>My Monthly Bills</h3>
						<Monthly />
					</div>
				</div>
			</div>
	);
};

export default App;