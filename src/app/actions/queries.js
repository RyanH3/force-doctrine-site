import { createClient } from '@supabase/supabase-js';
import { getCookieData } from '../lib/session';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function makeUserGreeting(userID) {
  let { data: user, error } = await supabase
    .from('users')
    .select('name')
    .eq('id', userID);
  
  if (user.length == 0) {
    console.log("user is empty.");
  }
  else {
    console.log(user[0].name);
    var names = user[0].name.split(" ");
    return "Hi, " + names[0];
  }
  console.log(error);
}

export async function addUserPurchase(userID, techniqueName) {
  // Get the technique id from its name
  let { data: technique, techniqueError } = await supabase
    .from('techniques')
    .select('id')
    .eq('name', techniqueName);
  
  if (technique.length == 0) {
    console.log("technique is empty.");
  }
  else { // Add the purchase
    console.log(technique[0].id);
    var techniqueID = technique[0].id;
    
    var { data, purchaseError } = await supabase
      .from('purchases')
      .insert([
        { user_id: userID, technique_id: techniqueID }
      ])
      .select();
  }
  console.log(data);
  console.log(purchaseError);
}

export async function getUserPurchases(userID) {
  let { data: purchases, purchaseError } = await supabase
    .from('purchases')
    .select('technique_id')
    .eq('user_id', userID);
  
  if (purchases == null) {
    console.log("purchases is empty.");
  }
  else {
    var techniques = [];

    for (var i = 0; i < purchases.length; i++) {
      let { data: technique, techniqueError } = await supabase
        .from('techniques')
        .select('name')
        .eq('id', purchases[i].technique_id);
      
      techniques.push(technique[0].name);
    }

    return techniques;
  }
}

export async function makePurchase(techniqueName) {
  var userID = await getCookieData();

  if (userID != "Logged out") {
    var userPurchases = await getUserPurchases(userID);
  
    if (!(userPurchases.includes(techniqueName))) {
      await addUserPurchase(userID, techniqueName);
    }
  }
}

export default function TechniqueButton({ techniqueCardName }) {
  var userID = getCookieData(); // needs to await
  var isClicked = false;
  var buttonClass;
  var buttonText;

  if (userID != 'Logged out') {
    var userPurchases = getUserPurchases(userID); // needs to await
    isClicked = userPurchases.includes(techniqueCardName);
  }

  if (!isClicked) {
    buttonClass = "text-black bg-red-500 transition duration-300 ease-in-out hover:bg-yellow-400 active:bg-yellow-500 rounded-lg m-1 p-1 px-2";
    buttonText = "Purchase";
  }
  else {
    buttonClass = "text-black bg-emerald-500 transition duration-300 ease-in-out rounded-lg m-1 p-1 px-2";
    buttonText = "Purchased";
  }

  return (
    <button className={buttonClass} onClick={() => makePurchase(techniqueCardName)}>
      {buttonText}
    </button>
  );
}

