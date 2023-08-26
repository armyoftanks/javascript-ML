// scripts/data_processing.js

import * as tf from '@tensorflow/tfjs'; 

// Sample data for this example
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

export { xs, ys };
