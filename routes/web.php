<?php

Route::get('/', function () {
    return view('welcome');
});
Route::match(['get','post'],'/admin','AdminController@login');
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
