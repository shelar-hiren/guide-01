export function logica(e, count3) {
  const ee = document.querySelectorAll(".ch")[1].getAttribute("class");
  if (ee === "ch desabi") {
    //console.log(ee);

    if (parseInt(e) >= 20 && parseInt(e) <= 29) {
      return 110;
    }

    if (parseInt(e) <= 17 || parseInt(e) >= 46) {
      return 0;
    }

    if (e === "30") {
      return 105;
    }

    if (e === "31") {
      return 99;
    }

    if (e === "32") {
      return 94;
    }

    if (e === "33") {
      return 88;
    }

    if (e === "34") {
      return 83;
    }

    if (e === "35") {
      return 77;
    }

    if (e === "36") {
      return 72;
    }

    if (e === "37") {
      return 66;
    }

    if (e === "38") {
      return 61;
    }

    if (e === "39") {
      return 55;
    }

    if (e === "40") {
      return 50;
    }

    if (e === "41") {
      return 39;
    }

    if (e === "42") {
      return 28;
    }

    if (e === "43") {
      return 17;
    }

    if (e === "44") {
      return 6;
    }

    if (e === "19") {
      return 105;
    }

    if (e === "18") {
      return 99;
    }
  }

  if (count3 === "y1") {
    if (e >= 20 && e <= 29) {
      return 100;
    }

    if (parseInt(e) <= 17 || parseInt(e) >= 46) {
      return 0;
    }

    if (e === "30") {
      return 95;
    }

    if (e === "31") {
      return 90;
    }

    if (e === "32") {
      return 85;
    }

    if (e === "33") {
      return 80;
    }

    if (e === "34") {
      return 75;
    }

    if (e === "35") {
      return 70;
    }

    if (e === "36") {
      return 65;
    }

    if (e === "37") {
      return 60;
    }

    if (e === "38") {
      return 55;
    }

    if (e === "39") {
      return 50;
    }

    if (e === "40") {
      return 45;
    }

    if (e === "41") {
      return 35;
    }

    if (e === "42") {
      return 25;
    }

    if (e === "43") {
      return 15;
    }

    if (e === "44") {
      return 5;
    }

    if (e === "19") {
      return 95;
    }

    if (e === "18") {
      return 90;
    }
  } else {
    if (parseInt(e) >= 20 && parseInt(e) <= 29) {
      return 110;
    }

    if (parseInt(e) <= 17 || parseInt(e) >= 46) {
      return 0;
    }

    if (e === "30") {
      return 105;
    }

    if (e === "31") {
      return 99;
    }

    if (e === "32") {
      return 94;
    }

    if (e === "33") {
      return 88;
    }

    if (e === "34") {
      return 83;
    }

    if (e === "35") {
      return 77;
    }

    if (e === "36") {
      return 72;
    }

    if (e === "37") {
      return 66;
    }

    if (e === "38") {
      return 61;
    }

    if (e === "39") {
      return 55;
    }

    if (e === "40") {
      return 50;
    }

    if (e === "41") {
      return 39;
    }

    if (e === "42") {
      return 28;
    }

    if (e === "43") {
      return 17;
    }

    if (e === "44") {
      return 6;
    }

    if (e === "19") {
      return 105;
    }

    if (e === "18") {
      return 99;
    }
  }
}

export function EduLogica(e, c) {
  if (c === "y1") {
    let a = (parseInt(e) / 100) * 7;
    let b = parseInt(e) - Math.round(a);

    switch (b) {
      case 139:
        return 140;
        //eslint-disable-next-line
        break;
      case 130:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 117:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 111:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 104:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 85:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 78:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 26:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      default:
        return b;
    }
  } else {
    let a = (parseInt(e) / 100) * 7;
    let b = parseInt(e) + Math.round(a);
    switch (b) {
      case 161:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 144:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 137:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 128:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 105:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 96:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      case 32:
        return parseInt(e);
        //eslint-disable-next-line
        break;
      default:
        return b;
    }
  }
}

export function logicawork(n, v) {
  const value = n ? n + v + "" : v + n + "";
  switch (value) {
    case "10":
      return 40;
      //eslint-disable-next-line
      break;
    case "20":
      return 53;
      //eslint-disable-next-line
      break;
    case "30":
      return 64;
      //eslint-disable-next-line
      break;
    case "40":
      return 72;
      //eslint-disable-next-line
      break;
    case "50":
      return 80;
      //eslint-disable-next-line
      break;
    case "11":
      return 53;
      //eslint-disable-next-line
      break;
    case "21":
      return 78;
      //eslint-disable-next-line
      break;
    case "31":
      return 89;
      //eslint-disable-next-line
      break;
    case "41":
      return 97;
      //eslint-disable-next-line
      break;
    case "51":
      return 105;
      //eslint-disable-next-line
      break;
    case "12":
      return 53;
      //eslint-disable-next-line
      break;
    case "22":
      return 78;
      //eslint-disable-next-line
      break;
    case "32":
      return 89;
      //eslint-disable-next-line
      break;
    case "42":
      return 97;
      //eslint-disable-next-line
      break;
    case "52":
      return 105;
      //eslint-disable-next-line
      break;
    case "13":
      return 65;
      //eslint-disable-next-line
      break;
    case "23":
      return 103;
      //eslint-disable-next-line
      break;
    case "33":
      return 114;
      //eslint-disable-next-line
      break;
    case "43":
      return 122;
      //eslint-disable-next-line
      break;
    case "53":
      return 130;
      //eslint-disable-next-line
      break;

    default:
      return 0;
  }
}

