const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Paket ini membutuhkan Node.js 20+ agar dapat berjalan dengan andal.\n` +
    `   Kamu menggunakan Node.js ${process.versions.node}.\n` +
    `   Harap tingkatkan ke Node.js 20+ untuk melanjutkan proses.\n`
  );
  process.exit(1);
}
