import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import {SpaceDate} from "../src/calcLogic";

describe('SpaceDate', function(){

   it('gets birthDate', function(){
      let userBirthDate = new SpaceDate({
         birthDate: '1984 04 20',
      });
      expect(userBirthDate.birthDate).toEqual('1984 04 20');
   });
   it('gets age', function(){
      let userBirthDay = new SpaceDate({
      });
      userBirthDay.getCurrentAge('1984 04 20');
      expect(userBirthDay.age).toEqual(35);
   })

});