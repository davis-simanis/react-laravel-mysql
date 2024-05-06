@props(['product' => [], 'action' => '', 'method' => 'get', 'postConfig' => '', 'actionButtons' => ''])

@php
    $renderFields = ['title', 'price', 'qty'];
    $formAction = empty($action) ? '' : route($action, $product);
    $productData = $errors->any() ? old() : $product;
@endphp

<form action="{{ $formAction }}" method={{ $method }}>
    {{ $postConfig }}
    @foreach ($renderFields as $field)
        <div class="py-3 @error($field) invalid @enderror">
            <x-input-label :for="$field" :value="__(ucfirst($field))" />
            <x-text-input 
                value="{{ $productData[$field] ?? ''}}" 
                :id="$field" 
                :name="$field" 
                class="block mt-1 w-full input" 
                type="text"
                required 
                :disabled="!$action" />
            <x-input-error :messages="$errors->get($field)[0] ?? []" class="mt-2" />
        </div>
    @endforeach
    {{ $actionButtons }}
</form>
