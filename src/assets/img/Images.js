import palestraw from './beer/srmpalestraw.png';
import straw from './beer/srmstraw.png';
import palegold from './beer/srmpalegold.png';
import deepgold from './beer/srmdeepgold.png';
import paleamber from './beer/srmpaleamber.png';
import mediumamber from './beer/srmmediumamber.png';
import deepamber from './beer/srmdeepamber.png';
import amberbrown from './beer/srmamberbrown.png';
import brown from './beer/srmbrown.png';
import rubybrown from './beer/srmrubybrown.png';
import deepbrown from './beer/srmdeepbrown.png';
import black from './beer/srmblack.png';

  export function getImage ( srm ) {

    if ( srm == null ) {
      srm = Math.floor( Math.random() * 38 );
    }

    if (srm < 3)
      return palestraw;
    if (srm < 4)
      return straw;
    if (srm < 6)
      return palegold;
    if (srm < 9)
      return deepgold;
    if (srm < 12)
      return paleamber;
    if (srm < 15)
      return mediumamber;
    if (srm < 18)
      return deepamber;
    if (srm < 20)
      return amberbrown;
    if (srm < 24)
      return brown;
    if (srm < 30)
      return rubybrown;
    if (srm <= 40)
      return deepbrown;
    if (srm > 40)
      return black;
    else
      return "ERROR";
  }