<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'document';

    //TODO write specific fields to be taken from data passed when creating this model
    // /**
    //  * The attributes that are mass assignable.
    //  *
    //  * @var array
    //  */
    // protected $fillable = [''];

    /**
     * Removes updated_at timestamp from model.
     *
     * @var string|null
     */
    const UPDATED_AT = null;
}
