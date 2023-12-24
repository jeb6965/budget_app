import React from 'react';


const AddCash = () => {
	return (
		<form>
			<div className='row'>
				<div className='left col-sm'>
					<label className='label' htmlFor='name'>Daily Cash</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
					></input>
					<label className='label' htmlFor='name'>Daily Card</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
					></input>
				</div>
            </div>
        </form>
    );
};

export default AddCash;