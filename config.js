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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_04_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUxLFxuICAgICAgICA5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgODcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMSxcbiAgICAgICAgMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQxLFxuICAgICAgICA3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFicDNpQk0wbE8rK3ZPZkROVXlDL2VSd01TR05KKys2Q080NEt2WXZiRHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhGNnFlTW9UUVYtOU16dGxHdHRBbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTk5MmI1ZmQtMDc0Mi00N2JiLTg4M2EtYjRlZDI3ZDBjY2E5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDY5LFxuICAgICAgMjE4LFxuICAgICAgMTA4LFxuICAgICAgMjQ0LFxuICAgICAgMjE0LFxuICAgICAgMjE0LFxuICAgICAgMzIsXG4gICAgICA3NSxcbiAgICAgIDE2MSxcbiAgICAgIDE0NSxcbiAgICAgIDc5LFxuICAgICAgNyxcbiAgICAgIDIxNixcbiAgICAgIDI1NCxcbiAgICAgIDIyOCxcbiAgICAgIDE1OSxcbiAgICAgIDY3LFxuICAgICAgMjMwLFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDYyLFxuICAgICAgNzMsXG4gICAgICA3NyxcbiAgICAgIDE1LFxuICAgICAgMjEzLFxuICAgICAgODcsXG4gICAgICA4LFxuICAgICAgMjQ5LFxuICAgICAgNTAsXG4gICAgICAyMDcsXG4gICAgICAyMzcsXG4gICAgICA0MCxcbiAgICAgIDI0MyxcbiAgICAgIDEzMCxcbiAgICAgIDEwLFxuICAgICAgMjUwLFxuICAgICAgNjgsXG4gICAgICAxNixcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNWFFIRVk5M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjkzNjM0MTgwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NjY3NjQ2NDMyMDcyODoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BhbDg3TUdFUGpJdDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUGhBZXBJTG5xZXF2MmNVL0QxcVlmVm4rbldTZUhwRE5TUzUvcUorN1ZBZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOVkNKUE5yRXJrUVB0dFcxUHBtODlKeUIwUE5rRlpGT1lLS2FveEVkdnNWTEdlSTFKeUN5UjJlckNuZkJSb1ltOVRVZDFvcDZJUGpNc2lxdHZxR0pBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpNDVVMGROSXFrWHBLQUpndGZQbnNoSmZOeldsc2FsRFlERGpZdVBkUnE2UXhKTkpoTjR4N1pmWnpwNHFvZWsway93NUYyOHRjOFNVdm1zd1Fic2RDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2OTM2MzQxODA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjcyMjUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVFVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSRFFPMkV4dndqclhkbTgrV1ZqYzB6UEM4OHpsejZWNkpZcUJRQkppVmdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTk0NTY1MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2NjU3NzIxOTJcIn0iCn0="  // PUT your SESSION_ID 


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
