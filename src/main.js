import {SpaceDate} from "./calcLogic";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function(){
  $('#age-form').submit(function (event) {
    event.preventDefault();
    const birthDay = $('#date').val();
    const num = $('#life').val();
    const planet = $('#planets').val();
    const spaceDate = new SpaceDate(birthDay);
    const mercAge = spaceDate.getAgeOnMercury();
    const venusAge = spaceDate.getAgeOnVenus();
    const marsAge = spaceDate.getAgeOnMars();
    const jupiterAge = spaceDate.getAgeOnJupiter();

    if(planet === "Mercury" && mercAge < num) {
      $('#mercOutput').text( "You are " + mercAge + " years old on Mercury" + " You are alive and have " +
            spaceDate.getYearsTillDeath(num, planet) + " years left to live");
    }else if(planet === "Mercury" && mercAge > num){
        $('#mercOutput').text( "You are " + mercAge + " years old on Mercury" + " You are not alive and have been dead for " +
            spaceDate.getYearsTillDeath(num, planet) + " years");
    }

      if(planet === "Venus" && venusAge < num) {
          $('#venusOutput').text( "You are " + venusAge + " years old on Venus" + " You are alive and have " +
              spaceDate.getYearsTillDeath(num, planet) + " years left to live");
      }else if(planet === "Venus" && venusAge > num){
          $('#venusOutput').text( "You are " + venusAge + " years old on Venus" + " You are not alive and have been dead for " +
              spaceDate.getYearsTillDeath(num, planet) + " years");
      }

      if(planet === "Mars" && marsAge < num) {
          $('#marsOutput').text( "You are " + marsAge + " years old on Mars" + " You are alive and have " +
              spaceDate.getYearsTillDeath(num, planet) + " years left to live");
      }else if(planet === "Mars" && marsAge > num){
          $('#marsOutput').text( "You are " + marsAge + " years old on Mars" + " You are not alive and have been dead for " +
              spaceDate.getYearsTillDeath(num, planet) + " years");
      }

      if(planet === "Jupiter" && jupiterAge < num) {
          $('#jupiterOutput').text( "You are " + jupiterAge + " years old on Jupiter" + " You are alive and have " +
              spaceDate.getYearsTillDeath(num, planet) + " years left to live");
      }else if(planet === "Jupiter" && jupiterAge > num){
          $('#jupiterOutput').text( "You are " + jupiterAge + " years old on Jupiter" + " You are not alive and have been dead for " +
              spaceDate.getYearsTillDeath(num, planet) + " years");
      }






  });
});