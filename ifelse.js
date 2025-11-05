let beli = 1_500_000;
if (beli < 500_000) {
  console.log('Diskon 0% = ', beli * 0);
  console.log('Harga awal', beli);
  console.log('Total Harga setelah diskon', beli - beli * 0);
} else if (beli >= 500_000 && beli <= 1_000_000) {
  console.log('Diskon 5% = ', beli * 0.05);
  console.log('Harga awal', beli);
  console.log('Total Harga setelah diskon', beli - beli * 0.05);
} else if (beli > 1_000_000) {
  console.log('Diskon 10% = ', beli * 0.1);
  console.log('Harga awal', beli);
  console.log('Total Harga setelah diskon', beli - beli * 0.1);
}
