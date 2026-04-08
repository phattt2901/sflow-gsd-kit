#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const installScript = path.join(__dirname, 'install.js');

if (args.includes('init')) {
  // Loại bỏ 'init' khỏi args và tự động truyền cờ cài đặt cho Antigravity
  const remainingArgs = args.filter(a => a !== 'init');
  const initArgs = ['--antigravity'];
  
  // Mặc định tự động cài đặt vào local (.agent) nếu chưa chỉ định --global
  if (!args.includes('--global') && !args.includes('-g')) {
    initArgs.push('--local');
  }

  console.log('🚀 Đang khởi tạo Antigravity GSD Ecosystem...');
  spawnSync(process.execPath, [installScript, ...initArgs, ...remainingArgs], { stdio: 'inherit' });
} else {
  // Chạy các lệnh khác bình thường
  spawnSync(process.execPath, [installScript, ...args], { stdio: 'inherit' });
}
