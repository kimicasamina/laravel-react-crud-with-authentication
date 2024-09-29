<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


// Route::middleware('authentication')->get('/user', function(Request $request){
//     return $request->user()
// })