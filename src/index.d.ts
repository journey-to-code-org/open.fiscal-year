export interface FiscalOptions { startMonth?: number; }
export function fiscalPeriod(value: Date|string|number, options?: FiscalOptions): {fiscalYear:number;quarter:number};
export function fiscalYear(value: Date|string|number, options?: FiscalOptions): number;
export function fiscalQuarter(value: Date|string|number, options?: FiscalOptions): number;

