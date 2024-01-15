import * as request from "../utils/httpRequest";

export const getAccountsService = async (q='a', type = 'less') => {
    try {
        const res = await request.get('/users/search', {
            params: {
                q,
                type
            },
        });
        return res.data
    } catch(error){
        console.log(error)
    }
};