
require('dotenv').config();

module.exports = {
  // BOT INFORMATION
  BOT_NAME: 'SIMON TECH BOT',
  BOT_VERSION: '1.0.0',
  BOT_PREFIX: '.',
  BOT_MODE: 'public',

  // DEVELOPER INFORMATION
  OWNER_NAME: 'SIMON TECH',
  OWNER_NUMBER: process.env.OWNER_NUMBER || '234XXXXXXXXXX',
  DEVELOPER: 'SIMON TECH',

  // CONNECTION SETTINGS
  SESSION_DIR: './sessions',
  PAIRING_ENABLED: true,
  QR_ENABLED: false,
  MULTI_DEVICE: true,
  AUTO_RECONNECT: true,

  // BOT SETTINGS
  AUTO_READ: false,
  AUTO_TYPING: false,
  AUTO_REACT: false,
  ANTI_CALL: false,

  // COMMAND SETTINGS
  TOTAL_COMMANDS: 500,
  COMMAND_PREFIX: '.',

  // MENU SETTINGS
  MENU_IMAGE: 'https://files.catbox.moe/msvhxd.png',
  MENU_FOOTER: 'POWERED BY SIMON TECH',

  // SERVER SETTINGS
  PORT: process.env.PORT || 3000,
  TIMEZONE: 'Africa/Lagos',

  // DATABASE
  DATABASE: './database/data.json',

  // AI SETTINGS
  AI_ENABLED: true,
  AI_MODEL: process.env.AI_MODEL || 'llama-3.3-70b-versatile',
  AI_API_KEY: process.env.GROQ_API_KEY || '',

  // DOWNLOAD SETTINGS
  DOWNLOAD_ENABLED: true,

  // SECURITY
  SAFE_MODE: true,
  MAINTENANCE: false,

  // BRANDING
  DESCRIPTION: 'Powerful Multi-Device WhatsApp Bot',
  POWERED_BY: 'SIMON TECH'
};
  
