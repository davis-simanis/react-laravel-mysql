@props([
    'items' => [],
    'titles' => [],
    'renderFields' => [],
    'cellContent' => ''
])

<table class="w-full text-sm text-left rtl:text-right text-gray-500 border">
    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
            @foreach (empty($titles) ? $renderFields : $titles as $title)
                <th class="px-6 py-2">{{ $title }}</th>
            @endforeach
        </tr>
    </thead>
    <tbody>
        @foreach ($items as $item)
            <tr class="space-y-1 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                @foreach ($renderFields as $fieldName)
                    <td class="px-6 py-4 border-r">
                        {{ $cellContent }}
                        {{-- <div role="button">{{ $item[$fieldName] }}</div> --}}
                    </td>
                @endforeach
            </tr>
        @endforeach
    </tbody>
</table>
