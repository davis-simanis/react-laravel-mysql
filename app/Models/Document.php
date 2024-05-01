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

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['document_name', 'fields', 'id'];

    /**
     * Removes updated_at timestamp from model.
     *
     * @var string|null
     */
    const UPDATED_AT = null;

    /**
    * Get the fields of a Document
    */
    public function fields() 
    {
        return $this->hasMany(FieldConfiguration::class);
    }
}
