const fs=require('fs');const path=require('path');
const {chromium}=require('/Users/a81807/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root='/Users/a81807/Desktop/my_paper/03_研究計画/マスコット広告';
const data=JSON.parse(fs.readFileSync(path.join(__dirname,'stimuli.json'),'utf8'));
const esc=t=>t.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--no-sandbox','--disable-dev-shm-usage']});
 const page=await browser.newPage({viewport:{width:1672,height:941},deviceScaleFactor:1});
 for(const item of data){
 const src=path.join(root,item.path);const raw=fs.readFileSync(src);
 const asset=path.join(__dirname,'assets',item.n+'_'+path.basename(src));fs.mkdirSync(path.dirname(asset),{recursive:true});fs.copyFileSync(src,asset);
 const html=`<!doctype html><html lang="ja"><meta charset="UTF-8"><style>*{box-sizing:border-box}body{margin:0;background:white;color:#1a1a1a;font-family:'Noto Sans JP','YuGothic','Hiragino Kaku Gothic ProN',sans-serif}.slide{width:1280px;height:720px;position:relative;transform:scale(1.30625);transform-origin:top left}h1{position:absolute;left:64px;top:42px;width:1152px;font-size:40px;line-height:1.35;margin:0;font-weight:700}.stimulus{position:absolute;left:64px;top:144px;width:500px;height:480px;object-fit:contain}.detail{position:absolute;left:608px;top:188px;width:608px}h2{font-size:30px;line-height:1.5;color:#0031d8;margin:0 0 42px;font-weight:700}p{font-size:28px;line-height:1.6;margin:0 0 24px}.note{position:absolute;left:608px;top:572px;width:608px;font-size:21px;color:#595959;line-height:1.5}.source{position:absolute;left:64px;top:660px;font-size:19px;color:#595959}.num{position:absolute;right:64px;top:656px;font-size:22px;color:#595959}</style><div class="slide"><h1>${esc(item.title)}</h1><img class="stimulus" src="data:image/png;base64,${raw.toString('base64')}" alt="${esc(item.name)}"><div class="detail"><h2>${esc(item.head)}</h2>${item.lines.map(l=>'<p>'+esc(l)+'</p>').join('')}</div><div class="note">${esc(item.note)}</div><div class="source">出典：研究計画フォルダの保存済み刺激画像（原画像を配置）</div><div class="num">${item.n}</div></div></html>`;
 fs.writeFileSync(path.join(__dirname,item.n+'_source.html'),html);
 await page.setContent(html);await page.evaluate(()=>document.fonts.ready);await page.locator('img').evaluate(img=>img.decode());
 const overflow=await page.evaluate(()=>{const d=document.querySelector('.detail');return {bottom:d.getBoundingClientRect().bottom,titleBottom:document.querySelector('h1').getBoundingClientRect().bottom}});
 await page.screenshot({path:path.join(__dirname,item.n+'_'+item.name+'.png')});console.log(item.n,JSON.stringify(overflow));
 }
 await browser.close();
})();
