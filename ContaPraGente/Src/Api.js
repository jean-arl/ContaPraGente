const BASE_API = '';

export default {
    Login: async (email, password) =>{
        const req = await fetch (`${BASE_API}/auth/login`,{
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    },

    Cadastro: async (nome, email, password) =>{
        const req = await fetch (`${BASE_API}/auth/Cadastro`,{
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({nome, email, password})
        });
        const json = await req.json();
        return json;
    },
    
}