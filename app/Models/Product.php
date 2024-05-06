<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Client\Request;

class Product extends Model
{
    use HasFactory;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'qty', 'price'];


    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['view', 'edit'];

    public function getViewAttribute()
    {
        return route('products.show', $this->id);
    }

    public function getEditAttribute()
    {
        return route('products.edit', $this);
    }
}
