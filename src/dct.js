// input: array real numbers
// output: array real numbers

function dct(input, type) {

  var N = input.length;
  var output = new Array(N);



  switch (type) {

    case "DCT-I":
    default:
      var normFac = Math.sqrt(2/(N-1));
      // main loop DCT-I
      for ( var k=0; k<N; k++ ) {
        output[k] = (1/2)*(input[0]+Math.pow(-1,k)*input[N-1]);
        // inner sum
        for ( var n=1; n<N-1; n++) {
          output[k] += input[n]*Math.cos(Math.PI/(N-1)*n*k)
        }
        output[k] = normFac*output[k];
      }
      break;

    case "DCT-II":
      var normFac = Math.sqrt(2/N);
      // main loop DCT-II
      for ( var k=0; k<N; k++ ) {
        output[k] = 0;
        // inner sum
        for ( var n=0; n<N; n++) {
          output[k] += input[n]*Math.cos(Math.PI/N*(n+1/2)*k);
        }
        output[k] = normFac*output[k];
      }
      break;

    case "DCT-III":
      var normFac = Math.sqrt(2/N);
      // main loop DCT-III
      for ( var k=0; k<N; k++ ) {
        output[k] = (1/2)*input[0];
        // inner sum
        for ( var n=1; n<N; n++) {
          output[k] += input[n]*Math.cos(Math.PI/N*n*(k+1/2));
        }
        output[k] = normFac*output[k];
      }
      break;

    case "DCT-IV":
      var normFac = Math.sqrt(2/N);
      // main loop DCT-IV
      for ( var k=0; k<N; k++ ) {
        output[k] = 0;
        // inner sum
        for ( var n=0; n<N; n++) {
          output[k] += input[n]*Math.cos(Math.PI/N*(n+1/2)*(k+1/2));
        }
        output[k] = normFac*output[k];
      }
      break;

  }

return output;

}

export default dct;