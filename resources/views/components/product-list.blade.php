@php
    $renderFields = ['view', 'edit', 'id', 'title', 'qty', 'price'];
@endphp

<x-products>
    <x-nav-link href="{{ route('products.create') }}" class="py-6">
        <x-primary-button>Create new products</x-primary-button>
    </x-nav-link>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 border">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
                @foreach ($renderFields as $title)
                    <th class="px-6 py-2">{{ $title }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach ($products->items() as $product)
                <tr class="space-y-1 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    @foreach ($renderFields as $fieldName)
                        <td class="px-6 py-4 border-r">
                            @switch($fieldName)
                                @case('view')
                                @case('edit')
                                    <x-nav-link :href="$product[$fieldName]">{{ $fieldName }}</x-nav-link>
                                @break

                                @default
                                    {{ $product[$fieldName] }}
                            @endswitch
                        </td>
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
    <div class="py-4">{{ $products->links() }}</div>
</x-products>
