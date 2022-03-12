import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { setAgeValue } from '../../state/score';
import { useDispatch, useSelector } from 'react-redux';

const ArrangementModal = ({ close, submitModal }) => {
	const submit = (val) => {
		submitModal({ type: 'arranged', data: val });
	};
	return (
		<div
			className='modal'
			tabIndex='-1'
			style={{ display: 'block', background: '#21004454', zIndex: 5 }}>
			<div className='modal-dialog'>
				<div className='modal-content bg-p'>
					<div className='modal-body'>
						<h5>Do you have a valid job offer?</h5>
					</div>
					<div className='modal-footer' style={{ border: 'none' }}>
						<button
							type='button'
							className='btn btn-secondary px-3'
							data-bs-dismiss='modal'
							onClick={() => submit(10)}>
							Yes
						</button>
						<button
							type='button'
							className='btn btn-secondary px-3'
							data-bs-dismiss='modal'
							onClick={() => submit(0)}>
							No
						</button>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
							onClick={close}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ArrangementModal;
