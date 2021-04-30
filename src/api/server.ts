// If in Production, DO NOT Put this token here/directly inside of ok
// Hide token within the server somewhere for Production
// let token = `55b8dafda1eecced0a508893e2680cd614356c0cedc0547c`
let token=`ca51da1f2418b33c878a9c4a9ca9e679960864fed079d75d`

// Object is going to 
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-inventory-rangers-er.herokuapp.com/api/characters`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        }
    })

        if(!response.ok){
            console.log('Failed to fetch data from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://marvel-inventory-rangers-er.herokuapp.com/api/characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            // JSON.stringify the data
            body: JSON.stringify(data)
        });
        // if we don't get a response of ok
        if(!response.ok){
            console.log('Failed to Create new Character Data')
        }

        return await response.json()

    },

    update: async (id:string, data: any = {}) => {
        // !!Make sure to add ${id} at the end of the url to avoid creating huge amount of drones!!
        const response = await fetch(`https://marvel-inventory-rangers-er.herokuapp.com/api/characters/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        // Don't have to have this if statement or return await for update because they are part of the 'GET'
        console.log(data)
        if(!response.ok){
            console.log('Failed to Update Character Data')
        }
    },

    delete: async (id:string) => {
        const response = await fetch(`https://marvel-inventory-rangers-er.herokuapp.com/api/characters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}