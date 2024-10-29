function generateKey (num1: number, num2: number, num3: number): number {
    const str1 = String(num1).padStart(4, '0');
    const str2 = String(num2).padStart(4, '0');
    const str3 = String(num3).padStart(4, '0');

    return +`${Math.min(+str1[0], +str2[0], +str3[0])}${Math.min(+str1[1], +str2[1], +str3[1])}${Math.min(+str1[2], +str2[2], +str3[2])}${Math.min(+str1[3], +str2[3], +str3[3])}`;
}
