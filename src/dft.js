// requires math.js for complex number support
// input: array of complex numbers
// output: array of complex numbers
import math from 'mathjs';

function dft(input) {
  var output = [];

  var N = input.length;
  var normFac = 1/Math.sqrt(N);

// main loop
for ( var k=0; k<N; k++ ) {
  output[k] = math.complex(0);
  // inner sum
  for ( var n=0; n<N; n++) {
    output[k] = math.add( output[k] , math.multiply(input[n],math.complex({r:1, phi: (-2*Math.PI*(k)*(n)/N)})) );
  }
  output[k] = math.multiply(normFac,output[k]);
}

return output;

}

export default dft;