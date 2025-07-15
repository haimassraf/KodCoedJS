import { createClient } from '@supabase/supabase-js'

// ------- Connect to Data Base --------
const supabase = createClient(
    process.env.PUBLIC_PROJECT_URL,
    process.env.PUBLIC_ANON_API_KEY
);


// --------- CRUD -----------
async function create(newName, newPassword) {
    const { data, error } = await supabase.from('users').insert({ user_name: newName, password: newPassword }).select();
    if (error) throw new Error(error.message)
    return data;
}

async function readAll() {
    const { data, error } = await supabase.from('users').select();
    if (error) throw new Error(error.message);
    return data;
}

async function readById(idToFind) {
    const { data, error } = await supabase.from('users').select().eq('id', idToFind);
    if (error) throw new Error(error.message);
    return data;
}

async function updateById(idToUpdate, updatedName) {
    const { data, error } = await supabase.from('users').update({ name: updatedName }).eq('id', idToUpdate).select();
    if (error) throw new Error(error.message);
    return data;
}

async function deleteById(idToDelete) {
    const { data, error } = await supabase.from('users').delete().eq('id', idToDelete).select();
    if (error) throw new Error(error.message);
    return data;
}


// --------- function ----------
export async function isUserNameExist(userName, userPassword) {
    const { data, error } = await supabase.from('users').select().eq('user_name', userName).select();
    if (error) throw new Error(error.message);
    if (data.length === 0) return false;
    if (data[0].password !== userPassword) return false;
    return true;
}



// ---------- Action -------------
// try {
//     const data = await create("haim", "123");
//     console.table(data)
// } catch (err) {
//     console.log(err.message)
// }
