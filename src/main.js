import {SpaceDate} from "./calcLogic";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function(){
    $('#age-form').submit(function (event) {
        event.preventDefault();
        var birthDay = $('#date').val();
        var num = $('#life').val();
        var mercury = $('#planets').val();
        var venus = $('#planets').val();
        var mars = $('#planets').val();
        var jupiter = $('#planets').val();

        var spaceDate = new SpaceDate(birthDay);
        var mercAge = spaceDate.getAgeOnMercury(birthDay);

        $('#mercOutput').text( "You are" + mercAge + " years old on Mercury" )




    })
});