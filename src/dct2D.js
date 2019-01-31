// input: 2D-array real numbers
// output: 2D-array real numbers

function dct2D(input,type) {

  var N1 = input.length;
  var N2 = input[0].length;
  var output = new Array(N1);
  for (var i = 0 ; i<N1 ; i++) {
    output[i] = new Array(N2);
  }
  

  switch (type) {

    case "DCT-I":
    default:
      var normFac = Math.sqrt(4/(N1-1)*(N2-1));
      // main loops DCT-I
      for ( var k1=0; k1<N1; k1++ ) {
        for ( var k2=0; k2<N2; k2++ ) {

          // all terms without sum
          output[k1][k2] = 0.25*(input[0][0]+Math.pow(-1,k1+k2)*input[N1-1][N2-1]+Math.pow(-1,k2)*input[0][N2-1]+Math.pow(-1,k1)*input[N1-1][0]);

          for ( var n1=1; n1<N1-1; n1++ ) {
            // terms with just sum over n1
            output[k1][k2] += 0.5*(input[n1][0]*Math.cos(Math.PI/(N1-1)*n1*k1)+Math.pow(-1,k2)*input[n1][N2-1]*Math.cos(Math.PI/(N1-1)*n1*k1));

            for ( var n2=1; n2<N2-1; n2++ ) {
              // terms with sum over n1 and n2
              output[k1][k2] += input[n1][n2]*Math.cos(Math.PI/(N1-1)*n1*k1)*Math.cos(Math.PI/(N2-1)*n2*k2);
            }
          }

          for ( var n2=1; n2<N2-1; n2++ ) {
            // term with just sum over n2
            output[k1][k2] += 0.5*(input[0][n2]*Math.cos(Math.PI/(N2-1)*n2*k2)+Math.pow(-1,k1)*input[N1-1][n2]*Math.cos(Math.PI/(N2-1)*n2*k2));
          }

          output[k1][k2] = normFac*output[k1][k2]
        }
      }
      break;

    case "DCT-II":
      var normFac = Math.sqrt(4/(N1*N2));
      // main loops DCT-II
      for ( var k1=0; k1<N1; k1++ ) {
        for ( var k2=0; k2<N2; k2++ ) {
          output[k1][k2] = 0;

          // inner sum
          for ( n1=0; n1<N1; n1++ ) {
            for ( n2=0; n2<N2; n2++ ) {
              output[k1][k2] += input[n1][n2]*Math.cos(Math.PI/N1*(n1+1/2)*k1)*Math.cos(Math.PI/N2*(n2+1/2)*k2);
            }
          }
          output[k1][k2] = normFac*output[k1][k2];
        }
      }
      break;

    case "DCT-III":
      var normFac = Math.sqrt(4/(N1*N2));
      // main loops DCT-III
      for ( var k1=0; k1<N1; k1++ ) {
        for ( var k2=0; k2<N2; k2++ ) {

          // all terms without sum
          output[k1][k2] = 0.25*input[0][0];

          for ( var n1=1; n1<N1; n1++ ) {
            // terms with just sum over n1
            output[k1][k2] += 0.5*input[n1][0]*Math.cos(Math.PI/N1*n1*(k1+0.5));

            for ( var n2=1; n2<N2; n2++ ) {
              // terms with sum over n1 and n2
              output[k1][k2] += input[n1][n2]*Math.cos(Math.PI/N1*n1*(k1+0.5))*Math.cos(Math.PI/N2*n2*(k2+0.5));
            }
          }

          for ( var n2=1; n2<N2; n2++ ) {
            // term with just sum over n2
            output[k1][k2] += 0.5*input[0][n2]*Math.cos(Math.PI/N2*n2*(k2+0.5));
          }

          output[k1][k2] = normFac*output[k1][k2]
        }
      }
      break;

    case "DCT-IV":
      var normFac = Math.sqrt(4/(N1*N2));
      // main loops DCT-IV
      for ( var k1=0; k1<N1; k1++ ) {
        for ( var k2=0; k2<N2; k2++ ) {
          output[k1][k2] = 0;

          // inner sum
          for ( n1=0; n1<N1; n1++ ) {
            for ( n2=0; n2<N2; n2++ ) {
              output[k1][k2] += input[n1][n2]*Math.cos(Math.PI/N1*(n1+0.5)*(k1+0.5))*Math.cos(Math.PI/N2*(n2+0.5)*(k2+0.5));
            }
          }
          output[k1][k2] = normFac*output[k1][k2];
        }
      }
      break;

  }

return output;

}

export default dct2D;

