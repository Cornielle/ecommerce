<?php

Route::get('/', function () {
    return view('welcome');
});
Route::match(['get','post'],'/admin','AdminController@login');
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Route::group(['middleware' => ['auth']],function(){
    Route::get('/admin/dashboard','AdminController@dashboard');
    Route::get('/admin/settings','AdminController@settings');
    Route::get('/admin/check-pwd', 'AdminController@checkPassword');
    Route::match(['get','post'],'/admin/update-pwd', 'AdminController@updatePassword');
});
Route::get('/logout', 'AdminController@logout');
