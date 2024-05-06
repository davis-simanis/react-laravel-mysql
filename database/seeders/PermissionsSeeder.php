<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Support\Facades\Hash;

class PermissionsSeeder extends Seeder
{
    const VIEW = 'VIEW_PRODUCTS';
    const DELETE = 'DELETE_PRODUCTS';
    const EDIT = 'EDIT_PRODUCTS';
    const CREATE = 'CREATE_PRODUCTS';

    /**
     * Create the initial roles and permissions.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => self::VIEW]);
        Permission::create(['name' => self::DELETE]);
        Permission::create(['name' => self::EDIT]);
        Permission::create(['name' => self::CREATE]);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'user']);
        $role1->givePermissionTo(self::VIEW);

        $role2 = Role::create(['name' => 'admin']);
        $role2->givePermissionTo(self::CREATE);
        $role2->givePermissionTo(self::EDIT);

        $role3 = Role::create(['name' => 'Super-Admin']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider

        // create demo users
        $user = \App\Models\User::factory()->create([
            'name' => 'Sam',
            'email' => 'Sam@example.com',
            'password' => Hash::make('password')
        ]);
        $user->assignRole($role1);

        $user = \App\Models\User::where('email','john@doe.com')->first();
        $user->assignRole($role2);

        $user = \App\Models\User::factory()->create([
            'name' => 'SuperAdmin',
            'email' => 'super@admin.com',
            'password' => Hash::make('password')
        ]);
        $user->assignRole($role3);
    }
}