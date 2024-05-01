<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FieldConfiguration>
 */
class FieldConfigurationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'field_seq' => $this->faker->numberBetween(0, 10),
            'is_mandatory' => $this->faker->boolean(),
            'field_type' => $this->faker->numberBetween(1, 3),
            'field_name' => $this->faker->word(),
            'document_id' => $this->faker->numberBetween(0, 10),
            'select_values' => null
        ];
    }
}
