
document.getElementById("load-invite-button").addEventListener("click", function (e){
	loadAllInvites();
	document.getElementById("load-invite-button").parentElement.style="display: none";
})

function loadAllInvites(){
	const invites = document.getElementsByClassName("invite");
	for(const element of invites){
		const url = element.getAttribute("invite-url");
		loadInvite(url, element);
	}
}

/**
 * 
 * @param {string} inviteUrl
 * @param {HTMLElement} inviteElement
 */
function loadInvite(inviteUrl, inviteElement){
	const url = 'https://discord.com/api/v10/invites/'+inviteUrl+'?with_counts=true';
	fetch(url)
		.then(response => response.json())
		.then(json => {
			if(json.code==10006){
				const discordTitle=inviteElement.getElementsByClassName("discord-title")[0];
				discordTitle.innerHTML=json.message;
				return;
			}

			//Create Element
			const icon = inviteElement.getElementsByClassName("server-icon")[0];
			const splash = inviteElement.getElementsByClassName("splash")[0];

			//Getting guild things
			const id = json.guild.id;
			const gicon = json.guild.icon;
			const gsplash = json.guild.splash;
			const name = json.guild.name;
			const onlinecount = json.approximate_presence_count.toLocaleString();
			const membercount = json.approximate_member_count.toLocaleString();
		
			let fileExtension=".png";
			if(gicon.includes("a_")){
				fileExtension=".gif";
			}

			icon.src = "https://cdn.discordapp.com/icons/" + id + "/" + gicon + fileExtension + "?size=128";

		
			const discordTitle=inviteElement.getElementsByClassName("discord-title")[0];
			const discordOnline=inviteElement.getElementsByClassName("discord-online")[0];
			const discordMembers=inviteElement.getElementsByClassName("discord-member")[0];

			discordTitle.innerHTML=name;
			discordOnline.innerHTML=onlinecount+" Online";
			discordMembers.innerHTML=membercount+" Members"
			
			
			if(gsplash!=null){
				splash.src = "https://cdn.discordapp.com/splashes/"+ id +"/"+gsplash+".png?size=480"
				splash.style = "display: block";
			}
		});
	}