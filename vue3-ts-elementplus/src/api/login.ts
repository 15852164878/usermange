import httpRequest from "../axios/request";
export function loginReq(da:any) {  //data
    return httpRequest({
        url: '/UsersController?method=login',
        method: 'post',
        data:da,
    })
}
