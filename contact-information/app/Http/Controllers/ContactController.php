<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
   public function getContact() 
   {
    return response()->json(Contact::all(), 200);
   }


   public function getContactById($id)
   {
     $contacts = Contact::find($id);
     if(is_null($contacts))
     {
       return response()->json(['message'=> 'Contact Not Found', 404]);
     }
     return response()->json($contacts::find($id), 200);
   }

   
   public function AddContact(Request $request)
   {
       $contacts = Contact::create($request->all());
       return response($contacts, 201);
   }
   
   public function UpdateContact(Request $request, $id)
   {
       $contacts = Contact::find($id);
   
       if (is_null($contacts)) {
           return response()->json(['message' => 'Contact Not Found'], 404);
       }
   
       $contacts->update($request->all());
   
       return response($contacts, 200);
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