let membeli = 1_500_000;
if (membeli < 500_000) {
  console.log(
    `Diskon 0% = ${(diskon =
      0 * membeli)} , Harga Awal ${membeli} , Harga setelah diskon ${
      membeli - diskon
    }`
  );
} else if (membeli >= 500_000 && membeli <= 1_000_000) {
  console.log(
    `Diskon 5% = ${(diskon =
      0.05 * membeli)} , Harga Awal ${membeli} , Harga setelah diskon ${
      membeli - diskon
    }`
  );
} else if (membeli > 1_000_000) {
  console.log(
    `Diskon 10% = ${(diskon =
      0.1 * membeli)} , Harga Awal ${membeli} , Harga setelah diskon ${
      membeli - diskon
    }`
  );
}
