import Range from './Range.jsx';
import Rangetwo from './Range2.jsx';
import { useSelector } from 'react-redux';
//import { useState } from 'react';

function L2() {
  const Primary = useSelector((state) => state.idioma.primario);
  const Secundario = useSelector((state) => state.idioma.secundario);

  const dato_IELTS = {
    Lmin: 3,
    Lmax: 9,
    Rmin: 3,
    Rmax: 9,
    Wmin: 3,
    Wmax: 9,
    Smin: 3,
    Smax: 9,
    step: 0.5,
  };

  const dato_TEF = {
    Lmin: 145,
    Lmax: 360,
    Rmin: 121,
    Rmax: 300,
    Wmin: 181,
    Wmax: 450,
    Smin: 181,
    Smax: 450,
    step: 1,
  };

  const dato_CELPIP = {
    Lmin: 4,
    Lmax: 10,
    Rmin: 4,
    Rmax: 10,
    Wmin: 4,
    Wmax: 10,
    Smin: 4,
    Smax: 10,
    step: 1,
  };

  const dato_TCF = {
    Lmin: 331,
    Lmax: 699,
    Rmin: 342,
    Rmax: 699,
    Wmin: 4,
    Wmax: 20,
    Smin: 4,
    Smax: 20,
    step: 1,
  };

  function intro(exp) {
    switch (exp) {
      case 'option1':
        return <Range param={dato_IELTS} />;
        //eslint-disable-next-line
        break;
      case 'option2':
        return <Range param={dato_CELPIP} />;
        //eslint-disable-next-line
        break;
      case 'option3':
        return <Range param={dato_TEF} />;
        //eslint-disable-next-line
        break;
      case 'option4':
        return <Range param={dato_TCF} />;
        //eslint-disable-next-line
        break;

      case 'option1option5':
        return <Range param={dato_IELTS} />;
        //eslint-disable-next-line
        break;
      case 'option2option5':
        return <Range param={dato_CELPIP} />;
        //eslint-disable-next-line
        break;
      case 'option3option5':
        return <Range param={dato_TEF} />;
        //eslint-disable-next-line
        break;
      case 'option4option5':
        return <Range param={dato_TCF} />;
        //eslint-disable-next-line
        break;

      case 'option1option6':
        return (
          <>
            <div id="v1">
              <Range param={dato_IELTS} />
            </div>
            <div id="v2" className="d-none">
              <Rangetwo param={dato_TEF} />
            </div>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option2option6':
        return (
          <>
            <div id="v1">
              <Range param={dato_CELPIP} />
            </div>
            <div id="v2" className="d-none">
              <Rangetwo param={dato_TEF} />
            </div>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option1option7':
        return (
          <>
            <div id="v1">
              <Range param={dato_IELTS} />
            </div>
            <div id="v2" className="d-none">
              <Rangetwo param={dato_TCF} />
            </div>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option2option7':
        return (
          <>
            <div id="v1">
              <Range param={dato_CELPIP} />
            </div>
            <div id="v2" className="d-none">
              <Rangetwo param={dato_TCF} />
            </div>
          </>
        );
        //eslint-disable-next-line
        break;

      case 'option3option8':
        return (
          <>
            <div id="v1">
              <Range param={dato_TEF} />
            </div>
            <div id="v2" className="d-none">
              <Rangetwo param={dato_IELTS} />
            </div>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option4option8':
        return (
          <>
            <div id="v1">
              <Range param={dato_TCF} />
            </div>
            <div id="v2" className="d-none">
              <Rangetwo param={dato_IELTS} />
            </div>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option3option9':
        return (
          <>
            <div id="v1">
              <Range param={dato_TEF} />
            </div>
            <div id="v2" className="d-none">
              <Rangetwo param={dato_CELPIP} />
            </div>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option4option9':
        return (
          <>
            <div id="v1">
              <Range param={dato_TCF} />
            </div>
            <div id="v2" className="d-none">
              <Rangetwo param={dato_CELPIP} />
            </div>
          </>
        );
        //eslint-disable-next-line
        break;

      default:
        return '';
    }
  }

  function general(e) {
    //console.log(e.target.name);
    if (e.target.name === 'yes') {
      e.target.classList.add('active');
      e.target.nextSibling.nextSibling.classList.remove('active');

      document.getElementById('v1').classList.remove('d-none');
      document.getElementById('v2').classList.add('d-none');

      document.getElementById('t1').classList.remove('d-none');
      document.getElementById('t2').classList.add('d-none');
    } else {
      e.target.classList.add('active');
      e.target.previousSibling.previousSibling.classList.remove('active');
      document.getElementById('v2').classList.remove('d-none');
      document.getElementById('v1').classList.add('d-none');

      document.getElementById('t2').classList.remove('d-none');
      document.getElementById('t1').classList.add('d-none');
      //      console.log(e.target.parentNode.parentNode.nextSibling.childNodes);
    }
  }

  function casos(exp) {
    switch (exp) {
      case 'option1':
        return <button className="btn btn-secondary w-100 mb-3">IELTS</button>;
        //eslint-disable-next-line
        break;
      case 'option2':
        return <button className="btn btn-secondary w-100 mb-3">CELPIP</button>;
        //eslint-disable-next-line
        break;
      case 'option3':
        return <button className="btn btn-secondary w-100 mb-3">TEF</button>;
        //eslint-disable-next-line
        break;
      case 'option4':
        return <button className="btn btn-secondary w-100 mb-3">TCF</button>;
        //eslint-secondary-next-line
        break;
        //eslint-secondary-next-line
      case 'option1option5':
        return <button className="btn btn-secondary w-100 mb-3">IELTS</button>;
        //eslint-disable-next-line
        break;
      case 'option2option5':
        return <button className="btn btn-secondary w-100 mb-3">CELPIP</button>;
        //eslint-disable-next-line
        break;
      case 'option3option5':
        return <button className="btn btn-secondary w-100 mb-3">TEF</button>;
        //eslint-disable-next-line
        break;
      case 'option4option5':
        return <button className="btn btn-secondary w-100 mb-3">TCF</button>;
        //eslint-disable-next-line
        break;

      case 'option1option6':
        return (
          <div className="d-flex">
            <button
              onClick={(e) => general(e)}
              name="yes"
              className="btn btn-outline-secondary active w-50 mb-3 m-1"
            >
              IELTS
            </button>{' '}
            <button
              onClick={(e) => general(e)}
              name="no"
              className="btn btn-outline-secondary w-50 mb-3 m-1"
            >
              TEF
            </button>{' '}
          </div>
        );
        //eslint-disable-next-line
        break;
      case 'option2option6':
        return (
          <div className="d-flex">
            <button
              onClick={(e) => general(e)}
              name="yes"
              className="btn btn-outline-secondary active w-50 mb-3 m-1"
            >
              CELPIP
            </button>{' '}
            <button
              onClick={(e) => general(e)}
              name="no"
              className="btn btn-outline-secondary w-50 mb-3 m-1"
            >
              TEF
            </button>{' '}
          </div>
        );
        //eslint-disable-next-line
        break;
      case 'option1option7':
        return (
          <div className="d-flex">
            <button
              name="yes"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary active w-50 mb-3 m-1"
            >
              IELTS
            </button>{' '}
            <button
              name="no"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary w-50 mb-3 m-1"
            >
              TCF
            </button>{' '}
          </div>
        );
        //eslint-disable-next-line
        break;
      case 'option2option7':
        return (
          <div className="d-flex">
            <button
              name="yes"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary active w-50 mb-3 m-1"
            >
              CELPIP
            </button>{' '}
            <button
              name="no"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary w-50 mb-3 m-1"
            >
              TCF
            </button>{' '}
          </div>
        );
        //eslint-disable-next-line
        break;

      case 'option3option8':
        return (
          <div className="d-flex">
            <button
              name="yes"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary active w-50 mb-3 m-1"
            >
              TEF
            </button>{' '}
            <button
              name="no"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary w-50 mb-3 m-1"
            >
              IELTS
            </button>{' '}
          </div>
        );
        //eslint-disable-next-line
        break;
      case 'option4option8':
        return (
          <div className="d-flex">
            <button
              name="yes"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary active w-50 mb-3 m-1"
            >
              TCF
            </button>{' '}
            <button
              name="no"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary w-50 mb-3 m-1"
            >
              IELTS
            </button>{' '}
          </div>
        );
        //eslint-disable-next-line
        break;
      case 'option3option9':
        return (
          <div className="d-flex">
            <button
              name="yes"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary active w-50 mb-3 m-1"
            >
              TEF
            </button>{' '}
            <button
              name="no"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary w-50 mb-3 m-1"
            >
              CELPIP
            </button>{' '}
          </div>
        );
        //eslint-disable-next-line
        break;
      case 'option4option9':
        return (
          <div className="d-flex">
            <button
              name="yes"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary active w-50 mb-3 m-1"
            >
              TCF
            </button>{' '}
            <button
              name="no"
              onClick={(e) => general(e)}
              className="btn btn-outline-secondary w-50 mb-3 m-1"
            >
              CELPIP
            </button>{' '}
          </div>
        );
        //eslint-disable-next-line
        break;

      default:
        return '';
    }
  }

  function txt(exp) {
    switch (exp) {
      case 'option1':
        return 'IELTS';
        //eslint-disable-next-line
        break;
      case 'option2':
        return 'CELPIP';
        //eslint-disable-next-line
        break;
      case 'option3':
        return 'TEF';
        //eslint-disable-next-line
        break;
      case 'option4':
        return 'TCF';
        //eslint-disable-next-line
        break;

      case 'option1option5':
        return 'IELTS';
        //eslint-disable-next-line
        break;
      case 'option2option5':
        return 'CELPIP';
        //eslint-disable-next-line
        break;
      case 'option3option5':
        return 'TEF';
        //eslint-disable-next-line
        break;
      case 'option4option5':
        return 'TCF';
        //eslint-disable-next-line
        break;

      case 'option1option6':
        return (
          <>
            <span id="t1">IELTS</span>
            <span id="t2" className="d-none">
              TEF
            </span>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option2option6':
        return (
          <>
            <span id="t1">CELPIP</span>
            <span id="t2" className="d-none">
              TEF
            </span>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option1option7':
        return (
          <>
            <span id="t1">IELTS</span>
            <span id="t2" className="d-none">
              TCF
            </span>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option2option7':
        return (
          <>
            <span id="t1">CELPIP</span>
            <span id="t2" className="d-none">
              TCF
            </span>
          </>
        );
        //eslint-disable-next-line
        break;

      case 'option3option8':
        return (
          <>
            <span id="t1">TEF</span>
            <span id="t2" className="d-none">
              IELTS
            </span>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option4option8':
        return (
          <>
            <span id="t1">TCF</span>
            <span id="t2" className="d-none">
              IELTS
            </span>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option3option9':
        return (
          <>
            <span id="t1">TEF</span>
            <span id="t2" className="d-none">
              CELPIP
            </span>
          </>
        );
        //eslint-disable-next-line
        break;
      case 'option4option9':
        return (
          <>
            <span id="t1">TCF</span>
            <span id="t2" className="d-none">
              CELPIP
            </span>
          </>
        );
        //eslint-disable-next-line
        break;

      default:
        return '';
    }
  }

  return (
    <div>
      <div>{casos(Primary + Secundario)}</div>
      <div>
        <p className="fw-bold text-center text-secondary">
          Please enter your{' '}
          <span className="fw-normal">{txt(Primary + Secundario)}</span> score{' '}
        </p>
      </div>
      <div>{intro(Primary + Secundario)}</div>
    </div>
  );
}

export default L2;
