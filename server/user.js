const users = [];

const addUser =(id,name,room)=>{

    //existing user 
    const userExist = users.find(user=>user.room === room && user.name === name);
    if(userExist){ 
        return {error:'user already taken'};
    }
    const user = {id:id,name:name,room:room};

    users.push(user)

    return {user};
};

const removeUser = (id)=>{
    const index = users.find(user=>user.id === id);

    if(index !== -1){
        return users.splice(index,1)[0]
    }
};

const getUser =(id)=>users.find(user=>user.id === id);
const getUserInRoom =(room)=>users.filter(user=>user.room === room);

module.exports ={addUser,removeUser,getUser,getUserInRoom};