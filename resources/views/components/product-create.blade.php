<x-products>
    <x-product-form action="products.store" method="post">
        <x-slot:postConfig>
            @csrf
        </x-slot:postConfig>
        <x-slot:actionButtons>
            <x-primary-button>Create</x-primary-button>
        </x-slot:actionButtons>
    </x-product-form>
</x-products>