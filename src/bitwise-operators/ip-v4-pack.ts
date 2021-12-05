type Ipv4 = [number, number, number, number];

export const ipV4Pack = (ip: Ipv4): number => {
  return (ip[0] << 24) | (ip[1] << 16) | (ip[2] << 8) | ip[3];
};

export const ipV4Unpack = (ip: number): Ipv4 => {
  const maxValuePerOctet = 0b11111111;

  return [
    ip >>> 24,
    (ip >>> 16) & maxValuePerOctet,
    (ip >>> 8) & maxValuePerOctet,
    ip & maxValuePerOctet,
  ];
};
