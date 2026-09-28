function asDate(v){const d=v instanceof Date?new Date(v):new Date(v);if(Number.isNaN(d.getTime()))throw new RangeError("Invalid date");return d;}
export function fiscalPeriod(value, options = {}) {
  const startMonth = options.startMonth ?? 1;
  if (!Number.isInteger(startMonth) || startMonth < 1 || startMonth > 12) throw new RangeError("startMonth must be 1..12");
  const d=asDate(value), month=d.getUTCMonth()+1, year=d.getUTCFullYear();
  const offset=(month-startMonth+12)%12;
  const quarter=Math.floor(offset/3)+1;
  const fiscalYear = month >= startMonth ? year + (startMonth===1?0:1) : year;
  return { fiscalYear, quarter };
}
export const fiscalYear=(v,o)=>fiscalPeriod(v,o).fiscalYear;
export const fiscalQuarter=(v,o)=>fiscalPeriod(v,o).quarter;
