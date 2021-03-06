import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import {SpaceDate} from "../src/calcLogic";

describe('SpaceDate', function(){

   it('gets birthDate', function(){
      let userBirthDate = new SpaceDate({
         birthDate: '1984 04 20',
      });
      expect(userBirthDate.birthDate).toEqual('1984 04 20');
   });
   it('gets full year', function(){
      let userBirthDate = new SpaceDate({

      });
      userBirthDate.getYear('1984 04 20');
      expect(userBirthDate.fullYear).toEqual(1984);

   });
   it('gets age', function(){
      let userBirthDay = new SpaceDate({
      });
      userBirthDay.getCurrentAge('1984 04 20', 2019);
      expect(userBirthDay.age).toEqual(35);
   })

   it('gets age on mercury', function () {
      let userBirthDay = new SpaceDate('1984 04 20',{

      });
      userBirthDay.getAgeOnMercury();
      expect(userBirthDay.ageOnMercury).toEqual(8)
   });
   it('gets age on Venus', function () {
      let userBirthDay = new SpaceDate('1984 04 20',{

      });
      userBirthDay.getAgeOnVenus();
      expect(userBirthDay.ageOnVenus).toEqual(21)
   });
   it('gets age on Mars', function () {
      let userBirthDay = new SpaceDate('1984 04 20',{

      });
      userBirthDay.getAgeOnMars();
      expect(userBirthDay.ageOnMars).toEqual(65)
   });
   it('gets age on Jupiter', function () {
      let userBirthDay = new SpaceDate('1984 04 20',{

      });
      userBirthDay.getAgeOnJupiter();
      expect(userBirthDay.ageOnJupiter).toEqual(415)
   });
   it('gets years till death on Mecurey', function () {
      let userBirthDay = new SpaceDate('1984 04 20',{

      });
      userBirthDay.getYearsTillDeath(100,"Mercury");
      expect(userBirthDay.deathDay).toEqual(92);
   })
   it('gets years till death on Venus', function () {
      let userBirthDay = new SpaceDate('1984 04 20',{

      });
      userBirthDay.getYearsTillDeath(100,"Venus");
      expect(userBirthDay.deathDay).toEqual(79);
   })
   it('gets years till death on Mars', function () {
      let userBirthDay = new SpaceDate('1984 04 20',{

      });
      userBirthDay.getYearsTillDeath(100,"Mars");
      expect(userBirthDay.deathDay).toEqual(35);
   })
   it('gets years till death on Jupiter', function () {
      let userBirthDay = new SpaceDate('1984 04 20',{

      });
      userBirthDay.getYearsTillDeath(100,"Jupiter");
      expect(userBirthDay.deathDay).toEqual(315);
   })

});