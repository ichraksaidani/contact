<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Validation\Rule;
class ContactController extends Controller
{
    public function getContact()
    {
        return response()->json(Contact::all(), 200);
    }

    public function getContactById($id)
    {
        $contacts = Contact::find($id);
        if (is_null($contacts)) {
            return response()->json(['message' => 'Contact Not Found'], 404);
        }
        return response()->json($contacts::find($id), 200);
    }

    public function AddContact(Request $request)
    {
        try {
            $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'email' => 'required|email|unique:contacts',
                'phone' => 'required|string|max:15',
            ]);
    
            $contacts = Contact::create($request->all());
            return response($contacts, 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
    }
    

    public function UpdateContact(Request $request, $id)
    {
        try {
            $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'email' => ['required', 'email', Rule::unique('contacts')->ignore($id)],
                'phone' => 'required|integer',
            ]);
    
            $contact = Contact::find($id);
    
            if (is_null($contact)) {
                return response()->json(['message' => 'Contact Not Found'], 404);
            }
    
            $contact->update($request->all());
    
            return response()->json($contact, 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error($e->getMessage());
            return response()->json(['errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
    

    public function DeleteContact(Request $request, $id)
    {
        $contacts = Contact::find($id);
        if (is_null($contacts)) {
            return response()->json(['message' => 'Contact Not Found'], 404);
        }
        $contacts->delete();
        return response()->json(null, 204);
    }
}