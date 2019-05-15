const myArray = [12, 6, 3, 7, 13, 8];
function bucketSort(arr) {
  // YOUR CODE HERE
  //find number of buckets
  let numberOfElements = arr.length;
  //find number of buckets
  let numberOfBuckets = Math.floor(Math.sqrt(numberOfElements));
  //find value range of array
  let bucketDefinitionArray = [];

  let largest = -9999999999;
  let smallest = 999999999;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    largest = Math.max(element, largest);
    smallest = Math.min(element, smallest);
  }

  //find capacity of buckets
  let rangeOfEachBucket = (largest - smallest + 1) / numberOfBuckets;

  let currentNumberOfBuckets = 0;
  //create array which defines buckets
  function createBucket(start, rangeOfBucket) {
    let startOfBucket = start;
    let endOfBucket = Math.floor(start + rangeOfBucket);
    if (endOfBucket > largest) {
      endOfBucket = largest;
    }
    let bucketDefinition = [startOfBucket, endOfBucket];
    //create next bucket
    //when number of buckets reached, exit
    bucketDefinitionArray.push(bucketDefinition);
    currentNumberOfBuckets++;
    if (currentNumberOfBuckets < numberOfBuckets) {
      createBucket(endOfBucket + 1, rangeOfBucket);
    } else {
      return;
    }
  }

  createBucket(smallest, rangeOfEachBucket);

  let bucketsArray = [];
  for (let i = 0; i < numberOfBuckets; i++) {
    bucketsArray.push([]);
  }
  //at this point we have an array of the range of each bucket
  for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    for (let j = 0; j < bucketDefinitionArray.length; j++) {
      const bucket = bucketDefinitionArray[j];
      let startOfBucket = bucket[0];
      let endOfBucket = bucket[1];
      if (element >= startOfBucket && element <= endOfBucket) {
        //put element in bucket
        bucketsArray[j].push(element);
        break;
      }
    }
  }

  //sort individual buckets with mergesort
  function mergeSort(arr) {
    let lengthHalf = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, lengthHalf);
    let arr2 = arr.slice(lengthHalf);
    if (arr1.length !== 1) {
      arr1 = mergeSort(arr1);
    }
    if (arr2.length !== 1) {
      arr2 = mergeSort(arr2);
    }

    return merge(arr1, arr2);
  }

  function merge(arr1, arr2) {
    var result = [];
    while (arr1.length && arr2.length) {
      if (arr1[0] <= arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }

    return result.concat(arr1, arr2);
  }

  let sortedBuckets = [];
  for (let i = 0; i < bucketsArray.length; i++) {
      let bucket = bucketsArray[i];
      sortedBucket = mergeSort(bucket);
      sortedBuckets.push(sortedBucket);
  }

  let sortedArray = sortedBuckets.flat();
  

  console.log("range of each bucket: " + rangeOfEachBucket);
  console.log("this is largest: " + largest);
  console.log("this is smallest: " + smallest);
  console.log(bucketDefinitionArray);
  console.log(bucketsArray);
  console.log(sortedBuckets);
  console.log(sortedArray);
}
bucketSort(myArray);

//sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev
//sudo yum install -y git-core zlib zlib-devel gcc-c++ patch readline readline-devel libyaml-devel libffi-devel openssl-devel make bzip2 autoconf automake libtool bison curl sqlite-devel
