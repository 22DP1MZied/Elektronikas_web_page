<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;





Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');



Route::get('/contacts', function () {
    return Inertia::render('Contact');
})->name('contact');



Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');






require __DIR__.'/auth.php';
