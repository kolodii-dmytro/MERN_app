const login = require ('./login');
const getPostsList = require('./getPostsList');
const createPost = require('./createPost');

const proceduresList = {
    login: login,
    getPostsList: getPostsList,
    createPost:createPost
    
}

const isProcedureAvailable = (procedureName) => proceduresList.hasOwnProperty(procedureName);

const api = async (data) => {
    const {procedure, payload} = data;

    if (isProcedureAvailable(procedure)){
        try {
               const apiData = await(proceduresList[procedure](payload))
               //console.log({apiData});
                return ({apiData})
            
            } catch(error){
                //console.log({error})
                return({error})
            }
        
       
    } else {
        return {error:`Procedure ${procedure} not found!`};
        }
    }
    


module.exports = api