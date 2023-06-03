// ============================
// PORT
// ============================
process.env.PORT = process.env.PORT || 8081;


// ============================
// Token 
// ============================
// 60 seconds
// 60 minutes
// 24 hours
// 30 days
process.env.CAD_TOKEN = process.env.CAD_TOKEN || '48h';


// ============================
// AUTH SEED
// ============================
process.env.SEED = process.env.SEED || 'date-x-book-seed';

// ============================
// DATABASE
// ============================

process.env.DB = process.env.DB || 'mongodb://localhost:27017/datebookdb';