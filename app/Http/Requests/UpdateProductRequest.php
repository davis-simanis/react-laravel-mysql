<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // TODO check if currently authorized user has oermission to store products

        /* 
        $comment = Comment::find($this->route('comment'));
        return $comment && $this->user()->can('update', $comment);
        */

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'qty' => ['required', 'string', 'numeric', 'max_digits:4' ],
            'price' => ['required', 'numeric', 'decimal:2']
        ];
    }
}
