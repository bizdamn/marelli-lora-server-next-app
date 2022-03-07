import bcrypt from 'bcryptjs';
const data = {
  organisation: [
    {
      name: 'Marelli India',
      tagline: 'Marelli India',
      logo: '/',
      FF01_I04_status: false,
      FF01_I05_status: false,
    }
  ],
  users: [
    {
      name: 'IGSCS',
      email: 'igscs@gmail.com',
      password: bcrypt.hashSync('IGSCS041173WelcomeChirpstack'),
      isAdmin: true,
      isSuperAdmin: true,
    },
    {
      name: 'Admin_1',
      email: 'ashish.dangi@marelli.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: true,
      isSuperAdmin: false,
    },
    {
      name: 'User_1',
      email: 'ashish.dangi@marelli.com',
      password: bcrypt.hashSync('87654321'),
      isAdmin: false,
      isSuperAdmin: false,
    },
  ],
  entries: [
    {
      deviceName: 'Zone_1',
      devEUI: 'a8404151518379f9',
      temprature:23,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'Zone_2',
      devEUI: 'a8404181e18379fd',
      temprature:20,
      humidity:52,
      timestamp: new Date(),
    },
    {
      deviceName: 'Zone_3',
      devEUI: 'a8404152a1837a0e',
      temprature:21,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'Zone_4',
      devEUI: 'a84041b931837a0a',
      temprature:24,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'Zone_5',
      devEUI: 'a84041c2718379fe',
      temprature:22,
      humidity:53,
      timestamp: new Date(),
    },
    {
      deviceName: 'Zone_6',
      devEUI: 'a840417eb1837a01',
      temprature:21.3,
      humidity:53,
      timestamp: new Date(),
    },
  ],
  ahcStatusCollection: [
    {
      name: 'AC1',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'AC2',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'AC3',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'AC4',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Humidifier1',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Humidifier2',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Humidifier3',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Humidifier4',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Chillar1',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Chillar2',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Chillar3',
      status: false,
      timestamp: new Date(),
    },
    {
      name: 'Chillar4',
      status: false,
      timestamp: new Date(),
    },
  ],
 
};
export default data;
