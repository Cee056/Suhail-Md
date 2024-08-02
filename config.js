const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255693634180";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_02_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NixcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMeWZuM2J3K3QwWGNrTmttSmFqak8rOG1MbVVBb1BlZDZSWXJYRG03OGJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfdllJcy00MFJQT2xWMmY3U182bzFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4OTQwM2NmLWE0YmItNDllZC05OGE4LWI2OTNjZGIyZTkzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDkwLFxuICAgICAgNjAsXG4gICAgICAyMzMsXG4gICAgICAxNjMsXG4gICAgICAxNzYsXG4gICAgICA2NixcbiAgICAgIDE4LFxuICAgICAgMjA0LFxuICAgICAgMzMsXG4gICAgICA4NyxcbiAgICAgIDExLFxuICAgICAgMTI4LFxuICAgICAgMTg1LFxuICAgICAgMTEwLFxuICAgICAgMTgwLFxuICAgICAgMjM0LFxuICAgICAgMTQwLFxuICAgICAgMTE1LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMjQwLFxuICAgICAgNTcsXG4gICAgICAyNTQsXG4gICAgICAxNDgsXG4gICAgICAxMTYsXG4gICAgICAxNzYsXG4gICAgICA2NyxcbiAgICAgIDI1MixcbiAgICAgIDUzLFxuICAgICAgMTEzLFxuICAgICAgMjM2LFxuICAgICAgNDEsXG4gICAgICAyNDYsXG4gICAgICAyMDAsXG4gICAgICA4MixcbiAgICAgIDgzLFxuICAgICAgMjI4LFxuICAgICAgMTMsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEN0NWVFY0NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjkzNjM0MTgwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NjY3NjQ2NDMyMDcyODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXbDg3TUdFSTYrdExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUGhBZXBJTG5xZXF2MmNVL0QxcVlmVm4rbldTZUhwRE5TUzUvcUorN1ZBZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKT05wUjVadUlGdDdpZWV5K094MG5HZnFDN215Z0NhcWZsRU8xUE9KNDdUOC9ndCtFbm5LRXFkb1ltdmd3em5yczZaaG5uTVJ4c3dpNXg5NWNnV21BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpNGphdDMxWHNQKzFJZzdmaW1JTWEvN1BSdUI2ZitDalZ4aGN1cHJ5MzhManNTa1A4dWN4NFdhZjE4Y0txalVtSlpYVFBHVkg2THdteVlZSVJSeHdBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2OTM2MzQxODA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjIxNzE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVFUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUVQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWTkorUzl3VmVndGJqMDY1Qjg3TmtUcjkxZlMvTEZZTGo1ejFWdzRLRDVRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTk0NTY1MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjYyMTcyMDMzM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
