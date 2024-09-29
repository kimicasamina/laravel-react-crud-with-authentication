<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => [
                'required',
                'confirmed',
                // Password::min(8)
                //     ->letters()
                //     ->symbols()
                //     ->numbers()
            ],
            // 'password_confirmation' => [
            //     'required',
            //     'confirmed',
            //     // Password::min(8)
            //     //     ->letters()
            //     //     ->symbols()
            //     //     ->numbers()
            // ]
        ];
    }


    // /**
    //  * Custom message for validation
    //  *
    //  * @return array
    //  */
    // public function messages()
    // {
    //     return [
    //         'email.required' => 'Email is required!',
    //         'name.required' => 'Name is required!',
    //         'password.required' => 'Password is required!',
    //         'password_confirmation.required' => 'Password is required!',
    //         'password_confirmation.confirmed' => 'Password does not match!'
    //     ];
    // }
}
