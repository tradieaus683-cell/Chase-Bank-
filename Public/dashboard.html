<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Chase – Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
/* ── RESET & VARS ── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:#0066CC;--blue-dark:#0050A0;--green:#2A7D2E;
  --navy:#1B2A4A;--text:#111;--text-mid:#444;--text-light:#888;
  --border:#DDD;--bg:#F5F5F5;--card:#FFF;--red:#C0392B;
  --gold:#C9982A;
}
body{font-family:'Roboto',sans-serif;color:var(--text);background:var(--bg);
  max-width:430px;margin:0 auto;min-height:100vh;
  opacity:1;transition:background .3s,color .3s}


/* ── DARK MODE ── */
body.dark{--text:#F0F0F0;--text-mid:#BBB;--text-light:#888;--border:#333;
  --bg:#0D0D0D;--card:#1A1A1A;--navy:#0A0A1A}
body.dark .top-nav,body.dark .bottom-nav{background:#111;border-color:#333}
body.dark .welcome-bar{background:#0A0A1A}
body.dark .account-row,body.dark .txn-card,body.dark .page-card,
body.dark .quick-actions,body.dark .invest-row,body.dark .more-item{background:#1A1A1A;border-color:#333}
body.dark .account-row-header{background:#222}
body.dark .qa-circle{background:#1E3A5A}
body.dark .menu-drawer{background:#111}
body.dark .modal-sheet{background:#1A1A1A}
body.dark .hold-notice{background:#2A1F00;border-color:#8a6000}
body.dark input{background:#222;color:#eee;border-color:#444}
body.dark .section-title{color:#aaa}
body.dark .chase-wordmark{color:#eee}
body.dark .btn-modal-cancel{background:#333;color:#ccc}
body.dark .more-divider{color:#555}

/* ── NAV ── */
.top-nav{background:#EEF1F5;border-bottom:none;padding:0 18px;height:54px;
  display:grid;grid-template-columns:1fr auto 1fr;align-items:center;
  position:sticky;top:0;z-index:100;transition:background .3s}
body.dark .top-nav{background:#0D0D0D}
.nav-left{display:flex;align-items:center;gap:16px}
.nav-right{display:flex;align-items:center;justify-content:flex-end}
.nav-icon-btn{background:none;border:none;cursor:pointer;color:var(--text-mid);
  padding:5px;display:flex;align-items:center;justify-content:center;border-radius:50%}
body.dark .nav-icon-btn{color:#aaa}
.nav-avatar{width:36px;height:36px;border-radius:50%;background:#E0E0E0;
  border:1.5px solid #C8C8C8;color:#444;font-size:12px;font-weight:700;
  cursor:pointer;position:relative;display:flex;align-items:center;justify-content:center}
body.dark .nav-avatar{background:#222;border-color:#444;color:#ccc}
.nav-dot{width:10px;height:10px;background:var(--blue);border:2px solid #EEF1F5;
  border-radius:50%;position:absolute;top:-2px;right:-2px}
body.dark .nav-dot{border-color:#0D0D0D}
.chase-octagon{width:32px;height:32px;background:var(--blue);
  clip-path:polygon(29% 0%,71% 0%,100% 29%,100% 71%,71% 100%,29% 100%,0% 71%,0% 29%);
  display:flex;align-items:center;justify-content:center;cursor:pointer}
.chase-octagon-inner{width:17px;height:17px;background:white;
  clip-path:polygon(29% 0%,71% 0%,100% 29%,100% 71%,71% 100%,29% 100%,0% 71%,0% 29%);
  display:flex;align-items:center;justify-content:center}
.chase-octagon-core{width:10px;height:10px;background:var(--blue);
  clip-path:polygon(29% 0%,71% 0%,100% 29%,100% 71%,71% 100%,29% 100%,0% 71%,0% 29%)}

/* ── WELCOME ── */
.welcome-bar{background:var(--navy);color:white;padding:14px 18px;
  display:flex;align-items:center;justify-content:space-between;transition:background .3s}
.welcome-bar .uname{font-size:14px;font-weight:500}
.welcome-bar .session{font-size:11px;opacity:.6;margin-top:2px}
.welcome-bar .avatar{width:36px;height:36px;border-radius:50%;background:var(--blue);
  display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:white}

/* ── PAGE SYSTEM ── */
.page{display:none}
.page.active{display:block}
.page-pad{padding-bottom:80px}

/* ── BALANCE CARD ── */
.balance-card{background:linear-gradient(135deg,#0055AA,#0077CC);color:white;
  padding:22px 18px 18px;margin:14px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.15)}
.balance-label{font-size:11px;text-transform:uppercase;letter-spacing:1px;opacity:.75;margin-bottom:4px}
.balance-amount{font-size:36px;font-weight:700;display:flex;align-items:center;gap:10px;margin-bottom:4px}
.up-badge{background:rgba(46,200,100,.25);color:#7fffaa;font-size:11px;font-weight:700;padding:3px 8px;border-radius:12px;transition:background .4s,color .4s}
.up-badge.dn{background:rgba(192,57,43,.3);color:#ffaaaa}
.balance-note{font-size:11px;opacity:.6}

/* ── QUICK ACTIONS ── */
.quick-actions{display:grid;grid-template-columns:repeat(4,1fr);background:var(--card);
  border-top:1px solid #eee;margin:0 14px;border-radius:0 0 8px 8px;
  box-shadow:0 2px 6px rgba(0,0,0,.07);transition:background .3s}
.qa-item{display:flex;flex-direction:column;align-items:center;padding:14px 4px 12px;
  cursor:pointer;border-right:1px solid var(--border);gap:6px}
.qa-item:last-child{border-right:none}
.qa-circle{width:38px;height:38px;border-radius:50%;background:#E8F1FB;
  display:flex;align-items:center;justify-content:center;font-size:16px;transition:background .3s}
.qa-label{font-size:9.5px;color:var(--blue);font-weight:500;text-align:center;line-height:1.2}

/* ── SECTION TITLE ── */
.section-title{font-size:13px;font-weight:700;color:var(--text-mid);
  text-transform:uppercase;letter-spacing:.5px;padding:18px 18px 8px;transition:color .3s}

/* ── ACCOUNT ROW ── */
.account-row{background:var(--card);margin:0 14px 10px;border-radius:6px;
  overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08);transition:background .3s}
.account-row-header{background:#f8f9fc;padding:10px 16px;font-size:11px;font-weight:700;
  color:#555;text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--border);transition:background .3s}
.account-row-body{padding:14px 16px;display:flex;justify-content:space-between;align-items:flex-end}
.account-name{font-size:14px;font-weight:600;margin-bottom:3px}
.account-num{font-size:12px;color:var(--text-light)}
.account-balance{font-size:20px;font-weight:700}
.account-tag{display:inline-block;background:#e6f5ec;color:var(--green);
  font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;margin-top:6px;text-transform:uppercase}

/* ── TXN LIST ── */
.txn-card{background:var(--card);margin:0 14px 14px;border-radius:6px;
  box-shadow:0 1px 4px rgba(0,0,0,.08);overflow:hidden;transition:background .3s}
.txn-card-header{padding:12px 16px;border-bottom:1px solid var(--border);
  display:flex;justify-content:space-between;align-items:center}
.txn-card-header h4{font-size:14px;font-weight:700}
.txn-card-header a{color:var(--blue);font-size:12.5px;text-decoration:none}
.txn-row{display:flex;align-items:center;padding:12px 16px;
  border-bottom:1px solid #f0f0f0;gap:12px;cursor:pointer;transition:background .12s}
.txn-row:hover{background:#fafafa}
body.dark .txn-row:hover{background:#222}
.txn-row:last-child{border-bottom:none}
.txn-dot{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.txn-dot.dep{background:#e6f5ec}.txn-dot.wd{background:#fff0f0}
.txn-dot.tr{background:#fff8e0}.txn-dot.bl{background:#eef2ff}
.txn-dot.zl{background:#f3eeff}.txn-dot.atm{background:#fff5e6}
.txn-info{flex:1}
.txn-info .tname{font-size:13px;font-weight:600}
.txn-info .tdate{font-size:11px;color:var(--text-light);margin-top:2px}
.txn-right{text-align:right}
.txn-right .amount{font-size:13.5px;font-weight:700}
.txn-right .amount.pos{color:var(--green)}.txn-right .amount.neg{color:var(--red)}
.txn-right .status{font-size:10px;font-weight:600;margin-top:3px;padding:2px 7px;
  border-radius:10px;display:inline-block;text-transform:uppercase}
.txn-right .status.done{background:#e6f5ec;color:#1a8a4a}

/* ── PAGE CARD ── */
.page-card{background:var(--card);margin:14px;border-radius:10px;
  box-shadow:0 1px 6px rgba(0,0,0,.09);overflow:hidden;transition:background .3s}
.page-card-header{background:var(--blue);color:white;padding:16px 18px;font-size:16px;font-weight:700}
.page-card-header.navy{background:var(--navy)}
.page-card-header.gold{background:linear-gradient(135deg,#8B6914,#C9982A)}
.info-row{display:flex;justify-content:space-between;align-items:center;
  padding:13px 18px;border-bottom:1px solid var(--border)}
.info-row:last-child{border-bottom:none}
.info-label{font-size:12px;color:var(--text-light);margin-bottom:3px}
.info-value{font-size:14px;font-weight:600;color:var(--text)}

/* ── CREDIT CARD VISUAL ── */
.cc-visual{margin:18px 14px;border-radius:14px;padding:22px 22px 18px;
  background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);
  color:white;box-shadow:0 6px 24px rgba(0,0,0,.3);position:relative;overflow:hidden;min-height:180px}
.cc-visual.mastercard-bg{background:linear-gradient(135deg,#1a1a1a,#333,#1a1a1a)}
.cc-chip{width:40px;height:30px;background:linear-gradient(135deg,#d4a843,#f0c060);
  border-radius:5px;margin-bottom:20px;display:grid;place-items:center}
.cc-chip-inner{width:26px;height:20px;border:1.5px solid rgba(0,0,0,.3);border-radius:3px;
  display:grid;grid-template-columns:1fr 1fr;gap:2px;padding:3px}
.cc-chip-inner div{background:rgba(0,0,0,.2);border-radius:1px}
.cc-number{font-size:17px;font-weight:500;letter-spacing:3px;margin-bottom:18px;font-family:monospace}
.cc-bottom{display:flex;justify-content:space-between;align-items:flex-end}
.cc-label{font-size:9px;opacity:.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:2px}
.cc-val{font-size:13px;font-weight:600}
.cc-network{position:absolute;bottom:18px;right:20px}
.mc-circles{display:flex;position:relative;width:50px;height:30px}
.mc-left{width:30px;height:30px;border-radius:50%;background:#EB001B;opacity:.9;position:absolute;left:0}
.mc-right{width:30px;height:30px;border-radius:50%;background:#F79E1B;opacity:.9;position:absolute;right:0}
.cc-shine{position:absolute;top:-50%;left:-50%;width:200%;height:200%;
  background:radial-gradient(ellipse at 60% 40%,rgba(255,255,255,.08) 0%,transparent 60%)}

/* ── INVEST ── */
.invest-row{background:var(--card);margin:0 14px 8px;border-radius:8px;
  padding:14px 16px;display:flex;align-items:center;gap:14px;
  box-shadow:0 1px 4px rgba(0,0,0,.07);transition:background .3s}
.invest-ticker{width:44px;height:44px;border-radius:10px;background:#E8F1FB;
  display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--blue);flex-shrink:0}
.invest-info{flex:1}
.invest-name{font-size:13px;font-weight:600}
.invest-shares{font-size:11px;color:var(--text-light);margin-top:2px}
.invest-right{text-align:right}
.invest-value{font-size:14px;font-weight:700}
.invest-change{font-size:11px;margin-top:2px}
.invest-change.up{color:var(--green)}.invest-change.dn{color:var(--red)}
.invest-total-card{background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
  color:white;margin:14px;border-radius:10px;padding:20px;box-shadow:0 2px 10px rgba(0,0,0,.2)}
.invest-total-label{font-size:11px;opacity:.7;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.invest-total-val{font-size:32px;font-weight:700}
.invest-total-sub{font-size:12px;opacity:.6;margin-top:4px}

/* ── PROFILE ── */
.profile-avatar-big{width:72px;height:72px;border-radius:50%;background:var(--blue);
  display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;
  color:white;margin:24px auto 10px}
.profile-name-big{text-align:center;font-size:18px;font-weight:700;margin-bottom:4px}
.profile-since{text-align:center;font-size:12px;color:var(--text-light);margin-bottom:20px}
.toggle-row{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-bottom:1px solid var(--border)}
.toggle-label{font-size:14px;font-weight:500}
.toggle-sub{font-size:11px;color:var(--text-light);margin-top:2px}
.toggle-switch{position:relative;width:48px;height:26px;cursor:pointer}
.toggle-switch input{opacity:0;width:0;height:0}
.toggle-slider{position:absolute;inset:0;background:#ccc;border-radius:13px;transition:.3s}
.toggle-slider::before{content:'';position:absolute;width:20px;height:20px;left:3px;bottom:3px;
  background:white;border-radius:50%;transition:.3s}
.toggle-switch input:checked+.toggle-slider{background:var(--blue)}
.toggle-switch input:checked+.toggle-slider::before{transform:translateX(22px)}

/* ── MORE PAGE ── */
.more-item{background:var(--card);margin:0 14px 2px;padding:15px 18px;
  display:flex;align-items:center;gap:14px;border-bottom:1px solid var(--border);
  cursor:pointer;transition:background .12s}
.more-item:last-of-type{border-bottom:none;margin-bottom:14px}
.more-item:hover{background:#f5f5f5}
body.dark .more-item:hover{background:#222}
.more-icon{width:38px;height:38px;border-radius:10px;background:#E8F1FB;
  display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.more-label{font-size:14px;font-weight:500}
.more-sub{font-size:11px;color:var(--text-light);margin-top:2px}
.more-chevron{margin-left:auto;color:#bbb;font-size:16px}
.more-divider{font-size:11px;font-weight:700;color:var(--text-light);
  text-transform:uppercase;letter-spacing:1px;padding:16px 18px 6px}

/* ── LOCKED ACCOUNT SCREEN ── */
.locked-screen{display:none;position:fixed;inset:0;background:#0a0a0a;z-index:500;
  flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;text-align:center}
.locked-screen.show{display:flex}
.lock-icon-big{font-size:72px;margin-bottom:24px;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
.lock-title{font-size:22px;font-weight:700;color:#ff4444;margin-bottom:12px}
.lock-date{font-size:13px;color:#888;margin-bottom:20px;background:#1a1a1a;
  padding:8px 16px;border-radius:20px;display:inline-block}
.lock-msg{font-size:14px;color:#bbb;line-height:1.7;margin-bottom:28px;max-width:340px}
.lock-ref{font-size:11px;color:#555;border-top:1px solid #222;padding-top:16px;width:100%}
.lock-cs{margin-top:16px;background:#111;border:1px solid #333;border-radius:10px;
  padding:16px 20px;width:100%;display:flex;align-items:center;gap:14px}
.lock-cs-icon{font-size:28px}
.lock-cs-label{font-size:11px;color:#666;margin-bottom:3px}
.lock-cs-num{font-size:18px;font-weight:700;color:#eee}
.lock-logout{margin-top:20px;background:none;border:1.5px solid #444;color:#888;
  padding:12px 28px;border-radius:6px;font-size:14px;cursor:pointer;font-family:inherit;width:100%}
.lock-logout:hover{border-color:#ff4444;color:#ff4444}
/* ── NEW CHASE-STYLE HOME ── */
#page-home{background:#EEF1F5}
body.dark #page-home{background:#0D0D0D}
.home-greeting{padding:22px 18px 10px}
.greeting-text{font-size:28px;font-weight:700;color:var(--text);line-height:1.1}
.greeting-date{font-size:14px;color:var(--text-light);margin-top:4px}
.quick-pills{display:flex;align-items:center;gap:8px;padding:4px 18px 16px;overflow-x:auto;scrollbar-width:none}
.quick-pills::-webkit-scrollbar{display:none}
.pill-btn{border:1.5px solid var(--border);background:white;color:var(--text);padding:9px 16px;border-radius:24px;font-size:13.5px;font-weight:500;cursor:pointer;font-family:inherit;white-space:nowrap;flex-shrink:0;transition:background .15s}
.pill-btn:hover{background:#f0f0f0}
.pill-add{width:40px;height:40px;padding:0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
body.dark .pill-btn{background:#1A1A1A;border-color:#333}
.snapshot-card{background:white;margin:0 14px 14px;border-radius:12px;padding:16px;display:flex;align-items:center;gap:14px;box-shadow:0 1px 4px rgba(0,0,0,.08);cursor:pointer}
body.dark .snapshot-card{background:#1A1A1A}
.snapshot-icon{width:52px;height:52px;flex-shrink:0;display:flex;align-items:center;justify-content:center}
.pill-add{width:42px;height:42px;padding:0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:300;flex-shrink:0;border:1.5px solid var(--border);background:white;color:var(--text)}
.snapshot-left{flex:1;display:flex;align-items:center;gap:12px}
.snapshot-title{font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.snapshot-badge{background:#F0F0F0;color:var(--text-light);font-size:11px;font-weight:400;padding:2px 8px;border-radius:10px}
body.dark .snapshot-badge{background:#333}
.snapshot-sub{font-size:13px;color:var(--text-mid)}
.snapshot-arrow{font-size:22px;color:var(--text-light)}
.acct-section-hdr{display:flex;align-items:center;justify-content:space-between;padding:8px 18px 8px}
.acct-section-ttl{font-size:18px;font-weight:700;color:var(--text)}
.acct-section-btn{background:none;border:1.5px solid var(--border);border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:14px;color:var(--text-mid);display:flex;align-items:center;justify-content:center}
.bank-card{background:white;margin:0 14px 14px;border-radius:12px;overflow:hidden;box-shadow:0 1px 6px rgba(0,0,0,.09)}
body.dark .bank-card{background:#1A1A1A}
.bank-card-hdr{background:#1B3A6B;color:white;padding:13px 16px;font-size:14px;font-weight:600}
.bank-acct-row{padding:16px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:background .12s;border-bottom:1px solid var(--border)}
.bank-acct-row:hover{background:#fafafa}
body.dark .bank-acct-row:hover{background:#222}
.bank-acct-type{font-size:10.5px;text-transform:uppercase;letter-spacing:.5px;color:var(--text-light);margin-bottom:3px}
.bank-acct-name{font-size:13.5px;font-weight:600;color:var(--blue)}
.bank-acct-right{text-align:right}
.bank-acct-bal{font-size:21px;font-weight:700;color:var(--text);display:flex;align-items:center;gap:8px;justify-content:flex-end}
.bank-acct-lbl{font-size:11.5px;color:var(--text-light);margin-top:2px}
.bar-icon{display:flex;align-items:flex-end;gap:2px;height:18px}
.bar-icon span{display:inline-block;width:3px;border-radius:2px;background:var(--blue)}
.link-ext{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-top:1px solid var(--border);font-size:14px;font-weight:500;color:var(--text);cursor:pointer;transition:background .12s}
.link-ext:hover{background:#fafafa}
body.dark .link-ext:hover{background:#222}
.open-acct-card{background:white;margin:0 14px 14px;border-radius:12px;padding:18px;box-shadow:0 1px 4px rgba(0,0,0,.08)}
body.dark .open-acct-card{background:#1A1A1A}
.open-acct-ttl{font-size:15px;font-weight:700;color:var(--text);margin-bottom:16px}
.open-acct-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.open-acct-item{display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer}
.open-acct-ico{width:52px;height:52px;border-radius:50%;background:#E8F1FB;display:flex;align-items:center;justify-content:center;font-size:22px}
.open-acct-lbl{font-size:11px;color:var(--blue);font-weight:500;text-align:center;line-height:1.3}
body.dark .open-acct-ico{background:#1E3A5A}
/* ── BOTTOM NAV ── */
.bottom-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);
  width:100%;max-width:430px;background:white;border-top:1px solid var(--border);
  display:flex;padding:8px 0 12px;z-index:100;transition:background .3s}
.bn-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;
  cursor:pointer;color:#888;font-size:10px;padding:6px 0;transition:color .15s}
.bn-item.active{color:var(--blue)}
.bn-icon{width:30px;height:26px;display:flex;align-items:center;justify-content:center}
body.dark .bottom-nav{background:#111}

/* ── MENU DRAWER ── */
.menu-overlay{display:none;position:fixed;inset:0;z-index:200}
.menu-overlay.open{display:block}
.menu-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.45)}
.menu-drawer{position:absolute;top:0;left:0;bottom:0;width:85%;max-width:320px;
  background:white;overflow-y:auto;padding-bottom:40px;transition:background .3s}
.menu-header{display:flex;align-items:center;justify-content:space-between;
  padding:14px 16px;border-bottom:1px solid var(--border)}
.menu-close{width:32px;height:32px;border:1.5px solid #888;background:none;cursor:pointer;
  display:flex;align-items:center;justify-content:center;font-size:16px;color:#555}
.menu-item{display:flex;align-items:center;justify-content:space-between;
  padding:16px 18px;border-bottom:1px solid #EEE;font-size:15px;color:var(--text);
  text-decoration:none;cursor:pointer;transition:background .12s}
.menu-item:hover{background:#f9f9f9}
.menu-chevron{color:#999;font-size:14px}
.menu-logout{display:block;width:calc(100% - 36px);margin:20px 18px 0;background:none;
  border:1.5px solid var(--red);color:var(--red);padding:13px;border-radius:4px;
  font-size:15px;font-weight:500;cursor:pointer;font-family:inherit;text-align:center}

/* ── HOLD MODAL ── */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);
  z-index:300;align-items:flex-end;justify-content:center}
.modal-overlay.open{display:flex}
.modal-sheet{background:var(--card);width:100%;max-width:430px;
  border-radius:16px 16px 0 0;padding:0 0 36px;transition:background .3s}

.modal-handle{width:36px;height:4px;background:#ddd;border-radius:2px;margin:12px auto 0}
.modal-header{display:flex;align-items:center;justify-content:space-between;
  padding:18px 20px 14px;border-bottom:1px solid var(--border)}
.modal-title{font-size:17px;font-weight:700}
.modal-close{background:#f0f0f0;border:none;border-radius:50%;width:28px;height:28px;
  font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#555}
.modal-amount-row{display:flex;justify-content:space-between;align-items:center;
  padding:16px 20px;border-bottom:1px solid var(--border)}
.modal-amount-label{font-size:13px;color:var(--text-mid)}
.modal-amount-value{font-size:16px;font-weight:700}
.hold-notice{margin:18px 20px 0;background:#FFF8E1;border:1.5px solid #FFD600;
  border-left:5px solid #F9A825;border-radius:6px;padding:16px 14px}
.hold-notice-top{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.hold-icon{font-size:22px}
.hold-title{font-size:15px;font-weight:700;color:#7a5200}
.hold-body{font-size:13.5px;color:#5a3e00;line-height:1.6}
.hold-body strong{color:#3a2800}
.hold-ref{margin-top:10px;font-size:11.5px;color:#888;border-top:1px solid #ffe082;padding-top:8px}
.modal-actions{padding:18px 20px 0}
.btn-modal-cancel{width:100%;background:#f0f0f0;color:var(--text-mid);border:none;
  padding:13px;border-radius:6px;font-size:15px;font-weight:500;cursor:pointer;font-family:inherit}
</style>
</head>
<body>

<!-- TOP NAV -->
<!-- TOP NAV — Chase app style -->
<div class="top-nav">
  <div class="nav-left">
    <!-- Chat icon -->
    <button class="nav-icon-btn" onclick="openHelpModal()">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>
    <!-- Add / deposit check icon -->
    <button class="nav-icon-btn" onclick="openMenu()">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2.5"/>
        <line x1="12" y1="8.5" x2="12" y2="15.5"/>
        <line x1="8.5" y1="12" x2="15.5" y2="12"/>
      </svg>
    </button>
  </div>
  <!-- Chase octagon center -->
  <div onclick="goPage('home')" style="cursor:pointer;display:flex;align-items:center;justify-content:center">
    <div class="chase-octagon"><div class="chase-octagon-inner"><div class="chase-octagon-core"></div></div></div>
  </div>
  <!-- Profile avatar with notification dot -->
  <div class="nav-right">
    <div class="nav-avatar" id="navAvatar" onclick="goPage('profile')">
      <span id="navInitials">--</span>
      <div class="nav-dot"></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: HOME                            -->
<!-- ═══════════════════════════════════════ -->
<div class="page active page-pad" id="page-home">
  <!-- Greeting -->
  <div class="home-greeting">
    <div class="greeting-text" id="greetingText">Good morning</div>
    <div class="greeting-date" id="greetingDate">--</div>
  </div>

  <!-- Quick Action Pills -->
  <div class="quick-pills">
    <button class="pill-btn pill-add" onclick="openMenu()">+</button>
    <button class="pill-btn" onclick="goPage('zelle')">Send | Zelle®</button>
    <button class="pill-btn" onclick="showHoldModal('Deposit checks')">Deposit checks</button>
    <button class="pill-btn" onclick="goPage('transfer')">Pay bills</button>
  </div>

  <!-- Today's Snapshot -->
  <div class="snapshot-card" onclick="goPage('statements')">
    <div class="snapshot-left">
      <!-- Exact Chase snapshot icon: light blue circle + card/atm device -->
      <div class="snapshot-icon">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="26" fill="#E8F2FF"/>
          <!-- ATM/card device body -->
          <rect x="13" y="15" width="26" height="20" rx="2.5" fill="#5B9FE0"/>
          <!-- Screen -->
          <rect x="16" y="18" width="20" height="10" rx="1.5" fill="#3A7EC8"/>
          <!-- Card insert slot -->
          <rect x="16" y="30" width="20" height="2.5" rx="1" fill="#3A7EC8"/>
          <!-- Green card coming out -->
          <rect x="19" y="33" width="14" height="5" rx="1" fill="#3DB87A"/>
          <rect x="19" y="33" width="14" height="2" rx="1" fill="#2E9A62"/>
        </svg>
      </div>
      <div>
        <div class="snapshot-title">Today's Snapshot <span class="snapshot-badge">30 sec read</span></div>
        <div class="snapshot-sub" id="snapshotSub">Your money this month</div>
      </div>
    </div>
    <div class="snapshot-arrow">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="#999" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="1,1 7,7 1,13"/>
      </svg>
    </div>
  </div>

  <!-- Accounts Header -->
  <div class="acct-section-hdr">
    <span class="acct-section-ttl">Accounts</span>
    <!-- Circle with ··· matching Chase app exactly -->
    <button class="acct-section-btn" style="width:32px;height:32px;border-radius:50%;border:1.5px solid #CCC;background:none;display:flex;align-items:center;justify-content:center;cursor:pointer">
      <svg width="18" height="4" viewBox="0 0 18 4" fill="#666">
        <circle cx="2" cy="2" r="2"/><circle cx="9" cy="2" r="2"/><circle cx="16" cy="2" r="2"/>
      </svg>
    </button>
  </div>

  <!-- Bank Accounts Card -->
  <div class="bank-card">
    <div class="bank-card-hdr" id="bankCardHdr">Bank accounts (2)</div>
    <div class="bank-acct-row" onclick="goPage('accounts')">
      <div>
        <div class="bank-acct-type">TOTAL CHECKING</div>
        <div class="bank-acct-name" id="h-checkNum">(...7702) &rsaquo;</div>
      </div>
      <div class="bank-acct-right">
        <div class="bank-acct-bal">
          <span id="h-checkBal">--</span>
          <!-- Exact bar chart lines from Chase app -->
          <svg width="10" height="22" viewBox="0 0 10 22" fill="#999" style="margin-left:4px">
            <rect x="0" y="10" width="2" height="12" rx="1"/>
            <rect x="3" y="5"  width="2" height="17" rx="1"/>
            <rect x="6" y="8"  width="2" height="14" rx="1"/>
            <rect x="9" y="0"  width="2" height="22" rx="1"/>
          </svg>
        </div>
        <div class="bank-acct-lbl">Available balance</div>
      </div>
    </div>
    <div class="bank-acct-row" onclick="goPage('accounts')">
      <div>
        <div class="bank-acct-type">CHASE SAVINGS℠</div>
        <div class="bank-acct-name" id="h-saveNum">(...7934) &rsaquo;</div>
      </div>
      <div class="bank-acct-right">
        <div class="bank-acct-bal">
          <span id="h-saveBal">--</span>
          <svg width="10" height="22" viewBox="0 0 10 22" fill="#999" style="margin-left:4px">
            <rect x="0" y="6"  width="2" height="16" rx="1"/>
            <rect x="3" y="12" width="2" height="10" rx="1"/>
            <rect x="6" y="4"  width="2" height="18" rx="1"/>
            <rect x="9" y="8"  width="2" height="14" rx="1"/>
          </svg>
        </div>
        <div class="bank-acct-lbl">Available balance</div>
      </div>
    </div>
    <div class="link-ext" onclick="goPage('accounts')">
      <span>Link external accounts</span>
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="#999" stroke-width="1.8" stroke-linecap="round"><polyline points="1,1 7,7 1,13"/></svg>
    </div>
  </div>

  <!-- Open an Account — exact Chase app SVG icons -->
  <div class="open-acct-card">
    <div class="open-acct-ttl">Open an account</div>
    <div class="open-acct-grid">

      <!-- Credit cards -->
      <div class="open-acct-item" onclick="goPage('credit')">
        <div class="open-acct-ico" style="background:none;width:58px;height:58px">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
            <circle cx="29" cy="29" r="29" fill="#4A8FD4"/>
            <!-- Back card -->
            <rect x="11" y="21" width="28" height="17" rx="2.5" fill="white" opacity="0.55" transform="rotate(-6 25 29)"/>
            <!-- Front card -->
            <rect x="15" y="23" width="28" height="17" rx="2.5" fill="white"/>
            <rect x="15" y="27" width="28" height="5" fill="#4A8FD4" opacity="0.35"/>
            <rect x="18" y="34" width="8" height="2" rx="1" fill="#4A8FD4" opacity="0.4"/>
          </svg>
        </div>
        <div class="open-acct-lbl">Credit cards</div>
      </div>

      <!-- Checking -->
      <div class="open-acct-item" onclick="goPage('accounts')">
        <div class="open-acct-ico" style="background:none;width:58px;height:58px">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
            <circle cx="29" cy="29" r="29" fill="#4A8FD4"/>
            <!-- Two cards stacked -->
            <rect x="13" y="20" width="28" height="16" rx="2.5" fill="white" opacity="0.5" transform="translate(3,-3)"/>
            <rect x="13" y="20" width="28" height="16" rx="2.5" fill="white"/>
            <rect x="13" y="24" width="28" height="4" fill="#4A8FD4" opacity="0.35"/>
            <rect x="16" y="31" width="6" height="2" rx="1" fill="#4A8FD4" opacity="0.4"/>
            <rect x="24" y="31" width="4" height="2" rx="1" fill="#4A8FD4" opacity="0.4"/>
          </svg>
        </div>
        <div class="open-acct-lbl">Checking</div>
      </div>

      <!-- Savings & CDs -->
      <div class="open-acct-item" onclick="goPage('accounts')">
        <div class="open-acct-ico" style="background:none;width:58px;height:58px">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
            <circle cx="29" cy="29" r="29" fill="#4A8FD4"/>
            <!-- Piggy bank body -->
            <ellipse cx="29" cy="35" rx="12" ry="10" fill="white"/>
            <!-- Snout -->
            <ellipse cx="40" cy="35" rx="3.5" ry="3" fill="white"/>
            <circle cx="39" cy="34.2" r="0.9" fill="#4A8FD4" opacity="0.5"/>
            <circle cx="41" cy="34.2" r="0.9" fill="#4A8FD4" opacity="0.5"/>
            <!-- Ear -->
            <ellipse cx="23" cy="25.5" rx="3" ry="2.5" fill="white"/>
            <!-- Eye -->
            <circle cx="34" cy="32" r="1.2" fill="#4A8FD4" opacity="0.6"/>
            <!-- Coin slot -->
            <rect x="25" y="24.5" width="7" height="1.8" rx="0.9" fill="#4A8FD4" opacity="0.45"/>
            <!-- Leg -->
            <rect x="23" y="43" width="3" height="4" rx="1.5" fill="white"/>
            <rect x="30" y="43" width="3" height="4" rx="1.5" fill="white"/>
            <!-- Gold coin -->
            <circle cx="29" cy="20" r="5" fill="#F5C518"/>
            <text x="29" y="22.5" text-anchor="middle" font-size="6.5" fill="#C9960A" font-weight="bold" font-family="Arial">$</text>
          </svg>
        </div>
        <div class="open-acct-lbl">Savings &amp; CDs</div>
      </div>

      <!-- Business -->
      <div class="open-acct-item" onclick="goPage('more')">
        <div class="open-acct-ico" style="background:none;width:58px;height:58px">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
            <circle cx="29" cy="29" r="29" fill="#4A8FD4"/>
            <!-- Briefcase body -->
            <rect x="13" y="25" width="32" height="22" rx="2.5" fill="white"/>
            <!-- Handle -->
            <path d="M22 25 V21.5 Q22 19 24.5 19 H33.5 Q36 19 36 21.5 V25" stroke="white" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <!-- Center clasp line -->
            <rect x="13" y="34.5" width="32" height="2" fill="#4A8FD4" opacity="0.25"/>
            <!-- Latch -->
            <rect x="25" y="33" width="8" height="5" rx="1.5" fill="#4A8FD4" opacity="0.35"/>
          </svg>
        </div>
        <div class="open-acct-lbl">Business</div>
      </div>

    </div>
  </div>

  <!-- Recent Transactions -->
  <div class="section-title">Recent Transactions</div>
  <div class="txn-card">
    <div class="txn-card-header"><h4>Transaction History</h4><a href="#" onclick="goPage('statements');return false">View all →</a></div>
    <div id="home-txn-list"></div>
  </div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: ACCOUNTS                        -->
<!-- ═══════════════════════════════════════ -->
<div class="page page-pad" id="page-accounts">
  <div class="section-title">Account Information</div>
  <div class="page-card">
    <div class="page-card-header">Chase Total Checking®</div>
    <div class="info-row"><div><div class="info-label">Account Number</div><div class="info-value" id="a-checkNum">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Routing Number</div><div class="info-value" id="a-routing">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Available Balance</div><div class="info-value" id="a-checkBal">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Account Status</div><div class="info-value" style="color:var(--green)">● Active</div></div></div>
    <div class="info-row"><div><div class="info-label">Account Type</div><div class="info-value">Personal Checking</div></div></div>
  </div>
  <div class="page-card">
    <div class="page-card-header navy">Chase Savings℠</div>
    <div class="info-row"><div><div class="info-label">Account Number</div><div class="info-value" id="a-saveNum">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Routing Number</div><div class="info-value" id="a-saveRouting">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Available Balance</div><div class="info-value" id="a-saveBal">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Account Status</div><div class="info-value" style="color:var(--green)">● Active</div></div></div>
    <div class="info-row"><div><div class="info-label">Interest Rate (APY)</div><div class="info-value">4.50%</div></div></div>
  </div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: TRANSFER & PAY / ZELLE          -->
<!-- ═══════════════════════════════════════ -->
<div class="page page-pad" id="page-transfer">
  <div class="section-title">Transfer &amp; Pay</div>
  <div class="page-card">
    <div class="page-card-header">Transfer Money</div>
    <div style="padding:20px 18px;text-align:center">
      <div style="font-size:48px;margin-bottom:14px">🔒</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:10px;color:var(--text)">Funds Currently On Hold</div>
      <div style="font-size:14px;color:var(--text-mid);line-height:1.6">Your account funds are currently held pending a verification review and are unavailable for transfer or payment.</div>
      <div style="margin-top:14px;font-size:12px;color:var(--text-light);padding-top:12px;border-top:1px solid var(--border)">Hold Ref #: CHK-2021-04-8821</div>
    </div>
  </div>
  <div class="page-card" style="margin-top:0">
    <div class="page-card-header navy">Pay Bills</div>
    <div style="padding:20px 18px;text-align:center">
      <div style="font-size:14px;color:var(--text-mid);line-height:1.6">Bill payments are temporarily unavailable while your account hold is under review.</div>
    </div>
  </div>
</div>

<div class="page page-pad" id="page-zelle">
  <div class="section-title">Zelle®</div>
  <div class="page-card">
    <div class="page-card-header" style="background:#6D1ED4">Zelle® Send Money</div>
    <div style="padding:24px 18px;text-align:center">
      <div style="font-size:48px;margin-bottom:14px">🔒</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:10px;color:var(--text)">Zelle® Unavailable</div>
      <div style="font-size:14px;color:var(--text-mid);line-height:1.6">Zelle® transfers are not available at this time. Your funds are currently on hold pending an account verification review. Please contact Chase for assistance.</div>
      <div style="margin-top:14px;font-size:12px;color:var(--text-light);padding-top:12px;border-top:1px solid var(--border)">Hold Ref #: CHK-2021-04-8821 · Applied: Apr 6, 2021</div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: STATEMENTS                      -->
<!-- ═══════════════════════════════════════ -->
<div class="page page-pad" id="page-statements">
  <div class="section-title">Statements &amp; Transaction History</div>
  <div class="txn-card" style="margin-top:0">
    <div class="txn-card-header"><h4>All Transactions</h4></div>
    <div id="stmt-txn-list"></div>
  </div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: CREDIT CARD                     -->
<!-- ═══════════════════════════════════════ -->
<div class="page page-pad" id="page-credit">
  <div class="section-title">Credit Card</div>

  <!-- Card Visual -->
  <div class="cc-visual mastercard-bg" id="ccVisual">
    <div class="cc-shine"></div>
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
      <div style="font-size:13px;font-weight:700;letter-spacing:1px;opacity:.9" id="ccBankName">CHASE</div>
      <div style="font-size:10px;opacity:.6;text-align:right">DEBIT</div>
    </div>
    <div class="cc-chip"><div class="cc-chip-inner"><div></div><div></div><div></div><div></div></div></div>
    <div class="cc-number" id="ccNumber">•••• •••• •••• ----</div>
    <div class="cc-bottom">
      <div>
        <div class="cc-label">Card Holder</div>
        <div class="cc-val" id="ccHolder">--</div>
      </div>
      <div>
        <div class="cc-label">Expires</div>
        <div class="cc-val">12/28</div>
      </div>
    </div>
    <div class="cc-network">
      <div class="mc-circles"><div class="mc-left"></div><div class="mc-right"></div></div>
    </div>
  </div>

  <div class="page-card">
    <div class="page-card-header gold" id="ccCardHeader">Credit Card</div>
    <div class="info-row"><div><div class="info-label">Card Number</div><div class="info-value" id="cc-num">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Credit Limit</div><div class="info-value" id="cc-limit">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Current Balance</div><div class="info-value" id="cc-bal">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Available Credit</div><div class="info-value" id="cc-avail">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Payment Due Date</div><div class="info-value" id="cc-due">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Minimum Payment</div><div class="info-value" id="cc-min">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Card Status</div><div class="info-value" style="color:var(--green)">● Active</div></div></div>
  </div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: INVESTING                       -->
<!-- ═══════════════════════════════════════ -->
<div class="page page-pad" id="page-invest">
  <div class="invest-total-card">
    <div class="invest-total-label">Portfolio Value</div>
    <div class="invest-total-val" id="invest-total">--</div>
    <div class="invest-total-sub" id="invest-total-sub">J.P. Morgan Self-Directed · Updated just now</div>
  </div>
  <div class="section-title">My Holdings</div>
  <div id="invest-list"></div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: PROFILE & SETTINGS              -->
<!-- ═══════════════════════════════════════ -->
<div class="page page-pad" id="page-profile">
  <div class="page-card" style="margin-top:14px">
    <div class="profile-avatar-big" id="prof-avatar">--</div>
    <div class="profile-name-big" id="prof-name">--</div>
    <div class="profile-since" id="prof-since">Member since --</div>
    <div class="info-row"><div><div class="info-label">Username</div><div class="info-value" id="prof-user">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Email Address</div><div class="info-value" id="prof-email">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Phone Number</div><div class="info-value" id="prof-phone">--</div></div></div>
    <div class="info-row"><div><div class="info-label">Address</div><div class="info-value" id="prof-addr">--</div></div></div>
    <div class="info-row" id="prof-cs-row" style="display:none"><div><div class="info-label">Customer Service</div><div class="info-value" id="prof-cs">--</div></div></div>
  </div>

  <div class="page-card" style="margin-top:0">
    <div style="padding:14px 18px;font-size:14px;font-weight:700;border-bottom:1px solid var(--border)">Settings</div>
    <div class="toggle-row">
      <div>
        <div class="toggle-label">Dark Mode</div>
        <div class="toggle-sub">Switch to dark theme</div>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" id="darkToggle" onchange="toggleDark()">
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div class="toggle-row">
      <div>
        <div class="toggle-label">Push Notifications</div>
        <div class="toggle-sub">Alerts for transactions</div>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" checked>
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div class="toggle-row" style="border-bottom:none">
      <div>
        <div class="toggle-label">Biometric Login</div>
        <div class="toggle-sub">Face ID / Fingerprint</div>
      </div>
      <label class="toggle-switch">
        <input type="checkbox">
        <span class="toggle-slider"></span>
      </label>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: MORE                            -->
<!-- ═══════════════════════════════════════ -->
<div class="page page-pad" id="page-more">
  <div class="section-title">More</div>

  <div class="more-divider">Account Services</div>
  <div class="more-item" onclick="goPage('accounts')">
    <div class="more-icon">🏦</div>
    <div><div class="more-label">Account Information</div><div class="more-sub">View account details &amp; numbers</div></div>
    <div class="more-chevron">›</div>
  </div>
  <div class="more-item" onclick="goPage('statements')">
    <div class="more-icon">📋</div>
    <div><div class="more-label">Statements</div><div class="more-sub">Transaction history &amp; statements</div></div>
    <div class="more-chevron">›</div>
  </div>
  <div class="more-item" onclick="goPage('invest')">
    <div class="more-icon">📈</div>
    <div><div class="more-label">Investing</div><div class="more-sub">J.P. Morgan portfolio</div></div>
    <div class="more-chevron">›</div>
  </div>

  <div class="more-divider">Payments</div>
  <div class="more-item" onclick="goPage('transfer')">
    <div class="more-icon">↕️</div>
    <div><div class="more-label">Transfer &amp; Pay</div><div class="more-sub">Move money between accounts</div></div>
    <div class="more-chevron">›</div>
  </div>
  <div class="more-item" onclick="goPage('zelle')">
    <div class="more-icon">⚡</div>
    <div><div class="more-label">Zelle®</div><div class="more-sub">Send &amp; receive money fast</div></div>
    <div class="more-chevron">›</div>
  </div>

  <div class="more-divider">Account Details</div>
  <div class="more-item" onclick="goPage('profile')">
    <div class="more-icon">👤</div>
    <div><div class="more-label">Profile &amp; Settings</div><div class="more-sub">Personal info &amp; preferences</div></div>
    <div class="more-chevron">›</div>
  </div>
  <div class="more-item" onclick="goPage('security')">
    <div class="more-icon">🔒</div>
    <div><div class="more-label">Security Center</div><div class="more-sub">Manage security &amp; alerts</div></div>
    <div class="more-chevron">›</div>
  </div>
  <div class="more-item" id="help-support-item" onclick="openHelpModal()">
    <div class="more-icon">❓</div>
    <div><div class="more-label">Help &amp; Support</div><div class="more-sub" id="help-sub">FAQs &amp; contact Chase</div></div>
    <div class="more-chevron">›</div>
  </div>
</div>

<!-- ═══════════════════════════════════════ -->
<!--  PAGE: SECURITY CENTER                 -->
<!-- ═══════════════════════════════════════ -->
<div class="page page-pad" id="page-security">
  <div class="section-title">Security Center</div>
  <div class="page-card">
    <div class="page-card-header">Account Protection</div>
    <div class="info-row" style="cursor:pointer">
      <div><div class="info-label">2-Step Verification</div><div class="info-value" style="color:var(--green)">● Enabled</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
    <div class="info-row" style="cursor:pointer">
      <div><div class="info-label">Biometric Login</div><div class="info-value" style="color:var(--green)">● Active</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
    <div class="info-row" style="cursor:pointer">
      <div><div class="info-label">Login Alerts</div><div class="info-value" style="color:var(--green)">● On</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
    <div class="info-row" style="cursor:pointer">
      <div><div class="info-label">Transaction Alerts</div><div class="info-value" style="color:var(--green)">● On</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
    <div class="info-row" style="cursor:pointer;border-bottom:none">
      <div><div class="info-label">Last Login</div><div class="info-value" id="sec-last-login">--</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
  </div>
  <div class="page-card" style="margin-top:0">
    <div class="page-card-header navy">Fraud Protection</div>
    <div class="info-row" style="cursor:pointer">
      <div><div class="info-label">Zero Liability Protection</div><div class="info-value" style="color:var(--green)">● Active</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
    <div class="info-row" style="cursor:pointer">
      <div><div class="info-label">Card Lock / Unlock</div><div class="info-value">Unlocked</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
    <div class="info-row" style="cursor:pointer;border-bottom:none">
      <div><div class="info-label">Report Fraud</div><div class="info-value" style="color:var(--blue)">Contact Chase</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
  </div>
  <div class="page-card" style="margin-top:0">
    <div class="page-card-header" style="background:#2A7D2E">Privacy</div>
    <div class="info-row" style="cursor:pointer">
      <div><div class="info-label">Data Sharing</div><div class="info-value">Manage preferences</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
    <div class="info-row" style="cursor:pointer;border-bottom:none">
      <div><div class="info-label">Privacy Policy</div><div class="info-value" style="color:var(--blue)">View policy</div></div>
      <div style="color:#bbb;font-size:16px">›</div>
    </div>
  </div>
</div>

<!-- TRANSACTION DETAIL MODAL -->
<div class="modal-overlay" id="txnModal">
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <span class="modal-title" id="txnModalName">Transaction</span>
      <button class="modal-close" onclick="closeTxnModal()">✕</button>
    </div>
    <div style="padding:0 20px">
      <div style="text-align:center;padding:20px 0 16px">
        <div id="txnModalEmoji" style="font-size:44px;margin-bottom:10px">💵</div>
        <div id="txnModalAmount" style="font-size:32px;font-weight:700;margin-bottom:6px">--</div>
        <div id="txnModalStatus" style="font-size:12px;font-weight:600;padding:3px 12px;border-radius:12px;display:inline-block;background:#e6f5ec;color:#1a8a4a;text-transform:uppercase">Completed</div>
      </div>
      <div style="background:var(--bg);border-radius:10px;padding:4px 0;margin-bottom:16px">
        <div class="info-row"><div><div class="info-label">Date &amp; Time</div><div class="info-value" id="txnModalDate">--</div></div></div>
        <div class="info-row"><div><div class="info-label">Merchant</div><div class="info-value" id="txnModalMerchant">--</div></div></div>
        <div class="info-row"><div><div class="info-label">Account</div><div class="info-value">Chase Total Checking®</div></div></div>
        <div class="info-row" style="border-bottom:none"><div><div class="info-label">Reference #</div><div class="info-value" id="txnModalRef">--</div></div></div>
      </div>
    </div>
    <div style="padding:0 20px 4px">
      <button class="btn-modal-cancel" onclick="closeTxnModal()">Close</button>
    </div>
  </div>
</div>

<!-- STOCK DETAIL MODAL -->
<div class="modal-overlay" id="stockModal">
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <span class="modal-title" id="stockModalName">Stock</span>
      <button class="modal-close" onclick="closeStockModal()">✕</button>
    </div>
    <div style="padding:0 20px">
      <div style="text-align:center;padding:18px 0 14px">
        <div id="stockModalTicker" style="font-size:15px;font-weight:700;color:var(--blue);background:var(--bg);padding:6px 18px;border-radius:8px;display:inline-block;margin-bottom:12px">--</div>
        <div id="stockModalPrice" style="font-size:34px;font-weight:700;margin-bottom:4px">--</div>
        <div id="stockModalChange" style="font-size:14px;font-weight:600">--</div>
      </div>
      <div style="background:var(--bg);border-radius:10px;padding:4px 0;margin-bottom:16px">
        <div class="info-row"><div><div class="info-label">Shares Held</div><div class="info-value" id="stockModalShares">--</div></div></div>
        <div class="info-row"><div><div class="info-label">Market Value</div><div class="info-value" id="stockModalValue">--</div></div></div>
        <div class="info-row"><div><div class="info-label">Account</div><div class="info-value">J.P. Morgan Self-Directed</div></div></div>
        <div class="info-row" style="border-bottom:none"><div><div class="info-label">Exchange</div><div class="info-value" id="stockModalExchange">NYSE / NASDAQ</div></div></div>
      </div>
    </div>
    <div style="padding:0 20px 4px">
      <button class="btn-modal-cancel" onclick="closeStockModal()">Close</button>
    </div>
  </div>
</div>

<!-- HELP & SUPPORT MODAL -->
<div class="modal-overlay" id="helpModal">
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <span class="modal-title">Help &amp; Support</span>
      <button class="modal-close" onclick="closeHelpModal()">✕</button>
    </div>
    <div style="padding:20px 20px 0">
      <div style="display:flex;align-items:center;gap:14px;padding:16px;background:var(--bg);border-radius:10px;margin-bottom:14px">
        <div style="width:44px;height:44px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">📞</div>
        <div>
          <div style="font-size:12px;color:var(--text-light);margin-bottom:3px">Customer Service</div>
          <div style="font-size:18px;font-weight:700;color:var(--text)" id="help-cs-number">1-800-935-9935</div>
          <div style="font-size:11px;color:var(--text-light);margin-top:2px">Available 24/7</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:14px;padding:16px;background:var(--bg);border-radius:10px;margin-bottom:14px">
        <div style="width:44px;height:44px;border-radius:50%;background:#e6f5ec;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">💬</div>
        <div>
          <div style="font-size:12px;color:var(--text-light);margin-bottom:3px">Live Chat</div>
          <div style="font-size:15px;font-weight:600;color:var(--text)">Chat with an agent</div>
          <div style="font-size:11px;color:var(--text-light);margin-top:2px">Mon–Fri, 8AM–10PM ET</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:14px;padding:16px;background:var(--bg);border-radius:10px;margin-bottom:20px">
        <div style="width:44px;height:44px;border-radius:50%;background:#eef2ff;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">🏦</div>
        <div>
          <div style="font-size:12px;color:var(--text-light);margin-bottom:3px">Find a Branch</div>
          <div style="font-size:15px;font-weight:600;color:var(--text)">Locate nearest Chase</div>
          <div style="font-size:11px;color:var(--text-light);margin-top:2px">14,000+ ATMs nationwide</div>
        </div>
      </div>
    </div>
    <div style="padding:0 20px">
      <button class="btn-modal-cancel" onclick="closeHelpModal()">Close</button>
    </div>
  </div>
</div>

<!-- ═══════ LOCKED ACCOUNT SCREEN ═══════ -->
<div class="locked-screen" id="lockedScreen">
  <div class="lock-icon-big">🔒</div>
  <div class="lock-title">Account Locked</div>
  <div class="lock-date" id="lockDate">Tuesday, May 5, 2026</div>
  <div class="lock-msg" id="lockMsg">Due to suspicious activity detected on your account, all access and transactions have been placed on hold until further notice. Please contact Chase support immediately.</div>
  <div class="lock-cs">
    <div class="lock-cs-icon">📞</div>
    <div>
      <div class="lock-cs-label">Contact Chase Support</div>
      <div class="lock-cs-num" id="lockCsNum">1-800-935-9935</div>
      <div style="font-size:11px;color:#555;margin-top:2px">Available 24/7</div>
    </div>
  </div>
  <div class="lock-ref">Lock Reference: SUSP-2026-05-05-FRH &nbsp;·&nbsp; Case under review</div>
  <form method="POST" action="/logout" style="width:100%;margin-top:4px">
    <button type="submit" class="lock-logout">Sign Out</button>
  </form>
</div>

<!-- ═══════ BOTTOM NAV ═══════ -->
<div class="bottom-nav">
  <!-- Accounts: filled wallet icon -->
  <div class="bn-item active" id="bn-home" onclick="goPage('home')">
    <div class="bn-icon">
      <svg width="26" height="22" viewBox="0 0 26 22" fill="currentColor">
        <rect x="0" y="3" width="26" height="19" rx="3"/>
        <rect x="0" y="3" width="26" height="6" rx="3" fill="white" opacity="0.18"/>
        <rect x="14" y="11" width="10" height="7" rx="2" fill="white" opacity="0.22"/>
        <circle cx="19" cy="14.5" r="2" fill="white" opacity="0.3"/>
      </svg>
    </div>
    <span>Accounts</span>
  </div>

  <!-- Pay & transfer: dollar in circle outline -->
  <div class="bn-item" id="bn-transfer" onclick="goPage('transfer')">
    <div class="bn-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="6.5" x2="12" y2="17.5"/>
        <path d="M9.2 9.2C9.2 8 10.5 7 12 7C13.5 7 14.8 8 14.8 9.2C14.8 10.5 13.5 11.2 12 11.8C10.5 12.4 9.2 13.2 9.2 14.5C9.2 15.8 10.5 17 12 17C13.5 17 14.8 15.8 14.8 14.5"/>
      </svg>
    </div>
    <span>Pay &amp; transfer</span>
  </div>

  <!-- Plan & track: document with pen outline -->
  <div class="bn-item" id="bn-statements" onclick="goPage('statements')">
    <div class="bn-icon">
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 1.5H14L20 7V22C20 22.8 19.3 23.5 18.5 23.5H4C3.2 23.5 2.5 22.8 2.5 22V3C2.5 2.2 3.2 1.5 4 1.5Z"/>
        <path d="M14 1.5V7H20"/>
        <line x1="6" y1="10" x2="15" y2="10"/>
        <line x1="6" y1="13.5" x2="15" y2="13.5"/>
        <line x1="6" y1="17" x2="11" y2="17"/>
        <!-- Pen at bottom right -->
        <path d="M14 18.5L18 14.5L20 16.5L16 20.5Z" stroke-width="1.4"/>
        <line x1="18" y1="14.5" x2="20" y2="12.5" stroke-width="1.4"/>
      </svg>
    </div>
    <span>Plan &amp; track</span>
  </div>

  <!-- Investments: trend line + sparkle outline -->
  <div class="bn-item" id="bn-invest" onclick="goPage('invest')">
    <div class="bn-icon">
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="2,20 7,13 12,16 18,7 23,11"/>
        <!-- Sparkle top right -->
        <line x1="23" y1="4" x2="23" y2="8" stroke-width="1.5"/>
        <line x1="21" y1="6" x2="25" y2="6" stroke-width="1.5"/>
        <line x1="21.6" y1="4.6" x2="24.4" y2="7.4" stroke-width="1.2"/>
        <line x1="24.4" y1="4.6" x2="21.6" y2="7.4" stroke-width="1.2"/>
      </svg>
    </div>
    <span>Investments</span>
  </div>
</div>

<!-- ═══════ SLIDE-IN MENU ═══════ -->
<div class="menu-overlay" id="menuOverlay">
  <div class="menu-backdrop" onclick="closeMenu()"></div>
  <div class="menu-drawer">
    <div class="menu-header">
      <div class="chase-logo">
        <span style="font-size:20px;font-weight:700;letter-spacing:.5px">CHASE</span>
        <div class="chase-octagon" style="width:22px;height:22px"><div class="chase-octagon-inner" style="width:12px;height:12px"><div class="chase-octagon-core" style="width:7px;height:7px"></div></div></div>
      </div>
      <button class="menu-close" onclick="closeMenu()">✕</button>
    </div>
    <a class="menu-item" href="#" onclick="goPage('home');closeMenu();return false">Dashboard <span class="menu-chevron">›</span></a>
    <a class="menu-item" href="#" onclick="goPage('accounts');closeMenu();return false">Accounts <span class="menu-chevron">›</span></a>
    <a class="menu-item" href="#" onclick="goPage('transfer');closeMenu();return false">Transfer &amp; Pay <span class="menu-chevron">›</span></a>
    <a class="menu-item" href="#" onclick="goPage('zelle');closeMenu();return false">Zelle® <span class="menu-chevron">›</span></a>
    <a class="menu-item" href="#" onclick="goPage('statements');closeMenu();return false">Statements <span class="menu-chevron">›</span></a>
    <a class="menu-item" href="#" onclick="goPage('credit');closeMenu();return false">Credit Cards <span class="menu-chevron">›</span></a>
    <a class="menu-item" href="#" onclick="goPage('invest');closeMenu();return false">Investing <span class="menu-chevron">›</span></a>
    <a class="menu-item" href="#" onclick="goPage('profile');closeMenu();return false">Profile &amp; Settings <span class="menu-chevron">›</span></a>
    <form method="POST" action="/logout" style="margin:0">
      <button type="submit" class="menu-logout">Sign out</button>
    </form>
  </div>
</div>

<!-- ═══════ HOLD MODAL ═══════ -->
<div class="modal-overlay" id="holdModal">
  <div class="modal-sheet">
    <div class="modal-handle"></div>
    <div class="modal-header">
      <span class="modal-title" id="holdModalTitle">Transfer</span>
      <button class="modal-close" onclick="closeHoldModal()">✕</button>
    </div>
    <div class="modal-amount-row">
      <span class="modal-amount-label">Account Balance</span>
      <span class="modal-amount-value" id="holdModalBal">--</span>
    </div>
    <div class="hold-notice">
      <div class="hold-notice-top"><span class="hold-icon">🔒</span><span class="hold-title">Funds Currently On Hold</span></div>
      <div class="hold-body" id="holdBody">The funds in this account are currently <strong>held and unavailable</strong> for withdrawal, transfer, or payment at this time.<br><br>This hold has been placed on your account pending a verification review. You will not be able to access these funds until the hold is released by a Chase representative.</div>
      <div class="hold-ref" id="holdRef">Hold Reference #: CHK-2021-04-8821 &nbsp;·&nbsp; Applied: Apr 6, 2021</div>
    </div>
    <div class="modal-actions"><button class="btn-modal-cancel" onclick="closeHoldModal()">Dismiss</button></div>
  </div>
</div>

<script>
// ── Helpers ──
function fmt(n){return'$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}

let userData = null;

// ── Load user data ──
fetch('/api/me')
  .then(r=>{if(!r.ok)location.href='/login';return r.json()})
  .then(u=>{
    userData = u;

    // ── NAV AVATAR ──
    const ni = document.getElementById('navInitials');
    if(ni) ni.textContent = u.initials;

    // ── GREETING & DATE ──
    const hour = new Date().getHours();
    const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    document.getElementById('greetingText').textContent = greet + ', ' + u.name.split(' ')[0];
    document.getElementById('greetingDate').textContent = new Date().toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'});

    // ── HOME PAGE ──
    document.getElementById('h-checkBal').textContent = fmt(u.checking.balance);
    document.getElementById('h-checkNum').textContent = '(...'+u.checking.number+') \u203a';
    document.getElementById('h-saveBal').textContent  = fmt(u.savings.balance);
    document.getElementById('h-saveNum').textContent  = '(...'+u.savings.number+') \u203a';
    document.getElementById('snapshotSub').textContent = 'Your money in this month is '+fmt(u.checking.balance+u.savings.balance);
    document.getElementById('holdModalBal').textContent = fmt(u.total);
    renderTxnList('home-txn-list', u.transactions.slice(0,4));

    // ── ACCOUNTS PAGE ──
    document.getElementById('a-checkNum').textContent='••••••'+u.checking.number;
    document.getElementById('a-routing').textContent=u.checking.routing;
    document.getElementById('a-checkBal').textContent=fmt(u.checking.balance);
    document.getElementById('a-saveNum').textContent='••••••'+u.savings.number;
    document.getElementById('a-saveRouting').textContent=u.savings.routing;
    document.getElementById('a-saveBal').textContent=fmt(u.savings.balance);

    // ── STATEMENTS ──
    renderTxnList('stmt-txn-list', u.transactions);

    // ── CREDIT CARD ──
    document.getElementById('ccNumber').textContent='•••• •••• •••• '+u.creditCard.last4;
    document.getElementById('ccHolder').textContent=u.name.toUpperCase();
    document.getElementById('ccCardHeader').textContent=u.creditCard.type;
    document.getElementById('cc-num').textContent='•••• •••• •••• '+u.creditCard.last4;
    document.getElementById('cc-limit').textContent=fmt(u.creditCard.limit);
    document.getElementById('cc-bal').textContent=fmt(u.creditCard.balance);
    document.getElementById('cc-avail').textContent=fmt(u.creditCard.available);
    document.getElementById('cc-due').textContent=u.creditCard.dueDate;
    document.getElementById('cc-min').textContent=fmt(u.creditCard.minPayment);

    // ── INVESTING ──
    window._holdings = u.investments;
    document.getElementById('invest-total').textContent = fmt(u.investments.reduce((s,i)=>s+i.value,0));
    const iList=document.getElementById('invest-list');
    u.investments.forEach(inv=>{
      // Set initial prices so nothing shows "Loading…"
      prevPrices[inv.ticker] = inv.price;
      const up = inv.change >= 0;
      iList.innerHTML+=`
        <div class="invest-row" id="irow-${inv.ticker}">
          <div class="invest-ticker">${inv.ticker}</div>
          <div class="invest-info">
            <div class="invest-name">${inv.name}</div>
            <div class="invest-shares" id="ishares-${inv.ticker}">${inv.shares} shares · $${inv.price.toFixed(2)}/share</div>
          </div>
          <div class="invest-right">
            <div class="invest-value" id="ival-${inv.ticker}">${fmt(inv.value)}</div>
            <div class="invest-change ${up?'up':'dn'}" id="ichg-${inv.ticker}">${up?'▲':'▼'} ${Math.abs(inv.change).toFixed(2)} (${Math.abs(inv.pct).toFixed(2)}%)</div>
          </div>
        </div>`;
    });
    startLiveStocks();

    // ── PROFILE ──
    document.getElementById('prof-avatar').textContent=u.initials;
    document.getElementById('prof-name').textContent=u.name;
    document.getElementById('prof-since').textContent='Member since '+u.memberSince;
    document.getElementById('prof-user').textContent=u.username;
    document.getElementById('prof-email').textContent=u.email;
    document.getElementById('prof-phone').textContent=u.phone;
    document.getElementById('prof-addr').textContent=u.address;
    if(u.customerService){
      document.getElementById('prof-cs-row').style.display='flex';
      document.getElementById('prof-cs').textContent=u.customerService;
      const hcs=document.getElementById('help-cs-number');
      if(hcs) hcs.textContent=u.customerService;
      const hs=document.getElementById('help-sub');
      if(hs) hs.textContent=u.customerService+' · FAQs & contact Chase';
    }

    // ── SECURITY PAGE ──
    const sl=document.getElementById('sec-last-login');
    if(sl) sl.textContent=new Date().toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})+' · '+new Date().toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit'});

  })
  .catch(()=>{ location.href='/login'; });

// ── Render transaction rows ──
function renderTxnList(elId, txns){
  const el=document.getElementById(elId);
  el.innerHTML='';
  txns.forEach(t=>{
    el.innerHTML+=`
      <div class="txn-row">
        <div class="txn-dot ${t.icon}">${t.emoji}</div>
        <div class="txn-info">
          <div class="tname">${t.name}</div>
          <div class="tdate">${t.date} · ${t.detail}</div>
        </div>
        <div class="txn-right">
          <div class="amount ${t.pos?'pos':'neg'}">${t.amount}</div>
          <div class="status done">${t.status}</div>
        </div>
      </div>`;
  });
}

// ── Page navigation ──
const pages=['home','accounts','transfer','zelle','statements','credit','invest','profile','more'];
const bnMap={home:'bn-home',transfer:'bn-transfer',statements:'bn-statements',invest:'bn-invest'};

function goPage(name){
  pages.forEach(p=>{
    document.getElementById('page-'+p).classList.toggle('active',p===name);
  });
  // Update bottom nav active state
  Object.keys(bnMap).forEach(k=>{
    document.getElementById(bnMap[k]).classList.toggle('active',k===name);
  });
  window.scrollTo(0,0);
}

// ── Menu ──
function openMenu(){document.getElementById('menuOverlay').classList.add('open')}
function closeMenu(){document.getElementById('menuOverlay').classList.remove('open')}

// ── Hold modal ──
function showHoldModal(action){
  document.getElementById('holdModalTitle').textContent = action;

  const holdBody  = document.getElementById('holdBody');
  const holdRef   = document.getElementById('holdRef');

  if(userData && userData.isLocked){
    // Locked account — show suspicious activity message
    holdBody.innerHTML = `Your account has been <strong>locked due to suspicious activity</strong> detected on <strong>${userData.lockedDate}</strong>.<br><br>${userData.lockedReason}`;
    holdRef.textContent = `Lock Reference: SUSP-2026-05-05-FRH · Case under review`;
  } else {
    // Normal hold message
    holdBody.innerHTML = `The funds in this account are currently <strong>held and unavailable</strong> for withdrawal, transfer, or payment at this time.<br><br>This hold has been placed on your account pending a verification review. You will not be able to access these funds until the hold is released by a Chase representative.`;
    holdRef.textContent = `Hold Reference #: CHK-2021-04-8821 · Applied: Apr 6, 2021`;
  }

  document.getElementById('holdModal').classList.add('open');
}
function closeHoldModal(){document.getElementById('holdModal').classList.remove('open')}
document.getElementById('holdModal').addEventListener('click',function(e){if(e.target===this)closeHoldModal()});

// ── LIVE STOCK PRICES — calls our own server (no CORS) ──
const prevPrices = {};

function flashRow(ticker, up){
  const row = document.getElementById('irow-'+ticker);
  if(!row) return;
  // Very subtle flash — barely noticeable, no blinking
  row.style.transition = 'background .4s';
  row.style.background = up ? 'rgba(42,125,46,0.06)' : 'rgba(192,57,43,0.05)';
  setTimeout(()=>{ row.style.background=''; }, 1200);
}

function updateStockUI(ticker, price, changeAmt, changePct, shares){
  const up  = changeAmt >= 0;
  const val = price * shares;
  const valEl = document.getElementById('ival-'+ticker);
  const chgEl = document.getElementById('ichg-'+ticker);
  const shrEl = document.getElementById('ishares-'+ticker);
  if(!valEl) return;
  if(prevPrices[ticker] !== undefined && prevPrices[ticker] !== price){
    flashRow(ticker, price > prevPrices[ticker]);
  }
  prevPrices[ticker] = price;
  valEl.textContent  = fmt(val);
  shrEl.textContent  = `${shares} shares · $${price.toFixed(2)}/share`;
  chgEl.className    = 'invest-change '+(up?'up':'dn');
  chgEl.textContent  = `${up?'▲':'▼'} ${Math.abs(changeAmt).toFixed(2)} (${Math.abs(changePct).toFixed(2)}%)`;
}

function updatePortfolioTotal(){
  if(!window._holdings) return;
  let currentTotal = 0;
  let baseTotal    = 0;
  window._holdings.forEach(h => {
    currentTotal += (prevPrices[h.ticker] ?? h.price) * h.shares;
    baseTotal    += h.price * h.shares; // original buy-in value
  });
  document.getElementById('invest-total').textContent = fmt(currentTotal);
  const sub = document.getElementById('invest-total-sub');
  if(sub) sub.textContent = 'Updated · '+new Date().toLocaleTimeString();

  // Update the balance page badge
  const badge = document.getElementById('balanceBadge');
  if(badge && baseTotal > 0){
    const pct = ((currentTotal - baseTotal) / baseTotal) * 100;
    const up  = pct >= 0;
    badge.textContent = `${up?'▲':'▼'} ${up?'+':''}${pct.toFixed(2)}%`;
    badge.className   = 'up-badge' + (up ? '' : ' dn');
  }
}

function simulateTick(){
  // Fallback: small random ticks when market closed or API unavailable
  if(!window._holdings) return;
  window._holdings.forEach(h => {
    const base = prevPrices[h.ticker] ?? h.price;
    const tick = (Math.random()-0.48) * base * 0.002;
    const np   = Math.max(base + tick, 0.01);
    updateStockUI(h.ticker, np, np-h.price, ((np-h.price)/h.price)*100, h.shares);
  });
  updatePortfolioTotal();
}

async function fetchLivePrices(){
  if(!window._holdings || !window._holdings.length) return;
  const symbols = window._holdings.map(h=>h.ticker).join(',');
  try {
    const res  = await fetch(`/api/stocks?symbols=${symbols}`);
    const data = await res.json();
    if(data.quotes && data.quotes.length > 0){
      data.quotes.forEach(q => {
        const h = window._holdings.find(x=>x.ticker===q.symbol);
        if(!h || !q.price) return;
        updateStockUI(q.symbol, q.price, q.change, q.changePct, h.shares);
      });
      updatePortfolioTotal();
    } else {
      applyMicroTick();
    }
  } catch(e){
    applyMicroTick();
  }
}

// Tiny realistic price movements between real API calls
function applyMicroTick(){
  if(!window._holdings) return;
  let changed = false;
  window._holdings.forEach(h => {
    const base  = prevPrices[h.ticker] ?? h.price;
    // ±0.08% micro movement per 5s tick — realistic intraday movement
    const move  = base * (Math.random() - 0.495) * 0.0008;
    const price = Math.max(+(base + move).toFixed(2), 0.01);
    const chg   = +(price - h.price).toFixed(2);
    const pct   = +((chg / h.price) * 100).toFixed(3);
    updateStockUI(h.ticker, price, chg, pct, h.shares);
    changed = true;
  });
  if(changed) updatePortfolioTotal();
}

function startLiveStocks(){
  fetchLivePrices();                  // real fetch immediately on load
  setInterval(fetchLivePrices, 5000); // fetch every 5 seconds
                                      // server caches real prices every 30s
                                      // client gets micro-ticks in between
}

// ── Help modal ──
function openHelpModal(){document.getElementById('helpModal').classList.add('open')}
function closeHelpModal(){document.getElementById('helpModal').classList.remove('open')}
document.getElementById('helpModal').addEventListener('click',function(e){if(e.target===this)closeHelpModal()})

// ── Dark mode ──
function toggleDark(){
  document.body.classList.toggle('dark',document.getElementById('darkToggle').checked);
  localStorage.setItem('darkMode',document.getElementById('darkToggle').checked?'1':'0');
}
// Restore dark mode preference
if(localStorage.getItem('darkMode')==='1'){
  document.body.classList.add('dark');
  document.addEventListener('DOMContentLoaded',()=>{
    const t=document.getElementById('darkToggle');
    if(t)t.checked=true;
  });
}
</script>
</body>
</html>
