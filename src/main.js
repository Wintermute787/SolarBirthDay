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


        $('#mercOutput').text( "You are " + spaceDate.getAgeOnMercury() + " years old on Mercury" + " You are alive and have " +
             spaceDate.getYearsTillDeath(num, planet) + " years left to live");
        $('#mercOutput').text( "You are " + spaceDate.getAgeOnMercury() + " years old on Mercury" + " You are not alive and have been dead for " +
            spaceDate.getYearsTillDeath(num, planet) + " years");




    })
});