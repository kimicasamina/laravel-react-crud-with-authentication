<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        // $data = $request->validated();

        // if (!Auth::attempt($data)) {
        //     return response([
        //         'message' => 'email or password are incorrect'
        //     ]);
        // };

        // // generate token and jwt
        // $user = Auth::user();
        // $token = $request->user()->createToken($user->email . 'main')->plainTextToken;

        // return response()->json([
        //     'user' => $user,
        //     'token' => $token,
        // ]);

        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function register(RegisterRequest $request)
    {

        // retrieve validated data
        $data = $request->validated();

        // create user and save to db
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        // generate token
        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
