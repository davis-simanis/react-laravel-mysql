<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FieldConfiguration;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class FieldConfigurationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $documents = DB::table('document')->get();
        
        foreach ($documents as $document) {
            FieldConfiguration::factory($faker->numberBetween(1, 15))->create([
                'document_id' => $document->id
            ]);
        }
    }
}
