<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    //
    protected $table = "persons";

    public static function search($name){

        $persons_result = Person::where('name', 'LIKE', '%'.$name.'%')->get();

        return $persons_result

    }
}
