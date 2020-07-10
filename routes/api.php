<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::post('login' , [AccessTokenController::class, 'issueToken'])
//			->middleware(['api-login', 'throttle']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/offering_tithes', 'OfferingTitheController@index');
Route::get('/offering_tithes/{id}', 'OfferingTitheController@show');
Route::post('/offering_tithe', 'OfferingTitheController@store');


