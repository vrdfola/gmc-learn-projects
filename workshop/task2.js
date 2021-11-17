// A car rental organization offers two rental formulas:
// Rental by the kilometer:
//  for the first 100 kilometers: rate r1 per km,
//  for the kilometers from 101 to 1000: rate r2 per km,
//  beyond 1000 kilometers: rate r3 per km.
// Daily rate: Unlimited mileage at the price per day p_d.
// In both cases, it is necessary to add an insurance (whose cost per day is ins) and the value-added tax (VAT) .
// The quantities r1, r2, r3, p_d, ins as well as the rate of VAT are considered as constants.
// Take, for example: r1 = 0.7 r2 = 0.4 r3 = 0.2 p_d = 100 ins= 0.3 (expressed in dinars) and rate VAT = 0.18.
// Write an algorithm which, given the total number of kilometers and the number of days of location, calculates the total costs of the two tariffs and indicates by a label the most suitable solution advantageous for the client.
function carRental(kms, days) {
    let totalKms = 0;
    let totalDays = 0;
    let label = "";

    let r1 = 0.7;
    let r2 = 0.4;
    let r3 = 0.2;
    let p_d = 100;
    let ins = 0.3;
    let rateVAT = 0.18;

    totalDays = totalWithVat((p_d * days) + ins);

    const totalWithVat = (total) => total(1+rateVAT);

    if (kms <= 100) {
        totalKms = totalWithVat(kms * r1 + ins);
    } else if (kms > 100 && kms <= 1000) {
        totalKms = totalWithVat(100 * r1 + (kms - 100) * r2 + ins);
    } else {
        totalKms = totalWithVat(100 * r1 + (1000 - 100) * r2 + (kms - 1000) * r3 + ins);
    }


    if (totalDays < totalKms) {
        label = 'Daily rate';
    } else {
        label = 'Rental by the kilometer';
    }

    return "The most suitable solution advantageous for the client is " + label + ".";

}