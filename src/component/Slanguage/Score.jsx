import { useSelector, useDispatch } from 'react-redux';
import { settotal1, settotal2 } from '../../state/Sstate_idioma.js';
import { useState, useEffect } from 'react';

function Score() {
  const dispatch = useDispatch();
  const L = useSelector((state) => state.Sidioma.L1);
  const L2 = useSelector((state) => state.Sidioma.L2);
  const R = useSelector((state) => state.Sidioma.R1);
  const R2 = useSelector((state) => state.Sidioma.R2);
  const W = useSelector((state) => state.Sidioma.W1);
  const W2 = useSelector((state) => state.Sidioma.W2);
  const S = useSelector((state) => state.Sidioma.S1);
  const S2 = useSelector((state) => state.Sidioma.S2);
  const vd2 = useSelector((state) => state.Sidioma.vd2);
  const vd1 = useSelector((state) => state.Sidioma.vd1);
  const primario = useSelector((state) => state.Sidioma.primario);
  const secundario = useSelector((state) => state.Sidioma.secundario);
  const resul = L;
  const [result, setResult] = useState(resul);
  const [resultR, setResultR] = useState(R);
  const [resultW, setResultW] = useState(W);
  const [resultS, setResultS] = useState(S);

  function EscucharIELTS(n) {
    if (n < 5) {
      return 0;
    }
    if (n < 6) {
      return 1;
    }
    if (n < 8) {
      return 3 - vd1;
    }
    if (n < 70) {
      return 5 - vd1;
    }
  }

  function leerIELTS(n) {
    if (n < 4.5) {
      return 0;
    }
    if (n < 6) {
      return 1;
    }
    if (n < 7) {
      return 3 - vd1;
    }
    if (n < 10) {
      return 5 - vd1;
    }
  }

  function escribirIELTS(n) {
    if (n < 5) {
      return 0;
    }
    if (n < 6) {
      return 1;
    }
    if (n < 7) {
      return 3 - vd1;
    }
    if (n < 10) {
      return 5 - vd1;
    }
  }

  function allCELPIP(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 5) {
      return 0;
    }
    if (n < 8) {
      return 1 - vd1;
    }
    if (n < 9) {
      return 3 - vd1;
    }
    if (n < 11) {
      return 5 - vd1;
    }
  }

  function escucharTEF(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 181) {
      return 0;
    }
    if (n < 249) {
      return 1 - vd1;
    }
    if (n < 298) {
      return 3 - vd1;
    }
    if (n < 361) {
      return 5 - vd1;
    }
  }

  function leerTEF(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 150) {
      return 0;
    }
    if (n < 207) {
      return 1 - vd1;
    }
    if (n < 248) {
      return 3 - vd1;
    }
    if (n < 301) {
      return 5 - vd1;
    }
  }

  function escribirTEF(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 226) {
      return 0;
    }
    if (n < 310) {
      return 1 - vd1;
    }
    if (n < 371) {
      return 3 - vd1;
    }
    if (n < 451) {
      return 5 - vd1;
    }
  }

  function escucharTCF(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 369) {
      return 0;
    }
    if (n < 458) {
      return 1 - vd1;
    }
    if (n < 523) {
      return 3 - vd1;
    }
    if (n < 700) {
      return 5 - vd1;
    }
  }

  function leerTCF(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 375) {
      return 0;
    }
    if (n < 553) {
      return 1 - vd1;
    }
    if (n < 524) {
      return 3 - vd1;
    }
    if (n < 700) {
      return 5 - vd1;
    }
  }

  function escribirTCF(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 6) {
      return 0;
    }
    if (n < 10) {
      return 1 - vd1;
    }
    if (n < 14) {
      return 3 - vd1;
    }
    if (n < 21) {
      return 5 - vd1;
    }
  }

  function escucharTEF2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 181) {
      return 0;
    }
    if (n < 249) {
      return 1;
    }
    if (n < 298) {
      return 3;
    }
    if (n < 361) {
      return 6;
    }
  }

  function leerTEF2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 151) {
      return 0;
    }
    if (n < 207) {
      return 1;
    }
    if (n < 248) {
      return 3;
    }
    if (n < 301) {
      return 6;
    }
  }

  function escribirTEF2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 226) {
      return 0;
    }
    if (n < 310) {
      return 1;
    }
    if (n < 371) {
      return 3;
    }
    if (n < 451) {
      return 6;
    }
  }

  function escucharTCF2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 369) {
      return 0;
    }
    if (n < 458) {
      return 1;
    }
    if (n < 523) {
      return 3;
    }
    if (n < 700) {
      return 6;
    }
  }

  function leerTCF2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 375) {
      return 0;
    }
    if (n < 553) {
      return 1;
    }
    if (n < 524) {
      return 3;
    }
    if (n < 700) {
      return 6;
    }
  }

  function escribirTCF2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 6) {
      return 0;
    }
    if (n < 10) {
      return 1;
    }
    if (n < 14) {
      return 3;
    }
    if (n < 21) {
      return 6;
    }
  }

  function escucharIELTS2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 5) {
      return 0;
    }
    if (n < 6) {
      return 1;
    }
    if (n < 8) {
      return 3;
    }
    if (n < 10) {
      return 6;
    }
  }

  function leerIELTS2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 4) {
      return 0;
    }
    if (n < 6) {
      return 1;
    }
    if (n < 7) {
      return 3;
    }
    if (n < 10) {
      return 6;
    }
  }

  function escribirIELTS2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 5) {
      return 0;
    }
    if (n < 6) {
      return 1;
    }
    if (n < 7) {
      return 3;
    }
    if (n < 10) {
      return 6;
    }
  }

  function allCELPIP2(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 5) {
      return 0;
    }
    if (n < 7) {
      return 1;
    }
    if (n < 9) {
      return 3;
    }
    if (n < 11) {
      return 6;
    }
  }

  function logicaL(exp, n, r) {
    switch (exp) {
      case 'option1':
        return EscucharIELTS(n);
        //eslint-disable-next-line
        break;
      case 'option2':
        return allCELPIP(n);
        //eslint-disable-next-line
        break;
      case 'option3':
        return escucharTEF(n);
        //eslint-disable-next-line
        break;
      case 'option4':
        return escucharTCF(n);
        //eslint-disable-next-line
        break;
      default:
        return 0;
    }
  }

  function logicaR(exp, n) {
    switch (exp) {
      case 'option1':
        return leerIELTS(n);
        //eslint-disable-next-line
        break;
      case 'option2':
        return allCELPIP(n);
        //eslint-disable-next-line
        break;
      case 'option3':
        return leerTEF(n);
        //eslint-disable-next-line
        break;
      case 'option4':
        return leerTCF(n);
        //eslint-disable-next-line
        break;
      default:
        return 0;
    }
  }

  function logicaW(exp, n) {
    switch (exp) {
      case 'option1':
        return escribirIELTS(n);
        //eslint-disable-next-line
        break;
      case 'option2':
        return allCELPIP(n);
        //eslint-disable-next-line
        break;
      case 'option3':
        return escribirTEF(n);
        //eslint-disable-next-line
        break;
      case 'option4':
        return escribirTCF(n);
        //eslint-disable-next-line
        break;
      default:
        return 0;
    }
  }

  function logicaS(exp, n) {
    switch (exp) {
      case 'option1':
        return escribirIELTS(n);
        //eslint-disable-next-line
        break;
      case 'option2':
        return allCELPIP(n);
        //eslint-disable-next-line
        break;
      case 'option3':
        return escribirTEF(n);
        //eslint-disable-next-line
        break;
      case 'option4':
        return escribirTCF(n);
        //eslint-disable-next-line
        break;
      default:
        return 0;
    }
  }

  useEffect(() => {
     // console.log(vd1,"j")
    let a = total(primario);
    dispatch(settotal1(a));

    let b = total2(secundario);
    dispatch(settotal2(b));
    //eslint-disable-next-line
  }, [total(primario), validartotal2(secundario), vd1,vd2]);

  function total(a) {
    const to =
      logicaL(a, result) +
      logicaR(a, resultR) +
      logicaW(a, resultW) +
      logicaS(a, resultS);

    // dispatch(settotal1(to))

    return to;
  }

  function sumaTEF() {
    const to =
      escucharTEF2(L2) + leerTEF2(R2) + escribirTEF2(W2) + escribirTEF2(S2);
    return to;
  }

  function sumaTCF() {
    const to =
      escucharTCF2(L2) + leerTCF2(R2) + escribirTCF2(W2) + escribirTCF2(S2);
    return to;
  }

  function sumaIELTS() {
    const to =
      escucharIELTS2(L2) +
      leerIELTS2(R2) +
      escribirIELTS2(W2) +
      escribirIELTS2(S2);
    return to;
  }

  function sumaCELPIP() {
    const to =
      allCELPIP2(L2) + allCELPIP2(R2) + allCELPIP2(W2) + allCELPIP2(S2);
    return to;
  }

  function total2(a) {
    // console.log(a);
    switch (a) {
      case 'option6':
        return sumaTEF();
        //eslint-disable-next-line
        break;
      case 'option7':
        return sumaTCF();
        //eslint-disable-next-line
        break;
      case 'option8':
        return sumaIELTS();
        //eslint-disable-next-line
        break;
      case 'option9':
        return sumaCELPIP();
        //eslint-disable-next-line
        break;
      default:
        return 0;
    }
  }

  useEffect(() => {
    setResult(resul);
    setResultR(R);
    setResultW(W);
    setResultS(S);
  }, [resul, R, W, S]);

  function validartotal2() {
    const b = total2(secundario);
    //    dispatch(settotal2(b));
    if (b === 0) {
      return '';
    } else {
      return `+ ${b}`;
    }
  }

  // useEffect(() => {
  //   console.log(primario);
  // }, []);

  return (
    <span>
      Spouse Language Score:{' '}
      {/*logicaL(primario, result)} - {logicaR(primario, resultR)}{' '}
      - {logicaW(primario, resultW)} - {logicaS(primario, resultS)} ={' '*/}
      {total(primario)}
      {/*escucharTEF2(L2)} - {leerTEF2(R2)} -{escribirTEF2(W2)}
      -{escribirTEF2(S2)*/}{' '}
      {validartotal2()}
    </span>
  );
}

export default Score;
