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

    /**
     * Save a new model and return the instance.
     *
     * @param  array  $attributes
     * @return \Illuminate\Database\Eloquent\Model|$this
     */
    public static function create(array $attributes = [])
    {
        $resultFields = [];
        $resultAttributes = [...$attributes];
        unset($resultAttributes['fields']);

        $documentFields = $attributes['fields'];
        $document = static::query()->create($resultAttributes);

        foreach ($documentFields as $field) {
            $resultFields[] = FieldConfiguration::create([
                'field_seq' => $field['sequence'],
                'is_mandatory' => $field['isMandatory'] ? true : false,
                'field_type' => $field['type'],
                'field_name' => $field['name'],
                'document_id' => $document->id,
                'select_values' => null
            ]);
        }

        $document->fields = $resultFields;

        return $document;
    }
}
