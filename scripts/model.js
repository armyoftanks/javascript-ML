// scripts/model.js

import * as tf from '@tensorflow/tfjs'; // If using ES6 modules

const model = tf.sequential();

model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

model.compile({
    optimizer: tf.train.sgd(0.1),  
    loss: 'meanSquaredError'
});

async function trainModel(xs, ys) {
    await model.fit(xs, ys, { epochs: 250 });
}

export { model, trainModel };
