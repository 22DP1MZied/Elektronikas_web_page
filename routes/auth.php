<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;

Route::get('/login', [AuthenticatedSessionController::class, 'create'])
    ->name('login');
Route::post('/login', [AuthenticatedSessionController::class, 'store']);


//Route::post('/registration', [RegisteredUserController::class, 'store']);
Route::get('/registration', [RegisteredUserController::class, 'create']);

Route::post('/registration', [RegisteredUserController::class, 'store'])->name('registration');



Route::middleware('auth')->get('/dashboard', function () {
    return view('dashboard');
});