export function logicawork2(n, v) {
  switch (n + v + "") {
    case "10":
      return 35;
      //eslint-disable-next-line
      break;
    case "20":
      return 46;
      //eslint-disable-next-line
      break;
    case "30":
      return 56;
      //eslint-disable-next-line
      break;
    case "40":
      return 63;
      //eslint-disable-next-line
      break;
    case "50":
      return 70;
      //eslint-disable-next-line
      break;
    case "11":
      return 48;
      //eslint-disable-next-line
      break;
    case "21":
      return 71;
      //eslint-disable-next-line
      break;
    case "31":
      return 81;
      //eslint-disable-next-line
      break;
    case "41":
      return 88;
      //eslint-disable-next-line
      break;
    case "51":
      return 95;
      //eslint-disable-next-line
      break;
    case "12":
      return 48;
      //eslint-disable-next-line
      break;
    case "22":
      return 71;
      //eslint-disable-next-line
      break;
    case "32":
      return 81;
      //eslint-disable-next-line
      break;
    case "42":
      return 88;
      //eslint-disable-next-line
      break;
    case "52":
      return 95;
      //eslint-disable-next-line
      break;
    case "13":
      return 60;
      //eslint-disable-next-line
      break;
    case "23":
      return 96;
      //eslint-disable-next-line
      break;
    case "33":
      return 106;
      //eslint-disable-next-line
      break;
    case "43":
      return 113;
      //eslint-disable-next-line
      break;
    case "53":
      return 120;
      //eslint-disable-next-line
      break;

    default:
      return 0;
  }
}

export function logicaworkF(n, v) {
  switch (n + v + "") {
    case "10":
      return 0;
      //eslint-disable-next-line
      break;
    case "20":
      return 0;
      //eslint-disable-next-line
      break;
    case "30":
      return 0;
      //eslint-disable-next-line
      break;
    case "40":
      return 0;
      //eslint-disable-next-line
      break;
    case "50":
      return 0;
      //eslint-disable-next-line
      break;
    case "11":
      return 13;
      //eslint-disable-next-line
      break;
    case "21":
      return 25;
      //eslint-disable-next-line
      break;
    case "31":
      return 25;
      //eslint-disable-next-line
      break;
    case "41":
      return 97;
      //eslint-disable-next-line
      break;
    case "51":
      return 25;
      //eslint-disable-next-line
      break;
    case "12":
      return 25;
      //eslint-disable-next-line
      break;
    case "22":
      return 25;
      //eslint-disable-next-line
      break;
    case "32":
      return 25;
      //eslint-disable-next-line
      break;
    case "42":
      return 25;
      //eslint-disable-next-line
      break;
    case "52":
      return 25;
      //eslint-disable-next-line
      break;
    case "13":
      return 25;
      //eslint-disable-next-line
      break;
    case "23":
      return 50;
      //eslint-disable-next-line
      break;
    case "33":
      return 50;
      //eslint-disable-next-line
      break;
    case "43":
      return 50;
      //eslint-disable-next-line
      break;
    case "53":
      return 50;
      //eslint-disable-next-line
      break;

    default:
      return 0;
  }
}

export function logicawe(e, n) {
  if (e === 119) {
    switch (n) {
      case 1:
        return 25;
        //eslint-disable-next-line
        break;
      case 2:
        return 50;
        //eslint-disable-next-line
        break;
      case 3:
        return 50;
        //eslint-disable-next-line
        break;
      case 4:
        return 50;
        //eslint-disable-next-line
        break;
      case 5:
        return 50;
        //eslint-disable-next-line
        break;
      default:
        return 50;
    }
  }

  //console.log(e < 121 && e > 83, 'here');
  //eslint-disable-next-line
  if (e < 121 && e > 83) {
    switch (n) {
      case 1:
        return 13;
        //eslint-disable-next-line
        break;
      case 2:
        return 25;
        //eslint-disable-next-line
        break;
      case 3:
        return 25;
        //eslint-disable-next-line
        break;
      case 4:
        return 25;
        //eslint-disable-next-line
        break;
      case 5:
        return 25;
        //eslint-disable-next-line
        break;
      default:
        return 0;
    }
  }

  if (e > 120) {
    switch (n) {
      case 1:
        return 25;
        //eslint-disable-next-line
        break;
      case 2:
        return 50;
        //eslint-disable-next-line
        break;
      case 3:
        return 50;
        //eslint-disable-next-line
        break;
      case 4:
        return 50;
        //eslint-disable-next-line
        break;
      case 5:
        return 50;
        //eslint-disable-next-line
        break;
      default:
        return 50;
    }
  }

  return 0;
}

export function logicawf(n, n1) {
  switch (n + n1 + "") {
    case "11":
      return 13;
      //eslint-disable-next-line
      break;
    case "12":
      return 13;
      //eslint-disable-next-line
      break;
    case "13":
      return 25;
      //eslint-disable-next-line
      break;
    case "21":
      return 25;
      //eslint-disable-next-line
      break;
    case "22":
      return 25;
      //eslint-disable-next-line
      break;
    case "23":
      return 50;
      //eslint-disable-next-line
      break;
    case "31":
      return 25;
      //eslint-disable-next-line
      break;
    case "32":
      return 25;
      //eslint-disable-next-line
      break;
    case "33":
      return 50;
      //eslint-disable-next-line
      break;
    case "41":
      return 25;
      //eslint-disable-next-line
      break;
    case "42":
      return 25;
      //eslint-disable-next-line
      break;
    case "43":
      return 50;
      //eslint-disable-next-line
      break;
    case "51":
      return 25;
      //eslint-disable-next-line
      break;
    case "52":
      return 25;
      //eslint-disable-next-line
      break;
    case "53":
      return 50;
      //eslint-disable-next-line
      break;
    default:
      return 0;
  }
}
