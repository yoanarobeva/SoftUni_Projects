import { approveMembership, cancelMembership, getDetails, getDetailsMembers, requestToJoin } from '../data/data.js'
import { html, until } from '../lib.js'
import { getUserData, loadMembers } from '../util.js';

const detailsTemplate = (dataPromise, membersPromise) => html`
<section id="team-home">
    <article class="layout">
        ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
        ${until(membersPromise, html`<p>Loading &hellip;</p>`)}
    </article>
</section>`;

const articleTemplate = (data, membersCount, onDelete, onJoin, isUser, isOwner, isJoined, isRequested, userId) => html`
    <img src=${data.logoUrl} class="team-logo left-col">
    <div class="tm-preview">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <span class="details">${membersCount} Members</span>
        <div>
            ${isOwner ? html`
                <a href="/edit" class="action">Edit team</a>` 
            : null}
            ${isUser && !isOwner ? html `
                ${(!isJoined && !isRequested) ? html`<a @click=${onJoin} href="javascript:void(0)" class="action">Join team</a>` : null}
                ${isJoined ? html`<a @click=${(ev) => onDelete(ev, userId)} href="javascript:void(0)" class="action invert">Leave team</a>` : null}
                ${isRequested ? html`Membership pending. <a @click=${(ev) => onDelete(ev, userId)} href="javascript:void(0)">Cancel request</a>` : null}`
            : null}
        </div>
    </div>`;

const membersTemplate = (approvedMembers, requestedMembers, username, isOwner) => html `
<div class="pad-large">
    <h3>Members</h3>
    <ul class="tm-members">
        ${username ? html`<li>${username}</li>` : null}
        ${approvedMembers.map(m => oneMemberTemplate(m, isOwner))}
    </ul>
</div>
${(isOwner && requestedMembers.length !== 0)? html`
<div class="pad-large">
    <h3>Membership Requests</h3>
    <ul class="tm-members">
        ${requestedMembers.map(m => oneRequestMemberTemplate(m))}
    </ul>
</div>` : null}`;

const oneMemberTemplate = (m, isOwner) => html`
<li>${m.user.username}${isOwner ? html`<a @click=${m.decline} href="javascript:void(0)" class="tm-control action">Remove from team</a>` : null}</li>`;

const oneRequestMemberTemplate = (m) => html`
<li>${m.user.username}<a @click=${m.approve} href="javascript:void(0)" class="tm-control action">Approve</a><a @click=${m.decline} href="#" class="tm-control action">Decline</a></li>`;

export async function detailsPage(ctx) {
    const teamId = ctx.params.id; //teamId
    const [team, teamMembers] = await Promise.all([getDetails(teamId), getDetailsMembers(teamId)]) ;

    let isUser = ctx.user ? true : false
    let isOwner = false;
    if (ctx.user) {
        isOwner = ctx.user._id == team._ownerId;
    }

    let userId = null;
    teamMembers.forEach(m => {
        if (m._ownerId == ctx.user?._id) {
            userId = m._id;
        }
        m.approve = (ev) => onApprove(ev, m);
        m.decline = (ev) => onDelete(ev, m._id);
    })
    
    let approvedMembers = []
    let requestedMembers = []

    teamMembers.forEach(m => {
        if (m.status == 'member') {
            approvedMembers.push(m)
        } else {
            requestedMembers.push(m)
        }
    })

    const currentUser = approvedMembers.find(x => x._ownerId == team._ownerId)

    let username;
    if (currentUser) {
        username = currentUser.user.username;
        const index = approvedMembers.indexOf(currentUser);
        approvedMembers.splice(index, 1);
    }

    update();

    function update() {
        ctx.render(detailsTemplate(loadItem(), loadTeamMembers()));
    }
    

    async function loadItem() {
        const currentMembersCount = teamMembers.length;
        let isJoined = false;
        let isRequested = false;
        approvedMembers.forEach(m => {
            if (m.user._id == ctx.user?._id) {
                isJoined = true;
            }
        })

        requestedMembers.forEach(m => {
            if (m.user._id == ctx.user?._id) {
                isRequested = true;
            }
        })
        return articleTemplate(team, currentMembersCount, onDelete, onJoin, isUser, isOwner, isJoined, isRequested, userId);
    }

    async function loadTeamMembers() {
        return membersTemplate(approvedMembers, requestedMembers, username, isOwner)
    }

    async function onJoin(ev) {
        //ev.target.remove();
        await requestToJoin(teamId);
        ctx.page.redirect(`/details/${teamId}`);  
    }

    async function onApprove(ev, member) {
        //ev.target.remove();
        await approveMembership(member);
        ctx.page.redirect(`/details/${teamId}`)  

    }
    
    async function onDelete(ev, memberId) {
        const choice = confirm('Are you sure?');
    
        if(choice) {
            //ev.target.remove();
            await cancelMembership(memberId);
            ctx.page.redirect(`/details/${teamId}`)  

        }
    }
    
}





