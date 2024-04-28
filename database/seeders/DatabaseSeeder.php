<?php

namespace Database\Seeders;

use App\Models\Document;
use App\Models\DocumentConfiguration;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //todo improve so that each documents refers to more than one document configuration with FK
        Document::factory(5)->create();
        DocumentConfiguration::factory(15)->create();
    }
}
