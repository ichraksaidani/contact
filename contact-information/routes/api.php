<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Get all contacts
Route::get('contacts', [ContactController::class, 'getContact']);

//Get specic contact detail
Route::get('contacts/{id}', [ContactController::class, 'getContactById']);

//Add Contact
Route::post('AddContact', [ContactController::class, 'AddContact']);

//Update Contact
Route::put('UpdateContact/{id}', [ContactController::class, 'UpdateContact']);

//Delete Contact
Route::delete('DeleteContact/{id}', [ContactController::class, 'DeleteContact']);
