import {SpaceDate} from "./calcLogic";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function(){
    $('#age-form').submit(function (event) {
        event.preventDefault();
        var age = $('#date').val();
        var num = $('#life').val();


    })
});