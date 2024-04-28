<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\DocumentConfiguration;
use Illuminate\Http\Request;

class DocumentController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resultDocuments = [];

        foreach (Document::all() as $document) {
            $documentConfig = DocumentConfiguration::where("document_id", $document->id)->first();

            if (!$documentConfig) {
                continue;
            }
            //todo refactor
            array_push(
                $resultDocuments,
                [
                    ...$documentConfig->toArray(),
                    ...$document->toArray(),
                    'id' => $documentConfig->id
                ]
            );
        }

        return response()->json($resultDocuments);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $data = $request->validate([
        //     'document' => ['required']
        // ]);
        $data = request()->all(); // TODO remove when finished testing
        dd($data);
        $documentConfig = DocumentConfiguration::create($data);
        $document = Document::create($data);

        dump($document->toArray(), $documentConfig->toArray()); // TODO remove when done tesing

        return 'Successfully created document: ';
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $document = Document::where('id', $id)->first() ?? null;
        $documentConfig = DocumentConfiguration::where('document_id', $id)->first() ?? null;

        if (!$document || !$documentConfig) {
            return response()->json([
                'error' => 'No document with id: ' . $id
            ]);
        }
        //todo refactor
        return response()->json([
            'document' => $document,
            'documentConfig' => $documentConfig
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // $data = $request->validate([
        //     'document' => ['required']
        // ]);
        $data = request()->all(); // TODO remove when finished testing
        $document = Document::where('id', $id)->first();
        $documentConfig = DocumentConfiguration::where('document_id', $id)->first();
        dd($data);

        if (!$document || !$documentConfig) {
            return printf('No document found with id %s', $id);
        }

        $document->update($data);
        $documentConfig->update($data);
        //todo refactor
        return response()->json([
            'document' => $document,
            'documentConfig' => $documentConfig
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //todo implement delete operations
        return 'destroy';
    }
}
