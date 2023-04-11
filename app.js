class Neuron {
  outputs = [];

  constructor(name, weight, bias, threshold) {
    this.name = name;
    this.value = 0;
    this.threshold = threshold !== undefined ? threshold : Math.random();
    this.weight = weight !== undefined ? weight : Math.random();
    this.bias = bias !== undefined ? bias : Math.random();
  }

  sigmoid = (x) => 1 / (1 + Math.exp(-x));
  activate = (input) => {
    this.value += this.sigmoid(input * this.weight + this.bias);
    console.log(this.name, this.threshold, this.value);

    if (this.value > this.threshold) {
      for (let neuron of this.outputs)
        setTimeout(() => {
          neuron.activate(this.value);
        }, 10);
      this.value = 0;
    }
  };
}

const neuron1 = new Neuron("first");
const neuron2 = new Neuron("second", undefined, undefined, 2);
const neuron3 = new Neuron("third", undefined, undefined, 4);
const neuron4 = new Neuron("fourth", undefined, undefined, 2);

neuron1.outputs.push(neuron2, neuron3, neuron4);
neuron2.outputs.push(neuron4);
neuron3.outputs.push(neuron4);
neuron4.outputs.push(neuron1);

neuron1.activate(5);
neuron1.activate(5);
neuron1.activate(5);
