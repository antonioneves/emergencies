export interface Emergency {
  emergency: {
    emergencyId: string;
    requestTime: Date;
  };
  device: {
    serialNumber: string;
  };
  holder: {
    firstName: string;
    lastName: string;
  };
}
