# majgeri-selfbot-discord

elsőnek használva ezen a gizda dc szeron: https://discord.gg/qFMwecJW8q

## how to felrakni ha idiota barom vagy

1. nezd meg lent van a nodejs, me anelkul nem nagyon fog menni
2. cloneold a repot
3. fogod nyitsz egy terminalt a mappaba ahova letoltotted, es beirod h `npm i`
4. az `index.js` fileban atirod a `REPLACE_WITH_YOUR_ID` reszt a sajat iddel. ezt ugy tudod megnezni, hogy benyomod a developer toolst a Discordban `settings -> advanced -> developer mode`, rajobbklikkelsz magadra, copy id, bemasolod, mindenki boldog
5. a kod vegen a `REPLACE_WITH_YOUR_TOKEN`-t is csereld ki a sajat tokenedre. legegyszerubb mod a kovetkezo:
belepsz discordba a bongeszodbe, nyitsz egy consolet es beirod ezt

```js
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```

6. inditsd el a `node index.js` commanddal terminalba, ha minden zsirkiraly akkor nem fog visszadobni errort, ha igen, akkor oldd meg idc
7. beirod a chatbe hogy `!majgeri`, es gucci minden

hf