const base = 1024;

export const fileSizesByTypes = {
  byte: 1,
  kilobyte: Math.pow(base, 1),
  megabyte: Math.pow(base, 2),
  gigabyte: Math.pow(base, 3),
  terabyte: Math.pow(base, 4),
} as const;

// file bytes size to other units
export const bytesTo = (bytes: number, type: keyof typeof fileSizesByTypes) => {
  return bytes / fileSizesByTypes[type];
};
