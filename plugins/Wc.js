conn.on('group-participants-update', async (notification) => {
    const { action, participants, id } = notification;
    
    if (action === 'add') {
        const newMember = participants[0];
        const welcomeMessage = `
*◈╾───❄️ꜱᴏɴɢ ʙᴏᴛ❄️───╼◈*

*හායි සාධරයෙන් පිළිගන්නවා @${newMember} අපගේ සමූහයට* 😚❤️

*📌 සාදරයෙන් පිලිගන්නෙමු අපගේ සමූහය වෙත❄️*

*📌 ඔබට අවශ්‍ය ඕනෑම සිංදුවක් ᴍᴘ3/ᴍᴘ4 ආකාරයෙන් මේම ගෲප් එකෙන් ඩවුන්ලෝඩ් කරගත හැක* ❄️

*📌 බොට් ඔන්ලයින් සිටීද යන්න දැනගන්න .alive ලෙස මැසේජ් එකක් සෙන්ඩ් කරන්න*

*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀʀᴜᴋᴀ ᴍᴀʜᴇꜱʜ*

*ᴛʜᴀɴᴋꜱ ꜰᴏʀ:*
❄️ ᴜᴍᴇꜱʜᴀ ꜱᴀᴛʜʏᴀɴᴊᴀʟɪ  
❄️ ᴍɪᴛʜɪʟᴀ ꜱʜᴀʀᴀᴅʜᴀ  
❄️ ɴᴀᴠᴇᴇɴ ᴘᴇᴛʜᴜᴍ  
❄️ ᴄʜᴇᴛʜᴀɴᴀ ʀᴀᴊᴀɢᴜʀᴜ  
        `;

        await conn.sendMessage(id, { text: welcomeMessage, mentions: [newMember] });
    }
});
