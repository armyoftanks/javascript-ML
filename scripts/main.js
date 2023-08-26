// scripts/main.js

import { model, trainModel } from './model.js';
import { xs, ys } from './data_processing.js';

// Train and then predict
trainModel(xs, ys).then(() => {
    const output = model.predict(tf.tensor2d([5], [1, 1]));
    output.print();
});
