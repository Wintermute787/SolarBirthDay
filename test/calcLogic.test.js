import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import { setBrowserVariable, getBrowserVariable } from '../src/functions';
import {SpaceDate} from "../src/calcLogic";

describe('SpaceDate', function(){
   it('gets birthDate', function(){
      let userBirthDate = new SpaceDate({
         birthDate: '1984 04 20',
      });
      expect(userBirthDate.birthDate).toEqual('1984 04 20');
   })
});