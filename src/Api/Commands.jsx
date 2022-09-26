import {base,post,get} from './ApiBase'




export const  userCommand={
        initialInvite:() => ({ url: 'user/initialInvite',...base, ...get}),
        invite:(data) => ({ url: 'user/invite',...base, ...post,data}),
        acceptInvite:(data) => ({ url: `user/acceptinvite`,...base, ...post,data}),
        inviteInfo:(id) => ({ url: `user/inviteInfo/${id}`,...base, ...get}),
        memberList:(data) => ({ url: `user/list`,...base, ...post,data}),

}



