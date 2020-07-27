let data: number | string;
data = 43;
data = '34';

interface ICar {
  color: string;
  model: string;
  topSpeed?: number;
}

const car1: ICar = {
  color: 'blue',
  model: 'bmw',
};

const car2: ICar = {
  color: 'red',
  model: 'mercedes',
  topSpeed: 100,
};

const multipy = (x: number, y: number): string => {
  return (x * y).toString();
};
