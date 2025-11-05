let membeli = 2_000_000;
diskon = 0;
setelahDiskon = 0;
switch (true) {
  case membeli < 500_000 && membeli >= 0:
    console.log(
      `Diskon 0% = ${(diskon =
        0 * membeli)} , Harga Awal ${membeli} , Harga setelah diskon ${
        membeli - diskon
      }`
    );

    break;
  case membeli >= 500_000 && membeli <= 1_000_000:
    console.log(
      `Diskon 5% = ${(diskon =
        0.05 * membeli)} , Harga Awal ${membeli} , Harga setelah diskon ${
        membeli - diskon
      }`
    );
    break;
  case membeli > 1_000_000:
    console.log(
      `Diskon 10% = ${(diskon =
        0.1 * membeli)} , Harga Awal ${membeli} , Harga setelah diskon ${
        membeli - diskon
      }`
    );
    break;
  default:
    console.log('harus angka dan tidak boleh minus ');
}
