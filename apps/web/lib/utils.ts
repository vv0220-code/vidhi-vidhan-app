export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export function formatBookingId(id: number) {
  return `VV-${String(id).padStart(5, '0')}`;
}
