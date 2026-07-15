const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const { emitWarning } = process;
process.emitWarning = (w, ...a) => { if (typeof w === 'string' && w.includes('MemoryStore')) return; emitWarning(w, ...a); };
const session = require('express-session');
process.emitWarning = emitWarning;

// ─────────────────────────────────────────
//  USER ACCOUNTS  (keyed by username)
// ─────────────────────────────────────────
const USERS = {

  'KellyC_2021': {
    password: 'beloyal246',
    name: 'Kelly Christopher',
    initials: 'KC',
    email: 'kellychristopher581@gmail.com',
    phone: '(***) ***-4821',
    address: '245 Park Ave, New York, NY 10167',
    memberSince: 'March 2018',
    checking: { balance: 2200000,  number: '4821', routing: '021000021' },
    savings:  { balance: 800000,   number: '7934', routing: '021000021' },
    total: 3000000,
    creditCard: {
      last4: '3391', type: 'Chase Sapphire Preferred®',
      limit: 50000, balance: 4218.74, available: 45781.26,
      dueDate: 'May 3, 2021', minPayment: 35.00
    },
    investments: [
      { ticker: 'AAPL', name: 'Apple Inc.',         shares: 120,  price: 174.23, change: +2.14, pct: +1.24, value: 20907.60 },
      { ticker: 'MSFT', name: 'Microsoft Corp.',     shares: 85,   price: 415.10, change: +5.30, pct: +1.29, value: 35283.50 },
      { ticker: 'AMZN', name: 'Amazon.com Inc.',     shares: 60,   price: 185.07, change: -1.22, pct: -0.65, value: 11104.20 },
      { ticker: 'TSLA', name: 'Tesla Inc.',           shares: 200,  price: 177.48, change: +8.91, pct: +5.28, value: 35496.00 },
      { ticker: 'NVDA', name: 'NVIDIA Corp.',         shares: 150,  price: 788.17, change: +14.20,pct: +1.83, value: 118225.50},
    ],
    transactions: [
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',      date:'Apr 5, 2021 · 8:02 AM',   amount:'+$5,200.00',  pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',        detail:'Whole Foods Market',  date:'Apr 4, 2021 · 3:47 PM',   amount:'−$87.45',     pos:false, status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',     detail:'Chase ••7934',        date:'Apr 3, 2021 · 11:15 AM',  amount:'−$1,000.00',  pos:false, status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Utility Bill',            detail:'Con Edison',          date:'Apr 2, 2021 · 9:30 AM',   amount:'−$124.30',    pos:false, status:'Completed' },
      { icon:'zl',  emoji:'⚡', name:'Zelle® Payment Received', detail:'From Marcus T.',      date:'Apr 1, 2021 · 6:55 PM',   amount:'+$350.00',    pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant',              detail:'Nobu Restaurant NYC', date:'Mar 31, 2021 · 8:12 PM',  amount:'−$214.60',    pos:false, status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',          detail:'Chase ATM #04821',    date:'Mar 30, 2021 · 1:20 PM',  amount:'−$400.00',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Wire Transfer Received',  detail:'JPMorgan',            date:'Mar 29, 2021 · 10:05 AM', amount:'+$12,500.00', pos:true,  status:'Completed' },
      { icon:'bl',  emoji:'🌐', name:'Internet & Cable Bill',   detail:'Spectrum',            date:'Mar 28, 2021 · 7:00 AM',  amount:'−$89.99',     pos:false, status:'Completed' },
      { icon:'wd',  emoji:'✈️', name:'Flight Booking',          detail:'Delta Airlines',      date:'Mar 27, 2021 · 2:38 PM',  amount:'−$548.00',    pos:false, status:'Completed' },
    ]
  },

  'Stanley133': {
    password: 'Success12',
    name: 'Stanley Maeschen',
    initials: 'SM',
    email: 'stanleymaeschen4@gmail.com',
    phone: '(***) ***-3047',
    customerService: '1-800-935-9935',
    address: '2811 Marietta Ave, Lancaster, PA 17601',
    memberSince: 'January 2022',
    checking: { balance: 180568.96, number: '3047', routing: '021000021' },
    savings:  { balance: 70000.00,  number: '6612', routing: '021000021' },
    total: 250568.96,
    creditCard: {
      last4: '7714', type: 'Mastercard Platinum',
      network: 'Mastercard',
      limit: 15000, balance: 892.50, available: 14107.50,
      dueDate: 'Apr 18, 2026', minPayment: 25.00
    },
    investments: [
      { ticker: 'SPY',  name: 'SPDR S&P 500 ETF',    shares: 10,  price: 521.34, change: +3.10, pct: +0.60, value: 5213.40  },
      { ticker: 'AAPL', name: 'Apple Inc.',           shares: 15,  price: 174.23, change: +2.14, pct: +1.24, value: 2613.45  },
      { ticker: 'VTI',  name: 'Vanguard Total Market',shares: 20,  price: 244.10, change: +1.05, pct: +0.43, value: 4882.00  },
      { ticker: 'GOOGL',name: 'Alphabet Inc.',        shares: 8,   price: 178.02, change: -0.88, pct: -0.49, value: 1424.16  },
    ],
    transactions: [
      { icon:'dep', emoji:'💵', name:'Salary Deposit',       detail:'Direct Deposit',     date:'Mar 31, 2026 · 8:00 AM',  amount:'+$4,800.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',      detail:'Walmart Supercenter',date:'Mar 29, 2026 · 5:22 PM',  amount:'−$63.14',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',         detail:'Duke Energy',        date:'Mar 27, 2026 · 9:00 AM',  amount:'−$98.50',    pos:false, status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',   detail:'Chase ••6612',       date:'Mar 25, 2026 · 12:10 PM', amount:'−$500.00',   pos:false, status:'Completed' },
      { icon:'zl',  emoji:'⚡', name:'Zelle® Received',       detail:'From James W.',      date:'Mar 22, 2026 · 3:44 PM',  amount:'+$200.00',   pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',           detail:'Shell #4412',        date:'Mar 20, 2026 · 7:55 AM',  amount:'−$54.80',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'📱', name:'Phone Bill',            detail:'AT&T Wireless',      date:'Mar 17, 2026 · 8:00 AM',  amount:'−$85.00',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant',            detail:'Olive Garden',       date:'Mar 14, 2026 · 7:30 PM',  amount:'−$47.20',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Tax Refund',            detail:'IRS Direct Deposit', date:'Mar 10, 2026 · 10:15 AM', amount:'+$1,240.00', pos:true,  status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',        detail:'Chase ATM #03047',   date:'Mar 7, 2026 · 2:00 PM',   amount:'−$200.00',   pos:false, status:'Completed' },
    ]
  },

  // ── Franklin Haughson — LOCKED account ──
  'FranklinH_0510': {
    password: 'Franklin@2023',
    name: 'Franklin Haughson',
    initials: 'FH',
    email: 'franklinhaughson@gmail.com',
    phone: '(***) ***-5589',
    customerService: '1-800-935-9935',
    address: '1234 S 3rd St, Louisville, KY 40208',
    memberSince: 'March 2021',
    isLocked: true,
    lockedDate: 'Tuesday, May 5, 2026',
    lockedReason: 'Due to suspicious activity detected on your account, all access and transactions have been placed on hold until further notice. Please contact Chase support immediately.',
    checking: { balance: 180568.96, number: '5589', routing: '021000021' },
    savings:  { balance: 70000.00,  number: '8823', routing: '021000021' },
    total: 250568.96,
    creditCard: {
      last4: '3392', type: 'Mastercard Platinum',
      network: 'Mastercard',
      limit: 15000, balance: 1204.75, available: 13795.25,
      dueDate: 'May 18, 2026', minPayment: 25.00
    },
    investments: [
      { ticker: 'SPY',  name: 'SPDR S&P 500 ETF',     shares: 10, price: 521.34, change: +3.10, pct: +0.60, value: 5213.40 },
      { ticker: 'AAPL', name: 'Apple Inc.',            shares: 15, price: 174.23, change: +2.14, pct: +1.24, value: 2613.45 },
      { ticker: 'VTI',  name: 'Vanguard Total Market', shares: 20, price: 244.10, change: +1.05, pct: +0.43, value: 4882.00 },
      { ticker: 'GOOGL',name: 'Alphabet Inc.',         shares: 8,  price: 178.02, change: -0.88, pct: -0.49, value: 1424.16 },
    ],
    transactions: [
      { icon:'dep', emoji:'💵', name:'Salary Deposit',        detail:'Direct Deposit',       date:'May 5, 2026 · 8:00 AM',   amount:'+$4,800.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant – Chili\'s', detail:'Chilis Bar & Grill',   date:'May 4, 2026 · 7:45 PM',   amount:'−$62.30',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🍔', name:'Fast Food',             detail:'McDonald\'s #3812',    date:'May 4, 2026 · 1:15 PM',   amount:'−$14.90',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',      detail:'Kroger Supermarket',   date:'May 3, 2026 · 4:30 PM',   amount:'−$88.47',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',         detail:'LG&E Energy',          date:'May 2, 2026 · 9:00 AM',   amount:'−$112.60',   pos:false, status:'Completed' },
      { icon:'zl',  emoji:'⚡', name:'Zelle® Received',       detail:'From Karen H.',        date:'May 1, 2026 · 2:20 PM',   amount:'+$300.00',   pos:true,  status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',   detail:'Chase ••8823',         date:'Apr 30, 2026 · 11:05 AM', amount:'−$500.00',   pos:false, status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',           detail:'BP #2201',             date:'Apr 28, 2026 · 7:40 AM',  amount:'−$58.20',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'📱', name:'Phone Bill',            detail:'T-Mobile',             date:'Apr 25, 2026 · 8:00 AM',  amount:'−$85.00',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Tax Refund',            detail:'IRS Direct Deposit',   date:'Apr 22, 2026 · 10:30 AM', amount:'+$1,560.00', pos:true,  status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',        detail:'Chase ATM #05589',     date:'Apr 20, 2026 · 3:15 PM',  amount:'−$200.00',   pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🏥', name:'Pharmacy',              detail:'CVS Pharmacy #0441',   date:'Apr 18, 2026 · 12:00 PM', amount:'−$34.99',    pos:false, status:'Completed' },
    ]
  },

  // ── Franklin Watt ──
  'FranklinW_77': {
    password: 'Watt@Secure19',
    name: 'Franklin Watt',
    initials: 'FW',
    email: 'franklinwatt77@gmail.com',
    phone: '(***) ***-6641',
    customerService: '1-800-935-9935',
    address: '847 Maple Creek Dr, Indianapolis, IN 46204',
    memberSince: 'August 2020',
    isLocked: true,
    lockedDate: 'Tuesday, May 5, 2026',
    lockedReason: 'Due to suspicious activity detected on your account, all access and transactions have been placed on hold until further notice. Please contact Chase support immediately.',
    checking: { balance: 112843.67, number: '6641', routing: '021000021' },
    savings:  { balance: 54720.00,  number: '9214', routing: '021000021' },
    total: 167563.67,
    creditCard: {
      last4: '8847', type: 'Mastercard Platinum',
      network: 'Mastercard',
      limit: 12000, balance: 743.20, available: 11256.80,
      dueDate: 'May 22, 2026', minPayment: 25.00
    },
    investments: [
      { ticker: 'SPY',  name: 'SPDR S&P 500 ETF',     shares: 10, price: 521.34, change: +3.10, pct: +0.60, value: 5213.40 },
      { ticker: 'AAPL', name: 'Apple Inc.',            shares: 15, price: 174.23, change: +2.14, pct: +1.24, value: 2613.45 },
      { ticker: 'VTI',  name: 'Vanguard Total Market', shares: 20, price: 244.10, change: +1.05, pct: +0.43, value: 4882.00 },
      { ticker: 'GOOGL',name: 'Alphabet Inc.',         shares: 8,  price: 178.02, change: -0.88, pct: -0.49, value: 1424.16 },
    ],
    transactions: [
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'May 5, 2026 · 8:15 AM',   amount:'+$4,350.00',  pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant – Applebee\'s',detail:'Applebee\'s Grill #114', date:'May 4, 2026 · 7:30 PM',   amount:'−$54.85',     pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🍔', name:'Fast Food',               detail:'Wendy\'s #0892',         date:'May 4, 2026 · 12:40 PM',  amount:'−$11.75',     pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',        detail:'Meijer Supermarket',     date:'May 3, 2026 · 5:10 PM',   amount:'−$94.32',     pos:false, status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',           detail:'Duke Energy Indiana',    date:'May 2, 2026 · 9:00 AM',   amount:'−$104.80',    pos:false, status:'Completed' },
      { icon:'zl',  emoji:'⚡', name:'Zelle® Received',         detail:'From Derek W.',          date:'May 1, 2026 · 4:15 PM',   amount:'+$250.00',    pos:true,  status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',     detail:'Chase ••9214',           date:'Apr 30, 2026 · 10:30 AM', amount:'−$400.00',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',             detail:'Speedway #0774',         date:'Apr 28, 2026 · 7:20 AM',  amount:'−$61.40',     pos:false, status:'Completed' },
      { icon:'bl',  emoji:'📱', name:'Phone Bill',              detail:'Verizon Wireless',       date:'Apr 25, 2026 · 8:00 AM',  amount:'−$92.00',     pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Freelance Payment',       detail:'PayPal Transfer',        date:'Apr 23, 2026 · 11:45 AM', amount:'+$820.00',    pos:true,  status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',          detail:'Chase ATM #06641',       date:'Apr 20, 2026 · 2:50 PM',  amount:'−$300.00',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'🌐', name:'Internet Bill',           detail:'Xfinity / Comcast',      date:'Apr 18, 2026 · 8:00 AM',  amount:'−$79.99',     pos:false, status:'Completed' },
    ]
  },

  // ── Edward Williams ──
  'EdW!ll14ms#Xq': {
    password: 'Ew@Secure#9271!',
    name: 'Edward Williams',
    initials: 'EW',
    email: 'edwardwilliams11104@gmail.com',
    phone: '(***) ***-4492',
    customerService: '1-800-935-9935',
    address: '11104 E 34th Ave, Spokane Valley, WA 99206',
    memberSince: 'March 2019',
    checking: { balance: 74382.91, number: '4492', routing: '021000021' },
    savings:  { balance: 38615.44, number: '7731', routing: '021000021' },
    total: 112998.35,
    creditCard: {
      last4: '2284', type: 'Mastercard Platinum',
      network: 'Mastercard',
      limit: 20000, balance: 1847.63, available: 18152.37,
      dueDate: 'May 24, 2026', minPayment: 35.00
    },
    investments: [
      { ticker: 'SPY',  name: 'SPDR S&P 500 ETF',     shares: 12, price: 521.34, change: +3.10, pct: +0.60, value: 6256.08 },
      { ticker: 'AAPL', name: 'Apple Inc.',            shares: 20, price: 174.23, change: +2.14, pct: +1.24, value: 3484.60 },
      { ticker: 'VTI',  name: 'Vanguard Total Market', shares: 25, price: 244.10, change: +1.05, pct: +0.43, value: 6102.50 },
      { ticker: 'GOOGL',name: 'Alphabet Inc.',         shares: 10, price: 178.02, change: -0.88, pct: -0.49, value: 1780.20 },
      { ticker: 'MSFT', name: 'Microsoft Corp.',       shares: 8,  price: 415.50, change: +4.20, pct: +1.02, value: 3324.00 },
    ],
    transactions: [
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'May 5, 2026 · 8:00 AM',   amount:'+$5,800.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',        detail:'Safeway Supermarket',    date:'May 4, 2026 · 5:30 PM',   amount:'−$112.47',   pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant – Spokane Club',detail:'The Spokane Club',      date:'May 3, 2026 · 7:00 PM',   amount:'−$89.50',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',           detail:'Avista Utilities',       date:'May 2, 2026 · 9:00 AM',   amount:'−$138.20',   pos:false, status:'Completed' },
      { icon:'zl',  emoji:'⚡', name:'Zelle® Received',         detail:'From Thomas W.',         date:'May 1, 2026 · 3:00 PM',   amount:'+$500.00',   pos:true,  status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',     detail:'Chase ••7731',           date:'Apr 28, 2026 · 11:00 AM', amount:'−$1,000.00', pos:false, status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',             detail:'Chevron #8821',          date:'Apr 25, 2026 · 7:45 AM',  amount:'−$72.30',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'📱', name:'Phone Bill',              detail:'T-Mobile Wireless',      date:'Apr 22, 2026 · 8:00 AM',  amount:'−$105.00',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Freelance Consulting',    detail:'Wire Transfer',          date:'Apr 18, 2026 · 10:20 AM', amount:'+$2,400.00', pos:true,  status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',          detail:'Chase ATM #04492',       date:'Apr 15, 2026 · 2:00 PM',  amount:'−$400.00',   pos:false, status:'Completed' },
      { icon:'bl',  emoji:'🌐', name:'Internet Bill',           detail:'Xfinity / Comcast',      date:'Apr 12, 2026 · 8:00 AM',  amount:'−$89.99',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'Apr 5, 2026 · 8:00 AM',   amount:'+$5,800.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🏥', name:'Medical Bill',            detail:'MultiCare Health',       date:'Apr 3, 2026 · 12:00 PM',  amount:'−$245.00',   pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',        detail:'Walmart Supercenter',    date:'Mar 31, 2026 · 4:15 PM',  amount:'−$98.65',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Tax Refund',              detail:'IRS Direct Deposit',     date:'Mar 14, 2026 · 10:00 AM', amount:'+$2,180.00', pos:true,  status:'Completed' },
    ]
  },

  // ── Roland Collins ──
  'RolandC_408': {
    password: 'Collins@Rc91',
    name: 'Roland Collins',
    initials: 'RC',
    email: 'rolandcollins408@gmail.com',
    phone: '(***) ***-7702',
    customerService: '1-800-935-9935',
    address: '2811 Marietta Ave, Lancaster, PA 17601',
    memberSince: 'January 2022',
    checking: { balance: 57843.29, number: '7702', routing: '021000021' },
    savings:  { balance: 22460.18, number: '3351', routing: '021000021' },
    total: 80303.47,
    creditCard: {
      last4: '5531', type: 'Mastercard Platinum',
      network: 'Mastercard',
      limit: 10000, balance: 634.72, available: 9365.28,
      dueDate: 'May 18, 2026', minPayment: 25.00
    },
    investments: [
      { ticker: 'SPY',  name: 'SPDR S&P 500 ETF',     shares: 10, price: 521.34, change: +3.10, pct: +0.60, value: 5213.40 },
      { ticker: 'AAPL', name: 'Apple Inc.',            shares: 15, price: 174.23, change: +2.14, pct: +1.24, value: 2613.45 },
      { ticker: 'VTI',  name: 'Vanguard Total Market', shares: 20, price: 244.10, change: +1.05, pct: +0.43, value: 4882.00 },
      { ticker: 'GOOGL',name: 'Alphabet Inc.',         shares: 8,  price: 178.02, change: -0.88, pct: -0.49, value: 1424.16 },
    ],
    transactions: [
      { icon:'zl',  emoji:'⚡', name:'Zelle® Received',        detail:'From Mike T.',          date:'May 20, 2026 · 11:30 AM', amount:'+$180.00',   pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',        detail:'Walmart Supercenter',   date:'May 15, 2026 · 4:20 PM',  amount:'−$71.38',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',        date:'May 5, 2026 · 8:00 AM',   amount:'+$3,200.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant – Applebee\'s',detail:'Applebee\'s #0441',     date:'May 4, 2026 · 7:15 PM',   amount:'−$42.50',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',           detail:'PPL Electric Utilities', date:'May 2, 2026 · 9:00 AM',  amount:'−$91.40',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',             detail:'Shell #4412',            date:'Apr 28, 2026 · 7:30 AM', amount:'−$54.20',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'📱', name:'Phone Bill',              detail:'AT&T Wireless',          date:'Apr 25, 2026 · 8:00 AM', amount:'−$85.00',    pos:false, status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',          detail:'Chase ATM #07702',       date:'Apr 15, 2026 · 2:45 PM', amount:'−$200.00',   pos:false, status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',     detail:'Chase ••3351',           date:'Apr 10, 2026 · 11:00 AM',amount:'−$300.00',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'Apr 5, 2026 · 8:00 AM',  amount:'+$3,200.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant – Olive Garden',detail:'Olive Garden #0882',   date:'Mar 31, 2026 · 6:45 PM', amount:'−$38.75',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',        detail:'Kroger Supermarket',     date:'Mar 15, 2026 · 5:10 PM', amount:'−$88.92',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Tax Refund',              detail:'IRS Direct Deposit',     date:'Mar 10, 2026 · 10:00 AM',amount:'+$1,240.00', pos:true,  status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'Mar 5, 2026 · 8:00 AM',  amount:'+$3,200.00', pos:true,  status:'Completed' },
      { icon:'zl',  emoji:'⚡', name:'Zelle® Received',         detail:'From Lisa R.',           date:'Feb 28, 2026 · 3:10 PM', amount:'+$200.00',   pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant – Texas Roadhouse',detail:'Texas Roadhouse',   date:'Feb 14, 2026 · 7:30 PM', amount:'−$67.30',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'Feb 5, 2026 · 8:00 AM',  amount:'+$3,200.00', pos:true,  status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',          detail:'Chase ATM #07702',       date:'Jan 20, 2026 · 1:30 PM', amount:'−$150.00',   pos:false, status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',           detail:'PPL Electric Utilities', date:'Jan 15, 2026 · 9:00 AM', amount:'−$108.60',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'Jan 5, 2026 · 8:00 AM',  amount:'+$3,200.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'New Year\'s Dinner',      detail:'Capital Grille',         date:'Dec 31, 2025 · 8:00 PM', amount:'−$89.40',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🛍️', name:'Holiday Shopping',        detail:'Target Stores',          date:'Dec 20, 2025 · 3:15 PM', amount:'−$234.50',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'Dec 5, 2025 · 8:00 AM',  amount:'+$3,200.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Thanksgiving Dinner',     detail:'Cracker Barrel #0112',   date:'Nov 28, 2025 · 5:30 PM', amount:'−$156.30',   pos:false, status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',             detail:'BP #2201',               date:'Nov 25, 2025 · 8:10 AM', amount:'−$48.60',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',          detail:'Direct Deposit',         date:'Nov 19, 2025 · 8:00 AM', amount:'+$3,200.00', pos:true,  status:'Completed' },
    ]
  },

  // ── Clark Smth ──
  'ClarkS_077': {
    password: 'Cs@7711Chase',
    name: 'Clark Smth',
    initials: 'CS',
    email: 'clarksmth77@gmail.com',
    phone: '(***) ***-5512',
    customerService: '1-800-935-9935',
    address: '2811 Marietta Ave, Lancaster, PA 17601',
    memberSince: 'November 2020',
    checking: { balance: 168432.15, number: '5512', routing: '021000021' },
    savings:  { balance: 67257.85,  number: '4408', routing: '021000021' },
    total: 235690.00,
    creditCard: {
      last4: '6619', type: 'Mastercard Platinum',
      network: 'Mastercard',
      limit: 18000, balance: 1124.50, available: 16875.50,
      dueDate: 'May 20, 2026', minPayment: 25.00
    },
    investments: [
      { ticker: 'SPY',  name: 'SPDR S&P 500 ETF',     shares: 10, price: 521.34, change: +3.10, pct: +0.60, value: 5213.40 },
      { ticker: 'AAPL', name: 'Apple Inc.',            shares: 15, price: 174.23, change: +2.14, pct: +1.24, value: 2613.45 },
      { ticker: 'VTI',  name: 'Vanguard Total Market', shares: 20, price: 244.10, change: +1.05, pct: +0.43, value: 4882.00 },
      { ticker: 'GOOGL',name: 'Alphabet Inc.',         shares: 8,  price: 178.02, change: -0.88, pct: -0.49, value: 1424.16 },
    ],
    transactions: [
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Apr 30, 2026 · 8:00 AM',  amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',       detail:'Walmart Supercenter',   date:'Apr 25, 2026 · 4:10 PM',  amount:'−$74.38',    pos:false, status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',         detail:'Chase ATM #05512',      date:'Apr 18, 2026 · 1:30 PM',  amount:'−$200.00',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Mar 31, 2026 · 8:00 AM',  amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Tax Refund',             detail:'IRS Direct Deposit',    date:'Mar 18, 2026 · 10:00 AM', amount:'+$1,820.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',       detail:'Kroger Supermarket',    date:'Mar 12, 2026 · 5:30 PM',  amount:'−$91.55',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:"Valentine's Dinner",     detail:'Texas Roadhouse',       date:'Feb 14, 2026 · 7:30 PM',  amount:'−$72.90',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Feb 1, 2026 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',          detail:'PPL Electric',          date:'Jan 20, 2026 · 9:00 AM',  amount:'−$102.40',   pos:false, status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',    detail:'Chase ••4408',          date:'Jan 10, 2026 · 11:00 AM', amount:'−$500.00',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Jan 1, 2026 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:"New Year's Dinner",      detail:'The Capital Grille',    date:'Dec 31, 2025 · 8:00 PM',  amount:'−$124.80',   pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🛍️', name:'Holiday Shopping',       detail:'Target Stores',         date:'Dec 22, 2025 · 3:00 PM',  amount:'−$287.40',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Dec 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'bl',  emoji:'📱', name:'Phone Bill',             detail:'AT&T Wireless',         date:'Nov 17, 2025 · 8:00 AM',  amount:'−$85.00',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Nov 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',            detail:'Shell #4412',           date:'Oct 28, 2025 · 7:30 AM',  amount:'−$58.20',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',       detail:'Walmart Supercenter',   date:'Oct 15, 2025 · 5:00 PM',  amount:'−$88.70',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Oct 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',    detail:'Chase ••4408',          date:'Sep 15, 2025 · 10:30 AM', amount:'−$500.00',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Sep 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant',             detail:"Applebee's Grill",      date:'Aug 22, 2025 · 7:00 PM',  amount:'−$49.60',    pos:false, status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',            detail:'BP #2201',              date:'Aug 10, 2025 · 8:00 AM',  amount:'−$52.30',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Aug 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'bl',  emoji:'🌐', name:'Internet Bill',          detail:'Xfinity / Comcast',     date:'Jul 15, 2025 · 8:00 AM',  amount:'−$89.99',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Jul 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',       detail:'Safeway Market',        date:'Jun 20, 2025 · 4:45 PM',  amount:'−$76.30',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Jun 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'zl',  emoji:'⚡', name:'Zelle® Received',        detail:'From David S.',         date:'May 22, 2025 · 2:00 PM',  amount:'+$250.00',   pos:true,  status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',          detail:'PPL Electric',          date:'May 14, 2025 · 9:00 AM',  amount:'−$98.60',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'May 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'🍽️', name:'Restaurant',             detail:"Chili's Bar & Grill",   date:'Apr 26, 2025 · 6:30 PM',  amount:'−$44.80',    pos:false, status:'Completed' },
      { icon:'atm', emoji:'🏧', name:'ATM Withdrawal',         detail:'Chase ATM #05512',      date:'Apr 15, 2025 · 2:00 PM',  amount:'−$200.00',   pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Apr 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'wd',  emoji:'⛽', name:'Gas Station',            detail:'Chevron #8821',         date:'Mar 25, 2025 · 7:45 AM',  amount:'−$55.40',    pos:false, status:'Completed' },
      { icon:'bl',  emoji:'📱', name:'Phone Bill',             detail:'AT&T Wireless',         date:'Mar 17, 2025 · 8:00 AM',  amount:'−$85.00',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Mar 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'tr',  emoji:'🔄', name:'Transfer to Savings',    detail:'Chase ••4408',          date:'Feb 10, 2025 · 11:00 AM', amount:'−$500.00',   pos:false, status:'Completed' },
      { icon:'bl',  emoji:'📱', name:'Phone Bill',             detail:'AT&T Wireless',         date:'Feb 17, 2025 · 8:00 AM',  amount:'−$85.00',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Feb 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
      { icon:'bl',  emoji:'⚡', name:'Electric Bill',          detail:'PPL Electric',          date:'Jan 20, 2025 · 9:00 AM',  amount:'−$115.80',   pos:false, status:'Completed' },
      { icon:'wd',  emoji:'🛒', name:'Grocery Purchase',       detail:'Walmart Supercenter',   date:'Jan 14, 2025 · 5:10 PM',  amount:'−$69.25',    pos:false, status:'Completed' },
      { icon:'dep', emoji:'💵', name:'Salary Deposit',         detail:'Direct Deposit',        date:'Jan 1, 2025 · 8:00 AM',   amount:'+$4,600.00', pos:true,  status:'Completed' },
    ]
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'chase-mvp-persistent-secret-key',
  resave: false, saveUninitialized: false, rolling: true,
  cookie: { secure: false, httpOnly: true, maxAge: 1000*60*60*24*30 }
}));

function requireAuth(req, res, next) {
  if (req.session && req.session.loggedIn) return next();
  res.redirect('/login');
}

app.get('/',          (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/login',     (req, res) => { if (req.session?.loggedIn) return res.redirect('/dashboard'); res.sendFile(path.join(__dirname, 'public', 'login.html')); });
app.get('/dashboard', requireAuth, (req, res) => res.sendFile(path.join(__dirname, 'public', 'dashboard.html')));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const key = username && username.trim();
  const user = USERS[key];
  if (user && password === user.password) {
    req.session.loggedIn = true;
    req.session.username = key;
    return res.redirect('/dashboard');
  }
  res.redirect('/login?error=1');
});

app.get('/api/me', requireAuth, (req, res) => {
  const user = USERS[req.session.username];
  if (!user) return res.status(401).json({ error: 'Not found' });
  const { password, ...safe } = user;
  res.json({ ...safe, username: req.session.username });
});

// ── Live stock prices — server-side cache ──
const https = require('https');
const priceCache = {};

function fetchYahooPrices(tickers, callback) {
  const syms = tickers.join('%2C');
  const options = {
    hostname: 'query1.finance.yahoo.com',
    path: '/v7/finance/quote?symbols=' + syms + '&fields=regularMarketPrice,regularMarketChange,regularMarketChangePercent',
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json',
      'Accept-Encoding': 'identity'
    },
    timeout: 10000
  };
  const req = https.request(options, (res) => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', chunk => { body += chunk; });
    res.on('end', () => {
      try {
        const data = JSON.parse(body);
        const results = (data && data.quoteResponse && data.quoteResponse.result) || [];
        const quotes = results
          .filter(q => q && q.regularMarketPrice)
          .map(q => ({
            symbol:    q.symbol,
            price:     q.regularMarketPrice,
            change:    q.regularMarketChange || 0,
            changePct: q.regularMarketChangePercent || 0
          }));
        callback(null, quotes);
      } catch(e) {
        callback(e, []);
      }
    });
  });
  req.on('error', (e) => callback(e, []));
  req.on('timeout', () => { req.destroy(); callback(new Error('timeout'), []); });
  req.end();
}

app.get('/api/stocks', requireAuth, (req, res) => {
  const tickers = (req.query.symbols || '').split(',').filter(Boolean);
  if (!tickers.length) return res.json({ quotes: [] });

  const now = Date.now();
  const stale = tickers.filter(t => !priceCache[t] || (now - priceCache[t].ts) > 30000);

  if (stale.length === 0) {
    // All prices are fresh — return cache immediately
    const quotes = tickers.map(t => ({ symbol: t, ...priceCache[t] }));
    return res.json({ quotes });
  }

  // Refresh stale prices
  fetchYahooPrices(tickers, (err, quotes) => {
    if (!err && quotes.length > 0) {
      quotes.forEach(q => { priceCache[q.symbol] = { ...q, ts: Date.now() }; });
    }
    // Return whatever we have (fresh or stale)
    const result = tickers
      .filter(t => priceCache[t])
      .map(t => ({ symbol: t, ...priceCache[t] }));
    res.json({ quotes: result });
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => { res.clearCookie('connect.sid'); res.redirect('/'); });
});

app.use((req, res) => res.status(404).redirect('/'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅  Chase MVP on port ${PORT}`);
  console.log(`    KellyC_2021 / beloyal246`);
  console.log(`    Stanley133  / Success12`);
});
