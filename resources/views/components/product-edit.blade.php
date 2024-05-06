@props(['product'])

<x-products>
    <x-product-form :product="$product" action="products.update" method="post">
        <x-slot:postConfig>
            @csrf
            @method('put')
        </x-slot:postConfig>
        <x-slot:actionButtons>
            <x-primary-button>Submit</x-primary-button>
        </x-slot:actionButtons>
    </x-product-form>
    <form class="py-3" action="{{ route('products.destroy', $product) }}" method="post">
        @csrf
        @method('delete')
        <x-danger-button>Delete</x-danger-button>
    </form>
</x-products>
