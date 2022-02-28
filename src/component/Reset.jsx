import { useDispatch } from 'react-redux';
import { resetData } from '../state/score.js';
import { mview1, mview2, saveid, saveid2 } from '../state/modals.js';
import { opciones } from '../state/modals2.js';
import { sets1, sets2, sets3, settotal } from '../state/Ad.js';
import { condicion } from '../state/first.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
	setnext,
	setprimario,
	setsecundario,
	setVL1,
	setVR1,
	setVW1,
	setVS1,
	setVL2,
	setVR2,
	setVW2,
	setVS2,
	setlugar,
	settotal1,
	settotal2,
	setvd1,
	setvd2,
} from '../state/Sstate_idioma.js';
import {
	setnext as setnext2,
	setprimario as setprimario2,
	setsecundario as setsecundario2,
	setVL1 as setVL12,
	setVR1 as setVR12,
	setVW1 as setVW12,
	setVS1 as setVS12,
	setVL2 as setVL22,
	setVR2 as setVR22,
	setVW2 as setVW22,
	setVS2 as setVS22,
	setlugar as setlugar2,
	settotal1 as settotal12,
	settotal2 as settotal22,
	setvd1 as setvd12,
	setvd2 as setvd22,
} from '../state/state_idioma.js';

import {
	agevalor,
	agevalorL,
	educationvalor,
	educationvalorL,
	setceducation,
	setceducationL,
	setseducationL,
	setseducation,
	setsm,
	setswork,
	setsworkv,
} from '../state/valores.js';
import {
	setn1w,
	setn2w,
	setcheck,
	settotal as settotalt2,
} from '../state/work.js';

function Reset({ resetCallBack }) {
	const dispatch = useDispatch();

	function reset() {
		//
		dispatch(mview1(''));
		dispatch(mview2(''));
		dispatch(saveid(''));
		dispatch(saveid2(''));
		//
		dispatch(opciones(''));
		//
		dispatch(sets1(''));
		dispatch(sets2(''));
		dispatch(sets3(''));
		dispatch(settotal(0));
		//
		dispatch(condicion(false));
		//
		dispatch(setnext(true));
		dispatch(setprimario(''));
		dispatch(setsecundario(''));
		dispatch(setVL1(0));
		dispatch(setVR1(0));
		dispatch(setVW1(0));
		dispatch(setVS1(0));
		dispatch(setVL2(0));
		dispatch(setVR2(0));
		dispatch(setVW2(0));
		dispatch(setVS2(0));
		dispatch(setlugar(''));
		dispatch(settotal1(0));
		dispatch(settotal2(0));
		dispatch(setvd1(0));
		dispatch(setvd2(0));
		//
		dispatch(setnext2(true));
		dispatch(setprimario2(''));
		dispatch(setsecundario2(''));
		dispatch(setVL12(0));
		dispatch(setVR12(0));
		dispatch(setVW12(0));
		dispatch(setVS12(0));
		dispatch(setVL22(0));
		dispatch(setVR22(0));
		dispatch(setVW22(0));
		dispatch(setVS22(0));
		dispatch(setlugar2(''));
		dispatch(settotal12(0));
		dispatch(settotal22(0));
		dispatch(setvd12(0));
		dispatch(setvd22(0));
		//
		dispatch(agevalor(0));
		dispatch(agevalorL(''));
		dispatch(educationvalor(0));
		dispatch(educationvalorL(''));
		dispatch(setceducation(0));
		dispatch(setceducationL(''));
		dispatch(setseducationL(''));
		dispatch(setseducation(0));
		dispatch(setsm(''));
		dispatch(setswork(0));
		dispatch(setsworkv(0));
		//
		dispatch(setn1w(0));
		dispatch(setn2w(0));
		dispatch(setcheck(false));
		dispatch(settotalt2(0));
	}

	const resetCall = () => {
		resetCallBack();
		dispatch(resetData());
	};

	return (
		<button
			className='button button-primary default normal icon-left'
			onClick={resetCall}>
			<FontAwesomeIcon icon={faTrash} />
		</button>
	);
}

export default Reset;
