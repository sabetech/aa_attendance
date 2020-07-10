<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\OfferingTithes;
use App\Http\Resources\OfferingTitheCollection;
use Input;
use Illuminate\Support\Facades\Log;
use Bmatovu\MtnMomo\Products\Collection;
use Bmatovu\MtnMomo\Exceptions\CollectionRequestException;


class OfferingTitheController extends Controller
{
    //

	public function index(){

		return response()->json(OfferingTithes::all());

	}

	public function store(Request $request){
		$posted = $request->all();
		
		
		try{
			$collection = new Collection();
		
			$momoTransactionId = 
					$collection->transact('mysample_transac_id', '46733123453', 100,"hey her", "hello world");

		} catch(CollectionRequestException $e) {
		    do {
		        printf("\n\r%s:%d %s (%d) [%s]\n\r", 
		            $e->getFile(), $e->getLine(), $e->getMessage(), $e->getCode(), get_class($e));
		    } while($e = $e->getPrevious());
		
		}

		Log::info($posted);

		return response()->json(['status' => 'saved']);

	}



}
