const socks = ['yellow', 'orange', 'yellow', 'green', 'purple', 'orange', 'blue'];

const findOnePair = socks => {
  // need to look at all the socks, so must loop until a match is found
  // check equality of 2 strings (current string against every other string)

  // loop over all socks
  // on first loop, the current_sock is 'blue'
  // loop over all socks again! <- other_sock
  // if current_sock === other_sock
  // return sock
  // nothing O(n) / O(n^2) / O(log n)
  // end
  // end
  // return false

  // Solution 1 - brute force - Complexity: O(n^2)

  // for (let i = 0; i < socks.length; i++) {
  //   let current_sock = socks[i];
  //   for (let j = 0; j < socks.length; j++) {
  //     let other_sock = socks[j];
  //     if (current_sock === other_sock) {
  //       return current_sock;
  //     }
  //   }
  // }
  // return false;

  // socks[4]
  // socks[first_sock] -> 'blue'

  let sock_obj = {};

  // for (let i = 0; i < socks.length; i++) {
  //   if (sock_obj[socks[i]]) {
  //     sock_obj[socks[i]]++;
  //   } else {
  //     sock_obj[socks[i]] = 1;
  //   }
  // }

  // console.log(sock_obj)

  // for (let i = 0; i < Object.values(sock_obj).length; i++) {
  //   if (sock_obj[socks[i]] === 2) {
  //     return socks[i];
  //   } 
  // }
  // return false;

  // const socks = ['yellow', 'orange', 'yellow', 'green', 'purple', 'orange', 'blue'];


  for (let i = 0; i < socks.length; i++) {
    if (sock_obj[socks[i]]) {
      return socks[i];
    } else {
      sock_obj[socks[i]] = 1;
    }
  }
};

console.log(findOnePair(socks));

