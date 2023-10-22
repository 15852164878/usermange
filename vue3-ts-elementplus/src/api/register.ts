import httpRequest from "../axios/request";
export function registerReq(da:any) {  //data
    return httpRequest({
        url: '/UsersController?method=register',
        method: 'post',
        data:da,
    })
}