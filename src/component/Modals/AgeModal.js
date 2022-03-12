import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { setAgeValue } from '../../state/score';
import { useDispatch, useSelector } from 'react-redux';

const AgeModal = ({ close, submitModal }) => {
	const {ageValue} = useSelector(state=> state.Score)
	const [dateOfBirth, setDateOfBirth] = useState(ageValue);
	const dispatch = useDispatch()
	const saveDOB = () => {
		if (dateOfBirth) {
      let year = moment(dateOfBirth).format('YYYY');
      let cs = parseInt(year);
      var data = 0;
			let cScore = [
					{ year: 1976, score: 1 },
					{ year: 1977, score: 2 },
					{ year: 1978, score: 3 },
					{ year: 1979, score: 4 },
					{ year: 1980, score: 5 },
					{ year: 1981, score: 6 },
					{ year: 1982, score: 7 },
					{ year: 1983, score: 8 },
					{ year: 1984, score: 9 },
					{ year: 1985, score: 10 },
					{ year: 1986, score: 11 }
      ]
			if (cs <= 1975) {
					data = 0;
			} else if (cs >= 1987) {
					data = 12;
			} else {
					data  = cScore.find((x) => x.year === cs).score;
			}
			submitModal({ type: 'age', data: data });
			dispatch(setAgeValue(dateOfBirth))
		} else {
			alert('Please select date');
		}
	};
	return (
		<div
			className='modal'
			tabIndex='-1'
			style={{ display: 'block', background: '#21004454', zIndex: 5 }}>
			<div className='modal-dialog'>
				<div className='modal-content bg-p'>
					<div className='modal-header'>
						<h5 className='modal-title text-secondary'>
							Select your date of birth
						</h5>
					</div>
					<div className='modal-body'>
						<DatePicker
							placeholderText='Select or type DOB (MM/DD/YYYY)'
							selected={dateOfBirth}
							onChange={(date) => setDateOfBirth(date)}
						/>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
							onClick={close}>
							Close
						</button>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
							onClick={saveDOB}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AgeModal;
