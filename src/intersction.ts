export {};
type Pitcher1 = {
  throwingSpeed: number;
};
type Batter1 = {
  battingAverage: number;
};
const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};
const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};
// type TwoWayPlayer = {
//   battingAverage: number;
//   throwingSpeed: number;
// };

//上と同じ意味
type TwoWayPlayer = Pitcher1 & Batter1;

const OotaniShohei: TwoWayPlayer = {
  battingAverage: 2.86,
  throwingSpeed: 165,
};
