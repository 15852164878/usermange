import httpRequest from "../axios/request";
export function getAllUsersReq() {  //data
    return httpRequest({
        url: '/UsersController?method=getAllUsers',
        method: 'post',
    })
}
